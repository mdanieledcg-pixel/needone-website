
import factionScreen from "../assets/Need_one_faction_Details.png"
import profileScreen from "../assets/Need_one_profile.png"

export function BuiltForClubGolf() {
  return (
    <section className="flex flex-col items-center gap-20 bg-[#0A0A0A] px-6 py-[120px] md:flex-row md:px-20">
      <div className="flex flex-1 flex-col gap-6">
        <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#22C55E]">
          Built for club golf
        </p>

        <h2 className="max-w-[520px] text-[40px] font-black uppercase leading-[0.95] text-white md:text-[56px]">
          Built for the way club golf actually works
        </h2>

        <p className="max-w-[520px] text-[15px] leading-7 text-[#8E8E93]">
          Need One gives private club members a cleaner way to coordinate tee
          times, fill open spots, manage flexible groups, and reduce the noise
          of endless text threads.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center gap-6">
        <img src={factionScreen} alt="" className="h-[447px] w-auto" />
        <img src={profileScreen} alt="" className="h-[447px] w-auto" />
      </div>
    </section>
  )
}