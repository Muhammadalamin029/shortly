import { useState } from "react";

type Hook = () => {
  link: string | number | undefined;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shortenUrl: () => Promise<void>;
};

const useShortenLink: Hook = () => {
  const [link, setLink] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const body = {
    destination: link,
  };

  const shortenUrl = async () => {
    console.log(JSON.stringify(body));
    try {
      const url = await fetch("https://short-ish.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await url.json();
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { link, handleInputChange, shortenUrl };
};

export default useShortenLink;