import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useItem = () => {
    const axiosSecure = useAxiosSecure();

  const { data: items = [], isLoading, refetch, error } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allItemProduct"); 
      return res.data;
    },
  });

  return [items, isLoading, refetch, error];
};

export default useItem;