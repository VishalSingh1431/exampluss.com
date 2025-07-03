import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaBook, 
  FaClipboardList, 
  FaUser, 
  FaSignInAlt, 
  FaHome,
  FaSearch 
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Replace with actual auth state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="ExamPlus Logo"
                className="h-10 w-10 mr-2 object-contain"
              />
              <span className="text-xl font-bold hidden sm:inline">ExamPlus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`
              }
            >
              <FaHome className="mr-1" /> Home
            </NavLink>
            
            <NavLink 
              to="/exams" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`
              }
            >
              <FaBook className="mr-1" /> Exam Papers
            </NavLink>
            
            <NavLink 
              to="/tests" 
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive ? 'bg-blue-800' : 'hover:bg-blue-600'}`
              }
            >
              <FaClipboardList className="mr-1" /> Practice Tests
            </NavLink>

            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full text-sm text-gray-800 focus:outline-none w-64"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </div>

          {/* Auth Links */}
          <div className="hidden md:block ml-4">
            {isLoggedIn ? (
              <NavLink 
                to="/dashboard" 
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center hover:bg-blue-600"
              >
                <FaUser className="mr-1" /> Dashboard
              </NavLink>
            ) : (
              <div className="flex space-x-2">
                <NavLink 
                  to="/login" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
                >
                  Login
                </NavLink>
                <NavLink 
                  to="/register" 
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-700 hover:bg-gray-100"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium flex items-center hover:bg-blue-600"
            >
              <FaHome className="mr-2" /> Home
            </NavLink>
            
            <NavLink 
              to="/exams" 
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium flex items-center hover:bg-blue-600"
            >
              <FaBook className="mr-2" /> Exam Papers
            </NavLink>
            
            <NavLink 
              to="/tests" 
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium flex items-center hover:bg-blue-600"
            >
              <FaClipboardList className="mr-2" /> Practice Tests
            </NavLink>

            <div className="pt-4 border-t border-blue-700">
              {isLoggedIn ? (
                <NavLink 
                  to="/dashboard" 
                  onClick={toggleMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium flex items-center hover:bg-blue-600"
                >
                  <FaUser className="mr-2" /> Dashboard
                </NavLink>
              ) : (
                <>
                  <NavLink 
                    to="/login" 
                    onClick={toggleMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium flex items-center hover:bg-blue-600"
                  >
                    <FaSignInAlt className="mr-2" /> Login
                  </NavLink>
                  <NavLink 
                    to="/register" 
                    onClick={toggleMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium flex items-center bg-white text-blue-700 mt-2"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;