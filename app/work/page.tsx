import Image from "next/image"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { RadialNav } from "@/components/ui/radial-nav"

export const metadata = {
  title: "Work — director/best friend",
  description: "Selected work by Colin Goheen.",
}

const videos = [
  { src: "https://player.vimeo.com/video/1150756869", allow: "autoplay; fullscreen; picture-in-picture" },
  { src: "https://player.vimeo.com/video/957442165?h=50b5e8d9c2", allow: "autoplay; fullscreen; picture-in-picture" },
  { src: "https://player.vimeo.com/video/826520638", allow: "autoplay; fullscreen; picture-in-picture" },
  { src: "https://www.youtube.com/embed/I25wSKqJizM", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" },
]

export default function Work() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src="/colin_street.png"
        alt=""
        fill
        priority
        className="object-cover -z-20 fixed"
      />
      <WebGLShader />
      <RadialNav />

      <div className="relative z-10 flex flex-col items-center pt-[8%] pb-24 px-6">
        <Image src="/goheen_logo_white.png" alt="Goheen" width={800} height={240} priority />

        <div className="mt-12 w-full max-w-5xl grid grid-cols-2 gap-4">
          {videos.map((video, i) => (
            <div key={i} className="w-full aspect-video">
              <iframe
                src={video.src}
                allow={video.allow}
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
