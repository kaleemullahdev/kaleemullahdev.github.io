'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react'
import { ExternalLink, Github, ArrowUpRight, Code2, Eye, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

type Project = {
  id: number
  slug: string
  name: string
  description: string
  coverImage: string
  url: string
  technologies: string[]
  index?: number
  layout?: string
  demo?: string
  github?: string
}

export const ProjectCard = ({
  slug,
  name,
  description,
  url,
  coverImage,
  technologies,
  index = 0,
  layout = 'grid',
  demo,
  github
}: Project) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  if (layout === 'stack') {
    // Stack layout - horizontal cards
    return (
      <motion.div
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={`/${coverImage}`}
                alt={name}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  #{index + 1}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link href={`/projects/${slug}`} className="flex-1 py-3 bg-primary text-white rounded-xl font-semibold text-center hover:bg-primary/90 transition-colors">
                View Details
              </Link>
              {demo && (
                <Link href={demo} target="_blank" className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </Link>
              )}
              {github && (
                <Link href={github} target="_blank" className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Default grid/masonry layout - with 3D effects
  return (
    <motion.div
      className="group relative h-full"
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 50, z: -100 }}
      whileInView={{ opacity: 1, y: 0, z: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative bg-white rounded-3xl overflow-hidden shadow-xl h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-3xl opacity-0"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            filter: "blur(20px)",
            transform: "translateZ(-50px) scale(1.1)",
          }}
        />
        
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 3 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={`/${coverImage}`}
              alt={name}
              quality={95}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
          
          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 0.7 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating elements */}
          <motion.div
            className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center font-bold text-gray-800 shadow-xl"
            style={{ transform: "translateZ(100px)" }}
            animate={{
              y: isHovered ? -5 : 0,
              rotate: isHovered ? 15 : 0,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.div>
          
          {/* Tech stack preview on hover */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg text-xs font-semibold text-gray-800 flex items-center gap-1">
              <Code2 className="w-3 h-3" />
              {technologies.length} Tech
            </div>
            <div className="px-3 py-1.5 bg-primary/90 backdrop-blur-md rounded-lg text-xs font-semibold text-white flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Live
            </div>
          </motion.div>
          
          {/* Quick actions with 3D effect */}
          <motion.div
            className="absolute top-4 right-4 flex flex-col gap-2"
            style={{ transform: "translateZ(120px)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div whileHover={{ scale: 1.1, rotate: 360 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={url}
                target="_blank"
                className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                aria-label="View live demo"
              >
                <Eye className="w-5 h-5 text-gray-700" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -360 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={`https://github.com/kaleemullahdev/${name.toLowerCase().replace(/\s+/g, '-')}`}
                target="_blank"
                className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                aria-label="View source code"
              >
                <Github className="w-5 h-5 text-white" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Content with 3D layers */}
        <div className="p-6 space-y-4" style={{ transform: "translateZ(50px)" }}>
          {/* Title with animated gradient */}
          <motion.h3 
            className="text-xl font-bold"
            animate={{
              backgroundImage: isHovered
                ? "linear-gradient(90deg, #ff7e00, #ff9933, #ff7e00)"
                : "linear-gradient(90deg, #111827, #111827, #111827)",
            }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 100%",
            }}
          >
            {name}
          </motion.h3>
          
          {/* Description with fade effect */}
          <motion.p 
            className="text-gray-600 line-clamp-2 text-sm leading-relaxed"
            animate={{ opacity: isHovered ? 0.8 : 1 }}
          >
            {description}
          </motion.p>
          
          {/* Tech Stack with stagger animation */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg border border-gray-200"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "rgb(255, 126, 0)",
                  color: "rgb(255, 126, 0)",
                }}
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 3 && (
              <motion.span 
                className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-50 rounded-lg flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
              >
                <Sparkles className="w-3 h-3" />
                +{technologies.length - 3}
              </motion.span>
            )}
          </div>
          
          {/* CTA with animated arrow */}
          <motion.div className="pt-2 flex items-center gap-3">
            <Link 
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
            >
              <span>View Details</span>
              <motion.div
                animate={{ 
                  x: isHovered ? 5 : 0,
                  rotate: isHovered ? 45 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </Link>
            {demo && (
              <Link 
                href={demo} 
                target="_blank"
                className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Demo</span>
              </Link>
            )}
          </motion.div>
        </div>
        
        {/* Animated bottom gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
        
        {/* Corner accent */}
        <motion.div
          className="absolute -top-1 -right-1 w-16 h-16"
          style={{ transform: "translateZ(150px)" }}
          animate={{
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary/50 rounded-tl-3xl rounded-br-3xl" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}