import Cover from "../Shared/Cover";
import menImage from "../../assets/Assets/menBannerImage.png"
import MenProductCard from "./MenProductCard";
import useProducts from "../../Hooks/useProducts";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const Men = () => {

    const [products, isLoading, error] = useProducts();

    if (isLoading) return <LoadingSpinner/>;
    if (error) return <p>Failed to load products!</p>;

    const menProducts = products.filter(product => product.manCategory === "Men");


    return (
        <div>
            {/* banner part */}
            <div className="">
                <Cover image={menImage} />
            </div>

            {/* product part */}
            <div className="w-11/12 mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {menProducts?.map(menProduct => <MenProductCard key={menProduct._id} menProduct={menProduct} />)}
                </div>
            </div>
        </div>
    );
};

export default Men;