import React, { useState, useEffect, useRef } from "react"
import { useTheme } from "../contexts/ThemeContext"

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null)
  const dropsRef = useRef([])
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const createDrops = () => {
      dropsRef.current = Array.from({ length: 10 }, () => ({
        x: position.x,
        y: position.y,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        alpha: 1,
      }))
    }

    const animateDrops = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dropsRef.current.forEach((drop, index) => {
        drop.x += drop.dx
        drop.y += drop.dy
        drop.alpha -= 0.02

        if (drop.alpha <= 0) {
          dropsRef.current[index] = {
            x: position.x,
            y: position.y,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 2 + 1,
            alpha: 1,
          }
        } else {
          ctx.beginPath()
          ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${isDarkMode ? "255, 255, 255" : "0, 0, 0"}, ${drop.alpha})`
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(animateDrops)
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    addEventListeners()
    createDrops()
    animateDrops()

    return () => {
      removeEventListeners()
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDarkMode, position]) // Added position to the dependency array

  useEffect(() => {
    dropsRef.current.forEach((drop) => {
      drop.x = position.x
      drop.y = position.y
    })
  }, [position])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-40" />
      <div
        className="w-3 h-3 bg-black dark:bg-white rounded-full fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-90%, -90%)",
        }}
      />
    </>
  )
}

export default CustomCursor

