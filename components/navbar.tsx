"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md dark:bg-gray-950" : "bg-white/80 backdrop-blur-sm dark:bg-gray-950/80"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4CZImQMSxx5UIBW8EmyC2xIiQF8JFt.png"
            alt="Bajrang Renewable Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 pt-10">
              <Link
                href="/"
                className="text-lg font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
