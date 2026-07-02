import type { ReactNode } from "react"

type FeatureCardProps = {
  title: string
  children: ReactNode
}

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/60">{children}</p>
    </div>
  )
}