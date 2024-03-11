import { useAuthStore } from "../store/store";
import companiesImage from "./../assets/companies.svg"; // replace with actual path
import { Link } from 'react-router-dom'

import instructorImage from "./../assets/instructor.svg"; // replace with actual path
import studentImage from "./../assets/student.svg"; // replace with actual path
const Hero = () => {

const {isLoggedIn} = useAuthStore((state) => state);

return (
    <>
        <div className="bg-white py-16">
            <div className=" relative max-w-7xl mx-auto px-4 sm:px-6 flex-col items-center justify-center lg:px-40 ">
                <h1 className=" text-4xl lg:text-6xl font-bold mb-14 text-center lg:mb-8">
                    Teaching in the Internet age means we must teach{" "}
                    <span className="text-purple-600">tomorrow's</span> skills today
                </h1>
                <p className="text-gray-600  text-center mb-12">
                    Provides you with the latest online learning system and material
                    that help your
                </p>
                
                <div className="flex  justify-around py-2 lg:gap-96 absolute w-full  left-0 top-44 lg:top-40">
                    
                 <img src={instructorImage} alt="" className="w-12  lg:w-28  mx-auto" />
               
               
                <img src={studentImage} alt="" className="lg:w-28 w-12 mx-auto" />
              
                </div>


                { isLoggedIn ? (
                    <div className="flex justify-center space-x-4">
                        <Link to="/courses" >
                            <button className="bg-orange-500 text-white lg:px-6 lg:py-3 rounded-full hover:bg-orange-600">
                                View Courses
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex justify-center space-x-4">
                        <Link to="/signup" >
                            <button className="bg-orange-500 text-white lg:px-6  px-3 py-2 lg:py-3 rounded-full hover:bg-orange-600">
                                Join as Instructor
                            </button>
                        </Link>
                        <Link to="/signup" >
                            <button className="bg-purple-600 text-white lg:px-6 lg:py-3 py-2 px-3 rounded-full hover:bg-purple-700">
                                Join as Student
                            </button>
                        </Link>
                    </div>
                )}
                <div className="flex justify-center space-x-8 mt-12">
                    <img src={companiesImage} alt="" />
                </div>
            </div>
        </div>
    </>
);};
export default Hero;
