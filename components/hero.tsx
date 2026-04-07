"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const NOISE = '{}[]<>/\\|;:.,!@#$%^&*_+-=~?01'
const rand = () => NOISE[Math.floor(Math.random() * NOISE.length)]

// Naruto silhouette ASCII art pattern
const NARUTO_FACE = [
  "           HHHHHHHHHHHH           ",
  "         HHHHHHHHHHHHHHHH         ",
  "        HHHHHHHHHHHHHHHHHHH       ",
  "       HHHSSSSSSSSSSSSSSHHH       ",
  "      HHSSSSSSSSSSSSSSSSSHH       ",
  "      HSSSSSSSSSSSSSSSSSSSH       ",
  "      HSSS  EEE    EEE  SSH       ",
  "      HSSS  EEE    EEE  SSH       ",
  "      HSSSSSSSSSSSSSSSSSSSH       ",
  "      HSSS    NNN    SSSSH       ",
  "      HSSSSSSSSSSSSSSSSSH        ",
  "      HSSS   MMMMMM   SSH        ",
  "      HSSSSSSSSSSSSSSSH          ",
  "       HHSSSSSSSSSSSHHH          ",
  "        HHHSSSSSSSHHH            ",
  "          HHHHHHHHH              ",
]

const FACE_MAP: Record<string, { ch: string; col: string }> = {
  'S': { ch: '░', col: '#ffcc80' },
  'E': { ch: '◉', col: '#00e5c3' },
  'N': { ch: '△', col: '#cc9966' },
  'M': { ch: '▬', col: '#ff7766' },
  'H': { ch: '▓', col: '#ff6600' }, // Naruto's orange hair
}

interface Cell {
  x: number
  y: number
  ch: string
  fd: { ch: string; col: string } | null
  reveal: number
  nextNoise: number
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 })
  const cellsRef = useRef<Cell[]>([])
  const frameRef = useRef(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const FS = 14
    const CW = FS * 0.602
    const CH = FS * 1.7
    const R = 160

    const resize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      buildCells()
    }

    const buildCells = () => {
      const cols = Math.ceil(canvas.width / CW) + 2
      const rows = Math.ceil(canvas.height / CH) + 2
      const cells: Cell[] = []

      const faceW = NARUTO_FACE[0].length
      const faceH = NARUTO_FACE.length
      const fc0 = Math.round((cols - faceW) / 2)
      const fr0 = Math.round((rows - faceH) / 2)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CW
          const y = r * CH + CH * 0.5

          const fr = r - fr0
          const fc = c - fc0
          let fd = null

          if (fr >= 0 && fr < faceH && fc >= 0 && fc < faceW) {
            const key = NARUTO_FACE[fr][fc]
            if (FACE_MAP[key]) fd = FACE_MAP[key]
          }

          cells.push({ x, y, ch: rand(), fd, reveal: 0, nextNoise: Math.random() * 20 })
        }
      }
      cellsRef.current = cells
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const draw = () => {
      frameRef.current++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FS}px 'Geist Mono', Courier, monospace`
      ctx.textBaseline = 'middle'

      const rect = canvas.getBoundingClientRect()
      const mx = mouse.x - rect.left
      const my = mouse.y - rect.top

      cellsRef.current.forEach(cell => {
        cell.nextNoise--
        if (cell.nextNoise <= 0) {
          cell.nextNoise = 6 + Math.random() * 18
          if (!cell.fd || cell.reveal < 0.4) cell.ch = rand()
        }

        const dx = cell.x - mx
        const dy = cell.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        const want = (cell.fd && dist < R) ? Math.pow(1 - dist / R, 0.6) : 0
        cell.reveal = lerp(cell.reveal, want, 0.14)

        if (cell.fd && cell.reveal > 0.02) {
          ctx.save()
          ctx.shadowBlur = 12 * cell.reveal
          ctx.shadowColor = cell.fd.col
          ctx.globalAlpha = Math.min(cell.reveal * 1.2, 1)
          ctx.fillStyle = cell.fd.col
          ctx.fillText(cell.fd.ch, cell.x, cell.y)
          ctx.restore()

          if (cell.reveal < 0.7) {
            ctx.globalAlpha = (1 - cell.reveal) * 0.12
            ctx.fillStyle = '#0c2a1a'
            ctx.fillText(cell.ch, cell.x, cell.y)
            ctx.globalAlpha = 1
          }
        } else {
          const prox = Math.max(0, 1 - dist / (R * 2.5))
          ctx.globalAlpha = 0.05 + prox * 0.3
          if (prox > 0.4 && frameRef.current % 3 === 0) cell.ch = rand()
          ctx.fillStyle = prox > 0.1 ? '#0d3a22' : '#0a1a10'
          ctx.fillText(cell.ch, cell.x, cell.y)
          ctx.globalAlpha = 1
        }
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mouse])

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  return (
    <section 
      id="hero" 
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
      
      {/* Hero Name Overlay */}
      <div className="absolute bottom-20 left-8 md:left-12 pointer-events-none z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(48px,12vw,120px)] font-bold text-transparent glitch leading-none"
          style={{ 
            WebkitTextStroke: '1px rgba(0,229,195,0.2)',
          }}
        >
          PARTH
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground mt-2"
        >
          DEVELOPER · BUILDER · PROBLEM SOLVER
        </motion.div>
      </div>

      {/* Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 w-full text-center text-[10px] tracking-[0.5em] text-muted-foreground/30 pointer-events-none"
      >
        MOVE CURSOR TO REVEAL
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 right-8 md:right-12"
      >
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="stroke-current">
              <rect x="1" y="1" width="14" height="22" rx="7" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2" fill="currentColor"/>
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
