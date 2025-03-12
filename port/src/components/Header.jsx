import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Projects", "Contact"]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "bg-gray-900 shadow-lg shadow-gray-800/50"
            : "bg-white shadow-lg shadow-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          } hover:text-gray-600 transition-colors duration-300 transform hover:scale-105`}
        >
          ABHI
        </Link>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} className={isDarkMode ? "text-white" : "text-black"} /> : <Menu size={28} className={isDarkMode ? "text-white" : "text-black"} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-gray-600 transition-colors duration-300 relative group`}
              >
                {item}
                <motion.span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 ${
                    isDarkMode ? "bg-white" : "bg-black"
                  } transform origin-left`}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 ${
                    isDarkMode ? "bg-white" : "bg-black"
                  } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                />
              </Link>
            </li>
          ))}
          <li>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${
                isDarkMode ? "bg-white text-black" : "bg-black text-white"
              } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode ? "focus:ring-white" : "focus:ring-black"
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </motion.button>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <ul className="flex flex-col space-y-6 items-center mt-20">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg hover:text-gray-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white text-black transition-colors duration-300"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </motion.button>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default Header
