interface PropType {
  link: string;
}

const InputResponse = ({ link }: PropType) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="w-full h-[72px] mb-5 p-6 rounded-md flex items-center justify-between bg-white text-text">
      <div className="md:flex md:w-[100%] justify-between">
        <span>{link}</span>
        <span className="text-primary">{link}</span>
      </div>
      <button
        onClick={handleCopy}
        className="bg-primary w-[103px] h-[40px] ml-6 rounded-md text-white text-[15px] font-bold   hover:bg-primaryHover"
      >
        Copy
      </button>
    </div>
  );
};

export default InputResponse;
