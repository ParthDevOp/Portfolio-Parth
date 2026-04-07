"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const technologies = [
  { name: "React", icon: "/tech/react.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "/tech/nodejs.svg", color: "#339933" },
  { name: "MongoDB", icon: "/tech/mongodb.svg", color: "#47A248" },
  { name: "Express.js", icon: "/tech/express.svg", color: "#ffffff" },
  { name: "JavaScript", icon: "/tech/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/tech/typescript.svg", color: "#3178C6" },
  { name: "Python", icon: "/tech/python.svg", color: "#3776AB" },
  { name: "SQL", icon: "/tech/sql.svg", color: "#4479A1" },
  { name: "PHP", icon: "/tech/php.svg", color: "#777BB4" },
  { name: "HTML5", icon: "/tech/html5.svg", color: "#E34F26" },
  { name: "CSS3", icon: "/tech/css3.svg", color: "#1572B6" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.svg", color: "#06B6D4" },
  { name: "Git", icon: "/tech/git.svg", color: "#F05032" },
  { name: "GitHub", icon: "/tech/github.svg", color: "#ffffff" },
  { name: "System Design", icon: "/tech/system.svg", color: "#00e5c3" },
  { name: "DSA", icon: "/tech/dsa.svg", color: "#ff6b6b" },
]

export function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tech" className="border-t border-border">
      <div ref={ref} className="max-w-[900px] mx-auto px-6 md:px-12 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] text-primary mb-4"
        >
          // 02 — STACK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-foreground tracking-tight mb-2"
        >
          Technologies
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-8 h-px bg-primary/25 mb-8 origin-left"
        />

        {/* Tech Grid with rounded logos */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              className="group relative flex flex-col items-center"
            >
              <div 
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg overflow-hidden"
                style={{ 
                  boxShadow: `0 0 0 rgba(${tech.color === '#ffffff' ? '255,255,255' : '0,229,195'}, 0)`,
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
                
                {/* Icon placeholder - using text fallback */}
                <span 
                  className="text-lg md:text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.name.charAt(0)}
                </span>
              </div>

              {/* Text reveal on hover */}
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                className="mt-2 text-[9px] md:text-[10px] tracking-wider text-muted-foreground text-center group-hover:text-primary transition-colors duration-300"
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {[
            'React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'PHP', 
            'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Axios', 'REST APIs',
            'System Design', 'DSA in Python', 'Git & GitHub', 'Framer Motion'
          ].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.03 }}
              className="text-[11px] tracking-wider px-4 py-2 border border-border rounded-sm bg-card text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
