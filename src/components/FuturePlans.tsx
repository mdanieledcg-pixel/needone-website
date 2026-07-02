import { CalendarDays, ListChecks, Search, Users } from "lucide-react"

const roadmapItems = [
  {
    icon: CalendarDays,
    title: "GHIN Integration",
    body: "Handicap-aware matchmaking to help you find the right game.",
  },
  {
    icon: Search,
    title: "Public Golf",
    body: "Expand beyond the private club to public courses and casual groups.",
  },
  {
    icon: ListChecks,
    title: "Golf Genius Sync",
    body: "Connect with your club's tournament software for seamless event coordination.",
  },
  {
    icon: Users,
    title: "Club Tee Times",
    body: "Book directly through the app with integrated club tee time availability.",
  },
]

export function FuturePlans() {
  return (
    <section className="flex flex-col items-center gap-14 bg-[#0A0A0A] px-6 py-[120px] md:px-20">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-3 text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#22C55E]">
          Roadmap
        </p>

        <h2 className="text-[40px] font-black uppercase leading-[0.9] text-white md:text-[56px]">
          Coming Soon
        </h2>

        <p className="text-[15px] font-medium text-[#8E8E93]">
          We&apos;re just getting started.
        </p>
      </div>

      <div className="grid w-full max-w-[1280px] gap-5 md:grid-cols-4">
        {roadmapItems.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="rounded-[18px] bg-[#1C1C1E] p-6"
          >
            <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.0588]">
              <Icon className="h-[22px] w-[22px] text-[#8E8E93]" />
            </div>

            <h3 className="text-[17px] font-black uppercase leading-tight text-white">
              {title}
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#8E8E93]">
              {body}
            </p>

            <div className="mt-5 inline-flex rounded-full bg-[#22C55E]/10 px-3 py-1">
              <span className="text-[12px] font-black text-[#22C55E]">
                Coming Soon
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}