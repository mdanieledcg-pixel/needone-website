import { Link, NavLink } from "react-router-dom"
import { Apple } from "lucide-react"

export function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-white/10 bg-[#0A0A0A] px-6 md:px-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#22C55E]">
          <span className="text-[10px] font-black text-white">N1</span>
        </div>
        <span className="text-sm font-black tracking-tight text-white">
          NEED ONE
        </span>
      </Link>

      <nav className="hidden items-center gap-8 text-[13px] font-semibold text-white/70 md:flex">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>
          Home
        </NavLink>
        <NavLink to="/support" className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>
          Support
        </NavLink>
        <NavLink to="/privacy" className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>
          Privacy
        </NavLink>
      </nav>

      <a
        href="#download"
        className="flex items-center gap-2 rounded-full bg-[#22C55E] px-4 py-2 text-[12px] font-black text-white transition hover:bg-[#1fb454]"
      >
        <Apple className="h-3.5 w-3.5" />
        Download
      </a>
    </header>
  )
}