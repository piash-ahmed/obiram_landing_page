"use client";

import Image from "next/image";

export default function OurClients() {
  const clientsFistRow = [
    {
      image: "/images/company-1.png",
      alt: "Brand image 1"
    },
    {
      image: "/images/company-2.png",
      alt: "Brand image 2"
    },
    {
      image: "/images/company-3.png",
      alt: "Brand image 3"
    },
    {
      image: "/images/company-4.png",
      alt: "Brand image 4"
    },
    {
      image: "/images/company-5.png",
      alt: "Brand image 5"
    },
    {
      image: "/images/company-6.png",
      alt: "Brand image 6"
    },
    
  ];

  const clientsSecondRow = [
    {
      image: "/images/company-7.png",
      alt: "Brand image 7"
    },
    {
      image: "/images/company-8.png",
      alt: "Brand image 8"
    },
    {
      image: "/images/company-9.png",
      alt: "Brand image 9"
    },
    {
      image: "/images/company-10.png",
      alt: "Brand image 10"
    },
    {
      image: "/images/company-11.png",
      alt: "Brand image 11"
    },
    {
      image: "/images/company-12.png",
      alt: "Brand image 12"
    },
  ];

  
  const sliderCardsOne = [...clientsFistRow, ...clientsFistRow];
  const sliderCardsTwo = [...clientsSecondRow, ...clientsSecondRow];

  return (
    <section className="md:pt-6 lg:pt-10">
      <div className="overflow-hidden mt-12 relative">
         <div
        className="pointer-events-none absolute left-0 top-0 h-full w-12 lg:w-32 z-10"
        style={{
          background: "linear-gradient(to right, #ffffffb7 15%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-12 lg:w-32 z-10"
        style={{
          background: "linear-gradient(to left, #ffffffb7 15%, transparent 100%)",
        }}
      />
        <div className="flex gap-8 animate-client-slider w-max">
          {sliderCardsOne.map((client, idx) => (
            <div
              key={idx}
            >
              <Image
                src={client.image}
                alt={client.alt}
                width={148}
                height={44}
                className="w-20 h-8 md:w-28 md:h-10 lg:w-36 lg:h-11 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-4 md:mt-8 lg:10 relative mb-8">
         <div
        className="pointer-events-none absolute left-0 top-0 h-full w-12 lg:w-32 z-10"
        style={{
          background: "linear-gradient(to right, #ffffffb7 15%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-12 lg:w-32 z-10"
        style={{
          background: "linear-gradient(to left, #ffffffb7 15%, transparent 100%)",
        }}
      />
        <div className="flex gap-8 animate-client-slider-reverse w-max ">
          {sliderCardsTwo.map((client, idx) => (
            <div
              key={idx}
            >
              <Image
                src={client.image}
                alt={client.alt}
                width={148}
                height={44}
                className="w-20 h-8 md:w-28 md:h-10 lg:w-36 lg:h-11 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
