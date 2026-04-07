"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: position.x - (isHovering ? 20 : 6),
          y: position.y - (isHovering ? 20 : 6),
          scale: isHovering ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            isHovering
              ? "w-10 h-10 border-primary/50 bg-primary/10"
              : "w-3 h-3 border-primary"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 20px rgba(0,229,195,0.3)"
              : "0 0 10px rgba(0,229,195,0.5)",
          }}
        />
      </motion.div>
    </>
  )
}
