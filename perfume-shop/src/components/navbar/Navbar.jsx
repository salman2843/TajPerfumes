import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { House, ShoppingCart } from "lucide-react";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </Link>
  );

  const LogoutButton = () => (
    <button
      onClick={logout}
      className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
    >
      <span className="relative z-10">Logout</span>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-lg border-b border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <span className="relative text-white">
              PerfumeShop
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
            </span>
          </Link>
          /* Desktop Navigation */
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">
              <span className="flex items-center space-x-1">
                <House />
                <span>Home</span>
              </span>
            </NavLink>
            <NavLink to="/cart">
              <span className="flex items-center space-x-1">
                <ShoppingCart />
                <span>Cart</span>
              </span>
            </NavLink>

            {!user ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-0.5 group hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  <Link
                    to="/signup"
                    className="block bg-black text-white px-6 py-2 rounded-full font-medium transition-all duration-300 group-hover:bg-transparent group-hover:text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/orders">My Orders</NavLink>
                <LogoutButton />
              </>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-lg border-t border-gray-700 shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to="/cart"
              className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
            >
              Cart
            </Link>

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/orders"
                  className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  My Orders
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
