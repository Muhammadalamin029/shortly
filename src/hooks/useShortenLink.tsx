import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

interface serverReturn {
  newUrl: {
    destination: string;
    shortId: string;
    __v: number;
    _id: string;
  };
}

const useShortenLink = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [shortening, setShortening] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const body = {
    destination: link,
  };

  const shortenUrl = async () => {
    if (auth.currentUser === null) {
      handleModal();
      console.log("Log in");
      return;
    }
    if (link === "") {
      setError(true);
      return;
    } else {
      setError(false);
      console.log("Log in");
      try {
        setShortening(true);
        const url = await fetch("https://short-xish.onrender.com/api/url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const data: serverReturn = await url.json();
        const { shortId, destination } = data.newUrl;
        const firebaseMessage = {
          created_by: auth.currentUser.uid,
          destination,
          shortId,
        };

        if (data) {
          const docRef = await addDoc(collection(db, "links"), firebaseMessage);
          console.log("Document written with ID: ", docRef.id);
        }
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setShortening(false);
      }
    }
  };

  return {
    link,
    handleInputChange,
    shortenUrl,
    error,
    modal,
    handleModal,
    shortening,
  };
};

export default useShortenLink;
