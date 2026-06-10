import Link from "next/link"

export function Nav() {
  return (
    <nav className="absolute top-6 right-8 z-20 flex gap-6">
      <Link href="/" className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200">
        Home
      </Link>
      <Link href="/work" className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200">
        Work
      </Link>
      <Link href="/contact" className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200">
        Contact
      </Link>
    </nav>
  )
}
