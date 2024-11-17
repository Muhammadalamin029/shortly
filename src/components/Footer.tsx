import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex  flex-col lg:justify-between lg:px-[167px] lg:py-[71px] lg:flex-row min-h-[310px] bg-[#232127] text-white">
      <div className="">
        <img className="mt-14 mx-auto" src={logo} alt="" />
      </div>
      <div className="flex text-center lg:flex-row flex-col max-w-[461px] p justify-between font-medium text-[#BFBFBF]">
        <div className="mt-10">
          <h3 className="font-bold text-white mb-[22px]">Features</h3>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Link Shortening
          </Link>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Branded Links
          </Link>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Analytics
          </Link>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-white mb-[22px]">Resources</h3>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Blog
          </Link>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Developers
          </Link>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Support
          </Link>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-white mb-[22px]">Company</h3>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            About
          </Link>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Our Team
          </Link>
          <Link to="" className="block hover:text-[#2BD0D0] mb-[10px]">
            Careers
          </Link>
          <Link to="">Contact</Link>
        </div>
      </div>
      <div className="flex text-center mx-auto justify-between py-12 w-[168px] flex-row text-2xl">
        <FaFacebookSquare className="hover:text-[#2BD0D0]" />
        <FaTwitter className="hover:text-[#2BD0D0]" />
        <FaPinterest className="hover:text-[#2BD0D0]" />
        <FaInstagram className="hover:text-[#2BD0D0]" />
      </div>
    </footer>
  );
};

export default Footer;
