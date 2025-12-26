import Image from "next/image";
export default function Button({value}) {
  return (
    <button className="button py-[9px] px-4 bg-white text-black rounded-lg  text-[12px] font-semibold">{value}
      <Image src="/images/arrow-right.png" alt="right arrow" width={9} height={9} className="inline-block ml-2" />
    </button>
  );
}