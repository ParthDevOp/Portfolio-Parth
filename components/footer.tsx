"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[900px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] text-muted-foreground/50"
          >
            DESIGNED & BUILT BY PARTH SHAH · 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/ParthDevOp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.3em] text-muted-foreground/50 hover:text-primary transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/parth-shah-861abb316/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.3em] text-muted-foreground/50 hover:text-primary transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://leetcode.com/u/parthdevop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.3em] text-muted-foreground/50 hover:text-primary transition-colors"
            >
              LEETCODE
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
