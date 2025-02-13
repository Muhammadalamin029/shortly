interface PropType {
  url: string;
}

const InputResponse = ({ url }: PropType) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="w-full h-[72px] mb-5 p-6 rounded-md flex items-center justify-between bg-white text-text">
      <div className="md:flex md:w-[100%] justify-between">
        <span>{url}</span>
        <span className="text-primary">{url}</span>
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
