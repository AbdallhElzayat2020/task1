import Image from "next/image";
import HeroImg from "@/assets/images/hero-img.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container flex justify-between gap-5 items-center flex-wrap lg:flex-nowrap">
        <div>
          <h1 className="text-7xl font-extrabold mb-20 relative">
            <div className="absolute w-36 h-36 bg-[#f00] rounded-full right-32 -top-12"></div>
            <div className="z-10 relative">
              Lorem Ipsum is <br /> simply dummy text <br /> of the printing
            </div>
          </h1>
          <div className="btns flex gap-2">
            <Link
              href="/"
              className="px-9 py-3 bg-[#f00] text-white inline-block"
            >
              Get Started
            </Link>
            <Link
              href="/"
              className="px-9 py-3 bg-white text-[#f00] inline-block"
            >
              Hire Us
            </Link>
          </div>
        </div>
        <div>
          <Image src={HeroImg} alt="Hero Img" width={600} height={717} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
