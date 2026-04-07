"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ParthDevOp",
    icon: Github,
    accent: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/parth-shah-861abb316/",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/parthdevop/",
    icon: ExternalLink,
  },
  {
    name: "Email",
    href: "mailto:pparth8108@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="border-t border-border">
      <div ref={ref} className="max-w-[900px] mx-auto px-6 md:px-12 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] text-primary mb-4"
        >
          // 05 — CONNECT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-foreground tracking-tight mb-2"
        >
          {"Let's Work Together"}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-8 h-px bg-primary/25 mb-8 origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm leading-relaxed text-muted-foreground mb-8">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"}
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Surat, Gujarat, India</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Mail className="w-4 h-4 text-primary" />
              <a 
                href="mailto:pparth8108@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                pparth8108@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className={`group relative inline-flex items-center gap-2 px-5 py-3 text-xs tracking-widest border rounded-sm transition-all duration-300 overflow-hidden ${
                      link.accent
                        ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="text-[10px] tracking-widest text-muted-foreground mb-2 block">
                NAME
              </label>
              <Input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                required
                className="bg-card border-border focus:border-primary text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-[10px] tracking-widest text-muted-foreground mb-2 block">
                EMAIL
              </label>
              <Input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                required
                className="bg-card border-border focus:border-primary text-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-[10px] tracking-widest text-muted-foreground mb-2 block">
                MESSAGE
              </label>
              <Textarea
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                required
                rows={5}
                className="bg-card border-border focus:border-primary text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest text-xs py-6"
            >
              {isSubmitting ? "SENDING..." : submitted ? "MESSAGE SENT!" : "SEND MESSAGE"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
