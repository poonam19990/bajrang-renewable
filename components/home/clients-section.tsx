import Image from "next/image";
import Img1 from "@/public/clients/ANTIQUE-POWER.png";
import Img2 from "@/public/clients/KP.jpg";
import Img3 from "@/public/clients/Logo_GETCO_New.png";
import Img4 from "@/public/clients/POLITE.jpg";
import Img5 from "@/public/clients/SE.jpg";
import Img6 from "@/public/clients/Suzlon_655x500.png";
import Img7 from "@/public/clients/Torrent.jpg";
import Img8 from "@/public/clients/ompower.png";
import Img9 from "@/public/clients/rajesh-power.png";

export default function ClientsSection() {
  const clients = [
    { name: "Client 1", logo: Img1 },
    // { name: "Client 2", logo: Img2 },
    { name: "Client 3", logo: Img3 },
    { name: "Client 4", logo: Img4 },
    { name: "Client 5", logo: Img5 },
    { name: "Client 6", logo: Img6 },
    { name: "Client 7", logo: Img7 },
    { name: "Client 8", logo: Img8 },
    { name: "Client 9", logo: Img9 },
  ];

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Trusted Clients
          </h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            We work with leading organizations across various industries to
            deliver sustainable energy solutions.
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
                className="h-20 w-auto transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
