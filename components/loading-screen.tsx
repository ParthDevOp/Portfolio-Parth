"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          {/* Sharingan Loader */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <svg 
              className="w-24 h-24 animate-sharingan"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="url(#loaderGradient)" 
                strokeWidth="2"
                strokeDasharray="10 5"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="35" 
                fill="none" 
                stroke="url(#loaderGradient)" 
                strokeWidth="1.5"
                opacity="0.6"
              />
              {/* Tomoe */}
              {[0, 120, 240].map((angle) => (
                <g key={angle} transform={`rotate(${angle} 50 50)`}>
                  <circle cx="50" cy="12" r="6" fill="#a855f7" />
                </g>
              ))}
              {/* Center */}
              <circle cx="50" cy="50" r="8" fill="#a855f7" />
            </svg>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <h1 className="text-2xl font-bold tracking-wider">
              <span className="text-primary">P</span>
              <span className="text-foreground">ARTH</span>
              <span className="text-primary">.</span>
            </h1>
            <p className="text-[10px] tracking-[0.4em] text-muted-foreground mt-2">
              LOADING EXPERIENCE
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 w-48"
          >
            <div className="h-px bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-pink-500 to-primary"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-[10px] tracking-widest text-muted-foreground mt-2 text-center">
              {Math.round(Math.min(progress, 100))}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
