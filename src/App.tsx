import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Support } from "./pages/Support"
import { Privacy } from "./pages/Privacy"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#090b0f] text-white">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}