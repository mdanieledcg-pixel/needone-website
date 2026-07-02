import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Need One. All rights reserved.</p>

        <div className="flex gap-5">
          <Link to="/support" className="hover:text-white">Support</Link>
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}