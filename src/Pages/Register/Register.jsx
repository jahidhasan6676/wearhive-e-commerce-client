import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { photoUpload, userSave } from "../../utilities/utils";
import { toast } from "react-toastify";

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    
    const handleRegisterUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const photo = await photoUpload(image);

        try {
            const result = await createUser(email, password);
            setUser(result.user);
            await updateUserProfile({ displayName: name, photoURL: photo });
            await userSave({ ...result?.user, displayName: name, photoURL: photo });
            navigate(location?.state ? location.state : "/");
            toast.success("Registration successful!");
        } catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm ">
                <div className="text-center mb-5">
                    <h2 className="text-xl font-semibold text-gray-800">Join WearHive</h2>
                    <p className="text-sm text-gray-500 mt-1">Create your account in seconds</p>
                </div>

                <form onSubmit={handleRegisterUser} className="space-y-3">
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="Full name"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            name="image"
                            type="file"
                            accept="image/*"
                            className="w-full text-xs text-gray-500 file:mr-2 file:py-1.5 file:px-3 file:border-0 file:text-xs file:font-medium file:bg-indigo-50 file:text-indigo-700 rounded hover:file:bg-indigo-100"
                        />
                    </div>
                    
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded shadow-sm transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-xs text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 hover:underline">Sign in</Link>
                </p>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-xs text-gray-400">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <SocialLogin />

                <p className="text-xs text-center text-gray-400 mt-4">
                    By registering, you agree to our Terms and Privacy Policy
                </p>
            </div>
        </div>
    );
};

export default Register;