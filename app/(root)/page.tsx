import Collections from "@/components/Collections";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      /> */}
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
