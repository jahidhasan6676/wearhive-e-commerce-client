import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const { loginUser, setUser } = useAuth();
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [mail, setMail] = useState('');

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(result => {
        setUser(result.user)
        navigate(location?.state ? location.state : "/")
        toast.success("Login successful!")
      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  // Demo account handlers
  const handleCustomer = () => {
    setPass("123456")
    setMail("customer2@gmail.com")
  }
  const handleSeller = () => {
    setPass("123456")
    setMail("seller@gmail.com")
  }
  const handleModerator = () => {
    setPass("123456")
    setMail("moderator@gmail.com")
  }
  const handleAdmin = () => {
    setPass("123456")
    setMail("kamrul@gmail.com")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm ">
        <div className="text-center mb-5">
          <h2 className="text-xl font-semibold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Login to your WearHive account</p>
        </div>

        {/* Demo account buttons */}
        <div className="flex justify-center gap-2 mb-4">
          <button 
            onClick={handleCustomer}
            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition">
            Customer
          </button>
          <button 
            onClick={handleSeller}
            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition">
            Seller
          </button>
          <button 
            onClick={handleModerator}
            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition">
            Moderator
          </button>
          <button 
            onClick={handleAdmin}
            className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition">
            Admin
          </button>
        </div>

        <form onSubmit={handleLoginUser} className="space-y-3">
          <div>
            <input
              name="email"
              type="email"
              defaultValue={mail}
              placeholder="Email address"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          
          <div>
            <input
              name="password"
              type="password"
              defaultValue={pass}
              placeholder="Password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-xs text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded shadow-sm transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-xs text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SocialLogin />

        <p className="text-xs text-center text-gray-400 mt-4">
          By logging in, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;