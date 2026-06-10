import Image from "next/image"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { RadialNav } from "@/components/ui/radial-nav"

export const metadata = {
  title: "Contact — director/best friend",
  description: "Get in touch with Colin Goheen.",
}

export default function Contact() {
  return (
    <div className="relative flex w-full min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/contact_background.png"
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
      <div className="absolute z-10 flex flex-col items-center gap-4" style={{ top: "55%", left: "50%", transform: "translateX(-50%)" }}>
        <p className="text-white/60 text-sm tracking-wide">Smell ya later</p>
        <a
          href="mailto:contact@cosmicmonkey.co"
          className="text-white text-base tracking-wide hover:text-white/70 transition-colors duration-200"
        >
          contact@cosmicmonkey.co
        </a>
        <a
          href="https://instagram.com/colingoheen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white hover:text-white/70 transition-colors duration-200"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </div>
  )
}
