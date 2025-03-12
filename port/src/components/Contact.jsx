import React from "react"
import PageLayout from "./PageLayout"
import { useTheme } from "../contexts/ThemeContext"

function Contact() {
  const { isDarkMode } = useTheme()

  return (
    <PageLayout title="Get in Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            I'm always excited to take on new challenges and collaborate on innovative projects. Whether you have a
            specific project in mind or just want to discuss the possibilities, I'm here to help turn your ideas into
            reality.
          </p>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Let's connect and explore how we can work together to create something amazing. Feel free to reach out
            through any of the contact methods below, and I'll get back to you as soon as possible.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className={`w-5 h-5 mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              +91-6299774839
            </li>
            <li className="flex items-center">
              <svg
                className={`w-5 h-5 mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              ak4492473@gmail.com
            </li>
            <li className="flex items-center">
              <svg
                className={`w-5 h-5 mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Clement Town, Dehradun
            </li>
          </ul>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full p-2 rounded ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`w-full p-2 rounded ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className={`w-full p-2 rounded ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          ></textarea>
          <button
            type="submit"
            className={`${
              isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
            } px-6 py-2 rounded transition-colors`}
          >
            Send Message
          </button>
        </form>
      </div>
    </PageLayout>
  )
}

export default Contact

