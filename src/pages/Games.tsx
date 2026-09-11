import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { gameRules } from "../data/gameRules"

export function Games() {
  const fieldGames = gameRules.filter(
    (game) => game.category === "Field Game",
  )

  const teeTimeGames = gameRules.filter(
    (game) => game.category === "Tee Time Game",
  )

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#0A0A0A]">
      <section className="flex flex-col items-center px-6 pb-[120px] pt-[120px] md:px-20">
        <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
          <h1 className="text-[44px] font-black leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
            Games
          </h1>

          <p className="mt-[30px] max-w-[600px] text-[16px] font-medium leading-7 text-[#8E8E93]">
            Quick rules for the games you can score with Need One.
          </p>

          <div className="mt-20 grid w-full max-w-[920px] gap-12 text-left md:grid-cols-2">
            <GameSection title="Field Games" games={fieldGames} />
            <GameSection title="Tee Time Games" games={teeTimeGames} />
          </div>
        </div>
      </section>
    </main>
  )
}

function GameSection({
  title,
  games,
}: {
  title: string
  games: typeof gameRules
}) {
  return (
    <section>
      <h2 className="mb-5 text-[22px] font-black text-white">
        {title}
      </h2>

      <div className="flex flex-col gap-3">
        {games.map((game) => (
          <Link
            key={game.slug}
            to={`/games/${game.slug}`}
            className="flex min-h-[92px] items-center gap-4 rounded-[14px] border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="flex-1">
              <h3 className="text-[17px] font-black text-white">
                {game.name}
              </h3>

              <p className="mt-1 text-[13px] font-medium leading-5 text-[#8E8E93]">
                {game.summary}
              </p>
            </div>

            <ChevronRight className="h-5 w-5 shrink-0 text-white/40" />
          </Link>
        ))}
      </div>
    </section>
  )
}