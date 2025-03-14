import { Link } from "react-router-dom";


const WomenProductCard = ({womenProduct}) => {
    const {photo,productName,price,_id} = womenProduct || {};
    return (
        <div>
            <img src={photo} alt="" className="w-full object-cover" />
            <div className="mt-2">
                <h2>{productName}</h2>
                <p>${price}</p>
                <Link to={`/productDetails/${_id}`}>
                    <button className="px-3 py-2 border rounded-md border-secondary hover:bg-primary mt-2 hover:text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default WomenProductCard;