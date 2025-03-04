import { Link } from "react-router-dom";

const KidProductCard = ({ kidProduct }) => {
    const { photo, productName, price, _id } = kidProduct || {};
    return (
        <div>
            <img src={photo} alt="" className="h-auto max-h-[350px] object-contain" />
            <div className="mt-2 w-full">
                <h2>{productName}</h2>
                <p>${price}</p>
                <Link to={`/productDetails/${_id}`}>
                    <button className="px-3 py-2 border rounded-md border-secondary hover:bg-primary mt-2 hover:text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default KidProductCard;