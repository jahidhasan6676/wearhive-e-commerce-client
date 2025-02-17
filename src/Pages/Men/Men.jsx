import Cover from "../Shared/Cover";
import menImage from "../../assets/Assets/menBannerImage.png"

const Men = () => {

    
    return (
        <div>
            {/* banner part */}
            <div className="">
                <Cover image={menImage} />
            </div>
            
            {/* product part */}
            <div>
                <h2>Men All Product</h2>
            </div>
        </div>
    );
};

export default Men;