"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export function StaticTransition() {
  const pathname = usePathname()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [visible, setVisible] = useState(false)
  const animRef = useRef<number | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    setVisible(true)

    const CHUNK = 8

    const drawStatic = () => {
      for (let y = 0; y < canvas.height; y += CHUNK) {
        for (let x = 0; x < canvas.width; x += CHUNK) {
          ctx.fillStyle = `rgb(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0})`
          ctx.fillRect(x, y, CHUNK, CHUNK)
        }
      }
      animRef.current = requestAnimationFrame(drawStatic)
    }

    drawStatic()

    timeoutRef.current = setTimeout(() => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      setVisible(false)
    }, 150)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [pathname])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[200] pointer-events-none"
      style={{
        opacity: visible ? 1 : 0,
        transition: visible ? "none" : "opacity 100ms ease",
      }}
    />
  )
}
