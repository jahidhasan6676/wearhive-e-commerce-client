import { FaCheckCircle } from 'react-icons/fa';

const OurCommitment = () => {
  return (
    <div className="w-11/12 mx-auto pb-20">
      {/* Our Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-md p-6">
          <h2 className="text-2xl font-medium text-center text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            At <strong>WearHive e-commerce</strong>, our mission is to provide high-quality, stylish,
            and affordable fashion for everyone. We aim to empower individuals by offering trendy
            collections that suit every style and occasion.
          </p>
        </div>
        <div className="border rounded-md p-6 ">
          <h2 className="text-2xl font-medium text-center text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-4">
            Our vision is to become a globally recognized fashion brand that inspires confidence
            and individuality. We prioritize sustainability, technology, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            'Premium Quality',
            'Affordable Prices',
            'Fast & Secure Delivery',
            'Customer-Centric Approach',
            'Trendy & Versatile Collections',
            'Sustainable Practices',
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-gray-100 p-4 rounded-md">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
