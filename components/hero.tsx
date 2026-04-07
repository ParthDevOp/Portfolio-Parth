"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "Problem Solver",
  "System Designer",
  "Code Craftsman",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Typing effect
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

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: 0 
            }}
            animate={{ 
              y: -10,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-primary/80 uppercase font-mono">
                {"<Hello World />"}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            >
              <span className="block text-foreground">{"I'm"}</span>
              <span className="block animate-shimmer">PARTH</span>
              <span className="block text-foreground">SHAH</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-8 mb-6"
            >
              <span className="text-lg md:text-xl font-mono text-muted-foreground">
                {displayText}
                <span className="animate-blink text-primary">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm md:text-base text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building exceptional digital experiences with clean code, 
              modern technologies, and a passion for problem-solving. 
              Based in <span className="text-primary">Surat, Gujarat</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                <span className="relative z-10">GET IN TOUCH</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-400 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-primary/30 text-foreground font-semibold text-sm tracking-wider rounded-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                VIEW WORK
              </a>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "2+", label: "Projects" },
                { value: "100+", label: "Problems Solved" },
                { value: "10+", label: "Technologies" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] tracking-wider text-muted-foreground uppercase">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Sasuke Image with Sharingan Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-purple-600/20 blur-3xl animate-pulse" />
            </div>

            {/* Sharingan Ring Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] animate-sharingan"
                viewBox="0 0 200 200"
              >
                <defs>
                  <linearGradient id="sharinganGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  fill="none" 
                  stroke="url(#sharinganGradient)" 
                  strokeWidth="2"
                  strokeDasharray="20 10"
                />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="80" 
                  fill="none" 
                  stroke="url(#sharinganGradient)" 
                  strokeWidth="1"
                  strokeDasharray="5 15"
                  opacity="0.5"
                />
                {/* Tomoe patterns */}
                {[0, 120, 240].map((angle) => (
                  <g key={angle} transform={`rotate(${angle} 100 100)`}>
                    <circle cx="100" cy="25" r="8" fill="#a855f7" opacity="0.8" />
                    <path 
                      d="M100 25 Q 115 50 100 70" 
                      fill="none" 
                      stroke="#a855f7" 
                      strokeWidth="3"
                      opacity="0.6"
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Inner Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-primary/20 animate-pulse-glow" />
            </div>

            {/* Image Container */}
            <motion.div
              className="relative w-[260px] h-[350px] md:w-[320px] md:h-[430px] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/sasuke.jpg"
                alt="Sasuke Uchiha - Portfolio Hero"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-background" />
            </motion.div>

            {/* Floating Text Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -left-4 md:left-0 bottom-20 bg-card/80 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-sm"
            >
              <span className="text-[10px] tracking-wider text-primary font-mono">{"<Developer />"}</span>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="absolute -right-4 md:right-0 top-20 bg-card/80 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-sm"
            >
              <span className="text-[10px] tracking-wider text-muted-foreground font-mono">BCA Final Year</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="stroke-current">
              <rect x="1" y="1" width="18" height="28" rx="9" strokeWidth="2"/>
              <motion.circle 
                cx="10" 
                cy="10" 
                r="3" 
                fill="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
