"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, ChevronDown, Code2, Terminal, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

const roles = [
  "Full Stack Developer",
  "MERN Stack Ninja 🥷",
  "Code Sorcerer ✨",
  "System Architect",
  "React Specialist",
  "Problem Solver 🚀",
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    
    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
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
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-purple-400 animate-pulse" />
        </div>
      </section>
    )
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* SASUKE VIDEO BACKGROUND - FULL SCREEN */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/videos/sasuke-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />
      </div>

      {/* Animated Lightning Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: 3 + Math.random() * 5,
              height: 3 + Math.random() * 5,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 ? '#a855f7' : '#ec4899'
              }, transparent)`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px ${
                Math.random() > 0.5 ? '#a855f7' : '#ec4899'
              }`
            }}
          />
        ))}
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content - ENHANCED */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Clean Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-200">Available for Work</span>
            </motion.div>

            {/* Clean Name & Title */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-purple-400 font-mono text-sm"
              >
                Hello, I&apos;m
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <span className="block text-white">Parth Shah</span>
              </motion.h1>
            </div>

            {/* Clean Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-purple-300">
                {displayText}
                <motion.span 
                  className="text-purple-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Surat, Gujarat, India</span>
            </motion.div>

            {/* Stats - Glowing cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 py-6 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { label: "Projects", value: "10+", icon: Code2 },
                { label: "Tech Stack", value: "15+", icon: Terminal },
                { label: "Problems", value: "100+", icon: Zap }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 text-center">
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-purple-300/70 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Clean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link 
                href="#contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors duration-300"
              >
                Get in Touch
              </Link>
              
              <Link 
                href="#projects"
                className="px-8 py-3 border border-purple-500/50 hover:border-purple-400 rounded-lg font-semibold text-purple-300 hover:text-white transition-all duration-300 hover:bg-purple-500/10"
              >
                View Work
              </Link>
            </motion.div>

            {/* Social Links - Clean */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-4"
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-purple-500/20 bg-black/20 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-purple-300 hover:text-purple-200" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Professional Visual */}
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              {/* Simple elegant card */}
              <div className="relative p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-purple-500/20">
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                      { label: "Projects", value: "10+" },
                      { label: "Tech Stack", value: "15+" },
                      { label: "Problems", value: "100+" }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                  
                  {/* Tech stack icons */}
                  <div className="space-y-3">
                    <p className="text-xs text-purple-300 uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind'].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Enhanced */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{ delay: 1.5, y: { duration: 1.8, repeat: Infinity } }}
        >
          <Link href="#about" className="flex flex-col items-center gap-3 text-purple-300 hover:text-purple-100 transition-colors group">
            <span className="text-xs font-mono tracking-[0.3em] uppercase">Scroll Down</span>
            <div className="p-3 rounded-full border-2 border-purple-500/50 group-hover:border-purple-400 bg-purple-500/10 backdrop-blur-sm transition-all">
              <ChevronDown className="w-5 h-5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
