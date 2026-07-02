import { Apple } from "lucide-react"
import heroBg from "../assets/hero-bg.png"

export function Hero() {
  return (
    <section
      className="relative flex h-[800px] items-end justify-center overflow-hidden bg-[#0A0A0A]"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/20 via-[#0A0A0A]/70 to-[#0A0A0A]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 text-center">
        <h1 className="max-w-4xl text-[52px] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-[88px]">
          Private Club Golf Coordination
        </h1>

        <p className="mt-8 text-lg font-semibold text-white/90">
          Make tee times without the group chat noise.
        </p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
          Need One is the smarter way for private club members to organize rounds.
          Post a game, find a player, fill your foursome — no thread chaos, no
          missed messages.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-7 py-3 text-sm font-black text-white shadow-[0_16px_50px_rgba(34,197,94,0.35)]"
          >
            <Apple className="h-4 w-4" />
            Download on the App Store
          </a>

          <a
            href="#product-preview"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-[#0A0A0A]/35 px-7 py-3 text-sm font-black text-white backdrop-blur"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}