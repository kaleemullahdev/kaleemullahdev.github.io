'use client';

import { useState, useMemo, useRef } from 'react';
import { PROJECTS_DATA } from '~/constants';
import { ProjectCard } from './project-card';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Grid3x3,
  LayoutGrid,
  Layers,
  ChevronDown,
  Check,
} from 'lucide-react';

interface ComponentProject {
  id: number | string;
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  url: string;
  technologies: string[];
  index?: number;
  layout?: string;
  demo?: string;
  github?: string;
  category?: string;
}

interface ProjectsProps {
  initialProjects?: ComponentProject[];
}

// Generate tech stack filters - major technologies + others dropdown
const generateTechStack = (projects: ComponentProject[]) => {
  const allTechs = new Set<string>();

  projects.forEach((project) => {
    if (project.technologies && Array.isArray(project.technologies)) {
      project.technologies.forEach((tech: string) => allTechs.add(tech));
    }
  });

  // Major technologies for main filters
  const majorTechs = ['React', 'Typescript', 'Next.js', 'Gatsby.js'];

  // Only include major techs that are actually used in projects
  const majorTechsPresent = majorTechs.filter((tech) =>
    Array.from(allTechs).some(
      (projectTech) =>
        projectTech.toLowerCase().includes(tech.toLowerCase()) ||
        tech.toLowerCase().includes(projectTech.toLowerCase())
    )
  );

  // Get other technologies (not in major list)
  const otherTechs = Array.from(allTechs)
    .filter(
      (tech) =>
        !majorTechs.some(
          (major) =>
            tech.toLowerCase().includes(major.toLowerCase()) ||
            major.toLowerCase().includes(tech.toLowerCase())
        )
    )
    .sort((a, b) => {
      const countA = projects.filter((p) => p.technologies?.includes(a)).length;
      const countB = projects.filter((p) => p.technologies?.includes(b)).length;
      return countB - countA; // Most used first
    });

  return {
    mainFilters: [
      {
        id: 'all',
        name: 'All Projects',
        icon: Sparkles,
        count: projects.length,
      },
      ...majorTechsPresent.map((tech) => ({
        id: tech,
        name: tech,
        count: projects.filter((p) => p.technologies?.includes(tech)).length,
        icon: Sparkles, // Default icon for tech filters
      })),
    ],
    otherTechs: otherTechs.map((tech) => ({
      id: tech,
      name: tech,
      count: projects.filter((p) => p.technologies?.includes(tech)).length,
    })),
  };
};

const layoutOptions = [
  { id: 'grid', name: 'Grid', icon: Grid3x3 },
  { id: 'masonry', name: 'Masonry', icon: LayoutGrid },
  { id: 'stack', name: 'Stack', icon: Layers },
];

