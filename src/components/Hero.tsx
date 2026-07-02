import { Apple } from "lucide-react"
import heroBg from "../assets/hero-bg.png"

export function Hero() {
  return (
    <section className="relative flex h-[800px] w-full flex-col items-center justify-end overflow-hidden bg-[#0A0A0A]">
    <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-left md:object-[20%_center] xl:object-center"
    />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.20)_0%,rgba(10,10,10,0.93)_60%,#0A0A0A_100%)]" />

      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-6 pb-[100px] text-center md:px-20">
        <h1 className="max-w-[760px] text-[52px] font-black uppercase leading-[0.86] tracking-[-0.04em] text-white md:text-[76px]">
          Private Club Golf Coordination
        </h1>

        <p className="text-[18px] font-semibold text-white">
          Make tee times without the group chat noise.
        </p>

        <p className="max-w-[720px] text-[15px] leading-7 text-white/60">
          Need One is the smarter way for private club members to organize
          rounds. Post a game, find a player, fill your foursome — no thread
          chaos, no missed messages.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 text-[14px] font-black text-white"
          >
            <Apple className="h-[18px] w-[18px]" />
            Download on the App Store
          </a>

          <a
            href="#product-preview"
            className="flex h-[44px] items-center justify-center rounded-full border border-white/20 px-6 text-[14px] font-black text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}