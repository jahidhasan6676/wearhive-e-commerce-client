import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Cover from "../Shared/Cover";
import menImage from "../../assets/Assets/menBannerImage.png"
import ShopProductCard from "./ShopProductCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";


const Shop = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axiosPublic.get("/allProduct");
            return res.data;
        },
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Failed to load products!</p>;

    return (
        <div>
            {/* banner part */}
            <div className="">
                <Cover image={menImage} />
            </div>

            {/* product part */}
            <div className="w-11/12 mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {products?.map(product => <ShopProductCard key={product?._id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default Shop;