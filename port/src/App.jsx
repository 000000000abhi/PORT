import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/PortfolioPage.jsx"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import "./App.css"
import { ThemeProvider } from "./contexts/ThemeContext.jsx"
import "./App.css"
import ProjectPage from "./components/ProjectPage"
import Hero from "./components/Hero.jsx"
function App() {
  return (
    <ThemeProvider>
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <CustomCursor />
        <Header />
        
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
       <Footer/>
        
      </div>      
    </Router>
    </ThemeProvider>
  )
}

export default App

