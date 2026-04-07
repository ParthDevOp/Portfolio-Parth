"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2025",
    role: "Full Stack Developer",
    company: "Jyoti Technosoft LLP",
    description: "Worked on full-stack web development projects, collaborating with teams to deliver scalable solutions. Gained hands-on experience with MERN stack and modern development practices.",
    skills: ["React", "Node.js", "MongoDB", "Express.js", "REST APIs"],
  },
  {
    period: "2023 — Present",
    role: "BCA Student",
    company: "Final Year",
    description: "Pursuing Bachelor of Computer Applications with focus on software development, data structures, algorithms, and system design. Actively participating in coding competitions and hackathons.",
    skills: ["DSA", "System Design", "Python", "Database Management"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="border-t border-border">
      <div ref={ref} className="max-w-[900px] mx-auto px-6 md:px-12 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] text-primary mb-4"
        >
          // 04 — EXPERIENCE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-foreground tracking-tight mb-2"
        >
          Experience & Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-8 h-px bg-primary/25 mb-8 origin-left"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 p-6 border border-border rounded-sm bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="text-xs tracking-widest text-muted-foreground">
                {exp.period}
              </div>

              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary/80">{exp.company}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2 py-1 border border-primary/20 rounded-sm text-primary/60 tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground mb-4">
            Resume will be added soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}
