import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Taskbar = () => {
return (
    <nav className="bg-primary py-3 px-6 flex items-center justify-between">
        <div className="h-10 w-56">
            <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex items-center space-x-8">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/courses" className="nav-link">
                Courses
            </Link>
            <Link
                to="/buyed-courses"
                className="nav-link"
            >
                Buyed Courses
            </Link>
            <Link
                to="/create-course"
                className="nav-link"
            >
                Create Course
            </Link>
            <Link to="/profile" className="nav-link">
                Profile
            </Link>
            <Link
                to="/login"
                className=" text-white bg-secondary px-4 py-2 rounded-md hover:bg-purple-700"
            >
                Login
            </Link>
            <Link
                to="/signup"
                className=" font-bold border-4 border-secondary text-white px-3 py-1 rounded-md hover:bg-secondary hover:text-white"
            >
                Signup
            </Link>
        </div>
    </nav>
);
};

export default Taskbar;
