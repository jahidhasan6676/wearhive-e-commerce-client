import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useWishlist = () => {
    
    const axiosPublic = useAxiosPublic();

  const { data: wishlist = [], isLoading, refetch, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosPublic.get("/wishlist"); 
      return res.data;
    },
  });

  return [wishlist, isLoading, refetch, error];
};

export default useWishlist;