import Image from "next/image"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export default function Home() {
  return (
    <div className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden">
      <WebGLShader />
      <div className="relative z-10 w-full mx-auto max-w-3xl">
        <main className="relative py-10 overflow-hidden">
          <div className="mb-3 flex justify-center">
            <Image src="/goheen_logo_white.png" alt="Goheen" width={800} height={240} priority />
          </div>
          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs text-green-500">Available for New Projects</p>
          </div>
          <div className="flex justify-center">
            <LiquidButton className="text-white border rounded-full" size="xl">
              Let's Go
            </LiquidButton>
          </div>
        </main>
      </div>
    </div>
  )
}