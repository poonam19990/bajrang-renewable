import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import ss from "@/public/substations/substation6.jpeg"
 import tl from "@/public/TransmissionLine/transmission-line1.jpeg"
 import cable1 from "@/public/cable-laying/cb-1.jpeg"
 import epc from "@/public/epc-service/epc4.jpg"
 import others from "@/public/other-services/getco-feder2.jpg"
import { truncateWords } from "@/components/truncateWords"
// import other from "@/public/"
export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Substations",
      description:
        "we specialize in EHV (Extra High Voltage) AIS & GIS Substation solutions, delivering precise, reliable, and efficient power infrastructure from 66kV to 220kV and beyond. Our expert team ensures seamless execution from erection to final commissioning, following IS/IEC, GETCO, and CEA standards for high-performance and grid compliance. ",
      image: ss,
      link: "/services/substations",
    },
    {
      id: 2,
      title: "Cable Laying",
      description:
        "Our expert team provides comprehensive cable laying services for renewable energy projects, ensuring reliable power transmission.",
      image: cable1,
      link: "/services/cable-laying",
    },
    {
      id: 3,
      title: "Operation & Maintenance",
      description:
        "We offer complete operation and maintenance services to ensure your renewable energy systems run at optimal efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/operation-maintenance",
    },
    {
      id: 4,
      title: "Transmission Line",
      description:
        "Our transmission line services include design, installation, and maintenance of high-voltage power lines for renewable energy projects.",
      image: tl,
      link: "/services/transmission-line",
    },
    {
      id: 5,
      title: "EPC Service",
      description:
        "As a full-service EPC contractor, we handle engineering, procurement, and construction for renewable energy projects of all sizes.",
      image: epc,
      link: "/services/epc-service",
    },
    {
      id: 6,
      title: "Others",
      description:
        "We provide a range of additional services tailored to meet the specific needs of your renewable energy projects.",
      image: others,
      link: "/services/others",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            We offer a comprehensive range of renewable energy services to meet your needs.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <h2 className="text-xl font-bold">{service.title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{truncateWords(service.description)}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={service.link}>
                  Visit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
