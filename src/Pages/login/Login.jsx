import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";



const Login = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#fde1ff]">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl text-center font-semibold  mb-6">Login Now</h2>
  
          {/* Email & Password Input */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-2 border rounded-md focus:outline-none  "
            />
            <input
              type="password"
              placeholder="Password *"
              className="w-full px-4 py-2 border rounded-md focus:outline-none "
            />
          </div>
  
          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="" />
              <span>Remember Me</span>
            </label>
            <Link  className="text-secondary hover:underline">Forgot Password?</Link>
          </div>
  
          {/* Submit Button */}
          <button className="w-full bg-secondary text-white py-2 rounded-md mt-4 hover:bg-primary transition">
            Login
          </button>
  
          {/* Sign Up Link */}
          <p className="text-center text-sm mt-3">
            Don't Have an Account? <Link to="/register" className="text-secondary hover:underline">Register</Link>
          </p>
  
          {/* OR Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-2 bg-white px-3 text-gray-500 font-semibold">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
  
          {/* Social Login */}
          <p className="text-center font-medium mb-3">Login With Social Media</p>
            <SocialLogin/>
        </div>
      </div>
    );
  };
  
  export default Login;
  