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
        <article className="w-full max-w-[720px]">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 text-[13px] font-black text-[#22C55E]"
          >
            <ArrowLeft className="h-4 w-4" />
            All Games
          </Link>

          <header className="mt-10">
            <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#22C55E]">
              {game.category}
            </p>

            <h1 className="mt-3 text-[44px] font-black leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
              {game.name}
            </h1>

            <p className="mt-6 text-[18px] font-medium leading-8 text-[#A1A1A6]">
              {game.summary}
            </p>
          </header>

          <div className="mt-14">
            {game.sections.map((section) => (
              <section
                key={section.title}
                className="border-t border-white/10 py-9 first:pt-9"
              >
                <h2 className="text-[24px] font-black leading-tight text-white">
                  {section.title}
                </h2>

                {section.paragraphs && (
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[16px] leading-7 text-[#8E8E93]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[16px] leading-7 text-[#8E8E93]"
                      >
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-6 overflow-hidden rounded-[14px] border border-white/10">
                    <table className="w-full border-collapse text-left">
                      <thead className="bg-white/[0.05]">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="px-5 py-4 text-[12px] font-black uppercase tracking-[0.08em] text-white"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr
                            key={`${section.title}-${rowIndex}`}
                            className="border-t border-white/10 first:border-t-0"
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={`${cell}-${cellIndex}`}
                                className={`px-5 py-4 text-[15px] ${
                                  cellIndex === 0
                                    ? "font-bold text-white"
                                    : "font-medium text-[#8E8E93]"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}