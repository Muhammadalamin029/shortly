import React from "react";
import useFetchUserLinks from "../hooks/useFetchUserLinks";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import InputResponse from "../components/InputResponse";

const AllLinks: React.FC = () => {
  const { links, loading, error } = useFetchUserLinks();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    toast.error("An error occurred. Please try again later.");
    return;
  }

  const location = window.location;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Links</h1>
      <div className="flex flex-col gap-4">
        {links?.map(
          (link) =>
            link?.shortId && (
              <InputResponse key={link?.id} url={location + link.shortId} />
            )
        )}
      </div>
    </div>
  );
};

export default AllLinks;
