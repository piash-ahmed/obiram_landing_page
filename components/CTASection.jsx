import Button from "./Button";
import Dashboard from "./Dashboard";
import RippleButton from "./RippleButton";

export default function CTASection() {
  return (
    <>
      <section
        className="bg-cover bg-top bg-no-repeat w-11/12 mx-auto mt-24 md:mt-40 pt-12 md:pt-16 pb-28 md:pb-52 lg:pb-80 rounded-3xl"
        style={{ backgroundImage: "url('/images/cta-banner.png')" }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-white text-center font-normal leading-[140%] tracking-[-0.96px] w-10/12 mx-auto mb-7">
            Everything you need to sell online-locally and globally, in one
            powerful platform.
          </h1>
          <p className="text-[#FFFFFFCC] text-sm md:text-base lg:text-lg text-center font-light leading-[140%]  w-10/12 md:w-9/12 lg:w-8/12 mx-auto mb-8">
            Whether you’re building your store, managing inventory, or serving
            customers, Obiram brings everything together in one powerful
            platform.
          </p>
          <RippleButton className="button py-[9px] px-5 text-black flex items-center gap-2 text-[12px] font-semibold">
            Get Started for Free
          </RippleButton>
        </div>
      </section>
      <div className="relative -top-20 md:-top-40 lg:-top-64">
        <Dashboard />
      </div>
    </>
  );
}
