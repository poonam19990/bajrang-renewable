import Image from "next/image"

export default function ClientsSection() {
  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Client 2", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Client 3", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Client 4", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Client 5", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Client 6", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Trusted Clients</h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            We work with leading organizations across various industries to deliver sustainable energy solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={150}
                height={60}
                className="h-auto w-auto grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
