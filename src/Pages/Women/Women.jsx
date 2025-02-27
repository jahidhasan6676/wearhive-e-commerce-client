import Cover from "../Shared/Cover";
import womenBannerImage from "../../assets/Assets/womenBannerImage.png";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import WomenProductCard from "./WomenProductCard";
import useProducts from "../../Hooks/useProducts";

const Women = () => {
    const [products, isLoading, error] = useProducts();

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Failed to load products!</p>;

    const womenProducts = products.filter(product => product.manCategory === "Women");

    return (
        <div>
            <div>
                <Cover image={womenBannerImage} />
            </div>

            {/* product part */}
            <div className="w-11/12 mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {womenProducts?.map(womenProduct => <WomenProductCard key={womenProduct._id} womenProduct={womenProduct} />)}
                </div>
            </div>
        </div>
    );
};

export default Women;