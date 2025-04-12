import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-gray-950">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4CZImQMSxx5UIBW8EmyC2xIiQF8JFt.png"
                alt="Bajrang Renewable Logo"
                width={150}
                height={50}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Providing renewable energy solutions for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-500 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span className="text-gray-500 dark:text-gray-400">A24, Shiv Shakti Society,
                    B/H Garnet Apartment,
                    Near Sabri School,
                    Vasna road, Vadodara -390007</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span className="text-gray-500 dark:text-gray-400">+91-7567648632</span>
                <span className="text-gray-500 dark:text-gray-400">+91-9773092131</span>
                
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span className="text-gray-500 dark:text-gray-400">bajrangrenewable@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Follow Us</h3>
            <div className="flex gap-4">
              {/* <Link
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-teal-100 hover:text-teal-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-teal-900 dark:hover:text-teal-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-teal-100 hover:text-teal-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-teal-900 dark:hover:text-teal-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link> */}
              <Link
                href="https://www.instagram.com/bajrangrenewable?igsh=c3h5dmhsZGNlOWg2"
                className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-teal-100 hover:text-teal-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-teal-900 dark:hover:text-teal-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/bajrang-renewable-6a59b5343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-teal-100 hover:text-teal-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-teal-900 dark:hover:text-teal-400"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Bajrang Renewable. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
