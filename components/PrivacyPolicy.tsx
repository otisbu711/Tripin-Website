const sections = [
  {
    title: '1. Information We Collect',
    content: [
      { heading: 'Account Information', body: 'When you create an account or sign in, we may collect your name, email address, username, profile photo, and authentication information from sign-in providers such as Apple, Google, or Supabase.' },
      { heading: 'User Content', body: 'When you use Tripin, you may choose to upload, post, or share photos, videos, captions, reviews, ratings, comments, trip names, travel locations, saved places, and other travel-related content. Some content may be visible to other users depending on privacy settings.' },
      { heading: 'Posting and Moderation Information', body: 'To keep Tripin safe, we may monitor, review, and moderate content posted by users. We may use automated tools, manual review, or a combination of both.' },
      { heading: 'Interaction Data', body: 'We may collect information about how you interact with posts and other users, including posts you view, like, save, share, or comment on, and profiles, trips, or recommendations you engage with.' },
      { heading: 'App Usage and Analytics Data', body: 'We may collect information about how you use the app, including screens or features you use, search activity, time spent, app performance, bugs and crashes, device type, operating system, and app version.' },
      { heading: 'Location and Travel Information', body: 'We may collect location-related information you choose to provide, such as places you review or destinations you add to a trip. We do not collect precise live location unless we ask and you allow it.' },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [{ body: 'We use your information to create and manage your account, let you post and interact with travel content, show content to other users, personalise your experience, improve the app, monitor and moderate content, detect harmful content, protect users, respond to support requests, enforce our terms, and comply with legal obligations.' }],
  },
  {
    title: '3. Legal Basis for Processing',
    content: [{ body: 'Where applicable under UK or EU data protection law, we rely on: contract (to provide services), consent (for optional features), legitimate interests (to improve Tripin, keep the platform safe, and develop better features), and legal obligation (where required by law).' }],
  },
  {
    title: '4. How Your Content May Be Shared',
    content: [{ body: 'Tripin is a social app. Content you post may be visible to other users, including your username and profile photo, photos and videos, reviews and ratings, trips and recommendations, and visible interactions. You should not post personal information you do not want others to see.' }],
  },
  {
    title: '5. Service Providers and Third Parties',
    content: [{ body: 'We may use trusted third-party services for authentication, database and file storage, hosting, analytics, error tracking, content moderation, notifications, and security. These include services such as Supabase, Apple, Google, and hosting providers. They process information on our behalf only as needed.' }],
  },
  {
    title: '6. Content Moderation',
    content: [{ body: 'We may monitor and review user content to detect and prevent content that is obscene, inappropriate, abusive, harmful, illegal, or misleading. Moderation may happen before or after content is posted. If content is flagged, we may block, remove, or restrict it, and may suspend or terminate accounts.' }],
  },
  {
    title: '7. Data Retention',
    content: [{ body: 'We keep personal information for as long as needed to provide Tripin, comply with legal obligations, and maintain platform safety. If you delete your account, we will delete or anonymise your personal information where reasonably possible, unless we need to retain it for legal or safety reasons.' }],
  },
  {
    title: '8. Your Rights',
    content: [{ body: 'Depending on where you live, you may have the right to access, correct, or delete your personal information; object to or restrict certain processing; request a copy of your data; withdraw consent; or complain to a data protection authority. Contact us at otisbu711@gmail.com to make a request.' }],
  },
  {
    title: '9. Account and Content Deletion',
    content: [{ body: 'You may request deletion of your account or certain content by contacting us at otisbu711@gmail.com. We may need to verify your identity first. Some information may be retained for legal, safety, or moderation reasons.' }],
  },
  {
    title: '10. Children\'s Privacy',
    content: [{ body: 'Tripin is not intended for children under the age of 13, or the minimum age required in your country. We do not knowingly collect personal information from children.' }],
  },
  {
    title: '11. Security',
    content: [{ body: 'We take reasonable steps to protect your information from unauthorised access, loss, misuse, or alteration. However, no app, website, or online service can guarantee complete security.' }],
  },
  {
    title: '12. International Transfers',
    content: [{ body: 'Your information may be processed and stored in countries outside your country of residence. Where required, we will take appropriate steps to protect your information in line with applicable data protection laws.' }],
  },
  {
    title: '13. Changes to This Policy',
    content: [{ body: 'We may update this Privacy Policy from time to time. If we make significant changes, we may notify you in the app or by other appropriate means. The updated version will be effective from the date shown at the top.' }],
  },
  {
    title: '14. Contact Us',
    content: [{ body: 'If you have questions about this Privacy Policy, contact us at otisbu711@gmail.com. Owner: Otis Bullot-Heller · London, United Kingdom.' }],
  },
]

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="min-h-screen px-8 py-32 bg-surface">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-sm font-medium text-coral uppercase tracking-widest mb-4">
            Legal
          </p>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] leading-[0.95] tracking-tight text-foreground mb-6">
            privacy policy.
          </h2>
          <p className="font-sans text-sm text-muted">
            Effective date: 17 June 2026 &nbsp;·&nbsp; App name: Tripin &nbsp;·&nbsp; Owner: Otis Bullot-Heller
            &nbsp;·&nbsp; Contact:{' '}
            <a href="mailto:otisbu711@gmail.com" className="underline hover:text-coral transition-colors">
              otisbu711@gmail.com
            </a>
            &nbsp;·&nbsp; London, United Kingdom
          </p>
        </div>

        <p className="font-sans text-muted text-base leading-relaxed mb-12 max-w-2xl">
          Tripin is a social travel app that allows users to share trips, reviews, recommendations, photos, videos,
          and travel-related content with other users. This Privacy Policy explains how we collect, use, store,
          monitor, and protect your personal information when you use Tripin.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-border pt-8">
              <h3 className="font-sans font-semibold text-base text-foreground mb-4">{s.title}</h3>
              <div className="space-y-4">
                {s.content.map((c, i) => (
                  <div key={i}>
                    {c.heading && (
                      <p className="font-sans font-medium text-sm text-foreground mb-1">{c.heading}</p>
                    )}
                    <p className="font-sans text-sm text-muted leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: c.body.replace(
                          'otisbu711@gmail.com',
                          '<a href="mailto:otisbu711@gmail.com" class="underline hover:text-coral transition-colors">otisbu711@gmail.com</a>'
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-muted italic mt-12 pt-8 border-t border-border">
          Note: This document is a starter privacy policy and should be reviewed for legal compliance before public launch.
        </p>
      </div>
    </section>
  )
}
