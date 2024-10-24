import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import AuthSystem from "./AuthSystem"; // Import the AuthSystem component

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);
  const [showLogin, setShowLogin] = useState(false); 

  
  const handleLoginClick = () => {
    setShowLogin(true); // Show the login form
  };

  
  const handleCloseLogin = () => {
    setShowLogin(false); // Hide the login form
  };

  return (
    <>
      <div className={cn("fixed top-2 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        {/* Navbar at the top with circular corners */}
        <nav
          onMouseLeave={() => setActive(null)}
          className="relative bg-white dark:bg-black shadow-input flex justify-center space-x-4 px-8 py-6 rounded-full"
        >
          <div onMouseEnter={() => setActive("Dashboard")} className="relative">
            <Link to="/" className="cursor-pointer text-black dark:text-white hover:opacity-90 focus:outline-none">
              Dashboard
            </Link>
          </div>

          <div onMouseEnter={() => setActive("Call Log")} className="relative">
            <Link to="/call-log" className="cursor-pointer text-black dark:text-white hover:opacity-90 focus:outline-none">
              Call Log
            </Link>
          </div>

          <div onMouseEnter={() => setActive("Call Playback")} className="relative">
            <Link to="/call-playback" className="cursor-pointer text-black dark:text-white hover:opacity-90 focus:outline-none">
              Call Playback
            </Link>
          </div>

          <div onMouseEnter={() => setActive("Export")} className="relative">
            <Link to="/export" className="cursor-pointer text-black dark:text-white hover:opacity-90 focus:outline-none">
              Export
            </Link>
          </div>

          {/* Login Button */}
          <div onMouseEnter={() => setActive("Login")} className="relative">
            <button
              onClick={handleLoginClick} // Show the login form on click
              className="cursor-pointer text-black dark:text-white hover:opacity-90 bg-transparent border-none focus:outline-none"
            >
              Login
            </button>
          </div>
        </nav>
      </div>

      {/* Conditional rendering of the dark overlay and login form */}
      {showLogin && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={handleCloseLogin} // Close the login form when clicking outside the form
        >
          {/* Stop click propagation to prevent closing the form when clicking inside it */}
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <AuthSystem /> {/* The AuthSystem component appears in the center */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
