import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurClients from "../components/OurClients";

export default function Home() {
  return (
    <main>
      <section
        className="bg-contain bg-top bg-no-repeat  h-full"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <Navbar />
        <Hero />
        <Image
          src="/images/dashboard.png"
          alt="Analytics Image"
          width={1000}
          height={754}
          className="mx-auto mt-10 dashboard-image"
        />
      </section>
      <section className="py-16">
        <OurClients />
      </section>
    </main>
  );
}




    // "/images/company-7.png",
    // "/images/company-8.png",
    // "/images/company-9.png",
    // "/images/company-10.png",
    // "/images/company-11.png",
    // "/images/company-12.png",

