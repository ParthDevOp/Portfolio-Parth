"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Heart } from "lucide-react"

const links = [
  { name: "GitHub", href: "https://github.com/ParthDevOp", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/parth-shah-861abb316/", icon: Linkedin },
  { name: "LeetCode", href: "https://leetcode.com/u/parthdevop/", icon: ExternalLink },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#hero" className="inline-block">
              <span className="text-3xl font-bold">
                <span className="text-primary">P</span>
                <span className="text-foreground">arth</span>
                <span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ^
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
            Designed & Built by Parth Shah
          </p>
          <p className="flex items-center gap-1 text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Surat, India
          </p>
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground/50">
            © 2026 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
