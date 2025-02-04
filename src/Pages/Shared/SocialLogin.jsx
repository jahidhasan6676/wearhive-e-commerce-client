import { useNavigate } from "react-router-dom";
import google_icon from "../../assets/social_icon/google.png"
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
    const { setUser, signInGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInGoogle()
            setUser(result.user);
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center space-x-4">
            <img onClick={handleGoogleLogin} src={google_icon} alt="google-icon" className="w-8 cursor-pointer" />

        </div>
    );
};

export default SocialLogin;