"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="border-t border-border pt-24">
      <div ref={ref} className="max-w-[900px] mx-auto px-6 md:px-12 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] text-primary mb-4"
        >
          // 01 — ABOUT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(52px,10vw,96px)] font-bold text-foreground tracking-tight leading-[0.9] mb-4"
        >
          PARTH
          <br />
          SHAH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-[0.4em] text-primary mb-8"
        >
          FULL STACK DEVELOPER & PROBLEM SOLVER
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-8 h-px bg-primary/25 mb-8 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm leading-relaxed text-muted-foreground max-w-[480px] space-y-4"
        >
          <p>
            I build fast, scalable, and beautiful web experiences with a passion for 
            clean code and innovative solutions. Currently pursuing my final year of{" "}
            <span className="text-primary">BCA</span> while working on real-world projects.
          </p>
          <p>
            Previously worked at{" "}
            <span className="text-primary">Jyoti Technosoft LLP</span> in 2025, 
            where I honed my skills in full-stack development and system design.
          </p>
          <p>
            Based in{" "}
            <span className="text-primary">Surat, Gujarat</span>, I specialize in the 
            MERN stack and love solving complex problems through elegant solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border"
        >
          {[
            { value: "2+", label: "Projects" },
            { value: "100+", label: "Problems Solved" },
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Technologies" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-[10px] tracking-widest text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
