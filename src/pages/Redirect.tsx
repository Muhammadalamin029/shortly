import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Redirect: React.FC = () => {
  const shortUrl = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      console.log(shortUrl);

      try {
        const response = await fetch(
          `https://short-xish.onrender.com/api/url/${shortUrl.id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        window.location.href = data.destination;
      } catch (error) {
        console.error("Error fetching the original URL", error);
        navigate("/");
      }
    };

    fetchOriginalUrl();
  }, [shortUrl, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-600">
          Please wait while we redirect you to the original URL.
        </p>
      </div>
    </div>
  );
};

export default Redirect;
