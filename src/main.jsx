import React from 'react'
import ReactDOM from 'react-dom/client'
import { StatCard, mountReactComponent } from './components/ReactComponents'
import { ProcessFlow } from './components/AnimatedBeam'
import { Particles } from './components/Particles'
import '../styles/main.css'

// Inicializa componentes React que existan en el HTML
document.addEventListener('DOMContentLoaded', () => {
  // Montar ProcessFlow si existe el contenedor
  const processContainer = document.getElementById('process-flow-container')
  if (processContainer) {
    const root = ReactDOM.createRoot(processContainer)
    root.render(<ProcessFlow />)
  }

  // Montar Particles en el hero
  const heroParticles = document.getElementById('hero-particles')
  if (heroParticles) {
    const root = ReactDOM.createRoot(heroParticles)
    root.render(<Particles quantity={100} color="#a855f7" particleSize={2} />)
  }
  
  console.log('React mounted and ready for components')
})

export { mountReactComponent, StatCard, ProcessFlow, Particles }
