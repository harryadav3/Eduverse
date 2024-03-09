import React from "react";
import imageAdd from "./../assets/course1.png";
import insADD from "./../assets/ins1.png";
interface CourseCardProps {
  course: {
    id: number;
    title: string;
    instructor: string;
    duration: string;
    price: number;
    image: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { id, title, instructor, duration, price, image } = course;

  return (
    <div className="bg-white rounded-lg max-w-96 shadow-md overflow-hidden">
      <img src={imageAdd} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-full mr-2">
            {duration}
          </span>
          <div className="flex items-center">
           
            {/* Add more stars as needed */}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-4">
          <img
            src={insADD}
            alt="Instructor"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-gray-600">{instructor}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Python Developer</span>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
