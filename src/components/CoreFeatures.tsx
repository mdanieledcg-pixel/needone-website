import { Bell, CalendarDays, MessageCircle, Users } from "lucide-react"

const features = [
  {
    icon: CalendarDays,
    title: "Open Games",
    body: "See what games are open, who is already in, and where spots are available.",
  },
  {
    icon: Bell,
    title: "Need One",
    body: "Broadcast when your group needs one more player without restarting a text thread.",
  },
  {
    icon: MessageCircle,
    title: "Waitlists",
    body: "Keep track of players who want in when a game is full or a spot opens.",
  },
  {
    icon: Users,
    title: "Factions",
    body: "Coordinate flexible golf circles, recurring groups, and overlapping member networks.",
  },
]

export function CoreFeatures() {
  return (
    <section className="flex flex-col items-start gap-14 bg-[#111111] px-6 py-[120px] md:px-20">
      <div className="flex w-full flex-col items-center gap-3 text-center">
        <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#22C55E]">
          Core Features
        </p>

        <h2 className="max-w-[720px] text-[40px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-[56px]">
          Everything your club needs
        </h2>
      </div>

      <div className="grid w-full gap-5 md:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-[#1C1C1E] p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#22C55E]/10">
              <Icon className="h-5 w-5 text-[#22C55E]" />
            </div>

            <h3 className="mt-6 text-[18px] font-black text-white">
              {title}
            </h3>

            <p className="mt-3 text-[14px] leading-6 text-[#8E8E93]">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}