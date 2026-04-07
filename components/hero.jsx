"use client"

import { useEffect, useState, useRef } from "react"
import { Github, Linkedin, MapPin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
  "Web Developer",
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
        <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </section>
    )
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Video Background - Very Subtle */}
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
        
        {/* Dark overlay for professional look */}
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Professional */}
          <div className="space-y-8">
            
            {/* Status Badge - Minimal */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-gray-300">Available for Work</span>
            </div>

            {/* Name - Clean Typography */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm uppercase tracking-wider">Hello, I'm</p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Parth Shah
              </h1>
              
              {/* Role with Typing */}
              <div className="flex items-center gap-2 text-2xl sm:text-3xl text-gray-300">
                <span>{displayText}</span>
                <span className="w-0.5 h-7 bg-purple-500 animate-pulse" />
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Surat, Gujarat, India</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Specializing in building modern web applications using the MERN stack. 
              Focused on writing clean, maintainable code and delivering exceptional user experiences.
            </p>

            {/* CTA Buttons - Professional */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
              
              <Link 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-md transition-colors font-medium"
              >
                View Projects
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Links - Minimal */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://github.com/ParthDevOp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/parth-shah-861abb316/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Professional Stats */}
          <div className="space-y-6">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "15+" },
                { label: "Problems Solved", value: "100+" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Python'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-sm rounded-md bg-white/10 text-gray-300 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Education</h3>
              <p className="text-gray-300 font-medium">Bachelor of Computer Applications</p>
              <p className="text-sm text-gray-400 mt-1">Final Year • Surat, Gujarat</p>
            </div>
          </div>

        </div>

        {/* Scroll Indicator - Minimal */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
