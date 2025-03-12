import React from "react"
import { useTheme } from "../contexts/ThemeContext"

function PageLayout({ children, title }) {
  const { isDarkMode } = useTheme()

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 to-white text-black"
      } relative overflow-hidden`}
    >
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
      <div className="container mx-auto px-6 py-12 z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
        {children}
      </div>
    </section>
  )
}

export default PageLayout

