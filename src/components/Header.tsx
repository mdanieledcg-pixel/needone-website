import { Link, NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#090b0f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2f8f5f] text-sm font-black">
            N1
          </div>
          <span className="text-lg font-black tracking-tight">Need One</span>
        </Link>

        <nav className="flex items-center gap-5 text-sm font-bold text-white/60">
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
      </div>
    </header>
  )
}