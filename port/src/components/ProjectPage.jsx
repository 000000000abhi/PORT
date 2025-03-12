import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"
import { FaGithub, FaArrowLeft } from "react-icons/fa"

// Using the projects data you provided
const projects = [
  {
    id: 1,
    title: "BookFusion",
    description:
      "Book Fusion is a MERN stack web app for book enthusiasts, featuring user authentication, a curated book library, advanced search, and personalized recommendations. It also includes a blogging platform to write and explore blogs about books. Machine learning integration is in progress to enhance recommendations and user experience.",
    image:
      "https://img.freepik.com/free-vector/flat-world-book-day-landing-page-template_23-2149309092.jpg?ga=GA1.1.369964002.1736404008&semt=ais_hybrid",
    githubUrl: "https://github.com/000000000abhi/backendd",
  },
  {
    id: 2,
    title: "U and I (NGO at J.P. Morgan Code for Good )",
    description:
      "U and I is a MERN stack web app designed to support first-generation learners. It offers essential features like user authentication, personalized learning resources, progress tracking, and a collaborative community space. Future updates include integrating machine learning for tailored learning recommendations and skill development insights.",
    image:
      "https://img.freepik.com/free-photo/college-students-cramming-outdoor_23-2149649371.jpg?ga=GA1.1.369964002.1736404008&semt=ais_hybrid",
    githubUrl: "https://github.com/yourusername/custom-cms",
  },
  {
    id: 3,
    title: "Automated Attendance System",
    description:
      "Smart Attendance System is a Python-based application built with Tkinter that automates attendance tracking. It utilizes the Haar Cascade Classifier for real-time face detection and recognition, ensuring accurate and efficient attendance management. The system includes a user-friendly interface, attendance logs, and customizable features for seamless integration into various environments.",
    image:
      "https://img.freepik.com/free-vector/hand-with-mobile-face-scan-man_24908-56384.jpg?ga=GA1.1.369964002.1736404008&semt=ais_hybrid",
    githubUrl: "https://github.com/000000000abhi/Face-recognition",
  },
]

function ProjectPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [visitedGitHub, setVisitedGitHub] = useState(false)

  const project = projects.find((p) => p.id === Number.parseInt(id))

  useEffect(() => {
    if (!project) {
      navigate("/projects")
    }

    const handlePopState = (event) => {
      if (visitedGitHub) {
        event.preventDefault()
        navigate("/projects")
      }
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [project, navigate, visitedGitHub])

  const handleGitHubClick = () => {
    setVisitedGitHub(true)
    window.open(project.githubUrl, "_blank")
  }

  if (!project) return null

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/projects"
          className={`inline-flex items-center mb-6 ${
            isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>
        <div className={`rounded-lg shadow-lg overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
              {project.title}
            </h1>
            <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
            <div className="flex space-x-4">
              <button
                onClick={handleGitHubClick}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </button>
              <Link
                to="/projects"
                className={`inline-flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                <FaArrowLeft className="mr-2" />
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage

