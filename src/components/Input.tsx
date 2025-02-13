import { Link } from "react-router-dom";
import useFetchUserLinks from "../hooks/useFetchUserLinks";
import useShortenLink from "../hooks/useShortenLink";
import AuthModal from "../pages/Auth";
import InputResponse from "./InputResponse";
import Loading from "./Loading";

const Input = () => {
  const {
    link,
    handleInputChange,
    shortenUrl,
    error,
    modal,
    handleModal,
    shortening,
  } = useShortenLink();

  const location = window.location;

  const { links } = useFetchUserLinks();

  return (
    <section className="lg:px-[167px] px-6 max-w-screen">
      <div className="flex lg:flex-row flex-col lg:relative lg:top-[-84px] min-h-40 lg:h-[168px] rounded-[10px] lg:px-16 p-6 lg:py-[52px] bg-input bg-no-repeat bg-center bg-cover gap-2">
        {modal && <AuthModal onClose={handleModal} />}
        <input
          className={`lg:h-16 rounded-[10px] h-12 w-full p-3 outline-none ${
            error ? "border-[#F46363] border-solid border-[3px]" : ""
          }`}
          type="text"
          name="link"
          id="1"
          placeholder="Shorten a link here..."
          value={link}
          onChange={handleInputChange}
        />
        {error && (
          <p className="text-[#F46363] mb-2 m-0 md:absolute bottom-5">
            <i>please add a link</i>
          </p>
        )}
        {shortening && <Loading />}
        <button
          disabled={shortening}
          onClick={shortenUrl}
          className="lg:w-[188px] lg:h-16 h-12 disabled:bg-primaryHover hover:bg-primaryHover bg-primary w-full rounded-[10px] text-white font-bold"
        >
          Shorten it!
        </button>
      </div>
      <div className="relative -top-[60px]">
        {links
          ?.slice(0, 3)
          .map(
            (link) =>
              link?.shortId && (
                <InputResponse key={link?.id} url={location + link.shortId} />
              )
          )}
        {(links?.length ?? 0) > 3 && (
          <Link
            to="/all-links"
            className="mt-4 bg-primary hover:bg-primaryHover text-white font-bold py-2 px-4 rounded"
          >
            View All Links
          </Link>
        )}
      </div>
    </section>
  );
};

export default Input;
