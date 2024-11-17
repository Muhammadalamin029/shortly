import useShortenLink from "../hooks/useShortenLink";

const Input = () => {
  const { link, handleInputChange, shortenUrl } = useShortenLink();

  return (
    <section className="lg:px-[167px] px-6 max-w-screen">
      <div className="flex flex-col lg:relative lg:top-[-84px] min-h-40 lg:h-[168px] rounded-[10px] lg:px-16 p-6 lg:py-[52px] bg-input bg-no-repeat bg-center bg-cover gap-2">
        <input
          className="lg:h-16 rounded-[10px] h-12 w-full p-3 outline-none border-[#F46363] border-solid border-[3px]"
          type="text"
          name="link"
          id="1"
          placeholder="Shorten a link here..."
          value={link}
          onChange={handleInputChange}
        />
        <p className="text-[#F46363] mb-2 m-0">
          <i>please add a link</i>
        </p>
        <button
          onClick={shortenUrl}
          className="lg:w-[188px] h-12 hover:bg-primaryHover bg-primary w-full rounded-[10px] text-white font-bold"
        >
          Shorten it!
        </button>
      </div>
    </section>
  );
};

export default Input;
