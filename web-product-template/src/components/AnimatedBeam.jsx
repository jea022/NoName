import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "#a855f7",
  dotColor = "#d946ef",
}) {
  const [pathD, setPathD] = useState("")
  const svgRef = useRef(null)

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef?.current || !fromRef?.current || !toRef?.current) return

      const container = containerRef.current
      const from = fromRef.current
      const to = toRef.current

      const containerRect = container.getBoundingClientRect()
      const fromRect = from.getBoundingClientRect()
      const toRect = to.getBoundingClientRect()

      const fromX = fromRect.left - containerRect.left + fromRect.width / 2
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2
      const toX = toRect.left - containerRect.left + toRect.width / 2
      const toY = toRect.top - containerRect.top + toRect.height / 2

      const distance = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2)
      const curveAmount = distance * (curvature / 100)

      const midX = (fromX + toX) / 2 + curveAmount
      const midY = (fromY + toY) / 2

      const path = `M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`
      setPathD(path)
    }

    updatePath()
    window.addEventListener("resize", updatePath)
    return () => window.removeEventListener("resize", updatePath)
  }, [containerRef, fromRef, toRef, curvature])

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        width: containerRef?.current?.offsetWidth || "100%",
        height: containerRef?.current?.offsetHeight || "100%",
      }}
    >
      <defs>
        <linearGradient id={`gradient-${Math.random()}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={pathColor} stopOpacity="0.3" />
          <stop offset="50%" stopColor={pathColor} stopOpacity="1" />
          <stop offset="100%" stopColor={pathColor} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Línea base */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Línea animada */}
      <motion.path
        d={pathD}
        stroke={`url(#gradient-${Math.random()})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={{
          strokeDashoffset: reverse ? 1000 : -1000,
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Punto luminoso */}
      <motion.circle
        cx={pathD ? pathD.split(" ")[1] : 0}
        cy={pathD ? pathD.split(" ")[2] : 0}
        r="4"
        fill={dotColor}
        opacity="0.8"
        animate={{
          opacity: [0.3, 1, 0.3],
          r: [3, 6, 3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  )
}

export function ProcessFlow() {
  const containerRef = useRef(null)
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)
  const step4Ref = useRef(null)

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[300px] py-20"
    >
      <div className="grid grid-cols-4 gap-8 relative z-10 px-4 md:px-12">
        <div ref={step1Ref} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-4 shadow-lg">
            1
          </div>
        </div>
        <div ref={step2Ref} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-4 shadow-lg">
            2
          </div>
        </div>
        <div ref={step3Ref} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-4 shadow-lg">
            3
          </div>
        </div>
        <div ref={step4Ref} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-4 shadow-lg">
            4
          </div>
        </div>
      </div>

      {/* Líneas animadas entre pasos */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={step1Ref}
        toRef={step2Ref}
        duration={3}
        pathColor="#a855f7"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={step2Ref}
        toRef={step3Ref}
        duration={3}
        delay={0.3}
        pathColor="#d946ef"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={step3Ref}
        toRef={step4Ref}
        duration={3}
        delay={0.6}
        pathColor="#a855f7"
      />
    </div>
  )
}
