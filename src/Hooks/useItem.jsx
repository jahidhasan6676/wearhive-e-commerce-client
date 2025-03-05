import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useItem = () => {
    const axiosSecure = useAxiosSecure();

  const { data: cart = [], isLoading, refetch, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allItemProduct"); 
      return res.data;
    },
  });

  return [cart, isLoading, refetch, error];
};

export default useItem;