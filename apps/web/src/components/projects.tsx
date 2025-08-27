'use client'

import { useState, useMemo, useRef } from 'react'
import { PROJECTS_DATA } from '~/constants'
import { ProjectCard } from './project-card-simple'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Sparkles, Grid3x3, LayoutGrid, Layers } from 'lucide-react'

const allTechStack = [
  { id: 'all', name: 'All Projects', icon: Sparkles },
  { id: 'Next.js', name: 'Next.js' },
  { id: 'React', name: 'React' },
  { id: 'TypeScript', name: 'TypeScript' },
  { id: 'Node.js', name: 'Node.js' },
]

const layoutOptions = [
  { id: 'grid', name: 'Grid', icon: Grid3x3 },
  { id: 'masonry', name: 'Masonry', icon: LayoutGrid },
  { id: 'stack', name: 'Stack', icon: Layers },
]

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [layout, setLayout] = useState('grid')
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  
  const allProjects = useMemo(() => {
    return activeTab == 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(({ technologies }) =>
          technologies.includes(activeTab),
        )
  }, [activeTab])
  
  const getLayoutClass = () => {
    switch(layout) {
      case 'masonry':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 [&>*:nth-child(3n+2)]:lg:mt-12 [&>*:nth-child(3n+3)]:lg:mt-24'
      case 'stack':
        return 'flex flex-col gap-6 max-w-4xl mx-auto'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
    }
  }
  
  return (
    <section className="relative py-20 px-4 bg-gray-50" id="projects" ref={containerRef}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
      
      <div className="relative max-w-7xl mx-auto z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Featured Works</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <motion.span 
              className="inline-block bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0%" }}
              animate={{ backgroundPosition: "100%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 100%" }}
            >
              Creative Projects
            </motion.span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover my latest work featuring cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12"
        >
          {/* Filter Tabs */}
          <div className="bg-white/80 backdrop-blur-xl shadow-2xl shadow-gray-200/30 rounded-2xl p-2 border border-gray-100">
            <div className="flex flex-wrap justify-center gap-2">
              {allTechStack.map(({ id, name, icon: Icon }, index) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(id)}
                  className={`
                    relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
                    ${activeTab === id 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/25 scale-105' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {name}
                  </span>
                  {activeTab === id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Layout Switcher */}
          <div className="flex gap-2 bg-white/80 backdrop-blur-xl rounded-xl p-1 border border-gray-100 shadow-lg">
            {layoutOptions.map(({ id, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLayout(id)}
                className={`
                  p-2 rounded-lg transition-all duration-300
                  ${layout === id 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
                aria-label={`${id} layout`}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with Dynamic Layout */}
        <motion.div
          className={getLayoutClass()}
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index % 3),
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d"
              }}
            >
              <ProjectCard {...project} index={index} layout={layout} />
            </motion.div>
          ))}
        </motion.div>

        {allProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <motion.div 
              className="inline-flex flex-col items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                <Sparkles className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-500 text-xl font-medium mb-2">No projects found</p>
              <p className="text-gray-400">Try selecting a different filter</p>
              <button
                onClick={() => setActiveTab('all')}
                className="mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                View all projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* View More CTA */}
        {allProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <motion.a
              href="https://github.com/kaleemullahdev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore All Projects</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}