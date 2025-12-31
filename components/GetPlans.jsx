import Image from "next/image";

export default function GetPlans() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32 mb-8">
      <div className="flex flex-col  w-11/12 mx-auto py-3 flex-1">
        <div className="bg-[#f7f9fb] border border-[#d1d5db] rounded-full flex items-center justify-center gap-1 w-28 py-1 px-3 mb-4">
          <Image
            src="/icons/lightning.png"
            alt="feature icon 1"
            width={17}
            height={17}
            className="object-contain"
          />
          <p className="text-[12px] lg:text-[14px] text-[#373A46]">You Get</p>
        </div>
        <div>
          <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
            What every plan gets you
          </h3>
        </div>
      </div>
    {/* cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="get-plans-card px-4 py-5 md:px-5 md:py-7">
          <div className="why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2 mb-10">
            <Image
              src="/icons/cart.png"
              alt="product icon"
              width={48}
              height={48}
              className="object-contain p-2"
            />
          </div>
          <h3 className="text-base text-[#101828] font-semibold mb-4">
            Obiram Easy Checkout
          </h3>
          <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
            Obiram Easy Checkout helps customers complete purchases faster with
            fewer steps.
          </p>
        </div>

        <div className="get-plans-card px-4 py-5 md:px-5 md:py-7">
          <div className="why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2 mb-10">
            <Image
              src="/icons/financial_across.png"
              alt="product icon"
              width={48}
              height={48}
              className="object-contain p-2"
            />
          </div>
          <h3 className="text-base text-[#101828] font-semibold mb-4">
            Sell Across Multiple Channels
          </h3>
          <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
            Sell across multiple channels and reach more customers from one
            platform.
          </p>
        </div>

        <div className="get-plans-card px-4 py-5 md:px-5 md:py-7">
          <div className="why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2 mb-10">
            <Image
              src="/icons/data-analytics.png"
              alt="product icon"
              width={48}
              height={48}
              className="object-contain p-2"
            />
          </div>
          <h3 className="text-base text-[#101828] font-semibold mb-4">
            Detailed Analytics
          </h3>
          <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
            Detailed analytics help you understand sales performance and
            customer behavior.
          </p>
        </div>

        <div className="get-plans-card px-4 py-5 md:px-5 md:py-7">
          <div className="why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2 mb-10">
            <Image
              src="/icons/apps.png"
              alt="product icon"
              width={48}
              height={48}
              className="object-contain p-2"
            />
          </div>
          <h3 className="text-base text-[#101828] font-semibold mb-4">
            Obiram Apps
          </h3>
          <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
            Obiram Apps & Integrations extend your store with essential tools to
            support daily operations.
          </p>
        </div>

        <div className="get-plans-card px-4 py-5 md:px-5 md:py-7">
          <div className="why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2 mb-10">
            <Image
              src="/icons/themes.png"
              alt="product icon"
              width={48}
              height={48}
              className="object-contain p-2"
            />
          </div>
          <h3 className="text-base text-[#101828] font-semibold mb-4">
            Obiram Themes
          </h3>
          <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
            Obiram Themes let you design a professional store without design or
            coding skills.
          </p>
        </div>
      </div>
    </section>
  );
}
