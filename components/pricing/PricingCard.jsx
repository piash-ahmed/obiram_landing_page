import Image from "next/image";
import { motion } from "framer-motion";

export default function PricingCard({ plan }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`card ${
        plan.type === "launch" ? "card-one" : "card-two"
      } h-[927px]`}
    >
      {/* TOP SECTION */}
      <div
        className={`p-8 ${
          plan.type === "launch"
            ? "card-top"
            : "bg-[#0000000A] rounded-[28px]"
        } h-[418px]`}
      >
        {/* ICON */}
        <div
          className={`${
            plan.type === "launch"
              ? "why-obiram-icon w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl p-2 mb-5"
              : "card-two-logo-border w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl p-2 bg-transparent mb-5"
          }`}
        >
          <div
            className={`${
              plan.type === "launch"
                ? ""
                : "card-two-logo w-full h-full flex items-center justify-center"
            }`}
          >
            <Image
              src={plan.icon}
              alt="icon"
              width={48}
              height={48}
              className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>


        {/* TITLE & DESCRIPTION */}
        <h2 className="text-2xl font-medium mb-3">{plan.title}</h2>
        <p className="text-[#000000B3] text-[14px] mb-4">{plan.desc}</p>
        <hr />

        {/* PRICE / COMING / CUSTOM */}
        {plan.price && (
          <>
            <div className="flex items-center mt-4">
              <span className="text-lg relative -top-2 mr-1">৳</span>
              <span className="text-4xl font-medium mr-2">{plan.price}</span>
              <span className="text-lg relative top-1 mr-2">{plan.duration}</span>
              {plan.oldPrice && (
                <span className="text-sm line-through relative top-1">
                  ৳{plan.oldPrice}
                </span>
              )}
            </div>
            <p className="text-[#6B7280] text-[14px] mt-2">{plan.note}</p>
          </>
        )}

        {plan.coming && (
          <h1 className="text-3xl font-semibold mt-5">Coming Soon!</h1>
        )}

        {plan.custom && (
          <h1 className="text-3xl font-semibold mt-5">Custom Pricing</h1>
        )}

        {/* TRY BUTTON */}
        <div className="mt-6">
          <button className={`btn bg-[#FB4712] text-white rounded-full btn-block hover:bg-[#ff8800] transition-colors duration-300 ${plan.type === "launch" ? "" : "relative top-8"}`}>
            Try for Free
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="pl-5 pt-1 pb-6">
        <h5 className="text-sm md:text-base font-medium mt-4">
          All {plan.title} benefits:
        </h5>
        <ul className="mt-6 space-y-3">
          {plan.features.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <Image
                src="/icons/check-circle.png"
                alt="check"
                width={18}
                height={18}
              />
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
