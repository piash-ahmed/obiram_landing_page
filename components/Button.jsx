import Image from "next/image";
export default function Button({value}) {
  return (
    <button className="py-[9px] px-4 bg-white text-black rounded-lg md:ml-2 text-[12px] font-bold">{value}
      <Image src="/images/arrow-right.png" alt="right arrow" width={9} height={9} className="inline-block ml-2" />
    </button>
  );
}