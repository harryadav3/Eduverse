import { FaStar, FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaUserCircle size={48} className="mr-4" />
              <div>
                <h4 className="text-lg font-bold">John Doe</h4>
                <span className="text-gray-600">Student</span>
              </div>
            </div>
            <p className="text-gray-600">
              "I've taken several courses on this platform, and they've been
              incredibly helpful for my career growth and skill development."
            </p>
            <div className="flex justify-end mt-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">4.5</span>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaUserCircle size={48} className="mr-4" />
              <div>
                <h4 className="text-lg font-bold">Jane Smith</h4>
                <span className="text-gray-600">Professional</span>
              </div>
            </div>
            <p className="text-gray-600">
              "The courses offered here are top-notch. The instructors are very
              knowledgeable and the content is well-structured."
            </p>
            <div className="flex justify-end mt-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">4.7</span>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaUserCircle size={48} className="mr-4" />
              <div>
                <h4 className="text-lg font-bold">Bob Johnson</h4>
                <span className="text-gray-600">Entrepreneur</span>
              </div>
            </div>
            <p className="text-gray-600">
              "I've learned so much from the courses on this platform. They've
              really helped me improve my business skills."
            </p>
            <div className="flex justify-end mt-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">4.8</span>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
