import { useState } from "react";
import logo from "/assets/Shortly.svg";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="bg-white">
      <div className="lg:px-[167px] px-6 bg-white z-10 pt-12 pb-10 flex h-10 items-center justify-between">
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
            {!auth.currentUser ? (
              <>
                <button className="w-[105px] h-10 rounded-[28px]">Login</button>
                <button className="bg-primary hover:bg-primaryHover w-[105px] text-white font-bold h-10 rounded-[28px]">
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={async () => {
                  await signOut(auth);
                }}
                className="bg-primary hover:bg-primaryHover w-[105px] text-white font-bold h-10 rounded-[28px]"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
        <button
          className="md:hidden"
          onClick={() => setToggle((toggle) => !toggle)}
        >
          <FaHamburger />
        </button>
        <div
          className={`flex flex-col md:hidden absolute transition-all duration-500 ease-in justify-between items-center ${
            toggle ? "left-0" : "-left-[100vh]"
          } bg-purple w-full top-24 `}
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

            {auth.currentUser ? (
              <button
                onClick={() => signOut(auth)}
                className="w-screen h-[60px] text-white hover:bg-primary"
              >
                Logout
              </button>
            ) : (
              <>
                <button className="w-screen h-[60px] text-white hover:bg-primary">
                  Login
                </button>
                <button className="w-screen h-[60px] text-white hover:bg-primary">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
