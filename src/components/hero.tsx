'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as motion from 'motion/react-client'

export type Links = {
  src?: string
  icon: string
  type?: string
}

const professionalLinks: Links[] = [
  {
    src: 'https://github.com/kaleemullahdev',
    icon: 'github.svg',
    type: '_blank',
  },
  {
    src: 'https://www.linkedin.com/in/kaleem-ullah-dev/',
    icon: 'linkedin.svg',
    type: '_blank',
  },
  {
    src: 'mailto:kaleemullah786.ku61@gmail.com',
    icon: 'email.svg',
  },
]

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const scrolled = window.scrollY
      const rate = scrolled * -0.5
      sectionRef.current.style.transform = `translateY(${rate}px)`
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, var(--secondary) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, var(--accent) 0%, transparent 50%)`,
            filter: 'blur(100px)',
            opacity: 0.15,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              <span className="block text-lg lg:text-xl text-text-secondary font-normal mb-4">
                Full Stack Developer
              </span>
              <span className="gradient-text">Kaleem Ullah</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I build exceptional digital experiences that combine 
              <span className="text-primary font-semibold"> beautiful design</span> with 
              <span className="text-secondary font-semibold"> powerful functionality</span>
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 overflow-hidden rounded-full gradient-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-semibold text-lg gradient-text">
                View My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.a
              href="mailto:kaleemullah786.ku61@gmail.com"
              className="px-8 py-4 bg-card hover:bg-card-hover rounded-full font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-text-secondary mb-4">Tech I work with</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium hover:bg-card-hover transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-48 h-48 mx-auto mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse-slow" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card">
              <Image
                src="/profile.png"
                alt="Kaleem Ullah"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            {professionalLinks.map((link, index) => (
              <motion.div
                key={link.icon}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              >
                {link.src?.startsWith('mailto:') ? (
                  <a
                    href={link.src}
                    className="block p-3 bg-card rounded-full hover:bg-card-hover transition-all duration-300 hover-lift"
                  >
                    <Image
                      src={`/${link.icon}`}
                      width={24}
                      height={24}
                      alt={link.icon.replace('.svg', '')}
                      className="invert"
                    />
                  </a>
                ) : (
                  <Link
                    href={link.src || '/'}
                    target={link.type}
                    className="block p-3 bg-card rounded-full hover:bg-card-hover transition-all duration-300 hover-lift"
                  >
                    <Image
                      src={`/${link.icon}`}
                      width={24}
                      height={24}
                      alt={link.icon.replace('.svg', '')}
                      className="invert"
                    />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-2 bg-text-secondary/50 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}