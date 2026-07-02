export function Support() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#2f8f5f]">
        Support
      </p>

      <h1 className="text-5xl font-black tracking-tight">Need help?</h1>

      <p className="mt-6 text-lg leading-8 text-white/65">
        For account help, club invite codes, bug reports, or feature requests,
        contact Need One support.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="text-xl font-black">Contact</h2>
        <p className="mt-3 text-white/65">
          Email:{" "}
          <a className="font-bold text-[#2f8f5f]" href="mailto:support@needone.app">
            support@needone.app
          </a>
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {[
          ["Club invite codes", "Need One is private by club. If you need access, contact support with your name and club."],
          ["Account support", "Contact support for login, profile, GHIN, or club membership questions."],
          ["Bug reports", "Send a short description of what happened and what screen you were on."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-black">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}