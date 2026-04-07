"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    num: "01",
    name: "MERN Stack Project",
    description: "Full-stack web application with modern architecture featuring user authentication, RESTful APIs, and responsive design. Built with React, Node.js, Express, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/ParthDevOp",
    live: "https://github.com/ParthDevOp",
    featured: true,
  },
  {
    num: "02",
    name: "Web Application",
    description: "Another impressive project showcasing problem-solving skills and clean code practices. Features modern UI/UX with seamless user experience.",
    tags: ["JavaScript", "Tailwind CSS", "API Integration", "Responsive"],
    image: "/api/placeholder/600/400",
    github: "https://github.com/ParthDevOp",
    live: "https://github.com/ParthDevOp",
    featured: true,
  },
  {
    num: "03",
    name: "LeetCode Solutions",
    description: "Collection of 100+ algorithm and data structure solutions. Continuously solving problems in Python to improve problem-solving skills and algorithmic thinking.",
    tags: ["Python", "DSA", "Algorithms", "Problem Solving"],
    image: "/api/placeholder/600/400",
    github: "https://leetcode.com/u/parthdevop/",
    live: "https://leetcode.com/u/parthdevop/",
    featured: false,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary font-mono mb-4 block">
            {"// 03 — PORTFOLIO"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Selected </span>
            <span className="animate-shimmer">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A showcase of my recent projects and contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`
                relative overflow-hidden rounded-2xl bg-card border border-border
                transition-all duration-500
                ${hoveredIndex === i ? 'border-primary/50 shadow-[0_0_50px_rgba(168,85,247,0.15)]' : 'hover:border-primary/30'}
              `}>
                {/* Project Number */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                    {project.num}
                  </span>
                </div>

                {/* Content */}
                <div className="relative p-8 pt-16">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                  </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ 
                    x: hoveredIndex === i ? 0 : -5,
                    y: hoveredIndex === i ? 0 : 5,
                    opacity: hoveredIndex === i ? 1 : 0.3
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-pink-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://leetcode.com/u/parthdevop/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-card to-pink-500/10 border border-border hover:border-primary/30 transition-all duration-500"
          >
            <div className="p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  LeetCode Problem Solving
                </h3>
                <p className="text-sm text-muted-foreground">
                  100+ problems solved in Python - Data Structures, Algorithms, and Competitive Programming
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span className="text-sm tracking-wider">View Profile</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ParthDevOp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/30 text-foreground rounded-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm tracking-widest">VIEW ALL PROJECTS ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
