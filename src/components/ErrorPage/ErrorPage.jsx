import { Link } from 'react-router-dom';

const ErrorPage = ({ status = 404 }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full  p-8 rounded-lg shadow-sm text-center">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="Amar WearHive" 
              className="h-12 mx-auto"
            />
          </Link>
        </div>

        {/* Error Content */}
        <div className="text-6xl font-light text-gray-400 mb-4">{status}</div>
        <p className="text-lg text-gray-600 mb-6">
          {status === 404 
            ? "The page you're looking for doesn't exist."
            : "Something went wrong. Please try again."
          }
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;