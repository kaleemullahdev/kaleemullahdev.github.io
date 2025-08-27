'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

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
  category?: string
}

export const ProjectCard = ({
  slug,
  name,
  description,
  coverImage,
  technologies,
  index = 0,
  layout = 'grid',
  demo,
  github,
  category
}: Project) => {
  
  if (layout === 'stack') {
    // Horizontal card layout for stack view
    return (
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-64 md:h-auto relative bg-gray-50">
            <Image
              src={`/${coverImage}`}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{category || 'Web App'}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{name}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
                    {tech}
                  </span>
                ))}
                {technologies.length > 4 && (
                  <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
                    +{technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Link 
                href={`/projects/${slug}`} 
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Default grid card - clean and minimal
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        <Image
          src={`/${coverImage}`}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
            {category || 'Web App'}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2.5 py-1 text-xs font-medium text-gray-500">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link 
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <div className="flex items-center gap-2">
            {demo && (
              <a 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="View Source"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}