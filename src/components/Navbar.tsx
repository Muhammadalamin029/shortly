import { useState } from "react";
import logo from "/assets/Shortly.svg";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="lg:px-[167px] px-6 bg-white z-10 pt-12 pb-10 flex h-10 items-center justify-between">
      <div className="mr-4">
        <img src={logo} alt="logo-image" />
      </div>
      <div className="md:flex hidden flex-col md:flex-row justify-between w-full">
        <div className="flex items-center gap-7 text-[15px] font-bold text-[#9E9AA8;]">
          <Link className="hover:text-text" to="">
            Feature
          </Link>
          <Link className="hover:text-text" to="">
            Pricing
          </Link>
          <Link className="hover:text-text" to="">
            Resources
          </Link>
        </div>
        <div className="">
          <button className="w-[105px] h-10 rounded-[28px]">Login</button>
          <button className="bg-primary hover:bg-primaryHover w-[105px] text-white font-bold h-10 rounded-[28px]">
            Sign Up
          </button>
        </div>
      </div>
      <button
        className="md:hidden"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <FaHamburger />
      </button>
      <div
        className={`flex flex-col md:hidden absolute transition-all duration-500 ease-in justify-between items-center left-0 ${
          toggle ? "left-0" : "-left-[400px]"
        } bg-purple w-full md:w-full top-24 `}
      >
        <div className="flex flex-col items-center text-[20px] font-bold text-[#9E9AA8;]">
          <button className="w-screen h-[60px] text-white hover:bg-primary">
            Feature
          </button>
          <button className="w-screen h-[60px] text-white hover:bg-primary">
            Pricing
          </button>
          <button className="w-screen h-[60px] text-white hover:bg-primary">
            Resources
          </button>
          <button className="w-screen h-[60px] text-white hover:bg-primary">
            Login
          </button>
          <button className="w-screen h-[60px] text-white hover:bg-primary">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
