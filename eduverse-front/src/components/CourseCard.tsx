import React from "react";
import { FaRegClock, FaUserCircle, FaStarHalfAlt } from 'react-icons/fa'; // Import the icons
import imageAdd from "./../assets/course2.png";
import insADD from "./../assets/ins1.png";
interface CourseCardProps {
  course: {
    id: number;
    title: string;
    price: number;
    maxSeats: number;
    instructor: string;
    duration: string;
    category: string;
    image: string;
  };
}
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { id, title, price = '99.99', maxSeats = 25, instructor, duration, category = 'Programming', image } = course;

  return (
    <div className="bg-white rounded-lg max-w-80 shadow-lg overflow-hidden h-auto">
      <img src={imageAdd} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="bg-green-500 font-bold text-xs text-white px-3 py-1 rounded-full mr-2">
              {duration}
            </span>
          </div>
          <span className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full">
            {maxSeats} seats
          </span>
          <div className="flex items-center bg-extratouch rounded-full px-2  ">
            <FaStarHalfAlt className="text-white" />
            <span className="text-white font-bold ml-2">4.5</span>
          </div>
        </div>
        <h3 className="text-lg  font-bold text-gray-700 my-3">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={insADD} alt="instructor iamge" className="mr-2 rounded-full w-8 h-8" />
            <span className=" italic">{instructor}</span>
          </div>
          <span className="bg-blue-200 text-xs text-blue-700 px-2 py-1 rounded-full">{category}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">${price}</span>
          </div>
          <button className="bg-primary hover:bg-tertiary text-white px-4 py-2 rounded flex items-center">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
