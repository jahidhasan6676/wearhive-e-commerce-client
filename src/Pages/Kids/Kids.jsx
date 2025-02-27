
import Cover from '../Shared/Cover';
import kidsBannerImage from "../../assets/Assets/kidsBanner.png";
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import KidProductCard from './KidProductCard';
import useProducts from '../../Hooks/useProducts';

const Kids = () => {

    const [products, isLoading, error] = useProducts();

    if (isLoading) return <LoadingSpinner/>;
    if (error) return <p>Failed to load products!</p>;

    const kidProducts = products.filter(product => product.manCategory === "Kids");
    return (
        <div>
            <div>
                <Cover image={kidsBannerImage} />
            </div>
            {/* product part */}
            <div className="w-11/12 mx-auto py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                    {kidProducts?.map(kidProduct => <KidProductCard key={kidProduct._id} kidProduct={kidProduct} />)}
                </div>
            </div>
        </div>
    );
};

export default Kids;