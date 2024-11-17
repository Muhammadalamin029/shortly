import logo from "/assets/Shortly.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="lg:px-[167px] px-6 bg-white pt-12 pb-10 flex h-10 items-center justify-between">
      <div className="flex gap-11">
        <img src={logo} alt="logo-image" />
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
      </div>
      <div className="none">
        <button className="w-[105px] h-10 rounded-[28px]">Login</button>
        <button className="bg-primary hover:bg-primaryHover w-[105px] text-white font-bold h-10 rounded-[28px]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
