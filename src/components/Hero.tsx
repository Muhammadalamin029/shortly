import HeroImage from "/assets/working_with_computer.svg";

const Hero = () => {
  return (
    <section className="bg-white flex gap-10 md:pl-[167px] md:pr-0 px-6 md:flex-row flex-col-reverse min-h-[700px] md:items-center border-[#ffffff] border-b-[84px]">
      <div className="text-center md:text-left">
        <h1 className="md:text-[80px] text-[42px] md:tracking-[-2px] m-0 font-bold leading-[48px] md:leading-[90px]">
          More than just shorter links
        </h1>
        <p className="text-[#9E9AA8] font-medium md:w-3/4 md:text-[22px] text-lg leading-9 tracking-[0.15px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-primary hover:bg-primaryHover w-[180px] text-white font-bold mt-[38px] h-14 md:h-10 rounded-[28px]">
          Get Started
        </button>
      </div>
      <div className="">
        <img src={HeroImage} alt="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
