import { ArrowLeft } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"
import { getGameRule } from "../data/gameRules"

export function GameRules() {
  const { gameSlug } = useParams()
  const game = gameSlug ? getGameRule(gameSlug) : undefined

  if (!game) {
    return <Navigate to="/games" replace />
  }

  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#0A0A0A]">
      <section className="flex flex-col items-center px-6 pb-[120px] pt-[80px] md:px-20 md:pt-[120px]">
        <div className="w-full max-w-[680px]">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 text-[13px] font-black text-[#22C55E]"
          >
            <ArrowLeft className="h-4 w-4" />
            All Games
          </Link>

          <div className="mt-10">
            <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#22C55E]">
              {game.category}
            </p>

            <h1 className="mt-3 text-[44px] font-black leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
              {game.name}
            </h1>

            <p className="mt-6 text-[17px] font-medium leading-7 text-[#8E8E93]">
              {game.summary}
            </p>
          </div>

          <section className="mt-14 border-t border-white/10 pt-8">
            <h2 className="text-[22px] font-black text-white">
              How to Play
            </h2>

            <ol className="mt-6 space-y-5">
              {game.rules.map((rule, index) => (
                <li
                  key={rule}
                  className="flex gap-4 text-[15px] leading-7 text-[#8E8E93]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22C55E]/10 text-[12px] font-black text-[#22C55E]">
                    {index + 1}
                  </span>

                  <span>{rule}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </section>
    </main>
  )
}