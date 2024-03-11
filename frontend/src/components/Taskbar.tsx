import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {  FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from 'react-icons/fa6';
import { useAuthStore } from "../store/store";

const Taskbar = () => {
    const { user, isLoggedIn, logout } = useAuthStore((state) => ({
        user: state.user, isLoggedIn: state.isLoggedIn, logout: state.logout
    }));

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-primary py-3 px-6 flex items-center justify-between">
            <Link to="/" className="nav-link">
                <div className=" h-8 w-36 lg:h-10 lg:w-56">
                    <img className="w-full h-full" src={logo} alt="" />
                </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="nav-link hover:cursor-pointer">
                    Home
                </Link>
                <Link to="/courses" className="nav-link hover:cursor-pointer">
                    Courses
                </Link>
                {isLoggedIn && user?.role === 'instructor' && (
                    <Link to="/create-course" className="nav-link hover:cursor-pointer">
                        Create Course
                    </Link>
                )}
                {isLoggedIn && user?.role === 'lead' && (
                    <Link to="/buyed-courses" className="nav-link hover:cursor-pointer">
                        Buyed Courses
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/profile" className="nav-link hover:cursor-pointer">
                        < FaRegCircleUser className="text-2xl" />
                    </Link>
                )}
                {!isLoggedIn && (
                    <Link
                        to="/login"
                        className="text-white bg-secondary px-6 py-2 rounded-md hover:bg-orange-600 hover:cursor-pointer"
                    >
                        Login
                    </Link>
                )}
                {!isLoggedIn && (
                    <Link
                        to="/signup"
                        className="border-4 hover:border-orange-600 border-secondary text-white px-3 py-1 rounded-md hover:bg-orange-600 hover:text-white hover:cursor-pointer"
                    >
                        Signup
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/">
                        <button
                            onClick={logout}
                            className="text-white bg-secondary px-6 py-2 rounded-md hover:bg-orange-600 hover:cursor-pointer"
                        >
                            Logout
                        </button>
                    </Link>
                )}
            </div>
            <div className="md:hidden">
                {showMenu ? (
                    <FaTimes className="text-2xl text-white hover:cursor-pointer" onClick={toggleMenu} />
                ) : (
                    <FaBars className="text-2xl text-white hover:cursor-pointer" onClick={toggleMenu} />
                )}
            </div>
            {showMenu && (
                <div className="absolute top-16  left-0 w-full bg-primary md:hidden z-50 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col  space-y-4 py-4">
                        <Link to="/" className="menu-nav-link px-6" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/courses" className="menu-nav-link px-6 hover:cursor-pointer" onClick={toggleMenu}>
                           Courses
                        </Link>
                        {isLoggedIn && user?.role === 'instructor' && (
                            <Link to="/create-course" className="menu-nav-link px-6 hover:cursor-pointer" onClick={toggleMenu}>
                                Create Course
                            </Link>
                        )}
                        {isLoggedIn && user?.role === 'lead' && (
                            <Link to="/buyed-courses" className="menu-nav-link px-6 hover:cursor-pointer" onClick={toggleMenu}>
                                Buyed Courses
                            </Link>
                        )}
                        {isLoggedIn && (
                            <Link to="/profile" className="menu-nav-link flex gap-4 px-6 hover:cursor-pointer" onClick={toggleMenu}>
                                <FaRegCircleUser className="text-2xl " /> Profile
                            </Link>
                        )}
                        {!isLoggedIn && (
                            <Link
                                to="/login"
                                className="menu-nav-link px-6 text-white bg-secondary rounded-md hover:bg-orange-600 hover:cursor-pointer"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                        )}
                        {!isLoggedIn && (
                            <Link
                                to="/signup"
                                className="menu-nav-link px-6 border-4 hover:border-orange-600 border-secondary text-white rounded-md hover:bg-orange-600 hover:text-white hover:cursor-pointer"
                                onClick={toggleMenu}
                            >
                                Signup
                            </Link>
                        )}
                        {isLoggedIn && (
                            <Link to="/">
                                <button
                                    onClick={() => {
                                        logout();
                                        toggleMenu();
                                    }}
                                    className="menu-nav-link w-11/12 px-6 text-white bg-secondary rounded-md hover:bg-orange-600 hover:cursor-pointer"
                                >
                                    Logout
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Taskbar;