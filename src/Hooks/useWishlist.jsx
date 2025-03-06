import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useWishlist = () => {
    
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

  const { data: wishlist = [], isLoading, refetch, error } = useQuery({
    queryKey: ["wishlist",user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist/${user?.email}`); 
      return res.data;
    },
  });

  return [wishlist, isLoading, refetch, error];
};

export default useWishlist;