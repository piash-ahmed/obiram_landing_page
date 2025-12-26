import Image from "next/image";

export default function Testimonials() {
  const clientsFistRow = [
    {
      name: "Kalle Hahn",
      title: "Co-Founder & CEO",
      desc: `As a React dev. I was skeptical, But the code  it generates is clean, readable and instantly usable, I use it daily now`,
      logo: "/images/catalog.png",
      author: "/images/testimonials-client-1.png",
    },
    {
      name: "Michael Uibel MD",
      title: "Co-Founder & CEO",
      desc: `As a React dev. I was skeptical, But the code it generates is clean, readable and instantly usable, I use it daily now`,
      logo: "/images/strapi.png",
      author: "/images/testimonials-client-2.png",
    },
    {
      name: "Kalle Hahn",
      title: "Co-Founder & CEO",
      desc: `As a React dev. I was skeptical, But the code  it generates is clean, readable and instantly usable, I use it daily now`,
      logo: "/images/layers.png",
      author: "/images/testimonials-client-1.png",
    },
  ];

  const clientsSecondRow = [
    {
      name: "Kalle Hahn",
      title: "Co-Founder & CEO",
      desc: `As a React dev. I was skeptical, But the
            code it generates is clean, readable and instantly usable, I use it daily now`,
      logo: "/images/catalog.png",
      author: "/images/testimonials-client-1.png",
    },
    {
      name: "Michael Uibel MD",
      title: "Co-Founder & CEO",
      desc: `As a React dev. I was skeptical, But the
            code it generates is clean, readable and instantly usable, I use it daily now`,
      logo: "/images/strapi.png",
      author: "/images/testimonials-client-2.png",
    },
    {
      name: "Kalle Hahn",
      title: "Co-Founder & CEO",
      desc: `As a React dev. I was skeptical, But the
            code it generates is clean, readable and instantly usable, I use it daily now`,
      logo: "/images/layers.png",
      author: "/images/testimonials-client-1.png",
    },
  ];

  const sliderCardsOne = [...clientsFistRow, ...clientsFistRow];
  const sliderCardsTwo = [...clientsSecondRow, ...clientsSecondRow];

  return (
    <section className="mb-10">
      <div className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 lg:mt-40 w-11/12 mx-auto py-3">
        <div className="bg-[#f7f9fb] border border-[#d1d5db] rounded-full flex items-center gap-1 w-48 py-1 px-3 mb-4">
          <Image
            src="/icons/lightning.png"
            alt="feature icon 1"
            width={17}
            height={17}
            className="object-contain"
          />
          <p className="text-[12px] lg:text-[14px] text-[#373A46]">
            Real Testimonials
          </p>
        </div>
        <div>
          <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
            Trusted by Growing Merchants
          </h3>
        </div>
      </div>

      {/* Slider 1 */}
      <div className="overflow-hidden mt-12 relative">
        <div className="flex gap-6 animate-client-slider w-max">
          {sliderCardsOne.map((client, idx) => (
            <div
              key={idx}
              className="testimonial-card py-4 px-6 md:py-5 md:px-8 flex flex-col items-start w-[300px] md:w-[360px] lg:w-[420px] h-[222px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={87}
                height={74}
                className="h-16 w-20 mb-4 object-contain"
              />
              <p
                className="text-sm lg:text-base text-[#00000099] font-inter mb-5 leading-[140%]"
                style={{ whiteSpace: "pre-line" }}
              >
                {client.desc}
              </p>

              <div className="flex gap-3 items-center">
                <Image
                  src={client.author}
                  alt={client.name}
                  width={24}
                  height={24}
                  className="h-11 w-11 rounded-lg object-contain"
                />
                <div className="">
                  <h5 className="text-sm md:text-base text-black font-medium">
                    {client.name}
                  </h5>
                  <p className="text-[#808080d0]">{client.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Slider 2 */}
      <div className="overflow-hidden mt-3 relative">
        <div className="flex gap-6 animate-client-slider-reverse w-max">
          {sliderCardsOne.map((client, idx) => (
            <div
              key={idx}
              className="testimonial-card py-4 px-6 md:py-5 md:px-8 flex flex-col items-start w-[300px] md:w-[360px] lg:w-[420px] h-[222px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={87}
                height={74}
                className="h-16 w-20 mb-4 object-contain"
              />
              <p
                className="text-sm lg:text-base text-[#00000099] font-inter mb-5 leading-[140%]"
                style={{ whiteSpace: "pre-line" }}
              >
                {client.desc}
              </p>

              <div className="flex gap-3 items-center">
                <Image
                  src={client.author}
                  alt={client.name}
                  width={24}
                  height={24}
                  className="h-11 w-11 rounded-lg object-contain"
                />
                <div className="">
                  <h5 className="text-sm md:text-base text-black font-medium">
                    {client.name}
                  </h5>
                  <p className="text-[#808080d0]">{client.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 md:p-4 lg:p-6 mt-4">
        <div className="text-center px-4 py-6 bellow-testimonials-card">
            <h3 className="text-[20px] text-black font-medium mb-3">Fast Store Setup</h3>
            <p className="text-[#373A46] text-[14px] md:text-base font-light w-10/12 mx-auto opacity-[0.8]">Launch quickly with a streamlined setup designed to save time and effort.</p>
         </div>
         <div className="text-center px-4 py-6 bellow-testimonials-card">
            <h3 className="text-[20px] text-black font-medium mb-3">Reliable Performance</h3>
            <p className="text-[#373A46] text-[14px] md:text-base font-light w-10/12 mx-auto opacity-[0.8]">Built to stay fast, secure, and available for daily business operations.</p>
         </div>
         
         <div className="text-center px-4 py-6 bellow-testimonials-card">
            <h3 className="text-[20px] text-black font-medium mb-3">Always-On Support</h3>
            <p className="text-[#373A46] text-[14px] md:text-base font-light w-10/12 mx-auto opacity-[0.8]">Get real human support whenever your business needs help.</p>
         </div>
         
      </div>
    </section>
  );
}
