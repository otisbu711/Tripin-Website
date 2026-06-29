import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Tripin',
  description: 'The terms and conditions that govern your use of Tripin.',
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance',
    body: 'By creating an account or using Tripin, you agree to these Terms of Service. If you do not agree, do not use the app.',
  },
  {
    id: 'eligibility',
    title: '2. Eligibility',
    body: 'You must be at least 13 years old to use Tripin. By using the app, you confirm that you meet this requirement.',
  },
  {
    id: 'your-account',
    title: '3. Your Account',
    body: 'You are responsible for keeping your account credentials secure and for all activity that occurs under your account. If you suspect unauthorised access, contact support@tripintravelapp.com immediately.',
  },
  {
    id: 'user-content',
    title: '4. User Content',
    body: 'You retain ownership of the content you post on Tripin. By posting content, you grant Tripin a non-exclusive, royalty-free licence to display, distribute, and promote that content within the app and its services. You are solely responsible for the content you post. Do not post content that is illegal, abusive, misleading, or that infringes another person\'s rights.',
  },
  {
    id: 'prohibited-conduct',
    title: '5. Prohibited Conduct',
    intro: 'You may not use Tripin to:',
    list: [
      'Harass, abuse, or harm other users',
      'Post spam, misleading, or false content',
      'Attempt to access accounts or systems without authorisation',
      'Scrape or extract data from the app',
      'Violate any applicable law or regulation',
    ],
  },
  {
    id: 'intellectual-property',
    title: '6. Intellectual Property',
    body: 'The Tripin name, logo, and app content (excluding user-generated content) are owned by Tripin. You may not copy, modify, or distribute them without prior written permission.',
  },
  {
    id: 'termination',
    title: '7. Termination',
    body: 'Tripin may suspend or terminate your account at any time for violation of these Terms or for any other reason at Tripin\'s discretion. You may delete your account at any time by contacting support@tripintravelapp.com.',
  },
  {
    id: 'disclaimers',
    title: '8. Disclaimers',
    body: 'Tripin is provided "as is" without warranties of any kind. Tripin does not guarantee the accuracy of user-generated content, including trip reviews or recommendations.',
  },
  {
    id: 'limitation-of-liability',
    title: '9. Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, Tripin is not liable for any indirect, incidental, special, or consequential damages arising from your use of the app.',
  },
  {
    id: 'changes',
    title: '10. Changes to These Terms',
    body: 'Tripin may update these Terms of Service from time to time. If changes are made, the effective date above will be updated. Continued use of Tripin after an update takes effect means you accept the revised Terms.',
  },
  {
    id: 'contact',
    title: '11. Contact',
    body: 'For questions or concerns about these Terms, contact: support@tripintravelapp.com.',
  },
]

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <div className="flex flex-wrap gap-6 font-sans text-sm" style={{ color: '#9B5850' }}>
              <span>Effective date: 28 June 2026</span>
              <span>·</span>
              <a href="https://tripintravelapp.com/terms" className="hover:text-white transition-colors underline underline-offset-2">
                tripintravelapp.com/terms
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

            {/* Terms text */}
            <div className="flex-1 min-w-0">
              <p className="font-sans text-base text-muted leading-relaxed mb-12 max-w-2xl">
                These Terms of Service govern your use of the Tripin mobile application, website, and related services. By using Tripin, you agree to be bound by these Terms.
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
                      <p
                        className="font-sans text-sm text-muted leading-relaxed"
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
