import Image from "next/image";

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 lg:mt-40 w-11/12 mx-auto py-3">
      <div className="bg-[#f7f9fb] border border-[#d1d5db] rounded-full flex items-center gap-1 w-36 py-1 px-3 mb-4">
        <Image
          src="/icons/lightning.png"
          alt="feature icon 1"
          width={17}
          height={17}
          className="object-contain"
        />
        <p className="text-[14px] text-[#373A46]">Core Features</p>
      </div>
      <div>
        <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
          Everything Your Business Needs - All in One Place
        </h3>
        <p className="text-[#373A46] text-[14px] md:text-[18px] font-light w-8/12 md:w-7/12 mx-auto mt-4 opacity-[0.8] leading-[140%]">
          Obiram gives you everything you need to launch, manage, and scale your
          online store faster, easier, and smarter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16 py-10">
        <div className="bg-[#F7F9FB] border border-[#DADDE4] rounded-2xl px-6 pt-8">
          <div>
            <h3 className="text-[#191715] text-[22px] text-left leading-[120%] font-normal">
              Easy Inventory & Order Management
            </h3>
            <p className="text-[#373A46] text-[12px] md:text-[16px] text-left font-light mt-4 mb-10 opacity-[0.8] leading-[140%]">
              Add products, manage variants, set pricing, and organize
              categories through a clean, intuitive interface.
            </p>
          </div>
          <div>
            <Image
              src="/images/feature-1.png"
              alt="feature image 1"
              width={500}
              height={300}
              className="mt-8 rounded-lg object-contain w-[500px] h-auto"
            />
          </div>
        </div>
        <div className="bg-[#F7F9FB] border border-[#DADDE4] rounded-2xl px-6 pt-8">
          <div>
            <h3 className="text-[#191715] text-[22px] text-left leading-[120%] font-normal">
              Analytics & Insights Manage
            </h3>
            <p className="text-[#373A46] text-[12px] md:text-[16px] text-left font-light mt-4 mb-10 opacity-[0.8] leading-[140%]">
              Track sales, customer behavior, traffic sources, and performance
              insights to make smarter business decisions.
            </p>
          </div>
          <div>
            <Image
              src="/images/feature-2.png"
              alt="feature image 1"
              width={500}
              height={300}
              className="mt-8 rounded-lg object-contain w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-[#F7F9FB] border border-[#DADDE4] rounded-2xl px-6 pt-8 flex flex-col justify-between bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/images/feature-card-bg.png')" }}
        >
          <div>
            <h3 className="text-[#191715] text-[22px] text-left leading-[120%] font-normal">
              Store Builder & Customize
            </h3>
            <p className="text-[#373A46] text-[12px] md:text-[16px] text-left font-light mt-4 mb-10 opacity-[0.8] leading-[140%]">
              Customize layouts, colors, and components with a simple
              drag-and-drop editor no coding needed.
            </p>
          </div>
          <div className="w-[280px] h-[130px] md:w-[300px] md:h-[200px] lg:w-[325px] lg:h-[285px] lg:-mb-[23px]">
            <Image
              src="/images/feature-3.png"
              alt="feature image 1"
              width={328}
              height={308}
              className="w-full h-full object-contain lg:p-5"
            />
          </div>
        </div>
        <div
          className="bg-[#F7F9FB] border border-[#DADDE4] rounded-2xl px-6 pt-8 flex flex-col justify-between bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/images/feature-card-bg.png')" }}
        >
          <div>
            <h3 className="text-[#191715] text-[22px] text-left leading-[120%] font-normal">
              Secure Payments
            </h3>
            <p className="text-[#373A46] text-[12px] md:text-[16px] text-left font-light mt-4 mb-10 opacity-[0.8] leading-[140%]">
              Built-in support for bKash, Nagad, card payments, and
              international gateways with bank-level security.
            </p>
          </div>
          <div className="w-[280px] h-[130px] md:w-[300px] md:h-[200px] lg:w-[325px] lg:h-[285px] lg:-mb-[23px]">
            <Image
              src="/images/feature-4.png"
              alt="feature image 1"
              width={328}
              height={308}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div
          className="bg-[#F7F9FB] border border-[#DADDE4] rounded-2xl px-6 pt-8 flex flex-col justify-between bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/images/feature-card-bg.png')" }}
        >
          <div>
            <h3 className="text-[#191715] text-[22px] text-left leading-[120%] font-normal">
              Looks Great Every Screen
            </h3>
            <p className="text-[#373A46] text-[12px] md:text-[16px] text-left font-light mt-4 mb-10 opacity-[0.8] leading-[140%]">
              Add products, manage variants, set pricing, and organize
              categories through a clean, intuitive interface.
            </p>
          </div>
          <div className="w-[280px] h-[130px] md:w-[300px] md:h-[200px] lg:w-[325px] lg:h-[285px] lg:-mb-[23px]">
            <Image
              src="/images/feature-5.png"
              alt="feature image 1"
              width={328}
              height={308}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
