import { Apple } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0A0A0A] px-6 md:px-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded bg-[#22C55E]">
          <span className="text-[7px] font-black text-white">N1</span>
        </div>
        <span className="text-[13px] font-black text-white">NEED ONE</span>
      </Link>

      <nav className="hidden items-center gap-8 text-[13px] font-medium text-white md:flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/privacy">Privacy</NavLink>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="#download"
          className="flex h-[37px] items-center justify-center gap-2 rounded-full bg-[#22C55E] px-4 text-[13px] font-black text-white"
        >
          <Apple className="h-[18px] w-[18px]" />
          Download
        </a>
      </div>
    </header>
  )
}