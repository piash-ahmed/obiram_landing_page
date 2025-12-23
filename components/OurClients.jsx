"use client";

export default function OurClients() {
  const logos = [
    "/images/company-1.png",
    "/images/company-2.png",
    "/images/company-3.png",
    "/images/company-4.png",
    "/images/company-5.png",
    "/images/company-6.png",
  ];

  const sliderCards = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden bg-transparent top-16 md:top-26">
      {/* Left gradient */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
        style={{
          background:
            "linear-gradient(to right, #08090a27 15%, transparent 100%)",
        }}
      />
      {/* Right gradient */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
        style={{
          background: "linear-gradient(to left, #08090a36 15%, transparent 100%)",
        }}
      />
      {/* Slider */}
      <div className="flex gap-12 animate-logo-slider w-max pt-4">
        {sliderCards.map((logo, index) => (
          <div
            key={index}
            className="min-w-[150px] flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="h-[160px] md:h-[40px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <p className="text-sm md:text-lg text-[#FFFFFF99] text-center">
        Trusted by Countless Global Brands
      </p>
    </div>
  );
}