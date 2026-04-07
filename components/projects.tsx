"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    num: "01",
    name: "Project One",
    description: "Full-stack web application with modern architecture, responsive design, and seamless user experience. Built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/ParthDevOp",
  },
  {
    num: "02",
    name: "Project Two",
    description: "Another impressive project showcasing problem-solving skills and clean code practices. Check out the repository for more details.",
    tags: ["JavaScript", "Tailwind CSS", "API Integration"],
    link: "https://github.com/ParthDevOp",
  },
  {
    num: "03",
    name: "LeetCode Solutions",
    description: "Collection of algorithm and data structure solutions. Continuously solving problems to improve problem-solving skills.",
    tags: ["Python", "DSA", "Algorithms", "Problem Solving"],
    link: "https://leetcode.com/u/parthdevop/",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="border-t border-border">
      <div ref={ref} className="max-w-[900px] mx-auto px-6 md:px-12 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] text-primary mb-4"
        >
          // 03 — WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-foreground tracking-tight mb-2"
        >
          Selected Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-8 h-px bg-primary/25 mb-8 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.num}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group relative border border-border rounded-sm p-6 bg-card transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 overflow-hidden"
            >
              {/* Animated border line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="text-[10px] tracking-[0.4em] text-primary/60 mb-4">
                {project.num} //
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <p className="text-xs leading-relaxed text-muted-foreground mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 border border-primary/20 rounded-sm text-primary/60 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/ParthDevOp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            VIEW MORE ON GITHUB
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
