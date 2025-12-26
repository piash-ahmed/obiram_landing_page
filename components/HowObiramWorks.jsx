import Image from "next/image";

export default function HowObiramWorks() {
  return (
    <section>
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
            How Obiram Works
          </p>
        </div>
        <div>
          <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
            Start Selling Online in 3 Simple Steps
          </h3>
          <p className="text-[#373A46] text-[14px] md:text-[18px] font-light w-8/12 md:w-7/12 mx-auto mt-4 opacity-[0.8] leading-[140%]">
            Obiram makes it easy to build, manage, and grow your business in a
            few minutes, without worrying about the technical side.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-16 py-4 w-11/12 mx-auto">
        <div className="how-obiram-works-card flex flex-col px-3 p-4 rounded-xl overflow-hidden">
          <div className="flex justify-between pt-4">
            <div className="bg-[#fff6f3] w-20 h-20  flex items-center justify-center ml-3 rounded-lg">
              <Image
                src="/icons/store.png"
                alt="store icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h1 className="font-outfit text-[121px] text-[#FFEDE7] font-bold relative -top-[87px] opacity-[0.8]">
                1
              </h1>
            </div>
          </div>
          <h3 className="text-[#191715] text-[20px] md:text-[24px] font-normal pl-2">
            Create Your Store
          </h3>
          <p className="text-[#373A46] text-[12px] md:text-[16px] font-light mt-4 opacity-[0.8] leading-[140%] px-1 pb-3">
            Set up your online store in minutes with ready-made themes and an
            intuitive builder. No coding, no complexity just pure simplicity.
          </p>
        </div>

        <div className="how-obiram-works-card flex flex-col px-3 p-4 rounded-xl overflow-hidden">
          <div className="flex justify-between pt-4">
            <div className="bg-[#fff6f3] w-20 h-20  flex items-center justify-center ml-3 rounded-lg">
              <Image
                src="/icons/product.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h1 className="font-outfit text-[121px] text-[#FFEDE7] font-bold relative -top-[87px] opacity-[0.8]">
                2
              </h1>
            </div>
          </div>
          <h3 className="text-[#191715] text-[20px] md:text-[24px] font-normal pl-2">
            Add Products & Setup
          </h3>
          <p className="text-[#373A46] text-[12px] md:text-[16px] font-light mt-4 opacity-[0.8] leading-[140%] px-1 pb-3">
            Upload products, set prices, and design your brand experience.
            Customize layouts, colors, and pages to match your business
            identity.
          </p>
        </div>

        <div className="how-obiram-works-card flex flex-col px-3 p-4 rounded-xl overflow-hidden">
          <div className="flex justify-between pt-4">
            <div className="bg-[#fff6f3] w-20 h-20  flex items-center justify-center ml-3 rounded-lg">
              <Image
                src="/icons/launch.png"
                alt="launch icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h1 className="font-outfit text-[121px] text-[#FFEDE7] font-bold relative -top-[90px] opacity-[0.8]">
                3
              </h1>
            </div>
          </div>
          <h3 className="text-[#191715] text-[20px] md:text-[24px] font-normal pl-2">
            Launch & Start Selling
          </h3>
          <p className="text-[#373A46] text-[12px] md:text-[16px] font-light mt-4 opacity-[0.8] leading-[140%] px-1 pb-3">
            Publish your store, share your link, and go live. Obiram gives you
            built-in marketing tools to help you attract customers and grow.
          </p>
        </div>
      </div>
    </section>
  );
}
