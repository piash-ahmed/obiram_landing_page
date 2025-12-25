import Image from "next/image";

export default function Dashboard() {
  return (
    <Image
          src="/images/dashboard.png"
          alt="Analytics Image"
          width={1000}
          height={754}
          className="mx-auto mt-10 dashboard-image w-9/12"
        />
  );
}