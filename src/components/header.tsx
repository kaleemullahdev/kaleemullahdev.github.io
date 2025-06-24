'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import * as motion from 'motion/react-client'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-background/80' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Kaleem</span>
              </span>
            </motion.div>
          </Link>
          
          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-2 transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="nav-indicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <motion.button
            className="hidden md:block px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  )
}