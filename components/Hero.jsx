import Image from "next/image";
import Button from "./Button";
import ButtonTransparent from "./ButtonTransparent";

export default function Hero() {
  return (
    <section className="text-white py-16 px-8 flex flex-col items-start w-11/12 mx-auto gap-6 items-center text-center">
        <div className="hero-trust">
            <Image src="/icons/magic-star.png" alt="hero image" width={24} height={24} />
            <p className="text-[14px] leading-[140%]">Trusted by 5,000+ entrepreneurs building their online business</p>
        </div>
        <div className="">
            <h1 className="text-[60px] leading-[120%] tracking-[-1.2px]">
                Build, Run & Grow Your 
              <span className="font-instrument leading-[100%] tracking-[-2px] italic ml-3">Online Store.</span>
            </h1>
            <h1 className="text-[60px] leading-[120%] tracking-[-1.2px]">The All-in-One Commerce Platform</h1>
            <p className="text-[18px] text-[#fedad0] leading-[140%] font-light w-[650px] mx-auto my-6">Obiram is One Platform to build, run, and grow your commerce business—without limits. Built for fast‑growing eCommerce & D2C Brands</p>
        </div>
        <div className="flex">
            <Button value="Get Started for Free" />
            <ButtonTransparent value="Why we build Obiram" />
        </div>
    </section>
  );
}