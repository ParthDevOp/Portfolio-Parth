"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Stack" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500",
          scrolled && "bg-background/80 backdrop-blur-xl border-b border-border"
        )}
      >
        {/* Logo */}
        <a 
          href="#hero" 
          className="relative group"
        >
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-primary">P</span>
            <span className="text-foreground">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm",
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span 
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-sm -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Resume Button - Desktop */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-widest border border-primary/30 text-primary rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          HIRE ME
        </motion.a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "top-2 rotate-45" : "top-0"
              )} 
            />
            <span 
              className={cn(
                "absolute left-0 top-2 w-full h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )} 
            />
            <span 
              className={cn(
                "absolute left-0 w-full h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "top-2 -rotate-45" : "top-4"
              )} 
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold tracking-wider transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 text-sm tracking-widest border border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                HIRE ME
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
