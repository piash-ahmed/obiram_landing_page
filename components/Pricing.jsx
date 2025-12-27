import Image from "next/image";

export default function Pricing() {
  return (
    <section className="w-11/12 mx-auto mt-24 md:mt-32 lg:mt-40">
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-center mb-8">
        <div className="flex flex-col  w-11/12 mx-auto py-3 flex-1">
          <div className="bg-[#f7f9fb] border border-[#d1d5db] rounded-full flex items-center justify-center gap-1 w-24 py-1 px-3 mb-4">
            <Image
              src="/icons/lightning.png"
              alt="feature icon 1"
              width={17}
              height={17}
              className="object-contain"
            />
            <p className="text-[12px] lg:text-[14px] text-[#373A46]">Pricing</p>
          </div>
          <div>
            <h3 className="text-[#191715] text-[28px] md:text-[40px] lg:text-[48px] tracking-[-0.96px] leading-[120%]">
              Simple, Transparent Pricing for Every Business
            </h3>
          </div>
        </div>
        <div className="price-card flex items-center justify-end gap-3 w-[40%] text-right relative right-10">
          <button className="monthly-btn">Monthly</button>
          <p className="text-[16px] md:text-[18px] font-normal">
            Annually{" "}
            <span className="text-[14px] md:text-[16px] text-[#FC6C41] font-light">
              Save 40%
            </span>
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-6 md:mb-8 lg:mb-10">
        {/* Card 1 */}
        <div className="card card-one h-[927px]">
          <div className="p-8 card-top h-[418px]">
            <div className="why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-2 mb-5">
              <Image
                src="/icons/rocket.png"
                alt="product icon"
                width={48}
                height={48}
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-medium mb-3">Launch</h2>
              <p className="text-[#000000B3] text-[14px] mb-4">
                Perfect for beginners launching their first online store.
              </p>
              <hr />
              <div className="flex items-center mt-4">
                <span className="text-[#101828] text-lg font-medium relative -top-2 mr-1">
                  ৳
                </span>
                <span className="text-[#101828] text-4xl font-medium mr-2">
                  1,990
                </span>
                <span className="text-[#344054] text-lg font-medium relative top-1 mr-2">
                  /mo
                </span>
                <span className="text-[#6B7280] text-sm md:text-base font-normal line-through relative top-1">
                  ৳2500
                </span>
              </div>
              <p className="text-[#6B7280] text-[14px] font-normal mt-2">
                with annual commitment
              </p>
            </div>

            <div className="mt-6">
              <button className="btn bg-[#FB4712] text-white text-sm font-normal rounded-full btn-block hover:bg-[#ff8800]">
                Try for Free
              </button>
            </div>
          </div>
          <div className="pl-5 pt-1 pb-6 ">
            <h5 className="text-sm md:text-base text-black font-medium mt-4">
              All Launch benefits:
            </h5>
            <ul className="mt-6 flex flex-col gap-2 space-y-2">
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Online Store
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Unlimited Products
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Inventory Management
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Orders & Customer Management
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Payment & Shipping
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Store Customization
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Marketing & Promotions
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Custom Domain
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Analytics & Reporting
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Community Support & Resources
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card-two h-[927px]">
          <div className="p-8 bg-[#0000000A] rounded-[28px] h-[418px]">
            <div className="card-two-logo-border w-16 h-16 md:w-20 md:h-20 lg:w-[66px] lg:h-[66px]">
              <div className="card-two-logo relative top-[0.5px] left-[0.6px] w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-0">
                <Image
                  src="/icons/grow.png"
                  alt="grow icon"
                  width={48}
                  height={48}
                  className="object-contain p-1"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-medium mt-4 mb-4">Grow</h2>
              <p className="text-[#000000B3] text-[14px] mb-4">
                Ideal for growing businesses that need more tools to scale.
              </p>
              <hr />
              <h1 className="text-[#101828] text-3xl font-semibold mt-5">
                Coming Soon!
              </h1>
              <p className="text-[#6B7280] text-[14px] font-normal mt-2">
                with annual commitment
              </p>
            </div>

            <div className="mt-6">
              <button className="btn bg-white border border-[#00000033] text-black  text-sm font-normal rounded-full btn-block hover:bg-[#FB4712]">
                Try for Free
                <Image
                  src="/images/arrow-right.png"
                  alt="right arrow"
                  width={9}
                  height={9}
                  className="inline-block ml-1"
                />
              </button>
            </div>
          </div>
          <div className="pl-5 pt-1 pb-6">
            <h5 className="text-sm md:text-base text-black font-medium mt-4">
              All Grow benefits:
            </h5>
            <ul className="mt-6 flex flex-col gap-2 space-y-2">
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Everything in Starter, plus:
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Multi Staff & User Accounts
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Advanced Analytics & Reporting
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Priority Support
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card card-two h-[927px]">
          <div className="p-8 bg-[#0000000A] rounded-[28px] h-[418px]">
            <div className="card-two-logo-border w-16 h-16 md:w-20 md:h-20 lg:w-[66px] lg:h-[66px]">
              <div className="card-two-logo relative top-[0.5px] left-[0.6px] w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16  flex items-center justify-center rounded-xl p-2 md:p-1 lg:p-0">
                <Image
                  src="/icons/crown.png"
                  alt="crown icon"
                  width={48}
                  height={48}
                  className="object-contain p-1"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-medium mt-4 mb-4">Enterprise</h2>
              <p className="text-[#000000B3] text-[14px] mb-4">
                Designed for brands that need full power, automation, and
                scalability.
              </p>
              <hr />
              <h1 className="text-[#101828] text-3xl font-semibold mt-5">
                Custom Pricing
              </h1>
            </div>

            <div className="mt-14">
              <button className="btn bg-white border border-[#00000033] text-black  text-sm font-normal rounded-full btn-block hover:bg-[#FB4712]">
                Try for Free
                <Image
                  src="/images/arrow-right.png"
                  alt="right arrow"
                  width={9}
                  height={9}
                  className="inline-block ml-1"
                />
              </button>
            </div>
          </div>
          <div className="pl-5 pt-1 pb-6">
            <h5 className="text-sm md:text-base text-black font-medium mt-4">
              All Enterprise benefits:
            </h5>
            <ul className="mt-6 flex flex-col gap-2 space-y-2">
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Everything in Grow Plan, plus:
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Flexible Pricing
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/check-circle.png"
                  alt="check icon"
                  width={18}
                  height={18}
                />
                <span className="text-[#000000E6] text-sm md:text-base">
                  Dedicated Support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-[#373A46] text-sm md:text-base font-light text-center md:text-left opacity-[0.8] mb-6">
        Choose the plan that fits your growth. No hidden fees. No long-term
        contracts. Every plan includes a 7-day free trial.
      </p>
    </section>
  );
}
