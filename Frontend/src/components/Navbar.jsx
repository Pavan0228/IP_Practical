// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-semibold">
                    Home
                </Link>
                <div>
                    <Link to="/login" className="text-white mr-4">
                        Login
                    </Link>
                </div>
                <div>
                    <Link to="/hotels" className="text-white mr-4">
                        Hotel
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
