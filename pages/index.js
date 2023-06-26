import Image from "next/image";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import Hero from "@/components/Hero";
import ImgOne from "@/assets/images/img1.png";
import ImgTwo from "@/assets/images/img2.png";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Title</title>
      </Head>
      <main className={`${opensans.className} bg-[#efefef] py-10`}>
        <Hero />
      </main>
      <main className={`${opensans.className} bg-black mt-8`}>
        <div className="container flex justify-between items-end flex-wrap md:flex-nowrap">
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <div className="relative -mt-10 md:-mt-32">
              <Image src={ImgOne} alt="" width={400} height={400} />
              <span className="absolute bottom-2 left-2 text-white text-3xl">
                Lorem <br /> Ipsum is
              </span>
            </div>
            <div className="relative md:-mt-32">
              <Image src={ImgTwo} alt="" width={400} height={400} />
              <span className="absolute bottom-2 left-2 text-white text-3xl">
                Lorem <br /> Ipsum is
              </span>
            </div>
          </div>
          <div className="hidden md:flex">
            <div class="border md:w-96 h-[1px] border-[#858484] mt-[6px]"></div>
            <div class="mb-4 h-0 w-0 border-y-8 border-y-transparent md:border-l-[16px] border-l-[#858484]"></div>
          </div>
          <div className="text-[#C4C4C4] mb-4">Scroll Down</div>
        </div>
      </main>
    </>
  );
}
