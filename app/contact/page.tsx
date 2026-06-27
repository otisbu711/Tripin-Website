import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Tripin',
  description: 'Get in touch with the Tripin team.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20 px-8" style={{ backgroundColor: '#1A0C0A' }}>
          <div className="max-w-4xl mx-auto">
            <p className="font-sans text-sm font-medium uppercase tracking-widest mb-6" style={{ color: '#B5322A' }}>
              Get in touch
            </p>
            <h1 className="font-display text-[clamp(56px,8vw,100px)] leading-[0.92] tracking-tight text-white mb-8">
              Contact Us
            </h1>
            <p className="font-sans text-lg max-w-md leading-relaxed" style={{ color: '#9B5850' }}>
              Have a question, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Form + info */}
        <section className="px-8 py-20 bg-background">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">

            {/* Left — contact info */}
            <aside className="lg:w-64 shrink-0 flex flex-col gap-8">
              <div>
                <p className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-3">General enquiries</p>
                <a
                  href="mailto:contact@tripintravelapp.com"
                  className="font-sans text-sm text-coral underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  contact@tripintravelapp.com
                </a>
              </div>
              <div>
                <p className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-3">Support</p>
                <a
                  href="mailto:support@tripintravelapp.com"
                  className="font-sans text-sm text-coral underline underline-offset-2 hover:opacity-70 transition-opacity"
                >
                  support@tripintravelapp.com
                </a>
              </div>
              <div>
                <p className="font-sans text-xs font-medium text-muted uppercase tracking-widest mb-3">Based in</p>
                <p className="font-sans text-sm text-muted">London, United Kingdom</p>
              </div>
            </aside>

            {/* Right — form */}
            <div className="flex-1 min-w-0">
              <ContactForm />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
