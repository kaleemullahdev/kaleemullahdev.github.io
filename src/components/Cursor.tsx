'use client'
import { useEffect, useRef } from 'react'

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()
  const cursorPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.current = { x: e.clientX, y: e.clientY }
    }
    
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth cursor following
        currentPos.current.x += (cursorPos.current.x - currentPos.current.x) * 0.15
        currentPos.current.y += (cursorPos.current.y - currentPos.current.y) * 0.15
        
        if (cursorRef.current && cursorDotRef.current) {
          cursorRef.current.style.transform = `translate(${currentPos.current.x - 20}px, ${currentPos.current.y - 20}px)`
          cursorDotRef.current.style.transform = `translate(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px)`
        }
      }
      
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    requestRef.current = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])
  
  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  )
}