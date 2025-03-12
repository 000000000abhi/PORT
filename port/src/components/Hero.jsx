import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { ChevronDown } from "lucide-react";
import BannerImage from "../assets/Banner.jpg"; // Ensure correct import

export default function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Section */}
        <div className="space-y-8">
          <div className="w-20 h-1 bg-blue-500" />
          <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Hi, I'm Abhijeet, <br /> 
            Web Developer & CP Enthusiast
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Passionate about building scalable web applications and solving complex algorithmic problems.
            Skilled in <strong>React, Node.js, MongoDB</strong>, and <strong>Data Structures & Algorithms</strong>.
          </p>
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            View My Work
          </Link>
        </div>

        {/* Right Column - Image Section */}
        <div className="flex justify-center md:justify-end animate-fade-in">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 rounded-full ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-500 to-purple-600"
                  : "bg-gradient-to-br from-yellow-400 to-pink-500"
              } opacity-30 blur-2xl transform scale-110`}
            ></div>

            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
              <img
                src={BannerImage} 
                alt="Developer Portrait"
                className="w-full h-full object-cover animate-float"
                onError={(e) => (e.target.src = "https://via.placeholder.com/500")}
              />
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
