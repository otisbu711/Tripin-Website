import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Tripin',
  description: 'How Tripin collects, uses, and protects your information.',
}

const sections = [
  {
    id: 'information-collected',
    title: '1. Information Collected',
    subsections: [
      {
        heading: 'Account Information',
        body: 'When an account is created or the services are used, Tripin may collect information such as name or username, email address, profile photo, login details, and account preferences.',
      },
      {
        heading: 'Trip and Travel Content',
        body: 'Tripin allows users to create, save, share, and interact with travel-related content. This may include trips, itineraries, destinations, and travel plans; photos, captions, comments, tags, and other uploaded content; saved locations or recommendations; and shared trip links or collaborative travel content.',
      },
      {
        heading: 'Location Information',
        body: 'Tripin may use location-related information to provide travel features, recommendations, maps, destination content, and app functionality. Depending on device settings, this may include approximate location, precise location if permission is granted, and location information attached to uploaded content. Location permissions can be controlled through device settings.',
      },
      {
        heading: 'Device and Usage Information',
        body: 'Tripin may collect information about how the service is accessed and used, including device type, operating system, app version, IP address, log data, pages or features used, crash reports, performance data, and general usage activity.',
      },
      {
        heading: 'Communications',
        body: 'If Tripin is contacted for support or feedback, Tripin may collect the information provided, including the sender\'s email address and the contents of the message.',
      },
    ],
  },
  {
    id: 'how-information-is-used',
    title: '2. How Information Is Used',
    body: 'Tripin may use collected information to provide, operate, and improve Tripin; create and manage user accounts; enable trip planning, sharing, and social features; personalise app content and recommendations; display user-generated content; provide customer support; send service-related messages; maintain app security and prevent misuse; analyse app performance and usage; fix bugs and improve reliability; and comply with legal obligations.',
  },
  {
    id: 'sharing-of-information',
    title: '3. Sharing of Information',
    intro: 'Tripin does not sell personal information. Information may be shared in the following circumstances:',
    subsections: [
      {
        heading: 'With Other Users',
        body: 'Some information may be visible to other users depending on privacy settings and how the app is used. This may include profiles, uploaded content, shared trips, comments, tags, or other public or shared activity.',
      },
      {
        heading: 'With Service Providers',
        body: 'Tripin may share information with trusted third-party service providers that help operate the service, such as hosting providers, analytics providers, authentication services, database providers, email services, crash reporting tools, and customer support tools. These providers may process information only as needed to provide their services.',
      },
      {
        heading: 'For Legal or Safety Reasons',
        body: 'Tripin may disclose information if required by law or if disclosure is believed to be necessary to comply with legal obligations, protect the rights, safety, or property of Tripin, users, or others, investigate fraud, abuse, security issues, or policy violations, or enforce terms or policies.',
      },
      {
        heading: 'Business Transfers',
        body: 'If Tripin is involved in a merger, acquisition, financing, reorganisation, sale of assets, or similar business transaction, information may be transferred as part of that transaction.',
      },
    ],
  },
  {
    id: 'user-generated-content',
    title: '4. User-Generated Content',
    body: 'Tripin may allow users to upload, post, share, or interact with content, including photos, comments, destinations, trips, and recommendations. Each user is responsible for the content shared. Content shared publicly or with other users may be viewed, saved, copied, or shared by others depending on the app\'s features and privacy settings.',
  },
  {
    id: 'app-permissions',
    title: '5. App Permissions',
    body: 'Tripin may request access to certain device permissions, such as camera, photo library, location, and notifications. These permissions can be managed through device settings. Some features may not work properly if certain permissions are disabled.',
  },
  {
    id: 'data-retention',
    title: '6. Data Retention',
    body: 'Tripin retains information for as long as necessary to provide the service, maintain accounts, comply with legal obligations, resolve disputes, enforce agreements, and improve the service. If an account is deleted, Tripin will delete or anonymise personal information associated with that account unless certain information must be retained for legal, security, fraud prevention, or operational reasons. Some content may remain visible if it was shared with others, copied, backed up, or included in another user\'s activity before deletion.',
  },
  {
    id: 'account-deletion',
    title: '7. Account Deletion',
    body: 'Users may request deletion of an account and associated personal information by contacting support@tripintravelapp.com. Identity verification may be required before processing the request.',
  },
  {
    id: 'user-choices-and-rights',
    title: '8. User Choices and Rights',
    intro: 'Depending on location, users may have certain rights over personal information, including the right to:',
    list: [
      'Access personal information held by Tripin',
      'Request correction of inaccurate information',
      'Request deletion of information',
      'Object to or restrict certain processing',
      'Withdraw consent where processing is based on consent',
      'Request a copy of information',
    ],
    body: 'To make a request, contact support@tripintravelapp.com.',
  },
  {
    id: 'childrens-privacy',
    title: '9. Children\'s Privacy',
    body: 'Tripin is not intended for children under the age of 13. Tripin does not knowingly collect personal information from children under 13. If Tripin becomes aware that personal information has been collected from a child under 13, steps will be taken to delete that information. Users who are under the age required by applicable law to use online services must have permission from a parent or guardian.',
  },
  {
    id: 'international-users',
    title: '10. International Users',
    body: 'Tripin may be used by people in different countries. Information may be processed and stored in countries other than where a user lives. These countries may have data protection laws that differ from those in the user\'s location. Where required, Tripin takes appropriate steps to protect personal information in accordance with applicable laws.',
  },
  {
    id: 'security',
    title: '11. Security',
    body: 'Tripin uses reasonable technical and organisational measures to protect information from unauthorised access, loss, misuse, alteration, or disclosure. However, no online service, app, or method of electronic storage is completely secure. Absolute security cannot be guaranteed.',
  },
  {
    id: 'third-party-services',
    title: '12. Third-Party Services',
    body: 'Tripin may contain links to third-party websites, services, or content. This Privacy Policy does not apply to third-party services that Tripin does not control. Tripin is not responsible for the privacy practices of third parties. Users should review third-party privacy policies before using those services.',
  },
  {
    id: 'changes',
    title: '13. Changes to This Privacy Policy',
    body: 'Tripin may update this Privacy Policy from time to time. If changes are made, the effective date above will be updated. Continued use of Tripin after an updated Privacy Policy becomes effective means the updated policy has been accepted.',
  },
  {
    id: 'contact',
    title: '14. Contact',
    body: 'For questions, requests, or concerns about this Privacy Policy or how Tripin handles information, contact: support@tripintravelapp.com.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 px-8" style={{ backgroundColor: '#1A0C0A' }}>
          <div className="max-w-4xl mx-auto">
            <p className="font-sans text-sm font-medium uppercase tracking-widest mb-6" style={{ color: '#B5322A' }}>
              Legal
            </p>
            <h1 className="font-display text-[clamp(56px,8vw,100px)] leading-[0.92] tracking-tight text-white mb-8">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap gap-6 font-sans text-sm" style={{ color: '#9B5850' }}>
              <span>Effective date: 26 June 2026</span>
              <span>·</span>
              <a href="https://tripintravelapp.com/privacy" className="hover:text-white transition-colors underline underline-offset-2">
                tripintravelapp.com/privacy
              </a>
              <span>·</span>
              <a href="mailto:support@tripintravelapp.com" className="hover:text-white transition-colors underline underline-offset-2">
                support@tripintravelapp.com
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-8 py-20 bg-background">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">

            {/* Sticky TOC */}
            <aside className="hidden lg:block w-52 shrink-0">
              <div className="sticky top-28">
                <p className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-4">Contents</p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="font-sans text-xs text-muted hover:text-coral transition-colors py-1 leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy text */}
            <div className="flex-1 min-w-0">
              <p className="font-sans text-base text-muted leading-relaxed mb-12 max-w-2xl">
                Tripin respects user privacy. This Privacy Policy explains how Tripin collects, uses, discloses, and protects information when the Tripin mobile application, website, and related services are used. By using Tripin, each user agrees to the practices described in this Privacy Policy.
              </p>

              <div className="space-y-14">
                {sections.map((s) => (
                  <div key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="font-sans font-semibold text-lg text-foreground mb-4 pb-3 border-b border-border">
                      {s.title}
                    </h2>

                    {'intro' in s && s.intro && (
                      <p className="font-sans text-sm text-muted leading-relaxed mb-4">{s.intro}</p>
                    )}

                    {'subsections' in s && s.subsections && (
                      <div className="space-y-6">
                        {s.subsections.map((sub) => (
                          <div key={sub.heading}>
                            <p className="font-sans font-medium text-sm text-foreground mb-1.5">{sub.heading}</p>
                            <p className="font-sans text-sm text-muted leading-relaxed">{sub.body}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {'list' in s && s.list && (
                      <ul className="space-y-1.5 mb-4 ml-4">
                        {s.list.map((item) => (
                          <li key={item} className="font-sans text-sm text-muted leading-relaxed list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {'body' in s && s.body && (
                      <p className="font-sans text-sm text-muted leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: s.body.replace(
                            /support@tripintravelapp\.com/g,
                            '<a href="mailto:support@tripintravelapp.com" class="text-coral underline underline-offset-2 hover:opacity-80 transition-opacity">support@tripintravelapp.com</a>'
                          ),
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
