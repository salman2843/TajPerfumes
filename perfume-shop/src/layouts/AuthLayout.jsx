import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-300">
      <div className="bg-green p-6 rounded shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
