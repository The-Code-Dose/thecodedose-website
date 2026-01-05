import { motion, useAnimationFrame } from "motion/react"
import { useState, useEffect, useRef } from "react"

export default function MovingObject({ children, className, lerpFactor = 0.1 }) {
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const currentPosition = useRef({ x: 0, y: 0 })
  const elementRef = useRef(null)

  const lerp = (start, end, t) => start + (end - start) * t

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const offsetX = (event.clientX / windowWidth) * 2 - 1
      const offsetY = (event.clientY / windowHeight) * 2 - 1

      setTargetPosition({ x: offsetX * 20, y: offsetY * 20 })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useAnimationFrame(() => {
    currentPosition.current.x = lerp(
      currentPosition.current.x,
      targetPosition.x,
      lerpFactor
    )
    currentPosition.current.y = lerp(
      currentPosition.current.y,
      targetPosition.y,
      lerpFactor
    )

    if (elementRef.current) {
      elementRef.current.style.transform = `translate(calc(-50% + ${currentPosition.current.x}px), calc(-50% + ${currentPosition.current.y}px))`
    }
  })

  return (
    <motion.div
      transition={{ type: "spring", ease: "easeOut" }}

      ref={elementRef}
      className={`${className}`}
    >
      {children}
    </motion.div>
  )
}
