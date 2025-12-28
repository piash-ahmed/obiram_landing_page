import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-white bg-cover bg-top bg-no-repeat pt-6 md:pt-10"
      style={{ backgroundImage: "url('/images/footer-bg.png')" }}
    >
      <section className="flex flex-col lg:flex-row justify-center gap-2 py-10 px-6 md:px-0 lg:py-10 font-light w-11/12 mx-auto">
        <aside className="lg:w-[40%]">
          <div className="flex">
            <a className="btn bg-transparent shadow-none border-0 hover:bg-transparent mb-3 p-0">
              <Image
                src="/images/main-logo.png"
                alt="logo"
                width={38}
                height={158}
                className="w-10 md:w-12 h-auto"
              />
              <Image
                src="/images/obiram.png"
                alt="obiram"
                width={113}
                height={24}
                className="w-24 md:w-32 h-auto"
              />
            </a>
          </div>
          <p className="text-sm lg:text-base text-white leading-[140%] mt-3">
            Build, Run & Grow Your Online Store, The All-in-One Commerce
            Platform.
          </p>
          <div className="flex gap-2 mt-8 md:mt-10">
            <a className="social-icon rounded-3xl p-2" href="#">
              <Image
                src="/icons/facebook.png"
                alt="facebook"
                width={113}
                height={24}
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
            </a>
            <a className="social-icon rounded-3xl p-2" href="#">
              <Image
                src="/icons/twitter.png"
                alt="twitter"
                width={113}
                height={24}
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
            </a>
            <a className="social-icon rounded-3xl p-2" href="#">
              <Image
                src="/icons/linkdin.png"
                alt="linkdin"
                width={113}
                height={24}
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
            </a>
            <a className="social-icon rounded-3xl p-2" href="#">
              <Image
                src="/icons/instagram.png"
                alt="instagram"
                width={113}
                height={24}
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
            </a>
          </div>
        </aside>
        <div className="lg:w-[60%] flex flex-col lg:flex-row gap-6">
          <nav className="space-y-1.5 flex flex-col">
            <h6 className="text-[#ffffffb3] text-base md:text-lg uppercase font-normal mb-1 md:mb-4">
              Obiram
            </h6>
            <a href="#" className="link link-hover text-sm ">
              Home
            </a>
            <a href="#" className="link link-hover text-sm">
              Pricing
            </a>
            <a href="#" className="link link-hover text-sm">
              Why Obiram
            </a>
          </nav>
          <nav className="space-y-1.5 flex flex-col">
            <h6 className="text-[#ffffffb3] text-base md:text-lg uppercase font-normal mb-1 md:mb-4">
              Resources
            </h6>
            <a href="#" className="link link-hover text-sm">
              Community
            </a>
            <a href="#" className="link link-hover text-sm">
              Videos
            </a>
          </nav>
          <nav className="space-y-1.5 flex flex-col">
            <h6 className="text-[#ffffffb3] text-base md:text-lg uppercase font-normal mb-1 md:mb-4">
              Company
            </h6>
            <a href="#" className="link link-hover text-sm">
              Terms of Service
            </a>
            <Link
              href="/terms_&_conditions"
              className="link link-hover text-sm"
            >
              Privacy Policy
            </Link>
            <a href="#" className="link link-hover text-sm">
              Return and Refund Policy
            </a>
          </nav>
          <nav className="space-y-3 flex flex-col">
            <h6 className="text-[#ffffffb3] text-base md:text-lg uppercase font-normal mb-1 md:mb-4">
              Contact
            </h6>
            <a className="link link-hover text-sm flex items-center gap-2 font-light text-white">
              <Image
                src="/icons/whatsapp.png"
                alt="facebook"
                width={113}
                height={24}
                className="w-5 h-5 object-contain mr-1"
              />
              +44 7365 633826
            </a>
            <a className="link link-hover text-sm flex items-center gap-2 font-light text-white">
              <Image
                src="/icons/mail.png"
                alt="facebook"
                width={113}
                height={24}
                className="w-5 h-5 object-contain mr-1"
              />
              support@nextupglobal.net
            </a>
            <a className="link link-hover text-sm flex items-center font-light text-white relative -left-1">
              <Image
                src="/icons/location.png"
                alt="facebook"
                width={113}
                height={24}
                className="w-7 h-7 object-contain mr-1"
              />
              40 Penarth Road, Cardiff, Wales, <br /> CF10 5GP, United Kingdom
            </a>
          </nav>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto pb-8">
        <div className="  flex flex-col lg:flex-row items-center justify-between gap-4 p-6">
          <p className="text-xs text-center md:text-sm  font-light">
            2025 Obiram © All rights reserved | Powered By Nextup Global Ltd
          </p>
        </div>
        <div className="footer-bd flex items-center text-xs md:text-sm font-medium gap-2 py-1 px-3 md:py-3 md:px-5">
          <span>Made In Bangladesh</span>
          <Image
            src="/images/bd-flag.png"
            alt="facebook"
            width={113}
            height={24}
            className="w-5 h-5 md:w-6 md:h-6 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
