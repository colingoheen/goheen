import Image from "next/image"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { RadialNav } from "@/components/ui/radial-nav"

export const metadata = {
  title: "Work — director/best friend",
  description: "Selected work by Colin Goheen.",
}

export default function Work() {
  return (
    <div className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/colin_street.png"
        alt=""
        fill
        priority
        className="object-cover -z-20"
      />
      <WebGLShader />
      <RadialNav />
      <div className="absolute z-10" style={{ top: "8%", left: "50%", transform: "translateX(-50%)" }}>
        <Image src="/goheen_logo_white.png" alt="Goheen" width={800} height={240} priority />
      </div>
      <div className="relative z-10 mt-40 w-full max-w-3xl px-6">
        <h2 className="text-white text-4xl font-extrabold tracking-tighter mb-8">Work</h2>
      </div>
    </div>
  )
}
