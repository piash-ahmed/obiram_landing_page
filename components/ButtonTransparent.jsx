import Image from "next/image";
export default function ButtonTransparent({value}) {
  return (
    <button className="py-2 px-4 bg-[#f14d1d] border border-[#f68260] text-white font-normal rounded-lg ml-4 text-[12px] font-bold">
      <Image src="/images/youtube.png" alt="right arrow" width={24} height={24} className="inline-block mr-2"
       />
        {value}
    </button>
  );
}