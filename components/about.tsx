"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"

const highlights = [
  { icon: MapPin, label: "Location", value: "Surat, Gujarat" },
  { icon: Calendar, label: "Experience", value: "1+ Years" },
  { icon: Briefcase, label: "Company", value: "Jyoti Technosoft" },
  { icon: GraduationCap, label: "Education", value: "BCA Final Year" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div ref={ref} className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              variants={itemVariants}
              className="text-[10px] tracking-[0.5em] text-primary font-mono mb-4 block"
            >
              {"// 01 — ABOUT ME"}
            </motion.span>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Turning Ideas Into </span>
              <span className="animate-shimmer">Reality</span>
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full mb-8"
            />

            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                {"Hi! I'm"} <span className="text-primary font-semibold">Parth Shah</span>, a passionate 
                Full Stack Developer from Surat, Gujarat. I specialize in building modern, 
                scalable web applications using the <span className="text-primary">MERN Stack</span>.
              </p>
              <p>
                Currently in my final year of <span className="text-primary">BCA</span>, I combine 
                academic knowledge with real-world experience gained at{" "}
                <span className="text-primary">Jyoti Technosoft LLP</span> in 2025.
              </p>
              <p>
                When {"I'm"} not coding, you can find me solving problems on LeetCode, 
                exploring new technologies, or contributing to open-source projects.
                I believe in writing clean, efficient code that makes a difference.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wider rounded-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                {"Let's Connect"}
              </a>
              <a
                href="https://github.com/ParthDevOp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-foreground font-semibold text-sm tracking-wider rounded-sm hover:bg-primary/10 transition-all duration-300"
              >
                View GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-[10px] tracking-wider text-muted-foreground uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              )
            })}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="col-span-2 p-6 rounded-xl bg-gradient-to-br from-primary/20 via-card to-pink-500/10 border border-primary/20"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "2+", label: "Projects Built" },
                  { value: "100+", label: "Problems Solved" },
                  { value: "15+", label: "Technologies" },
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + i * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="text-3xl md:text-4xl font-bold text-primary mb-1"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-[10px] tracking-wider text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
