import React from "react";
import {  FaStarHalfAlt } from 'react-icons/fa'; // Import the icons
import imageAdd from "./../assets/course2.png";
import insADD from "./../assets/ins1.png";
import { useAuthStore } from "../store/store";
import api from "../store/api";
interface CourseCardProps {
  course: {
    id: number;
    name: string;
    price: number;
    maxSeats: number;
    instructorId: string;
    duration: string;
    category: string;
    imageUrl: string;
  };
}
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {


  // {console.log(course)}
  const { user } = useAuthStore((state) => state);
  const { id, name,  maxSeats = 25, instructorId, duration, category = 'Programming', imageUrl } = course;

  const enrollCourse = async () => {
    try {
      console.log("the data for the user ", user?.id, id)
      const response = await api.post('/leads/register/course', {
        leadId: user?.id, // Add null check for user
        courseId: id,
      });

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (


    <div className="bg-white rounded-lg max-w-80 shadow-lg overflow-hidden h-auto">
      <img src={imageAdd} alt={name} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="bg-green-500 font-bold text-xs text-white px-3 py-1 rounded-full mr-2">
              {duration} days
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
        <h3 className="text-lg  font-bold text-gray-700 my-3">{name}</h3>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={insADD} alt="instructor iamge" className="mr-2 rounded-full w-8 h-8" />
            <span className=" italic">{instructorId}</span>
          </div>
          <span className="bg-blue-200 text-xs text-blue-700 px-2 py-1 rounded-full">{category}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">$ 99.99</span>
          </div>
          <button onClick={enrollCourse} className="bg-primary hover:bg-tertiary text-white px-4 py-2 rounded flex items-center">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
