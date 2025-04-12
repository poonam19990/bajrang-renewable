import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Bajrang Renewable</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-500 dark:text-gray-400">
            Pioneering sustainable energy solutions for a greener tomorrow
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-video overflow-hidden rounded-lg md:aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Bajrang Renewable Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Story</h2>
            <p className="text-gray-500 dark:text-gray-400">
               Bajrang Renewable emerged from a vision to transform India's energy landscape through
              innovative renewable energy solutions. What began as a small team of passionate engineers has grown into a
              leading provider of comprehensive renewable energy services across the country.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Our journey has been defined by a commitment to excellence, sustainability, and customer satisfaction.
              With each project, we've refined our expertise and expanded our capabilities to meet the evolving needs of
              the renewable energy sector.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">Our Mission & Vision</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
              <h3 className="mb-4 text-xl font-semibold">Our Mission</h3>
              <p className="text-gray-500 dark:text-gray-400">
              Our mission is clear to become
            the leading provider of premium-quality renewable energy solutions that not only meet but exceed our
            clients’ expectations. We are here to offer innovative, reliable, and sustainable energy systems that
            empower businesses, communities, and industries to thrive in a rapidly changing world.

            We are committed to delivering game-changing products and exceptional services that power a cleaner,
            greener, and more energy-efficient future—because we believe in building a world where renewable energy
            leads the way.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
              <h3 className="mb-4 text-xl font-semibold">Our Vision</h3>
              <p className="text-gray-500 dark:text-gray-400">
                To be the leading renewable energy service provider in India, recognized for technical excellence,
                innovation, and commitment to sustainability, contributing significantly to a cleaner and greener
                future.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">What Sets Us Apart</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-teal-100 p-3 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Technical Excellence</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our team comprises highly skilled engineers and technicians with specialized expertise in renewable
                energy technologies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-teal-100 p-3 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Customer-Centric Approach</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We prioritize understanding our clients' unique needs and delivering tailored solutions that exceed
                expectations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-teal-100 p-3 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Sustainability Focus</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Environmental responsibility is at the core of everything we do, from project design to implementation
                and maintenance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-teal-100 p-3 text-teal-600 dark:bg-teal-900 dark:text-teal-400">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Timely Delivery</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We understand the importance of timelines and consistently deliver projects on schedule without
                compromising quality.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter sm:text-3xl">Our Achievements</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-900">
              <div className="mb-2 text-3xl font-bold text-teal-600 dark:text-teal-400">5+</div>
              <p className="text-gray-500 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-900">
              <div className="mb-2 text-3xl font-bold text-teal-600 dark:text-teal-400">2</div>
              <p className="text-gray-500 dark:text-gray-400">Upcoming</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-900">
              <div className="mb-2 text-3xl font-bold text-teal-600 dark:text-teal-400">100%</div>
              <p className="text-gray-500 dark:text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tighter sm:text-3xl">Ready to Work With Us?</h2>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Contact us today to discuss how we can help you achieve your renewable energy goals.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
