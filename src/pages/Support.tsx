import { Bug, ChevronRight, CircleUser, Sparkles } from "lucide-react"

const supportTopics = [
  {
    title: "Profile Issue",
    subtitle: "Account, GHIN, club access",
    icon: CircleUser,
    href: "mailto:needonesupport@gmail.com?subject=Need One Support - Profile Issue",
    className: "bg-[#102033] text-[#0EA5E9]",
  },
  {
    title: "Bug Report",
    subtitle: "Something is not working right",
    icon: Bug,
    href: "mailto:needonesupport@gmail.com?subject=Need One Support - Bug Report",
    className: "bg-[#331718] text-[#EF4444]",
  },
  {
    title: "Feature Request",
    subtitle: "Ideas to improve the app",
    icon: Sparkles,
    href: "mailto:needonesupport@gmail.com?subject=Need One Support - Feature Request",
    className: "bg-[#302508] text-[#F59E0B]",
  },
]

export function Support() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#0A0A0A]">
      <section className="flex flex-col items-center px-6 pb-[120px] pt-[120px] md:px-20">
        <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
          <h1 className="text-[44px] font-black leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
            What can we help you with?
          </h1>

          <p className="mt-[30px] text-[16px] font-medium text-[#8E8E93]">
            Choose a topic below and we&apos;ll get you sorted.
          </p>

          <div className="mt-20 flex w-full max-w-[680px] flex-col gap-4">
            {supportTopics.map(({ title, subtitle, icon: Icon, href, className }) => (
              <a
                key={title}
                href={href}
                className={`flex h-[88px] items-center gap-5 rounded-[14px] px-6 text-left transition hover:scale-[1.01] ${className}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/20">
                  <Icon className="h-[22px] w-[22px]" />
                </div>

                <div className="flex-1">
                  <h2 className="text-[17px] font-black text-white">
                    {title}
                  </h2>
                  <p className="mt-1 text-[13px] font-medium text-[#8E8E93]">
                    {subtitle}
                  </p>
                </div>

                <ChevronRight className="h-5 w-5 text-white/45" />
              </a>
            ))}
          </div>

          <p className="mt-16 text-[14px] font-medium text-[#8E8E93]">
            Still need help?{" "}
            <a
              href="mailto:needonesupport@gmail.com"
              className="font-black text-[#22C55E]"
            >
              Email us at needonesupport@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}