import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { FaRegCircleUser } from "react-icons/fa6";
import { useAuthStore } from "../store/store";

const Taskbar = () => {
    const { user, isLoggedIn, logout } = useAuthStore((state) => ({
        user: state.user, isLoggedIn: state.isLoggedIn , logout: state.logout
    }));

    { console.log("The user is ", user)
        console.log("The isLoggedIn is ", isLoggedIn) }
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
            {isLoggedIn && user?.role === 'instructor' && (
                <Link to="/create-course" className="nav-link">
                    Create Course
                </Link>
            )}
            {isLoggedIn && user?.role === 'lead' && (
                <Link to="/buyed-courses" className="nav-link">
                    Buyed Courses
                </Link>
            )}
            {isLoggedIn && (
                <Link to="/profile" className="nav-link">
                    <FaRegCircleUser className="text-2xl" />
                </Link>
            )}
            {!isLoggedIn && (
                <Link
                    to="/login"
                    className=" text-white bg-secondary px-6 py-2 rounded-md hover:bg-purple-700"
                >
                    Login
                </Link>
            )}
            {!isLoggedIn && (
                <Link
                    to="/signup"
                    className=" font-bold border-4 border-tertiary text-white px-3 py-1   rounded-md hover:bg-secondary hover:text-white"
                >
                    Signup
                </Link>
            )}
            {isLoggedIn && (
                <Link to="/"> 
                <button                onClick={logout}
                    
                    className="text-white bg-secondary px-6 py-2 rounded-md hover:bg-purple-700">
                
                    Logout
                    </button>

                </Link>
            )}
        </div>
    </nav>
);
};

export default Taskbar;
