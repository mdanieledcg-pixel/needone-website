import homeScreen from "../assets/Need_one-homepage.png"
import activityScreen from "../assets/Need_one_activity.png"
import roundDetailScreen from "../assets/Need_one-round_details.png"

export function ProductPreview() {
  return (
    <section
      id="product-preview"
      className="flex flex-col items-center gap-14 bg-[#0A0A0A] px-6 py-[120px] md:px-20"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-[40px] font-black uppercase leading-[0.95] text-white md:text-[56px]">
          The app your club needs
        </h2>
      </div>

      <div className="flex w-full items-start justify-center gap-6 overflow-x-auto">
        <img src={homeScreen} alt="" className="h-[564px] w-auto shrink-0" />
        <img src={activityScreen} alt="" className="h-[564px] w-auto shrink-0" />
        <img src={roundDetailScreen} alt="" className="h-[564px] w-auto shrink-0" />
      </div>

      <p className="text-center text-[13px] font-normal text-white/40">
        Available now on iOS - iPhone and iPad
      </p>
    </section>
  )
}