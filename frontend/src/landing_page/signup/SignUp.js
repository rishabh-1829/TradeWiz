import React from "react";

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
          🚀 Sign Up
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          We’re working hard to bring you the best signup experience.  
          <span className="font-semibold text-gray-800"> Coming very soon!</span>
        </p>

        {/* Under Development Box */}
        <div className="p-4 mb-6 border-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium animate-pulse shadow-inner">
          🚧 Under Development
        </div>

        {/* Divider */}
        <div className="my-6 border-t-2 border-gray-200"></div>

        {/* Explore Homepage */}
        <p className="text-sm text-gray-500">
          In the meantime, explore our{" "}
          <a
            href="/"
            className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-300"
          >
            homepage
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SignUp;
