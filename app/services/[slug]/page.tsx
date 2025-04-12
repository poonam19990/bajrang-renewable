"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft,ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Img1 from "@/public/substations/substation1.jpg";
import Img2 from "@/public/substations/substation2.jpg";
import Img3 from "@/public/substations/substation3.jpg";
import Img4 from "@/public/substations/substation4.jpg";
import tra_line1 from "@/public/TransmissionLine/transmission-line2.jpeg";
import tra_line2 from "@/public/TransmissionLine/transmission-line3.jpeg";
import tra_line3 from "@/public/TransmissionLine/transmission-line5.jpg";
import tra_line4 from "@/public/TransmissionLine/transmission-line1.jpeg";
import oil_filter  from "@/public/other-services/oil-filter.jpg"
import getco_feder from "@/public/other-services/getco-feder.jpg"
import overhead1 from "@/public/other-services/overhead-line2.jpeg"
import MVA_1 from "@/public/other-services/50MVA-1.jpg"
import MVA_2 from "@/public/other-services/50MVA-2.jpg"
import MVA_3 from "@/public/other-services/50MVA-3.jpg"
import cable1 from "@/public/cable-laying/cb-2.jpeg"
import cable2 from "@/public/cable-laying/cb-3.jpeg"
import cable3 from "@/public/cable-laying/cb-4.jpeg"
import epc1 from "@/public/epc-service/epc1.jpg"
import epc2 from "@/public/epc-service/epc2.jpg"
import epc3 from "@/public/epc-service/epc5.jpg"
import epc4 from "@/public/epc-service/epc6.jpg"
import ImageLightbox from "@/components/image-lightbox";
import op_maintain2 from  "@/public/op-maintain/o&m-2.jpeg";
import op_maintain3 from "@/public/op-maintain/o&m-3.jpeg";
import op_maintain4 from "@/public/op-maintain/o&m-4.jpeg";
// This would typically come from a database or CMS
const getService = (slug: string) => {
  const services = {
    substations: {
      title: "Substations",
      // image: "/placeholder.svg?height=600&width=1200",
      description:
        "We design, build, and maintain electrical substations that efficiently distribute power from renewable energy sources to the grid.",
      content: `
        <h2>Our Expertise in AIS & GIS Substations:</h2>
      `,
      features: [
        "Air-Insulated Substation (AIS) – Cost-effective and flexible conventional substation solutions.",
        "Gas-Insulated Substation (GIS) – Compact, maintenance-friendly solutions for space-constrained areas.",
        "Steel Structure & Equipment Erection – Transformer, CT/PT, Circuit Breakers, Isolators, and Busbar installation.",
        "HT Cable Laying & Termination – Power & control cable laying, jointing, and termination with proper testing.",
        "Protection & Relay Testing – Verification of relay coordination, breaker timing, CT/PT ratio testing, and SCADA integration.",
        "Pre-Commissioning & Final Testing – Insulation resistance, contact resistance, SF6 gas leakage checks, and system energization.",
      ],
      whyChooseUs: [
        "Turnkey AIS & GIS Substation Execution – From foundation work to energization.",
        "Adherence to International Safety & Quality Standards (IS/IEC/GETCO/CEA).",
        "Advanced Testing Equipment & Expert Engineers for flawless commissioning.",
        "On-Time Project Delivery ensuring operational efficiency and reliability.",
      ],
      conclusion:
        "With a proven track record in EHV AIS & GIS substation projects, we empower industries, wind farms, utilities, and transmission networks with high-performance power solutions.",
      gallery: [Img1, Img2, Img3, Img4],
    },
    "cable-laying": {
      title: "Cable Laying",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "Our expert team provides comprehensive cable laying services for renewable energy projects, ensuring reliable power transmission.",
      content: `
        <h2>Our Expertise in Cable Laying:</h2>
      `,
      features: [
        "Underground Cable Installation – Secure and environmentally friendly power transmission solutions.",
        "Overhead Line Construction – Cost-effective solutions for long-distance power transmission.",
        "Submarine Cable Laying – Specialized installation for offshore renewable energy projects.",
        "Cable Jointing & Termination – Expert techniques ensuring reliable connections and minimal power loss.",
        "Cable Testing & Commissioning – Comprehensive testing to ensure optimal performance and safety.",
        "Maintenance & Repair Services – Prompt and efficient services to minimize downtime.",
      ],
      whyChooseUs: [
        "Comprehensive Cable Laying Solutions for all types of renewable energy projects.",
        "Adherence to International Safety & Quality Standards ensuring reliability.",
        "Advanced Equipment & Expert Technicians for precise installation.",
        "On-Time Project Delivery with minimal disruption to existing infrastructure.",
      ],
      conclusion:
        "With our extensive experience in cable laying for renewable energy projects, we ensure efficient and reliable power transmission from generation sources to the grid.",
      gallery: [
       cable1,cable2,cable3
      ],
    },
    "operation-maintenance": {
      title: "Operation & Maintenance",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We offer complete operation and maintenance services to ensure your renewable energy systems run at optimal efficiency.",
      content: `
        <h2>Our Expertise in Operation & Maintenance:</h2>
      `,
      features: [
        "Preventive Maintenance – Regular inspections and servicing to prevent equipment failures.",
        "Corrective Maintenance – Prompt and efficient repairs to minimize downtime.",
        "Performance Monitoring – Continuous monitoring to ensure optimal system performance.",
        "System Optimization – Adjustments and upgrades to improve efficiency and output.",
        "Emergency Response – 24/7 support for critical issues.",
        "Spare Parts Management – Inventory management to ensure quick repairs.",
      ],
      whyChooseUs: [
        "Comprehensive O&M Services for all types of renewable energy systems.",
        "Experienced Technicians with specialized knowledge in renewable energy.",
        "Advanced Monitoring Tools for real-time performance tracking.",
        "Customized Maintenance Plans tailored to your specific needs.",
      ],
      conclusion:
        "Our operation and maintenance services ensure the longevity and optimal performance of your renewable energy assets, maximizing your return on investment.",
      gallery: [
      op_maintain2,op_maintain3,op_maintain4],
    },
    "transmission-line": {
      title: "Transmission Line",
      // image: "/placeholder.svg?height=600&width=1200",
      description:
        "Our transmission line services include design, installation, and maintenance of high-voltage power lines for renewable energy projects.",
      content: `
        <h2>Our Expertise in Transmission Lines:</h2>
      `,
      features: [
        "Transmission Line Design – Custom designs optimized for efficiency and reliability.",
        "Tower & Pole Installation – Secure and stable structures for overhead lines.",
        "Conductor Stringing – Precise installation ensuring optimal performance.",
        "Insulator & Hardware Installation – High-quality components for reliable operation.",
        "Testing & Commissioning – Comprehensive testing to ensure safety and performance.",
        "Maintenance & Upgrades – Regular servicing to maintain optimal operation.",
      ],
      whyChooseUs: [
        "End-to-End Transmission Line Solutions from design to maintenance.",
        "Adherence to International Standards ensuring safety and reliability.",
        "Advanced Equipment & Techniques for efficient installation.",
        "Experienced Engineers with specialized knowledge in transmission systems.",
      ],
      conclusion:
        "Our transmission line services ensure efficient and reliable power transmission from renewable energy sources to the grid, supporting the growth of clean energy.",
      gallery: [tra_line1, tra_line2,tra_line3,tra_line4],
    },
    "epc-service": {
      title: "EPC Service",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "As a full-service EPC contractor, we handle engineering, procurement, and construction for renewable energy projects of all sizes.",
      content: `
        <h2>Our Expertise in EPC Services:</h2>
      `,
      features: [
        "Project Development & Planning – Comprehensive planning for successful project execution.",
        "Detailed Engineering & Design – Custom designs optimized for efficiency and performance.",
        "Equipment & Material Procurement – Strategic sourcing of high-quality components.",
        "Construction & Installation – Expert construction adhering to international standards.",
        "Testing & Commissioning – Thorough testing to ensure optimal performance.",
        "Project Management – Efficient coordination of all project phases.",
      ],
      whyChooseUs: [
        "Integrated EPC Solutions for all types of renewable energy projects.",
        "Experienced Project Managers ensuring on-time and within-budget delivery.",
        "Quality Assurance at every stage of the project.",
        "Customized Approach tailored to your specific requirements.",
      ],
      conclusion:
        "Our EPC services provide a seamless and efficient approach to renewable energy projects, from initial concept to final commissioning.",
      gallery: [
        epc1,epc2,epc3,epc4
      ],
    },
    others: {
      title: "Other Services",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We provide a range of additional services tailored to meet the specific needs of your renewable energy projects.",
      isMultiService: true,
      otherServices: [
        {
          id: "50MVA TR Oil filtration and BDV, PPM ,DGA Analysis",
          title: "50MVA TR Oil filtration and BDV, PPM ,DGA Analysis",
          description:
            "Our comprehensive feasibility studies evaluate the technical, economic, and environmental viability of renewable energy projects. We analyze site conditions, resource availability, grid connection options, and financial projections to determine project feasibility and optimize design parameters.",
          image: oil_filter,
          link: "/services/feasibility-studies",
        },
        {
          id: " 33kv Overhead Line and HT Yard work for Wind farm",
          title: " 33kv Overhead Line and HT Yard work for Wind farm",
          description:
            "We provide expert grid integration services to ensure seamless connection of renewable energy systems to the power grid. Our team conducts detailed grid studies, designs appropriate interconnection solutions, and implements advanced control systems to meet grid code requirements and optimize power quality.",
          image: overhead1,
          link: "/services/grid-integration",
        },
        {
          id: "66kv GETCO feeder bay foundation work",
          title: "66kv GETCO feeder bay foundation work",
          description:
            "Our energy storage solutions enhance the reliability and efficiency of renewable energy systems. We design and implement battery storage systems, pumped hydro storage, and other technologies to store excess energy, provide backup power, and stabilize grid operations.",
          image: getco_feder,
          link: "/services/energy-storage",
        },
        {
          id: "50MVA TR Unloading and Installation",
          title: "50MVA TR Unloading and Installation",
          description:
            "We offer specialized training programs for operators, technicians, and engineers working with renewable energy systems. Our hands-on training covers system operation, maintenance procedures, troubleshooting techniques, and safety protocols to ensure optimal system performance and longevity.",
          image: MVA_3,
          link: "/services/training-programs",
        },
      ],
      content: `
        <h2>Our Additional Services:</h2>
      `,
      features: [
        "Feasibility Studies & Site Assessments – Comprehensive analysis to determine project viability.",
        "Environmental Impact Assessments – Evaluation of potential environmental effects.",
        "Grid Connection Studies – Analysis of grid integration requirements.",
        "Energy Yield Assessments – Estimation of energy production potential.",
        "Due Diligence – Thorough evaluation of project risks and opportunities.",
        "Training & Capacity Building – Knowledge transfer to client teams.",
      ],
      whyChooseUs: [
        "Specialized Expertise in various aspects of renewable energy.",
        "Customized Solutions tailored to your specific needs.",
        "Comprehensive Approach addressing all project aspects.",
        "Experienced Consultants with industry-specific knowledge.",
      ],
      conclusion:
        "Our additional services complement our core offerings, providing comprehensive support for all aspects of your renewable energy projects.",
      gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    "feasibility-studies": {
      title: "Feasibility Studies",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "Our comprehensive feasibility studies evaluate the technical, economic, and environmental viability of renewable energy projects.",
      content: `
        <h2>Our Expertise in Feasibility Studies:</h2>
      `,
      features: [
        "Technical Feasibility – Assessment of site conditions, resource availability, and technology options.",
        "Economic Feasibility – Financial modeling, cost-benefit analysis, and ROI projections.",
        "Environmental Feasibility – Evaluation of potential environmental impacts and mitigation measures.",
        "Regulatory Compliance – Analysis of permitting requirements and regulatory frameworks.",
        "Risk Assessment – Identification and evaluation of project risks and mitigation strategies.",
        "Recommendations – Detailed recommendations for project implementation and optimization.",
      ],
      whyChooseUs: [
        "Experienced Team with expertise in renewable energy project development.",
        "Comprehensive Analysis covering all aspects of project feasibility.",
        "Advanced Modeling Tools for accurate resource assessment and financial projections.",
        "Practical Recommendations based on real-world experience.",
      ],
      conclusion:
        "Our feasibility studies provide a solid foundation for successful renewable energy projects, helping clients make informed decisions and optimize project design.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "grid-integration": {
      title: "Grid Integration",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We provide expert grid integration services to ensure seamless connection of renewable energy systems to the power grid.",
      content: `
        <h2>Our Expertise in Grid Integration:</h2>
      `,
      features: [
        "Grid Connection Studies – Analysis of grid capacity, stability, and connection requirements.",
        "Power Quality Analysis – Assessment and improvement of voltage regulation, harmonics, and flicker.",
        "Protection System Design – Development of appropriate protection schemes for grid connection.",
        "Control System Implementation – Advanced control systems for grid compliance and optimization.",
        "Grid Code Compliance – Ensuring compliance with relevant grid codes and standards.",
        "Testing and Commissioning – Comprehensive testing of grid connection systems.",
      ],
      whyChooseUs: [
        "Specialized Expertise in grid integration of renewable energy systems.",
        "Advanced Analysis Tools for detailed grid studies and simulations.",
        "Practical Experience with various grid connection challenges and solutions.",
        "Collaborative Approach working with grid operators and regulatory authorities.",
      ],
      conclusion:
        "Our grid integration services ensure reliable and efficient connection of renewable energy systems to the power grid, maximizing energy export and minimizing grid impacts.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "energy-storage": {
      title: "Energy Storage Solutions",
      image: "/placeholder.svg?height=600&width=1200",
      description: "Our energy storage solutions enhance the reliability and efficiency of renewable energy systems.",
      content: `
        <h2>Our Expertise in Energy Storage:</h2>
      `,
      features: [
        "Battery Storage Systems – Design and implementation of lithium-ion, flow battery, and other technologies.",
        "Pumped Hydro Storage – Assessment and development of pumped hydro storage solutions.",
        "Thermal Energy Storage – Implementation of thermal storage for concentrated solar power and other applications.",
        "Hybrid System Integration – Integration of storage with renewable energy generation and grid connection.",
        "Control System Development – Advanced control systems for optimal storage operation.",
        "Performance Monitoring – Continuous monitoring and optimization of storage system performance.",
      ],
      whyChooseUs: [
        "Comprehensive Knowledge of various energy storage technologies and applications.",
        "System Integration Expertise ensuring seamless operation with generation and grid systems.",
        "Optimization Capabilities maximizing storage system value and performance.",
        "Lifecycle Support from initial design through operation and maintenance.",
      ],
      conclusion:
        "Our energy storage solutions address the intermittency challenges of renewable energy, providing reliable power supply, grid stability, and maximizing the value of renewable energy assets.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "training-programs": {
      title: "Training Programs",
      image: "/placeholder.svg?height=600&width=1200",
      description:
        "We offer specialized training programs for operators, technicians, and engineers working with renewable energy systems.",
      content: `
        <h2>Our Expertise in Training Programs:</h2>
      `,
      features: [
        "System Operation Training – Comprehensive training on the operation of renewable energy systems.",
        "Maintenance Procedures – Detailed instruction on preventive and corrective maintenance techniques.",
        "Troubleshooting Techniques – Practical training on identifying and resolving system issues.",
        "Safety Protocols – Training on safety procedures and best practices for renewable energy systems.",
        "Performance Optimization – Techniques for maximizing system efficiency and output.",
        "Documentation and Reporting – Training on proper documentation and reporting procedures.",
      ],
      whyChooseUs: [
        "Experienced Trainers with practical knowledge of renewable energy systems.",
        "Hands-On Approach combining classroom instruction with practical exercises.",
        "Customized Programs tailored to specific system types and client needs.",
        "Comprehensive Materials including manuals, guides, and reference documents.",
      ],
      conclusion:
        "Our training programs build the capacity of client teams to effectively operate and maintain renewable energy systems, ensuring long-term performance and reliability.",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  };

  return services[slug as keyof typeof services] || null;
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = "/services"
  }

  // Special layout for "Other Services" page
  if (service.isMultiService) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Button variant="outline" className="mb-8" onClick={handleBackClick}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>

          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{service.title}</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-500 dark:text-gray-400">{service.description}</p>
          </div>

          <div className="space-y-16">
            {service.otherServices.map((otherService, index) => (
              <div key={otherService.id} className="group">
                <h2 className="mb-6 text-2xl font-bold tracking-tighter sm:text-3xl">{otherService.title}</h2>
                <div className={`flex flex-col gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">{otherService.description}</p>
                    <div className="pt-2">
                      <Button
                        asChild
                        className="group-hover:bg-teal-700 bg-teal-600 dark:bg-teal-600 dark:group-hover:bg-teal-700"
                      >
                        <Link href={otherService.link}>
                          Learn More{" "}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <motion.div
                      className="overflow-hidden rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="relative aspect-video w-full">
                        <Image
                          src={otherService.image || "/placeholder.svg"}
                          alt={otherService.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
              <Link href="/contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Standard layout for all other service pages
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Button variant="outline" className="mb-8" onClick={handleBackClick}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>

        {/* <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" priority />
        </div> */}

        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{service.title}</h1>

        <p className="mb-8 text-xl text-gray-500 dark:text-gray-400">{service.description}</p>

        <div
          className="prose max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-gray-500 dark:prose-p:text-gray-400"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />

        <div className="mt-6 space-y-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 text-teal-600 dark:text-teal-400">✅</div>
              <p className="text-gray-700 dark:text-gray-300">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-bold">Why Choose Us?</h2>
          <div className="space-y-4">
            {service.whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-teal-600 dark:text-teal-400">✔</div>
                <p className="text-gray-700 dark:text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 dark:text-gray-300">{service.conclusion}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
            <Link href="/contact">Contact Us for More Information</Link>
          </Button>
        </div>

        {isClient && service.gallery && service.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tighter">Gallery</h2>
            <ImageLightbox images={service.gallery} alt={service.title} />
          </div>
        )}
      </div>
    </div>
  )
}