export const Projects = ({ initialProjects }: ProjectsProps = {}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [layout, setLayout] = useState('grid');
  const [selectedOtherTechs, setSelectedOtherTechs] = useState<string[]>([]);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const containerRef = useRef(null);

  const projectsData = initialProjects || PROJECTS_DATA;
  const techStackData = useMemo(() => generateTechStack(projectsData), [projectsData]);

  const allProjects = useMemo(() => {
    if (activeTab === 'all' && selectedOtherTechs.length === 0) {
      return projectsData;
    }

    if (activeTab === 'all' && selectedOtherTechs.length > 0) {
      // Show projects that have ANY of the selected other techs
      return projectsData.filter(({ technologies }) =>
        selectedOtherTechs.some((tech) => technologies.includes(tech))
      );
    }

    // Regular filter by main tech
    return projectsData.filter(({ technologies }) => technologies.includes(activeTab));
  }, [activeTab, selectedOtherTechs, projectsData]);

  const handleOtherTechToggle = (tech: string) => {
    setSelectedOtherTechs((prev) => {
      const isSelected = prev.includes(tech);
      if (isSelected) {
        return prev.filter((t) => t !== tech);
      } else {
        return [...prev, tech];
      }
    });
    // When selecting an other tech, switch to "all" mode to show filtered results
    if (!selectedOtherTechs.includes(tech)) {
      setActiveTab('all');
    }
  };

  const handleMainTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Clear other tech selections when switching to any main tab (including 'all')
    setSelectedOtherTechs([]);
  };

  const getLayoutClass = () => {
    switch (layout) {
      case 'masonry':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 [&>*:nth-child(3n+2)]:lg:mt-12 [&>*:nth-child(3n+3)]:lg:mt-24';
      case 'stack':
        return 'flex flex-col gap-6 max-w-4xl mx-auto';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6';
    }
  };

  return (
    <section className="relative py-20 px-4 bg-black" id="projects" ref={containerRef}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-black" />

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
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Featured Works</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <motion.span
              className="inline-block bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
              initial={{ backgroundPosition: '0%' }}
              animate={{ backgroundPosition: '100%' }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Creative Projects
            </motion.span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover my latest work featuring cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-16"
        >
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {/* Main Filter Buttons */}
            {techStackData.mainFilters.map(({ id, name, icon: Icon, count }, index) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMainTabClick(id)}
                className={`
                  relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-sm border
                  ${
                    activeTab === id && selectedOtherTechs.length === 0
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                      : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30'
                  }
                `}
                style={{
                  boxShadow:
                    activeTab === id && selectedOtherTechs.length === 0
                      ? '0 4px 15px rgba(255, 126, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
                      : '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <span className="flex items-center gap-2 relative z-10">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{name}</span>
                  {count !== undefined && count > 0 && (
                    <span
                      className={`
                      px-2 py-0.5 rounded-full text-xs font-bold min-w-[18px] text-center
                      ${
                        activeTab === id && selectedOtherTechs.length === 0
                          ? 'bg-white/20 text-white'
                          : 'bg-primary/20 text-primary border border-primary/30'
                      }
                    `}
                    >
                      {count}
                    </span>
                  )}
                </span>
                {activeTab === id && selectedOtherTechs.length === 0 && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-xl"
                    style={{ zIndex: 0 }}
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </motion.button>
            ))}

            {/* Others Dropdown */}
            {techStackData.otherTechs.length > 0 && (
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: techStackData.mainFilters.length * 0.1,
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOthersOpen(!isOthersOpen)}
                  className={`
                    relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer backdrop-blur-sm border flex items-center gap-2
                    ${
                      selectedOtherTechs.length > 0
                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                        : 'bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30'
                    }
                  `}
                  style={{
                    boxShadow:
                      selectedOtherTechs.length > 0
                        ? '0 4px 15px rgba(255, 126, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
                        : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <span className="relative z-10">Others</span>
                  {selectedOtherTechs.length > 0 && (
                    <span
                      className={`
                      px-2 py-0.5 rounded-full text-xs font-bold min-w-[18px] text-center relative z-10
                      ${selectedOtherTechs.length > 0 ? 'bg-white/20 text-white' : 'bg-primary/20 text-primary border border-primary/30'}
                    `}
                    >
                      {selectedOtherTechs.length}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 relative z-10 ${isOthersOpen ? 'rotate-180' : ''}`}
                  />
                  {selectedOtherTechs.length > 0 && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-xl"
                      style={{ zIndex: 0 }}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                {isOthersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl z-50"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <div
                      className="max-h-72 overflow-y-auto overflow-x-hidden"
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#ff7e00 transparent',
                      }}
                    >
                      {techStackData.otherTechs.map(({ id, name, count }) => (
                        <motion.button
                          key={id}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleOtherTechToggle(id)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`
                              w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200
                              ${
                                selectedOtherTechs.includes(id)
                                  ? 'bg-primary border-primary'
                                  : 'border-white/30 group-hover:border-white/50'
                              }
                            `}
                            >
                              {selectedOtherTechs.includes(id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span>{name}</span>
                          </div>
                          <span className="text-xs text-gray-500 px-2 py-0.5 bg-white/5 rounded-full">
                            {count}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Layout Switcher */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 font-medium">View:</span>
            <div
              className="flex gap-2 bg-white/5 backdrop-blur-xl rounded-2xl p-1.5 border border-white/20"
              style={{
                boxShadow: `
                     0 4px 15px rgba(0, 0, 0, 0.2),
                     inset 0 1px 0 rgba(255, 255, 255, 0.1)
                   `,
              }}
            >
              {layoutOptions.map(({ id, icon: Icon, name }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLayout(id)}
                  className={`
                    flex items-center justify-center p-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
                    ${
                      layout === id
                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }
                  `}
                  aria-label={`${name} layout`}
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
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
                rotateX: 0,
              }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index % 3),
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
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
              <div className="w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/20">
                <Sparkles className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-300 text-xl font-medium mb-2">No projects found</p>
              <p className="text-gray-500">Try selecting a different filter</p>
              <button
                onClick={() => setActiveTab('all')}
                className="mt-6 px-6 py-3 bg-primary text-white rounded-full font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer"
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
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-gray-300 rounded-xl font-semibold text-sm hover:bg-white/20 hover:border-white/30 hover:text-white transition-all duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View More Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};
