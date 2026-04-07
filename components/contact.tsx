"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ParthDevOp",
    icon: Github,
    color: "#ffffff",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/parth-shah-861abb316/",
    icon: Linkedin,
    color: "#0A66C2",
    description: "Let's connect",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/parthdevop/",
    icon: ExternalLink,
    color: "#FFA116",
    description: "100+ problems solved",
  },
  {
    name: "Email",
    href: "mailto:pparth8108@gmail.com",
    icon: Mail,
    color: "#a855f7",
    description: "Drop me a line",
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
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] tracking-[0.5em] text-primary font-mono mb-4 block">
            {"// 05 — CONTACT"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{"Let's Work "}</span>
            <span className="animate-shimmer">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            {"Have a project in mind? Let's build something amazing together."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Info Card */}
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-muted-foreground uppercase">Location</p>
                    <p className="text-foreground">Surat, Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-muted-foreground uppercase">Email</p>
                    <a 
                      href="mailto:pparth8108@gmail.com" 
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      pparth8108@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"}
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
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
                    whileHover={{ y: -5 }}
                    className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: `${link.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: link.color }} />
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] tracking-widest text-muted-foreground mb-2 block uppercase">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="bg-background/50 border-border focus:border-primary text-foreground h-12"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest text-muted-foreground mb-2 block uppercase">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="bg-background/50 border-border focus:border-primary text-foreground h-12"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest text-muted-foreground mb-2 block uppercase">
                    Message
                  </label>
                  <Textarea
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      SENDING...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      MESSAGE SENT!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
