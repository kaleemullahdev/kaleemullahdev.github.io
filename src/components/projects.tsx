'use client'
import { useState } from 'react'
import { PROJECTS_DATA } from '~/constants'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'

interface Tab {
  id: string
  label: string
  count: number
}

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
  // Dynamic tabs based on project technologies
  const tabs: Tab[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
    { id: 'react', label: 'React', count: PROJECTS_DATA.filter(p => p.technologies.some(t => t.toLowerCase().includes('react'))).length },
    { id: 'nextjs', label: 'Next.js', count: PROJECTS_DATA.filter(p => p.technologies.some(t => t.toLowerCase().includes('next'))).length },
    { id: 'typescript', label: 'TypeScript', count: PROJECTS_DATA.filter(p => p.technologies.some(t => t.toLowerCase().includes('typescript'))).length },
  ]
  
  const filteredProjects = activeTab === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeTab)
        )
      )
  
  return (
    <section className="py-32 relative" id="projects">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-card rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {tab.label} <span className="text-xs opacity-60">({tab.count})</span>
                </span>
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card h-full">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/${project.coverImage}`}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={project.url}
                      target="_blank"
                      className="p-3 bg-primary rounded-full text-white hover:bg-primary-dark transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-3 bg-card rounded-full hover:bg-card-hover transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                    )}
                  </motion.div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {project.description || 'A modern web application built with cutting-edge technologies.'}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-card text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-card text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Category Badge */}
                {project.category && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}