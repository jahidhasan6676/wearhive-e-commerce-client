

const MenProductCard = ({menProduct}) => {
    const {photo,productName,price,_id} = menProduct || {};

    return (
        <div>
            <img src={photo} alt="" className="h-[400px] w-full" />
            <div className="mt-2">
                <h2>{productName}</h2>
                <p>${price}</p>
                <button className="px-3 py-2 border rounded-md border-secondary hover:bg-primary mt-2 hover:text-white">View Details</button>
            </div>
        </div>
    );
};

export default MenProductCard;