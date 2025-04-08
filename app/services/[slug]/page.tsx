import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const getService = (slug: string) => {
  const services = {
    substations: {
      title: "Substations",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We design, build, and maintain electrical substations that efficiently distribute power from renewable energy sources to the grid.",
      content: `
        <p>Electrical substations are a critical component of the power distribution network, especially for renewable energy projects. At Bajrang Renewable, we specialize in the design, construction, and maintenance of substations that efficiently connect renewable energy sources to the grid.</p>
        
        <h2>Our Substation Services</h2>
        <p>Our comprehensive substation services include:</p>
        <ul>
          <li>Substation design and engineering</li>
          <li>Equipment procurement and installation</li>
          <li>Testing and commissioning</li>
          <li>Maintenance and upgrades</li>
          <li>Compliance with regulatory requirements</li>
        </ul>
        
        <h2>Types of Substations</h2>
        <p>We work with various types of substations, including:</p>
        <ul>
          <li>Step-up substations for renewable energy generation</li>
          <li>Step-down substations for power distribution</li>
          <li>Switching substations for network configuration</li>
          <li>Mobile substations for temporary power needs</li>
        </ul>
        
        <h2>Advanced Technology</h2>
        <p>We utilize the latest technologies in our substation projects, including:</p>
        <ul>
          <li>Digital control and monitoring systems</li>
          <li>Smart grid integration</li>
          <li>Remote monitoring and diagnostics</li>
          <li>Energy management systems</li>
        </ul>
        
        <h2>Quality and Safety</h2>
        <p>Quality and safety are our top priorities in all substation projects. We adhere to the highest industry standards and implement rigorous quality control measures to ensure the reliability and safety of our substations.</p>
        
        <h2>Why Choose Us</h2>
        <p>With our extensive experience and expertise in substation design and construction, we deliver high-quality, reliable, and efficient substations that meet the specific needs of our clients. Our team of skilled engineers and technicians ensures that each project is completed to the highest standards, on time, and within budget.</p>
      `,
      features: [
        "Custom substation design and engineering",
        "High-quality equipment procurement",
        "Expert installation and commissioning",
        "Comprehensive testing and quality assurance",
        "Ongoing maintenance and support",
        "Compliance with all regulatory requirements",
      ],
    },
    "cable-laying": {
      title: "Cable Laying",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "Our expert team provides comprehensive cable laying services for renewable energy projects, ensuring reliable power transmission.",
      content: `
        <p>Cable laying is a critical aspect of renewable energy infrastructure, ensuring the efficient transmission of power from generation sources to the grid. At Bajrang Renewable, we provide comprehensive cable laying services for various renewable energy projects.</p>
        
        <h2>Our Cable Laying Services</h2>
        <p>Our cable laying services include:</p>
        <ul>
          <li>Underground cable installation</li>
          <li>Overhead line construction</li>
          <li>Submarine cable laying</li>
          <li>Cable jointing and termination</li>
          <li>Cable testing and commissioning</li>
          <li>Cable maintenance and repair</li>
        </ul>
        
        <h2>Types of Cables</h2>
        <p>We work with various types of cables, including:</p>
        <ul>
          <li>High-voltage power cables</li>
          <li>Medium-voltage distribution cables</li>
          <li>Low-voltage service cables</li>
          <li>Fiber optic communication cables</li>
          <li>Control and instrumentation cables</li>
        </ul>
        
        <h2>Advanced Techniques</h2>
        <p>We utilize advanced techniques and equipment for cable laying, including:</p>
        <ul>
          <li>Horizontal directional drilling</li>
          <li>Trenchless technology</li>
          <li>Cable plowing</li>
          <li>Open trench installation</li>
          <li>Aerial installation</li>
        </ul>
        
        <h2>Quality and Reliability</h2>
        <p>We prioritize quality and reliability in all our cable laying projects. Our cables are sourced from reputable manufacturers and undergo rigorous testing to ensure they meet the highest standards of performance and durability.</p>
        
        <h2>Why Choose Us</h2>
        <p>With our extensive experience and expertise in cable laying, we deliver high-quality, reliable, and efficient cable installations that meet the specific needs of our clients. Our team of skilled technicians ensures that each project is completed to the highest standards, on time, and within budget.</p>
      `,
      features: [
        "Comprehensive cable laying solutions",
        "Expert installation and termination",
        "Advanced installation techniques",
        "High-quality cable materials",
        "Thorough testing and quality assurance",
        "Ongoing maintenance and support",
      ],
    },
    "operation-maintenance": {
      title: "Operation & Maintenance",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We offer complete operation and maintenance services to ensure your renewable energy systems run at optimal efficiency.",
      content: `
        <p>Proper operation and maintenance are essential for maximizing the performance and lifespan of renewable energy systems. At Bajrang Renewable, we offer comprehensive operation and maintenance services to ensure your renewable energy assets operate at peak efficiency.</p>
        
        <h2>Our O&M Services</h2>
        <p>Our operation and maintenance services include:</p>
        <ul>
          <li>Preventive maintenance</li>
          <li>Corrective maintenance</li>
          <li>Performance monitoring</li>
          <li>System optimization</li>
          <li>Emergency response</li>
          <li>Spare parts management</li>
        </ul>
        
        <h2>Types of Systems</h2>
        <p>We provide O&M services for various renewable energy systems, including:</p>
        <ul>
          <li>Solar PV plants</li>
          <li>Wind farms</li>
          <li>Hydroelectric plants</li>
          <li>Biomass facilities</li>
          <li>Energy storage systems</li>
          <li>Hybrid renewable energy systems</li>
        </ul>
        
        <h2>Advanced Monitoring</h2>
        <p>We utilize advanced monitoring and diagnostic tools to track the performance of your renewable energy systems, including:</p>
        <ul>
          <li>Remote monitoring systems</li>
          <li>Data analytics</li>
          <li>Predictive maintenance</li>
          <li>Thermal imaging</li>
          <li>Drone inspections</li>
        </ul>
        
        <h2>Performance Optimization</h2>
        <p>We continuously work to optimize the performance of your renewable energy systems, identifying opportunities for improvement and implementing solutions to increase energy production and efficiency.</p>
        
        <h2>Why Choose Us</h2>
        <p>With our extensive experience and expertise in renewable energy O&M, we deliver high-quality, reliable, and efficient services that maximize the performance and lifespan of your renewable energy assets. Our team of skilled technicians ensures that your systems operate at peak efficiency, minimizing downtime and maximizing return on investment.</p>
      `,
      features: [
        "Comprehensive preventive maintenance",
        "24/7 monitoring and support",
        "Rapid response to issues",
        "Performance optimization",
        "Detailed reporting and analytics",
        "Spare parts management",
      ],
    },
    "transmission-line": {
      title: "Transmission Line",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "Our transmission line services include design, installation, and maintenance of high-voltage power lines for renewable energy projects.",
      content: `
        <p>Transmission lines are the backbone of the power grid, carrying electricity from generation sources to distribution networks. At Bajrang Renewable, we provide comprehensive transmission line services for renewable energy projects, ensuring efficient and reliable power transmission.</p>
        
        <h2>Our Transmission Line Services</h2>
        <p>Our transmission line services include:</p>
        <ul>
          <li>Transmission line design and engineering</li>
          <li>Tower and pole installation</li>
          <li>Conductor stringing</li>
          <li>Insulator and hardware installation</li>
          <li>Testing and commissioning</li>
          <li>Maintenance and upgrades</li>
        </ul>
        
        <h2>Types of Transmission Lines</h2>
        <p>We work with various types of transmission lines, including:</p>
        <ul>
          <li>High-voltage overhead lines</li>
          <li>Underground transmission cables</li>
          <li>HVDC (High-Voltage Direct Current) lines</li>
          <li>Submarine transmission cables</li>
        </ul>
        
        <h2>Advanced Technology</h2>
        <p>We utilize advanced technologies in our transmission line projects, including:</p>
        <ul>
          <li>Computer-aided design and modeling</li>
          <li>GIS (Geographic Information System) mapping</li>
          <li>LiDAR (Light Detection and Ranging) surveys</li>
          <li>Drone inspections</li>
          <li>Smart grid integration</li>
        </ul>
        
        <h2>Quality and Reliability</h2>
        <p>Quality and reliability are our top priorities in all transmission line projects. We adhere to the highest industry standards and implement rigorous quality control measures to ensure the reliability and safety of our transmission lines.</p>
        
        <h2>Why Choose Us</h2>
        <p>With our extensive experience and expertise in transmission line design and construction, we deliver high-quality, reliable, and efficient transmission lines that meet the specific needs of our clients. Our team of skilled engineers and technicians ensures that each project is completed to the highest standards, on time, and within budget.</p>
      `,
      features: [
        "Comprehensive transmission line solutions",
        "Expert design and engineering",
        "High-quality materials and components",
        "Advanced construction techniques",
        "Thorough testing and quality assurance",
        "Ongoing maintenance and support",
      ],
    },
    "epc-service": {
      title: "EPC Service",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "As a full-service EPC contractor, we handle engineering, procurement, and construction for renewable energy projects of all sizes.",
      content: `
        <p>As a full-service EPC (Engineering, Procurement, and Construction) contractor, Bajrang Renewable provides end-to-end solutions for renewable energy projects of all sizes. We handle every aspect of your project, from initial design to final commissioning, ensuring a seamless and efficient process.</p>
        
        <h2>Our EPC Services</h2>
        <p>Our comprehensive EPC services include:</p>
        <ul>
          <li>Project development and planning</li>
          <li>Detailed engineering and design</li>
          <li>Equipment and material procurement</li>
          <li>Construction and installation</li>
          <li>Testing and commissioning</li>
          <li>Project management</li>
        </ul>
        
        <h2>Types of Projects</h2>
        <p>We provide EPC services for various renewable energy projects, including:</p>
        <ul>
          <li>Solar PV plants</li>
          <li>Wind farms</li>
          <li>Hydroelectric plants</li>
          <li>Biomass facilities</li>
          <li>Energy storage systems</li>
          <li>Hybrid renewable energy systems</li>
        </ul>
        
        <h2>Project Management</h2>
        <p>Our experienced project managers oversee every aspect of your project, ensuring it is completed on time, within budget, and to the highest quality standards. We utilize advanced project management tools and methodologies to track progress, manage resources, and mitigate risks.</p>
        
        <h2>Quality Assurance</h2>
        <p>Quality is at the core of our EPC services. We implement rigorous quality control measures at every stage of the project, from design to commissioning, to ensure that all components and systems meet the highest standards of performance and reliability.</p>
        
        <h2>Why Choose Us</h2>
        <p>With our extensive experience and expertise in renewable energy EPC, we deliver high-quality, reliable, and efficient projects that meet the specific needs of our clients. Our integrated approach ensures seamless coordination between all project phases, minimizing delays and maximizing value.</p>
      `,
      features: [
        "End-to-end project management",
        "Detailed engineering and design",
        "Strategic procurement",
        "Expert construction and installation",
        "Comprehensive testing and commissioning",
        "Ongoing support and maintenance",
      ],
    },
    others: {
      title: "Other Services",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We provide a range of additional services tailored to meet the specific needs of your renewable energy projects.",
      content: `
        <p>In addition to our core services, Bajrang Renewable offers a range of specialized services to meet the diverse needs of our clients in the renewable energy sector. These services are tailored to address specific challenges and opportunities in renewable energy projects.</p>
        
        <h2>Additional Services</h2>
        <p>Our additional services include:</p>
        <ul>
          <li>Feasibility studies and site assessments</li>
          <li>Environmental impact assessments</li>
          <li>Grid connection studies</li>
          <li>Energy yield assessments</li>
          <li>Due diligence for renewable energy projects</li>
          <li>Training and capacity building</li>
        </ul>
        
        <h2>Consulting Services</h2>
        <p>We provide expert consulting services in various areas, including:</p>
        <ul>
          <li>Renewable energy policy and regulations</li>
          <li>Technology selection and assessment</li>
          <li>Financial modeling and analysis</li>
          <li>Risk assessment and mitigation</li>
          <li>Project development strategies</li>
        </ul>
        
        <h2>Research and Development</h2>
        <p>We invest in research and development to stay at the forefront of renewable energy technology and innovation. Our R&D activities focus on improving the efficiency, reliability, and cost-effectiveness of renewable energy systems.</p>
        
        <h2>Custom Solutions</h2>
        <p>We understand that each project has unique requirements and challenges. We work closely with our clients to develop custom solutions that address their specific needs and objectives, leveraging our expertise and experience in the renewable energy sector.</p>
        
        <h2>Why Choose Us</h2>
        <p>With our comprehensive range of services and deep expertise in renewable energy, we are your one-stop solution for all your renewable energy needs. Our client-centered approach ensures that we deliver solutions that meet your specific requirements and exceed your expectations.</p>
      `,
      features: [
        "Customized renewable energy solutions",
        "Expert consulting services",
        "Comprehensive feasibility studies",
        "Detailed environmental assessments",
        "Advanced energy modeling",
        "Specialized training programs",
      ],
    },
  }

  return services[slug as keyof typeof services] || null
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)

  if (!service) {
    return (
      <div className="container flex flex-col items-center justify-center px-4 py-12 text-center md:px-6 md:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Service Not Found</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The service you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
        </Button>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
        </div>

        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{service.title}</h1>

        <p className="mb-8 text-xl text-gray-500 dark:text-gray-400">{service.description}</p>

        <div
          className="prose max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-gray-500 dark:prose-p:text-gray-400"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        <div className="mt-12 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-bold">Key Features</h2>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
            <Link href="/contact">Contact Us for More Information</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
