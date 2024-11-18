import icon1 from "/assets/icon1.svg";
import icon2 from "/assets/icon2.svg";
import icon3 from "/assets/icon3.svg";

const Statistic = () => {
  return (
    <section className="md:px-[167px] px-6 mt-[36px] mb-28">
      <div className="text-center mb-14">
        <h1 className="text font-bold md:text-[40px] text-[28px]">
          Advanced Statistics
        </h1>
        <p className="text-[#9E9AA8] md:w-3/4 mx-auto font-medium text-[16px] md:text-[18px] md:leading-9 leading-7 tracking-[0.15px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="gap-6 min-h-[400px] md:text-left text-center w-full flex md:flex-row flex-col items-center relative">
        <div className="bg-primary md:w-full w-2 h-full md:h-2 absolute -z-10"></div>
        <div className="md:relative md:-top-[45px] w-[327px] mx-auto md:w-[350px] h-[311px]">
          <div className="bg-white h-[267px] mt-[44px] px-8">
            <div className="h-[88px] w-[88px] md:left-0 left-[88px] bg-purple rounded-full relative -top-[44px]">
              <img
                className="absolute bottom-6 top-6 left-6 right-6"
                src={icon2}
                alt=""
              />
            </div>
            <h2 className="font-bold text-[22px] leading-8 text-[#34313D]">
              Brand Recognition
            </h2>
            <p className="font-medium text-[15px] leading-[24px] mt-1 text-[#9E9AA8]">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="md:relative w-[327px] mx-auto md:w-[350px] h-[311px] ">
          <div className="bg-white h-[267px] mt-[44px] px-8">
            <div className="h-[88px] w-[88px] md:left-0 left-[88px] bg-purple rounded-full relative -top-[44px]">
              <img
                className="absolute bottom-6 top-6 left-6 right-6"
                src={icon3}
                alt=""
              />
            </div>
            <h2 className="font-bold text-[22px] leading-8 text-[#34313D]">
              Detailed Records
            </h2>
            <p className="font-medium text-[15px] leading-[24px] mt-1 text-[#9E9AA8]">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="md:relative md:-bottom-[45px] w-[327px] mx-auto md:w-[350px] h-[311px]">
          <div className="bg-white h-[267px] mt-[44px] px-8">
            <div className="h-[88px] w-[88px] md:left-0 left-[88px] bg-purple rounded-full relative -top-[44px]">
              <img
                className="absolute bottom-[20px] top-[20px] left-[20px] right-[20px]"
                src={icon1}
                alt=""
              />
            </div>
            <h2 className="font-bold text-[22px] leading-8 text-[#34313D]">
              Fully Customizable
            </h2>
            <p className="font-medium text-[15px] leading-[24px] mt-1 text-[#9E9AA8]">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
