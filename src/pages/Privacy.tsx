export function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#2f8f5f]">
        Privacy Policy
      </p>

      <h1 className="text-5xl font-black tracking-tight">Privacy Policy</h1>

      <p className="mt-4 text-sm text-white/45">Effective date: January 1, 2026</p>

      <div className="mt-10 space-y-8 text-white/65">
        <div>
          <h2 className="text-xl font-black text-white">Overview</h2>
          <p className="mt-3 leading-7">
            Need One is a private club golf coordination app. This policy explains
            what information we collect, how we use it, and how users can contact us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-black text-white">Information We Collect</h2>
          <p className="mt-3 leading-7">
            Need One may collect name, email address, handicap, GHIN ID, club
            membership information, faction membership, round participation,
            activity history, and push notification tokens.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-black text-white">How We Use Information</h2>
          <p className="mt-3 leading-7">
            We use this information to create accounts, verify club access,
            coordinate golf games, show open spots, manage waitlists, send app
            notifications, and provide user support.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-black text-white">Push Notifications</h2>
          <p className="mt-3 leading-7">
            Need One uses push notifications for game activity such as new rounds,
            Need One alerts, spot filled alerts, and other golf coordination updates.
            Users may manage notification preferences in the app.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-black text-white">No Tracking</h2>
          <p className="mt-3 leading-7">
            Need One does not sell personal information, does not use advertising
            tracking, and does not track users across apps or websites.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-black text-white">Data Requests</h2>
          <p className="mt-3 leading-7">
            Users may request account help or data deletion by contacting support at{" "}
            <a className="font-bold text-[#2f8f5f]" href="mailto:support@needone.app">
              support@needone.app
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}