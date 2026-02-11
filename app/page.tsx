import BlogSection from '@/components/sections/blog-section'
import CTASection from '@/components/sections/cta-section'
import Footer from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import HeroSection from '@/components/sections/hero-section'
import PhilosophySection from '@/components/sections/philosophy-section'
import RolesMarquee from '@/components/sections/roles-marquee'
import ServicesSection from '@/components/sections/services-section'

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <PhilosophySection />
        <RolesMarquee />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
