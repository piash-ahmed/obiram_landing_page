"use client";

import { useState } from "react";
import { pricingData } from "../../data/pricingData";
import PricingCard from "./PricingCard";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// export default function PricingSection() {
//   const [billing, setBilling] = useState("monthly");

//   return (
//     <section className="w-11/12 mx-auto mt-24 md:mt-32 lg:mt-40">


//       {/* 🔘 Toggle Buttons */}
//       <div className="price-card flex justify-end gap-3 w-full mb-10">
//   {/* Monthly Button */}
//   <button
//     onClick={() => setBilling("monthly")}
//     className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
//       ${billing === "monthly" ? "bg-[#FB4712] text-white" : "bg-transparent text-gray-800 border border-gray-300"}`}
//   >
//     Monthly
//   </button>

//   {/* Annually Button */}
//     <div className="flex items-center gap-3">
//       <button
//         onClick={() => setBilling("annually")}
//         className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
//           ${billing === "annually" ? "bg-[#FB4712] text-white" : "bg-transparent text-gray-800 border border-gray-300"}`}
//       >
//         Annually{" "}
//       </button>
//         <span className={`text-[#FC6C41] font-light`}>Save 40%</span>
//     </div>
// </div>


//       {/* 🔄 Pricing Cards */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={billing}
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -24 }}
//           transition={{ duration: 0.35 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-10"
//         >
//           {pricingData[billing].map((plan, index) => (
//             <PricingCard key={index} plan={plan} />
//           ))}
//         </motion.div>
//       </AnimatePresence>

//       {/* Footer Text */}
//       <p className="text-[#373A46] text-sm md:text-base font-light text-center md:text-left opacity-[0.8] mb-6">
//         Choose the plan that fits your growth. No hidden fees. No long-term contracts. Every plan includes a 7-day free trial.
//       </p>
//     </section>
//   );
// }



export default function PricingSection() {
  const [billing, setBilling] = useState("monthly")
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

           <div className="price-card flex justify-end gap-3 w-full mb-10">
  {/* Monthly Button */}
  <button
    onClick={() => setBilling("monthly")}
    className={`py-[10px] px-[20px] font-medium transition-colors duration-300
      ${billing === "monthly" ? "monthly-btn" : "bg-transparent  border border-gray-300 rounded-xl"}`}
  >
    Monthly
  </button>

  {/* Annually Button */}
    <div className="flex items-center gap-3">
      <button
        onClick={() => setBilling("annually")}
        className={`py-[12px] px-[20px]  font-medium transition-colors duration-300
          ${billing === "annually" ? "monthly-btn" : "bg-transparent  border border-gray-300 rounded-xl"}`}
      >
        Annually{" "}
      </button>
        <span className={`text-[#FC6C41] font-light`}>Save 40%</span>
    </div>
          </div>
      </div>

      
      
        
              {/* Pricing Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={billing}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-6 md:mb-8 lg:mb-10"
        >
          {pricingData[billing].map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </motion.div>
      </AnimatePresence>
      
      <p className="text-[#373A46] text-sm md:text-base font-light text-center md:text-left opacity-[0.8] mb-6">
        Choose the plan that fits your growth. No hidden fees. No long-term
        contracts. Every plan includes a 7-day free trial.
      </p>
    </section>
  );
}
