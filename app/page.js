import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OurClients from "../components/OurClients";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <main>
      <section
        className="bg-cover lg:bg-contain bg-top bg-no-repeat  h-full w-full pb-28 md:pb-56 lg:pb-96"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <Navbar />
        <Hero />
      </section>
        <div className="relative -mt-32 md:-mt-56 lg:-mt-96 z-10">
          <Dashboard />
        </div>
      <section className="relative -mt-5 lg:-mt-16 z-10">
        <div className="text-center">
          <p className="text-[#373A46] text-[12px] md:text-[14px] lg:text-[18px] font-light mb-3">Trusted by Growing Commerce Businesses</p>
          <h2 className="text-[#191715]  text-[22px] md:text-[28px] lg:text-[36px]">Brands Growing With Obiram</h2>
        </div>
        <OurClients />
      </section>
    </main>
  );
}




