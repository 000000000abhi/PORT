import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden py-8 ${
        isDarkMode ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-100 to-white"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute left-1/4 top-1/4 w-64 h-64 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-300"
          } rounded-full mix-blend-multiply filter blur-xl animate-pulse`}
        ></div>
        <div
          className={`absolute right-1/4 bottom-1/4 w-64 h-64 ${
            isDarkMode ? "bg-gray-600" : "bg-gray-400"
          } rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000`}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>Thank You</h2>
        <p
          className={`mb-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Thank you for taking the time to explore my portfolio. I hope it gives you a good sense of my skills,
          experience, and passion for web development. I'm always open to new opportunities and exciting projects.
        </p>
        <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          If you like what you see, let's connect and discuss how we can work together to bring your digital vision to
          life. Your next great web project is just a conversation away!
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* LinkedIn */}
          <a
            href="#"
            className={`hover:text-gray-600 dark:hover:text-gray-400 transition-colors ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://github.com/000000000abhi"
            className={`hover:text-gray-600 dark:hover:text-gray-400 transition-colors ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://github.com/000000000abhi"
            className={`hover:text-gray-600 dark:hover:text-gray-400 transition-colors ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.2c3.2 0 3.6.01 4.8.07 1.17.06 1.97.24 2.67.52.7.28 1.3.66 1.88 1.24.58.58.96 1.18 1.24 1.88.28.7.46 1.5.52 2.67.06 1.2.07 1.6.07 4.8s-.01 3.6-.07 4.8c-.06 1.17-.24 1.97-.52 2.67-.28.7-.66 1.3-1.24 1.88-.58.58-1.18.96-1.88 1.24-.7.28-1.5.46-2.67.52-1.2.06-1.6.07-4.8.07s-3.6-.01-4.8-.07c-1.17-.06-1.97-.24-2.67-.52-.7-.28-1.3-.66-1.88-1.24-.58-.58-.96-1.18-1.24-1.88-.28-.7-.46-1.5-.52-2.67-.06-1.2-.07-1.6-.07-4.8s.01-3.6.07-4.8c.06-1.17.24-1.97.52-2.67.28-.7.66-1.3 1.24-1.88.58-.58 1.18-.96 1.88-1.24.7-.28 1.5-.46 2.67-.52 1.2-.06 1.6-.07 4.8-.07zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/000000000abhi"
            className={`hover:text-gray-600 dark:hover:text-gray-400 transition-colors ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5c-5.3 0-9.6 4.3-9.6 9.6 0 4.3 2.8 8 6.7 9.3.5.1.7-.2.7-.6v-2.3c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6 0-.5.1-.6 1.3.1 2.3 1.4 2.3 1.4 1.1 1.9 2.8 1.4 3.5 1.1.1-.8.4-1.4.7-1.8-2.3-.3-4.7-1.1-4.7-5.2 0-1.1.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.8-1.4 2.8-1.1 2.8-1.1.6 1.4.3 2.5.1 2.8.7.8 1.1 1.8 1.1 2.9 0 4.1-2.5 4.9-4.8 5.2.4.5.7 1.2.7 1.8v2.3c0 .4.3.7.7.6 3.9-1.3 6.7-5 6.7-9.3 0-5.3-4.3-9.6-9.6-9.6z" />
            </svg>
          </a>
        </div>

        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          &copy; {new Date().getFullYear()} Abhijeet Ansal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
