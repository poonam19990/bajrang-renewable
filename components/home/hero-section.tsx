import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Powering a <span className="text-teal-600 dark:text-teal-400">Sustainable</span> Future
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              Bajrang Renewable provides innovative energy solutions that are environmentally friendly and economically
              viable.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[350px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Renewable Energy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
