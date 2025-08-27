'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

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
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Solid black background */}
      <div className="absolute inset-0" style={{ background: '#000000' }} />


      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm"
            >
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-white">Available for new projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="block text-white mb-2">
                  Building Digital
                </span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Experiences
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Hi, I'm <span className="font-semibold text-white">Kaleem Ullah</span>, 
              a Full Stack Developer specializing in creating exceptional web applications 
              with modern technologies and thoughtful user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <Link href="#projects">
                <button className="group px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="/resume.pdf" download>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                  Download CV
                  <Download className="w-4 h-4" />
                </button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              <span className="text-sm text-gray-300">Connect with me</span>
              <div className="flex gap-3">
                {professionalLinks.map((link, index) => (
                  <motion.a
                    key={link.icon}
                    href={link.src || '/'}
                    target={link.type}
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:border-primary hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <Image
                      src={`/${link.icon}`}
                      width={18}
                      height={18}
                      alt={link.icon.replace('.svg', '')}
                      className="opacity-80 hover:opacity-100 filter brightness-0 invert"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Carved Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Seamlessly carved container */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Enhanced carved-in depression effect */}
                <div 
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{
                    background: '#000000',
                    boxShadow: `
                      inset 12px 12px 30px rgba(0, 0, 0, 0.8),
                      inset -12px -12px 25px rgba(40, 40, 40, 0.1),
                      inset 20px 20px 50px rgba(0, 0, 0, 0.6),
                      inset -20px -20px 40px rgba(30, 30, 30, 0.08)
                    `,
                  }}
                >
                  {/* Image sits in the carved depression */}
                  <div 
                    className="absolute inset-[3px] overflow-hidden"
                    style={{
                      background: 'transparent',
                      boxShadow: `
                        inset 0 0 20px rgba(0, 0, 0, 0.4)
                      `,
                    }}
                  >
                    {/* Pure image with seamless integration */}
                    <div className="relative w-full h-full">
                      <Image
                        src="/image.jpg"
                        alt="Kaleem Ullah"
                        fill
                        quality={95}
                        priority
                        className="object-cover"
                        style={{
                          objectPosition: 'center',
                          filter: 'contrast(1.05) brightness(0.95) saturate(1.05)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Minimal overlay info elements */}
                  <motion.div
                    className="absolute top-6 right-6 z-10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div 
                      className="px-2 py-1 rounded-md"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <span className="text-white text-xs font-medium">7+ Years</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-6 left-6 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div 
                      className="px-2 py-1 rounded-md"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <span className="text-white text-xs font-medium">Full Stack Dev</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats below image - integrated style */}
              <motion.div 
                className="grid grid-cols-3 gap-6 mt-12 px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">30+</div>
                  <div className="text-sm text-gray-400 mt-1">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">99%</div>
                  <div className="text-sm text-gray-400 mt-1">Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}