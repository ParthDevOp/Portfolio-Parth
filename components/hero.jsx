"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, ChevronDown, Code2, Terminal } from "lucide-react"
import Link from "next/link"

const roles = [
  "Full Stack Developer",
  "MERN Specialist",
  "Problem Solver",
  "System Designer",
  "React Expert"
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, mounted])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </section>
    )
  }

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-300">Available for Work</span>
            </motion.div>

            {/* Name with glitch effect */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-purple-400 font-mono text-lg"
              >
                {"<Hello World />"}
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="text-foreground">I&apos;m </span>
                <span className="animate-shimmer glitch">Parth Shah</span>
              </motion.h1>
            </div>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-mono">
                {"{ "}
                <span className="text-purple-400">{displayText}</span>
                <span className="animate-blink text-purple-500">|</span>
                {" }"}
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Surat, Gujarat, India</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-4"
            >
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "LeetCode", value: "100+" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400 neon-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                href="#contact"
                className="group relative px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_100%] animate-shimmer" />
              </Link>
              
              <Link 
                href="#projects"
                className="px-8 py-3 border border-purple-500/50 hover:border-purple-400 rounded-lg font-semibold text-purple-400 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm hover:bg-purple-500/10"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/ParthDevOp", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/parth-shah-861abb316/", label: "LinkedIn" },
                { icon: Code2, href: "https://leetcode.com/u/parthdevop/", label: "LeetCode" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400 text-purple-400 hover:text-purple-300 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring with glow */}
              <motion.div 
                className="absolute inset-4 rounded-full border border-purple-500/50 animate-energy-pulse"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner glow */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-purple-600/20 blur-xl" />
              
              {/* Code display */}
              <div className="absolute inset-12 rounded-full bg-black/60 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center overflow-hidden">
                <div className="text-center p-4">
                  <Terminal className="w-12 h-12 mx-auto text-purple-400 mb-2" />
                  <div className="font-mono text-xs text-purple-300/80 space-y-1">
                    <div><span className="text-pink-400">const</span> dev = {"{"}</div>
                    <div className="pl-2">name: <span className="text-green-400">&quot;Parth&quot;</span>,</div>
                    <div className="pl-2">role: <span className="text-green-400">&quot;MERN&quot;</span>,</div>
                    <div className="pl-2">status: <span className="text-yellow-400">active</span></div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-purple-500 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-8px',
                    marginLeft: '-8px',
                  }}
                  animate={{
                    rotate: 360,
                    x: [0, Math.cos(i * Math.PI / 2) * 120],
                    y: [0, Math.sin(i * Math.PI / 2) * 120],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear", delay: i * 2 },
                    x: { duration: 0 },
                    y: { duration: 0 },
                  }}
                  initial={{
                    x: Math.cos(i * Math.PI / 2) * 120,
                    y: Math.sin(i * Math.PI / 2) * 120,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
        >
          <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-purple-400 transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
