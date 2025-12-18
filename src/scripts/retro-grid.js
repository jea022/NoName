// RetroGrid - Animated grid background
class RetroGrid {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId)
    if (!this.canvas) {
      console.error('Canvas not found:', canvasId)
      return
    }

    this.ctx = this.canvas.getContext('2d', { alpha: false })
    this.cellSize = options.cellSize || 60
    this.gridColor = options.gridColor || 'rgba(168, 85, 247, 0.2)'
    this.lineColor = options.lineColor || 'rgba(168, 85, 247, 0.6)'
    this.time = 0
    this.speed = options.speed || 0.8
    this.animationId = null

    // Initial resize
    this.resize()
    window.addEventListener('resize', () => this.resize())
    
    // Start animation
    this.animate()
  }

  resize() {
    const parent = this.canvas.parentElement
    if (!parent) return

    const rect = parent.getBoundingClientRect()
    this.canvas.width = rect.width || window.innerWidth
    this.canvas.height = rect.height || window.innerHeight
  }

  animate = () => {
    if (!this.ctx) return

    this.ctx.fillStyle = '#0a0a0a'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    
    this.time += this.speed

    // Draw grid
    this.ctx.strokeStyle = this.gridColor
    this.ctx.lineWidth = 1

    // Vertical lines
    for (let x = 0; x < this.canvas.width; x += this.cellSize) {
      this.ctx.beginPath()
      this.ctx.moveTo(x, 0)
      this.ctx.lineTo(x, this.canvas.height)
      this.ctx.stroke()
    }

    // Horizontal lines
    for (let y = 0; y < this.canvas.height; y += this.cellSize) {
      this.ctx.beginPath()
      this.ctx.moveTo(0, y)
      this.ctx.lineTo(this.canvas.width, y)
      this.ctx.stroke()
    }

    // Draw perspective lines (vanishing point effect)
    this.ctx.lineWidth = 2
    const centerX = this.canvas.width / 2
    const centerY = this.canvas.height / 2

    for (let i = 0; i < 20; i++) {
      const offset = (this.time + i * 30) % 400
      const opacity = 1 - (offset / 400)
      
      this.ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.7})`
      this.ctx.beginPath()
      
      const scale = 1 + (offset / 400) * 2
      const w = this.canvas.width * 0.2 * scale
      const h = this.canvas.height * 0.2 * scale
      
      this.ctx.rect(
        centerX - w / 2,
        centerY - h / 2,
        w,
        h
      )
      this.ctx.stroke()
    }

    this.animationId = requestAnimationFrame(this.animate)
  }
}

// Initialize RetroGrid when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('retro-grid-canvas')
    if (canvas) {
      new RetroGrid('retro-grid-canvas', {
        cellSize: 60,
        gridColor: 'rgba(168, 85, 247, 0.2)',
        lineColor: 'rgba(168, 85, 247, 0.6)',
        speed: 0.8,
      })
    }
  })
} else {
  const canvas = document.getElementById('retro-grid-canvas')
  if (canvas) {
    new RetroGrid('retro-grid-canvas', {
      cellSize: 60,
      gridColor: 'rgba(168, 85, 247, 0.2)',
      lineColor: 'rgba(168, 85, 247, 0.6)',
      speed: 0.8,
    })
  }
}

export { RetroGrid }


