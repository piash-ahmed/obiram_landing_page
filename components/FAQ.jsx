import Image from "next/image";

export default function FAQ() {
  return (
    <section className="mt-28 md:mt-32 lg:mt-40 mb-5 flex flex-col lg:flex-row items-start justify-center gap-10 w-11/12 mx-auto">
      {/* Left */}
      <div className="lg:w-[45%]">
        <div className="flex flex-col  w-11/12 mx-auto py-3 flex-1">
          <div className="bg-[#f7f9fb] border border-[#d1d5db] rounded-full flex items-center justify-center gap-1 w-28 py-1 px-3 mb-4">
            <Image
              src="/icons/lightning.png"
              alt="feature icon 1"
              width={17}
              height={17}
              className="object-contain"
            />
            <p className="text-[12px] lg:text-[14px] text-[#373A46]">FAQ</p>
          </div>
          <div>
            <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
              Frequently Asked Questions
            </h3>
          </div>
        </div>

        <div className="get-plans-card px-4 py-5 md:px-5 md:py-7 max-w-[452px] mt-6 ml-1 lg:ml-6">
          <h3 className="text-base md:text-lg lg:text-xl text-[#101828] font-semibold mb-4">
            Still have questions?
          </h3>
          <p className="text-[#373A46] text-[12px] md:text-[14px] lg:text-base leading-[140%] opacity-[0.8] font-light w-11/12 mb-10">
            We’re here to assist with anything unique to your business. Tell us
            what you need, and our team will guide you step-by-step.
          </p>
          <button className="button-orange py-[10px] px-8 text-white rounded-lg text-[12px] font-semibold flex items-center">
            Send a Massage
            <Image
              src="/icons/arrow-right-white.png"
              alt="right arrow"
              width={16}
              height={9}
              className="inline-block ml-2"
            />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="lg:w-[55%] space-y-4">
        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            How does Obiram help my business?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>

        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            Does Obiram help me manage daily operations?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>

        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            Who is Obiram best for?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>

        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            Does Obiram reduce complexity for business owners?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>

        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            How much does Obiram cost?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>

        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            How much does Obiram cost?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>

        <div className="faq-card collapse collapse-arrow p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-medium text-[#222] text-[18px] md:text-[20px]">
            Are there any hidden fees?
          </div>
          <div className="collapse-content text-[#475467] text-[14px] font-normal">
            Obiram gives you a simple, clear way to launch your online business
            without technical complexity. You can set up your store, add
            products, and start selling-without needing design or development
            skills.
          </div>
        </div>
      </div>
    </section>
  );
}
