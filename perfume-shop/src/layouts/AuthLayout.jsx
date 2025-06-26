import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or default to true (dark mode)
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900"
            : "bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100"
        }`}
      >
        {/* Floating perfume bottles animation */}
        <div
          className={`absolute top-10 left-10 w-4 h-8 bg-gradient-to-b ${
            isDarkMode
              ? "from-pink-400 to-purple-500"
              : "from-pink-500 to-purple-600"
          } rounded-full opacity-20 animate-bounce`}
        ></div>
        <div
          className={`absolute top-32 right-20 w-3 h-6 bg-gradient-to-b ${
            isDarkMode
              ? "from-purple-400 to-pink-500"
              : "from-purple-500 to-pink-600"
          } rounded-full opacity-30 animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 left-20 w-5 h-10 bg-gradient-to-b ${
            isDarkMode
              ? "from-indigo-400 to-purple-500"
              : "from-indigo-500 to-purple-600"
          } rounded-full opacity-25 animate-bounce`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute bottom-40 right-32 w-3 h-7 bg-gradient-to-b ${
            isDarkMode
              ? "from-pink-400 to-indigo-500"
              : "from-pink-500 to-indigo-600"
          } rounded-full opacity-20 animate-pulse`}
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating sparkles */}
        <div
          className={`absolute top-1/4 left-1/3 w-2 h-2 ${
            isDarkMode ? "bg-white" : "bg-yellow-400"
          } rounded-full opacity-60 animate-ping`}
        ></div>
        <div
          className={`absolute top-3/4 left-1/4 w-1 h-1 ${
            isDarkMode ? "bg-yellow-300" : "bg-orange-400"
          } rounded-full opacity-70 animate-ping`}
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className={`absolute top-1/2 right-1/4 w-1.5 h-1.5 ${
            isDarkMode ? "bg-pink-300" : "bg-pink-500"
          } rounded-full opacity-50 animate-ping`}
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Large decorative perfume bottle silhouette */}
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 opacity-10">
          <div
            className={`w-32 h-64 bg-gradient-to-b ${
              isDarkMode
                ? "from-white to-transparent"
                : "from-gray-800 to-transparent"
            } rounded-t-full`}
          >
            <div
              className={`w-8 h-12 ${
                isDarkMode ? "bg-white" : "bg-gray-800"
              } mx-auto rounded-t-lg opacity-60`}
            ></div>
          </div>
        </div>

        {/* Left side decorative element */}
        <div className="absolute -left-16 top-1/3 opacity-10">
          <div
            className={`w-24 h-48 bg-gradient-to-b ${
              isDarkMode
                ? "from-white to-transparent"
                : "from-gray-800 to-transparent"
            } rounded-t-full transform rotate-12`}
          >
            <div
              className={`w-6 h-8 ${
                isDarkMode ? "bg-white" : "bg-gray-800"
              } mx-auto rounded-t-lg opacity-60`}
            ></div>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle - Top Right */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
          isDarkMode
            ? "bg-yellow-400/20 border-2 border-yellow-400/50 hover:bg-yellow-400/30 text-yellow-300"
            : "bg-purple-600/20 border-2 border-purple-600/50 hover:bg-purple-600/30 text-purple-600"
        } backdrop-blur-md hover:shadow-lg`}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Stylish Back Button - Top Left */}
      <Link
        to="/"
        className={`fixed top-6 left-6 z-50 group flex items-center space-x-2 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
          isDarkMode
            ? "bg-black/20 border border-purple-400/50 text-white hover:bg-black/30 hover:border-purple-300 hover:shadow-purple-500/50"
            : "bg-white/20 border border-purple-600/50 text-gray-800 hover:bg-white/30 hover:border-purple-500 hover:shadow-purple-600/50"
        }`}
      >
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Glassmorphism Auth Card */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Main card */}
            <div
              className={`relative backdrop-blur-xl border rounded-2xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-white/10 border-white/20"
                  : "bg-white/90 border-gray-200/50"
              }`}
            >
              {/* Header with animated logo */}
              <div className="text-center mb-8">
                {/* Animated perfume bottle logo */}
                <div className="mx-auto mb-4 w-16 h-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-lg"></div>
                      {/* Spray effect */}
                      <div className="absolute -top-1 -right-2 w-1 h-1 bg-pink-300 rounded-full opacity-60 animate-ping"></div>
                      <div
                        className="absolute -top-2 -right-1 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-70 animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Animated title */}
                <h1
                  className={`text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2 animate-fade-in ${
                    isDarkMode
                      ? "from-white via-pink-200 to-purple-200"
                      : "from-gray-800 via-purple-600 to-pink-600"
                  }`}
                >
                  Welcome to PerfumeShop
                </h1>

                {/* Subtitle with typing animation effect */}
                <p
                  className={`text-sm mb-2 animate-fade-in ${
                    isDarkMode ? "text-white/80" : "text-gray-600"
                  }`}
                  style={{ animationDelay: "0.5s" }}
                >
                  Discover your next signature scent
                </p>

                {/* Animated sparkle emojis */}
                <div className="flex justify-center space-x-1 text-lg">
                  <span className="animate-bounce">✨</span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    🌸
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  >
                    ✨
                  </span>
                </div>
              </div>

              {/* Form container with subtle animation */}
              <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AuthLayout;
