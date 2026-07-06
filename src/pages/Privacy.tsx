const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you create an account, Need One collects information that helps identify you within your private golf club community, including your name, email address, GHIN number, handicap index, club membership, and profile information you choose to provide.",
      "As you use the app, we also collect information needed to operate the service, including tee times you create or join, Need One requests, waitlist activity, faction memberships, notification preferences, and device identifiers required for push notifications.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to create and manage golf games, match players to available tee times, send notifications about game activity, display relevant player information to other verified club members, improve app reliability, and respond to support requests.",
      "We do not sell your personal information or use it for advertising.",
    ],
  },
  {
    title: "Club Visibility",
    body: [
      "Need One is designed for private club communities. Your name, handicap index, profile details, faction memberships, and game participation may be visible to other verified members of your club so members can coordinate rounds and fill open spots.",
      "Your information is not shared publicly outside of your authorized club communities.",
    ],
  },
  {
    title: "Notifications",
    body: [
      "If you enable push notifications, Need One may send notifications related to open games, Need One requests, players joining or leaving games, waitlist updates, round changes, and account activity.",
      "Notification preferences can be managed within the app.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use industry standard security practices to help protect your information. Authentication is managed through secure authentication services, and application data is stored using encrypted connections.",
      "No system can guarantee complete security, but we continually work to protect your information.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain your account information while your account remains active. If you request deletion of your account, we will remove or anonymize personal information where practical, except where retention is required for legal, security, or operational purposes.",
    ],
  },
  {
    title: "Third Party Services",
    body: [
      "Need One relies on trusted service providers to operate the platform, including Supabase for authentication and database services, Apple Push Notification Service for notifications, and Apple App Store services for app distribution.",
      "These providers maintain their own privacy policies governing their services.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Need One is intended for golfers who are at least 18 years old and is not directed toward children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time as Need One evolves. If material changes are made, we will update the Last Updated date and, when appropriate, notify users through the app.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, contact us at support@needonegolf.app.",
    ],
  },
]

export function Privacy() {
  return (
    <main className="min-h-[calc(100vh-72px)] bg-[#0A0A0A]">
      <section className="flex flex-col items-center px-6 pb-[120px] pt-[120px] md:px-20">
        <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
          <h1 className="text-[44px] font-black leading-[0.95] tracking-[-0.03em] text-white md:text-[56px]">
            Privacy Policy
          </h1>

          <p className="mt-[30px] text-[16px] font-medium text-[#8E8E93]">
            Last updated: July 2, 2026
          </p>

          <div className="mt-20 w-full max-w-[680px] text-left">
            {sections.map((section) => (
              <section
                key={section.title}
                className="border-b border-white/10 py-8 first:pt-0 last:border-b-0 last:pb-0"
              >
                <h2 className="text-[22px] font-black leading-tight text-white">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] leading-7 text-[#8E8E93]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}