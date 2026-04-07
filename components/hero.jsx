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
            {/* Badge with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-purple-500/50 bg-purple-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <motion.span 
                className="w-2.5 h-2.5 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-purple-200 tracking-wider">AVAILABLE FOR HIRE</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Code tag */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-purple-300 font-mono text-base md:text-lg"
              >
                <span className="text-pink-400">{"<"}</span>
                <span className="text-purple-400">Hello</span>
                <span className="text-foreground"> World </span>
                <span className="text-pink-400">{"/>"}</span>
              </motion.p>
              
              {/* Name with MEGA glitch effect */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight"
              >
                <span className="block text-white/90 mb-2">I&apos;m</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-shimmer drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                  PARTH SHAH
                </span>
              </motion.h1>
            </div>

            {/* Typing Effect - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-14 flex items-center justify-center lg:justify-start"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-mono">
                <span className="text-purple-400">{"{ "}</span>
                <span className="text-pink-300 font-bold">{displayText}</span>
                <motion.span 
                  className="text-purple-500 font-bold"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
                <span className="text-purple-400">{" }"}</span>
              </span>
            </motion.div>

            {/* Location with icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-purple-500/20">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-purple-200 text-sm font-medium">Surat, Gujarat 🇮🇳</span>
              </div>
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

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link 
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  LET&apos;S CONNECT
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
              
              <Link 
                href="#projects"
                className="group px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 rounded-lg font-bold text-purple-300 hover:text-white transition-all duration-300 backdrop-blur-md hover:bg-purple-500/20 relative overflow-hidden"
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </motion.div>

            {/* Social Links - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-6"
            >
              {[
                { icon: Github, href: "https://github.com/ParthDevOp", label: "GitHub", color: "from-purple-500 to-pink-500" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/parth-shah-861abb316/", label: "LinkedIn", color: "from-blue-500 to-cyan-500" },
                { icon: Code2, href: "https://leetcode.com/u/parthdevop/", label: "LeetCode", color: "from-orange-500 to-yellow-500" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-3 rounded-xl border border-purple-500/30 bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity`} />
                  <social.icon className="w-6 h-6 text-purple-300 group-hover:text-white transition-colors relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - CRAZY 3D Animated Visual */}
          <motion.div 
            className="flex-1 flex items-center justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Outer rotating ring with gradient */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 p-[2px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ background: 'conic-gradient(from 0deg, #a855f7, #ec4899, #8b5cf6, #a855f7)' }}
              >
                <div className="w-full h-full rounded-full bg-black/40 backdrop-blur-sm" />
              </motion.div>
              
              {/* Sharingan-style rotating ring */}
              <motion.div 
                className="absolute inset-8 rounded-full border-2 border-purple-500/60 shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing inner glow */}
              <motion.div 
                className="absolute inset-16 rounded-full bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-purple-600/40 blur-2xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Center terminal display */}
              <div className="absolute inset-20 rounded-2xl bg-gradient-to-br from-black/80 to-purple-900/40 backdrop-blur-md border-2 border-purple-500/40 flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                <div className="text-center p-6 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Terminal className="w-16 h-16 mx-auto text-purple-400 mb-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                  <div className="font-mono text-sm text-purple-200 space-y-1.5">
                    <div><span className="text-pink-400">const</span> <span className="text-purple-300">dev</span> = {"{"}</div>
                    <div className="pl-4">name: <span className="text-green-400">&quot;Parth&quot;</span>,</div>
                    <div className="pl-4">stack: <span className="text-green-400">&quot;MERN&quot;</span>,</div>
                    <div className="pl-4">level: <span className="text-yellow-400">∞</span>,</div>
                    <div className="pl-4">status: <span className="text-cyan-400 animate-pulse">🚀 coding</span></div>
                    <div>{"}"}</div>
                  </div>
                </div>
                
                {/* Matrix rain effect overlay */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-purple-500 text-xs font-mono"
                      style={{ left: `${i * 25}%` }}
                      animate={{ y: ['-100%', '100%'] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    >
                      {[...Array(10)].map((_, j) => (
                        <div key={j}>{'01'}</div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Orbiting energy orbs */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear", delay: i * 0.3 },
                  }}
                  initial={{
                    x: Math.cos((angle * Math.PI) / 180) * 180,
                    y: Math.sin((angle * Math.PI) / 180) * 180,
                  }}
                />
              ))}
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
