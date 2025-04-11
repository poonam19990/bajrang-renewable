import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative container px-4 md:px-6">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
          poster="/placeholder.svg?height=800&width=1600"
          src="/home-video.mp4"
        />
        
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 grid gap-6 py-20 md:py-32 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to <span className="text-teal-400">BAJARANG RENEWABLE</span> 
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
             Pioneering the
                Future of Renewable Energy we are committed to transforming the energy landscape by providing innovative
                and sustainable solutions. Specializing in <span>Substation Erection</span>, <span
                  >EHV Transmission Lines</span>, and <span>Renewable Energy
                  Projects</span>, we work diligently to ensure the seamless integration and optimal performance of
                power systems across industries.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
