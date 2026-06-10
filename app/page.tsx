import Image from "next/image"
import { WebGLShader } from "@/components/ui/web-gl-shader"

export default function Home() {
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
      <div className="absolute z-10" style={{ top: "8%", left: "50%", transform: "translateX(-50%)" }}>
        <Image src="/goheen_logo_white.png" alt="Goheen" width={800} height={240} priority />
      </div>
    </div>
  )
}