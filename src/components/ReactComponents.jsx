import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * Ejemplo de componente React reutilizable
 */
function StatCard({ icon, title, value, description }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value">{value}</p>
      <p className="stat-description">{description}</p>
    </div>
  )
}

/**
 * Monta componentes React en elementos HTML específicos
 * Uso: <div id="react-root"></div> en HTML
 */
export function mountReactComponent(componentId, Component, props = {}) {
  const element = document.getElementById(componentId)
  if (element) {
    const root = ReactDOM.createRoot(element)
    root.render(<Component {...props} />)
  }
}

// Ejemplo de uso
export { StatCard }
