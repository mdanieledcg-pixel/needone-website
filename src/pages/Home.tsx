import { Bell, CalendarDays, MessageCircle, Users } from "lucide-react"
import { FeatureCard } from "../components/FeatureCard"

export function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#2f8f5f]">
            Private Club Golf Coordination
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Make tee times without the group chat noise.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Need One helps private club golfers organize games, fill open spots,
            manage tee slots, and coordinate flexible golf groups in one clean place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/support"
              className="rounded-2xl bg-[#2f8f5f] px-6 py-4 text-center text-sm font-black text-white shadow-[0_12px_40px_rgba(47,143,95,0.35)]"
            >
              Contact Support
            </a>
            <a
              href="/privacy"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center text-sm font-black text-white/80"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-4">
        <FeatureCard title="Open Games">
          See available club games, tee times, open spots, and who is already in.
        </FeatureCard>

        <FeatureCard title="Need One">
          Broadcast when your group needs one more player without restarting a text chain.
        </FeatureCard>

        <FeatureCard title="Waitlists">
          Keep track of interested players when a game is full or a spot opens.
        </FeatureCard>

        <FeatureCard title="Factions">
          Coordinate flexible golf circles, recurring groups, and overlapping member networks.
        </FeatureCard>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2f8f5f]">
                Built for club golf
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Designed for tee time coordination.
              </h2>
            </div>

            <p className="text-base leading-8 text-white/65">
              Need One is built for members who are trying to make tee times,
              fill open spots, and coordinate games without the noise of endless
              group chats. It gives members one place to see what is open, who
              is in, and where one more player is needed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-black tracking-tight">Future plans</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["GHIN", CalendarDays, "Connect handicap information."],
            ["Public Golf", Users, "Support public golf options later."],
            ["Golf Genius", Bell, "Integrate tournament coordination."],
            ["Club Tee Times", MessageCircle, "Connect tee sheet systems through adapters."],
          ].map(([title, Icon, text]) => (
            <div key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <Icon className="h-5 w-5 text-[#2f8f5f]" />
              <h3 className="mt-4 font-black">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{text as string}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}