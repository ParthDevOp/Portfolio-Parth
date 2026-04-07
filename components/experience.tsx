"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Jyoti Technosoft LLP",
    location: "Surat, Gujarat",
    period: "2025",
    description: "Worked on full-stack web development projects using the MERN stack. Collaborated with teams to deliver scalable solutions, implemented RESTful APIs, and contributed to system design decisions.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications",
    company: "University",
    location: "Surat, Gujarat",
    period: "Final Year",
    description: "Pursuing BCA with focus on computer science fundamentals, programming, database management, and software development. Active participant in coding competitions and tech events.",
    skills: ["DSA", "DBMS", "Software Engineering", "Web Development"],
    icon: GraduationCap,
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary font-mono mb-4 block">
            {"// 04 — JOURNEY"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Experience & </span>
            <span className="animate-shimmer">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-pink-500 to-primary opacity-30" />

          {experiences.map((exp, i) => {
            const Icon = exp.icon
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                    className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'} pl-24 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      {/* Type Badge */}
                      <span className={`inline-block text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-4 ${
                        exp.type === 'work' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-pink-500/20 text-pink-400'
                      }`}>
                        {exp.type}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className="text-primary font-medium mb-3">{exp.company}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-1 rounded-sm bg-secondary text-muted-foreground tracking-wider"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Want to know more about my experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider rounded-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            REQUEST RESUME
          </a>
        </motion.div>
      </div>
    </section>
  )
}
