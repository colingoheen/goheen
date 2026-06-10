"use client"

import { useState } from "react"
import Link from "next/link"

const RADIUS = 88

const items = [
  {
    href: "/",
    label: "Home",
    angle: 135,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <polyline points="9 21 9 12 15 12 15 21" />
      </svg>
    ),
  },
  {
    href: "/work",
    label: "Work",
    angle: 90,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    angle: 45,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
]

export function RadialNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center justify-center">
        {items.map(({ href, label, angle, icon }, i) => {
          const rad = (angle * Math.PI) / 180
          const x = Math.cos(rad) * RADIUS
          const y = -Math.sin(rad) * RADIUS

          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className="absolute flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 hover:bg-white/10"
              style={{
                transform: open ? `translate(${x}px, ${y}px)` : "translate(0px, 0px)",
                opacity: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none",
                transition: open
                  ? `transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 50}ms, opacity 200ms ease ${i * 50}ms`
                  : `transform 250ms ease ${(items.length - 1 - i) * 40}ms, opacity 150ms ease ${(items.length - 1 - i) * 40}ms`,
              }}
            >
              {icon}
            </Link>
          )
        })}

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/40 text-white hover:border-white/70 hover:bg-white/10 transition-colors duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            style={{
              transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
