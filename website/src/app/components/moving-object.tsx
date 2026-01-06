import { motion, useAnimationFrame } from "motion/react"
import { useState, useEffect, useRef, ReactNode } from "react"

type Vector2 = {
  x: number
  y: number
}

type MovingObjectProps = {
  children: ReactNode
  className?: string
  lerpFactor?: number
}

export default function MovingObject({
  children,
  className = "",
  lerpFactor = 0.1,
}: MovingObjectProps) {
  const [targetPosition, setTargetPosition] = useState<Vector2>({
    x: 0,
    y: 0,
  })

  const currentPosition = useRef<Vector2>({ x: 0, y: 0 })
  const elementRef = useRef<HTMLDivElement | null>(null)

  const lerp = (start: number, end: number, t: number): number =>
    start + (end - start) * t

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const offsetX = (event.clientX / windowWidth) * 2 - 1
      const offsetY = (event.clientY / windowHeight) * 2 - 1

      setTargetPosition({
        x: offsetX * 20,
        y: offsetY * 20,
      })
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
      ref={elementRef}
      transition={{ type: "spring", ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
