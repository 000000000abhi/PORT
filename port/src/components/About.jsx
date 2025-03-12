"use client"
import PageLayout from "./PageLayout"
import { useTheme } from "../contexts/ThemeContext"
import { Code, Book, Trophy } from "lucide-react"

function About() {
  const { isDarkMode } = useTheme()

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
    {name: "cpp",level:95},
    {name: "java",level:85},
  ]

  return (
    <PageLayout title="About Me">
      <div className="grid md:grid-cols-2 gap-12 justify-center">
        <div className="space-y-6">
          <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Introduction</h3>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            As a full-stack developer with over 1 year of experience, I've had the privilege of working on a diverse
            range of projects. From sleek corporate websites to complex web applications, I bring a blend of technical
            expertise and creative problem-solving to every project I undertake.
          </p>
          <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
            My journey in web development began with a fascination for how things work behind the scenes. This curiosity
            has driven me to continuously learn and adapt to the ever-evolving landscape of web technologies.
          </p>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            I have also solved more than 1000 questions across several coding websites like LeetCode, CodeChef, and
            Codeforces.
          </p>
          <div className="mt-8">
            <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Key Skills</h4>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div className="flex justify-between mb-1">
                    <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full bg-gray-200 rounded-full h-2.5 ${isDarkMode ? "dark:bg-gray-700" : ""}`}>
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white shadow-lg"}`}>
            <div className="flex items-center mb-4">
              <Code className={`w-6 h-6 mr-2 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
              <h4 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Coding Experience
              </h4>
            </div>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              With expertise in MERN stack, Next.js, and Tailwind CSS, I've developed numerous web applications focusing
              on performance and user experience.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white shadow-lg"}`}>
            <div className="flex items-center mb-4">
              <Trophy className={`w-6 h-6 mr-2 ${isDarkMode ? "text-yellow-400" : "text-yellow-600"}`} />
              <h4 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Competitive Programming
              </h4>
            </div>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Solved 1000+ problems across LeetCode, CodeChef, and Codeforces, honing my problem-solving skills and
              algorithmic thinking.
            </p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white shadow-lg"}`}>
            <div className="flex items-center mb-4">
              <Book className={`w-6 h-6 mr-2 ${isDarkMode ? "text-green-400" : "text-green-600"}`} />
              <h4 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Continuous Learning
              </h4>
            </div>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Committed to staying updated with the latest web technologies and best practices through online courses,
              workshops, and personal projects.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default About
