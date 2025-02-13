import { getDocs, collection, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useQuery } from "@tanstack/react-query";

interface Link {
  id: string;
  shortId?: string;
  created_by?: string;
  destination?: string;
}

const fetchUserLinks = async (): Promise<Link[]> => {
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid;
    const linksQuery = query(
      collection(db, "links"),
      where("created_by", "==", userId)
    );
    const querySnapshot = await getDocs(linksQuery);
    return querySnapshot.docs
      .map(
        (doc): Link => ({
          id: doc.id,
          ...doc.data(),
        })
      )
      .filter((link) => link.created_by === userId);
  } else {
    throw new Error("No user is currently signed in.");
  }
};

const useFetchUserLinks = () => {
  const {
    data: links,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["userLinks"],
    queryFn: fetchUserLinks,
  });

  return { links, loading: isLoading, error };
};

export default useFetchUserLinks;
