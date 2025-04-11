"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

interface ImageLightboxProps {
  images: string[]
  alt: string
}

export default function ImageLightbox({ images, alt }: ImageLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Close lightbox when escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
        setSelectedIndex(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedIndex(null)
  }

  return (
    <>
      <div
        className={`grid gap-4 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : images.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        }`}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => openLightbox(image, index)}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
              layoutId={`gallery-image-${selectedIndex}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={`${alt} gallery image ${selectedIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
