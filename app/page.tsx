import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import DownloadSection from '@/components/DownloadSection'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <DownloadSection />
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  )
}
