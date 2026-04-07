"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#tech", label: "stack" },
  { href: "#projects", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "connect" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300",
        scrolled && "bg-background/80 backdrop-blur-md border-b border-border"
      )}
    >
      <a 
        href="#hero" 
        className="text-xl font-bold text-primary tracking-wide hover:opacity-80 transition-opacity"
        style={{ textShadow: '0 0 20px rgba(0,229,195,0.4)' }}
      >
        P.
      </a>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "text-[11px] tracking-[0.25em] uppercase transition-colors duration-200",
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button className="md:hidden text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </motion.nav>
  )
}
