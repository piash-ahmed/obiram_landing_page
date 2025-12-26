import Image from "next/image";
import Button from "./Button";

export default function WhyObiram() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-11/12 mx-auto">
      <div className="flex flex-col mt-24 md:mt-32 lg:mt-40 w-11/12 mx-auto py-3 flex-1">
        <div className="bg-[#f7f9fb] border border-[#d1d5db] rounded-full flex items-center gap-1 w-36 py-1 px-3 mb-4">
          <Image
            src="/icons/lightning.png"
            alt="feature icon 1"
            width={17}
            height={17}
            className="object-contain"
          />
          <p className="text-[14px] text-[#373A46]">Why Obiram</p>
        </div>
        <div>
          <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
            A Better Way to Build and Grow Your Online Business
          </h3>
          <p className="text-[#373A46] text-[14px] md:text-[18px] font-light  md:w-9/12 lg:w-11/12 my-4 md:pr-5 opacity-[0.8] leading-[140%]">
            Obiram combines simplicity, speed, and powerful features to give you
            everything you need — all in one seamless platform.
          </p>
          <Button value="Start for Free" />
        </div>
      </div>

      <div className="  flex-1 bg-[#ffe2e2] rounded-xl relative top-20">
        <div
          className="space-y-4 bg-cover bg-no-repeat z-10 p-10 pr-0 pb-4"
          style={{ backgroundImage: "url('/images/why-obiram-bg.png')" }}
        >
          <div className="flex items-center gap-5 rounded[17px] bg-white p-4 rounded-s-2xl">
            <div className="why-obiram-icon w-36 h-16 md:w-24 md:h-20 lg:w-20 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2">
              <Image
                src="/icons/why-obiram-icon-1.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-[#1f1f1f] text-[16px] lg:text-[20px] leading-[140%] font-[500]">
                Fast & Easy Store Setup
              </h3>
              <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
                Launch your store in minutes with intuitive tools, pre-built
                templates, and zero coding required.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded[17px] bg-white p-4 rounded-s-2xl">
            <div className="why-obiram-icon w-36 h-16 md:w-24 md:h-20 lg:w-20 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2">
              <Image
                src="/icons/why-obiram-icon-2.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-[#1f1f1f] text-[16px] lg:text-[20px] leading-[140%] font-[500]">
                Built for Business Growth
              </h3>
              <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
                From marketing tools to analytics and automation, Obiram helps
                you scale your business, not just start it.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded[17px] bg-white p-4 rounded-s-2xl">
            <div className="why-obiram-icon w-36 h-16 md:w-24 md:h-20 lg:w-20 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2">
              <Image
                src="/icons/why-obiram-icon-3.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-[#1f1f1f] text-[16px] lg:text-[20px] leading-[140%] font-[500]">
                Local Payment Power
              </h3>
              <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
                Accept bKash, Nagad, Rocket, cards, and international methods
                effortlessly — all highly optimized for Bangladesh.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded[17px] bg-white p-4 rounded-s-2xl">
            <div className="why-obiram-icon w-36 h-16 md:w-24 md:h-20 lg:w-20 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2">
              <Image
                src="/icons/why-obiram-icon-4.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-[#1f1f1f] text-[16px] lg:text-[20px] leading-[140%] font-[500]">
                Flexible & Transparent Pricing
              </h3>
              <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
                No hidden fees, no complexity. Just clear, honest pricing
                designed for growing entrepreneurs.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 rounded[17px] bg-white p-4 rounded-s-2xl">
            <div className="why-obiram-icon w-36 h-16 md:w-24 md:h-20 lg:w-20 lg:h-14  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2">
              <Image
                src="/icons/why-obiram-icon-5.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-[#1f1f1f] text-[16px] lg:text-[20px] leading-[140%] font-[500]">
                Secured and Reliable
              </h3>
              <p className="text-[#C2C2C2] text-[12px] md:text-[14px] leading-[140%] font-light">
                Built to protect your business data and ensure smooth,
                uninterrupted daily operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
