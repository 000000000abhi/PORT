import React from "react"
import { Link } from "react-router-dom"
import PageLayout from "./PageLayout"
import { useTheme } from "../contexts/ThemeContext"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from "framer-motion"
import { FaGithub, FaCode } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "BookFusion",
description:"Book Fusion is a MERN stack web app for book enthusiasts, featuring user authentication, a curated book library, advanced search, and personalized recommendations. It also includes a blogging platform to write and explore blogs about books. Machine learning integration is in progress to enhance recommendations and user experience.",
    image: "https://img.freepik.com/free-vector/flat-world-book-day-landing-page-template_23-2149309092.jpg?ga=GA1.1.369964002.1736404008&semt=ais_hybrid",
    githubUrl: "https://github.com/yourusername/ecommerce-redesign",
  },
  {
    id: 2,
    title: "U and I (NGO at J.P. Morgan Code for Good )",
    description:
      "U and I is a MERN stack web app designed to support first-generation learners. It offers essential features like user authentication, personalized learning resources, progress tracking, and a collaborative community space. Future updates include integrating machine learning for tailored learning recommendations and skill development insights.",
    image: "https://img.freepik.com/free-photo/college-students-cramming-outdoor_23-2149649371.jpg?ga=GA1.1.369964002.1736404008&semt=ais_hybrid",
    githubUrl: "https://github.com/yourusername/custom-cms",
  },
  {
    id: 3,
    title: "Automated Attendance System ",
    description:
      "Smart Attendance System is a Python-based application built with Tkinter that automates attendance tracking. It utilizes the Haar Cascade Classifier for real-time face detection and recognition, ensuring accurate and efficient attendance management. The system includes a user-friendly interface, attendance logs, and customizable features for seamless integration into various environments.",
    image: "https://img.freepik.com/free-vector/hand-with-mobile-face-scan-man_24908-56384.jpg?ga=GA1.1.369964002.1736404008&semt=ais_hybrid",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
  },
]

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/abhijeet_kumar27", solved: 970,rating :1872 },
  { name: "CodeChef", url: "https://www.codechef.com/users/abhijeet73", rating: 1497 },
  {name: "codeforces",url: "https://www.codechef.com/users/abhijeet73", rating: 1300}

]

const academicInfo = {
  overallCGPA:9.3,
  currentSemester: 6,
  totalSemesters: 8,
}

function Portfolio() {
  const { isDarkMode } = useTheme()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <PageLayout title="My Portfolio">
      <div className="space-y-16">
        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Featured Projects
          </h2>
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <Link to={`/project/${project.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} cursor-pointer`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {project.title}
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{project.description}</p>
                    <span
                      className={`inline-block ${
                        isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                      } px-4 py-2 rounded transition-colors`}
                    >
                      View Project
                    </span>
                  </motion.div>
                </Link>
              </div>
            ))}
          </Slider>
        </section>

        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Coding Profiles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {codingProfiles.map((profile) => (
              <motion.div
                key={profile.name}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {profile.name}
                </h3>
                <p className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {profile.name === "LeetCode" ? `Problems Solved: ${profile.solved},  
                  Rating: ${profile.rating}` : `Rating: ${profile.rating}`}
                </p>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${
                    isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                  } px-4 py-2 rounded transition-colors`}
                >
                  <FaCode className="mr-2" /> View Profile
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            Academic Performance
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Overall CGPA
                </h3>
                <p className={`text-3xl font-bold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                  {academicInfo.overallCGPA}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Current Semester
                </h3>
                <p className={`text-3xl font-bold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                  {academicInfo.currentSemester}
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Total Semesters
                </h3>
                <p className={`text-3xl font-bold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                  {academicInfo.totalSemesters}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            GitHub Contributions
          </h2>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <img src={`https://ghchart.rshah.org/000000000abhi`} alt="GitHub Contributions" className="w-full" />
            <div className="mt-4 text-center">
              <a
                href="https://github.com/000000000abhi"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${
                  isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
                } px-4 py-2 rounded transition-colors`}
              >
                <FaGithub className="mr-2" /> View GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default Portfolio

