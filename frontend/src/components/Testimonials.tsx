import { FaStar } from "react-icons/fa";
import test1 from "./../assets/testmonial1.png";
import test2 from "./../assets/testmonial2.png";
import test3 from "./../assets/testmonial3.png";

const testimonialsData = [
  {
    name: "John Doe",
    role: "Student",
    testimonial:
      "I've taken several courses on this platform, and they've been incredibly helpful for my career growth and skill development.",
    rating: 4.5,
    image: test1,
  },
  {
    name: "Jane Smith",
    role: "Developer",
    testimonial:
      "The coding courses on this platform have helped me improve my skills and land a job at a top tech company.",
    rating: 5,
    image: test2,
  },
  {
    name: "Bob Johnson",
    role: "Designer",
    testimonial:
      "The design courses on this platform are top-notch. I've learned so much and have been able to apply it to my work.",
    rating: 4.7,
    image: test3,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-200 h-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <p className="text-center text-gray-600 mb-8">Let's What our Student say about US</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {/* <img src={testimonial.image} alt={testimonial.name} className="mr-4" /> */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <span className="text-gray-600">{testimonial.role}</span>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.testimonial}</p>
              <div className="flex justify-end mt-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">
                    {testimonial.rating}
                  </span>
                  {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
