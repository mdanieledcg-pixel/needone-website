import { Apple } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/need-one-logo.png"

export function Header() {
  return (
    <header className="flex h-[72px] w-full items-center justify-between border-b border-white/10 bg-[#0A0A0A] px-6 md:px-20">
      <Link to="/" className="flex shrink-0 items-center gap-2">
        <img src={logo} alt="Need One Logo" className="h-[18px] w-[18px]" />
        <span className="text-[13px] font-black uppercase leading-none text-white">
          NEED ONE
        </span>
      </Link>

      <nav className="hidden items-center gap-8 text-[13px] font-bold text-white/50 md:flex">
        <NavLink to="/" className="text-white/50">
          Home
        </NavLink>
        <NavLink to="/support" className="text-[#22C55E]">
          Support
        </NavLink>
        <NavLink to="/privacy" className="text-white/50">
          Privacy
        </NavLink>
      </nav>

      <div className="flex shrink-0 items-center gap-3">
        <a
          href="#download"
          className="flex h-[37px] items-center justify-center gap-2 rounded-full bg-[#22C55E] px-5 text-[13px] font-black text-[#0A0A0A]"
        >
          <Apple className="h-[14px] w-[14px]" />
            Coming Soon on the App Store
        </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.needone.app"
        target="_blank"
        rel="noopener noreferrer"
        className="..."
      >
        Get it on Google Play
      </a>
      
      </div>
    </header>
  )
}