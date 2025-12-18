// Particles animation for hero section
class Particles {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId)
    if (!this.canvas) return

    this.ctx = this.canvas.getContext('2d')
    this.quantity = options.quantity || 100
    this.color = options.color || '#a855f7'
    this.particleSize = options.particleSize || 2
    this.particles = []

    this.resize()
    this.init()
    this.animate()
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
  }

  init() {
    this.particles = Array.from({ length: this.quantity }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: Math.random() * 0.5 + 0.5,
    }))
  }

  animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = this.color

    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.life -= 0.002

      if (particle.x < 0) particle.x = this.canvas.width
      if (particle.x > this.canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = this.canvas.height
      if (particle.y > this.canvas.height) particle.y = 0

      const lifeAlpha = Math.sin(particle.life * Math.PI) * 0.4
      this.ctx.globalAlpha = Math.max(0, lifeAlpha)

      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, this.particleSize, 0, Math.PI * 2)
      this.ctx.fill()
    })

    requestAnimationFrame(this.animate)
  }
}

// Initialize particles when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Particles('particles-canvas', {
    quantity: 80,
    color: '#a855f7',
    particleSize: 2,
  })
})

export { Particles }
