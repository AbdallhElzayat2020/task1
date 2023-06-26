import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <header className={`${opensans.className} bg-[#efefef]`}>
      <div className="container flex justify-center lg:justify-between gap-3 items-center py-3 flex-wrap lg:flex-nowrap">
        <div className="logo text-2xl font-black">-LO-GO-</div>
        <ul className="links flex items-center justify-center gap-2 md:gap-20 text-lg flex-wrap md:flex-nowrap">
          <li className="font-bold cursor-pointer">Home</li>
          <li className="font-normal transition-all hover:font-bold cursor-pointer">
            Home1
          </li>
          <li className="font-normal transition-all hover:font-bold cursor-pointer">
            Home2
          </li>
          <li className="font-normal transition-all hover:font-bold cursor-pointer">
            Home3
          </li>
          <li className="font-normal transition-all hover:font-bold cursor-pointer">
            Home4
          </li>
          <li className="font-normal transition-all hover:font-bold cursor-pointer">
            Home5
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
