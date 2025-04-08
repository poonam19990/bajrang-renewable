import HeroSection from "@/components/home/hero-section"
import ClientsSection from "@/components/home/clients-section"
import ReviewsSection from "@/components/home/reviews-section"
import ContactSection from "@/components/home/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24 md:py-12">
      <HeroSection />
      <ClientsSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  )
}
