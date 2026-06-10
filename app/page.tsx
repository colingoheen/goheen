import Image from "next/image"
import { WebGLShader } from "@/components/ui/web-gl-shader"

export default function Home() {
  return (
    <div className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden">
      <WebGLShader />
      <div className="relative z-10 w-full mx-auto max-w-3xl">
        <main className="relative py-10 overflow-hidden">
          <div className="mb-3 flex justify-center">
            <Image src="/goheen_logo_white.png" alt="Goheen" width={800} height={240} priority />
          </div>
        </main>
      </div>
    </div>
  )
}