'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

type Project = {
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
};

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
  category,
}: Project) => {
  if (layout === 'stack') {
    // Enhanced horizontal card layout for stack view
    return (
      <Link href={`/projects/${slug}`} className="block cursor-pointer group">
        <motion.div
          className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
          style={{
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.3),
              0 4px 16px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 0 20px rgba(255, 126, 0, 0.02)
            `,
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: `
              0 20px 50px rgba(255, 126, 0, 0.15),
              0 8px 25px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 0 30px rgba(255, 126, 0, 0.05)
            `,
            y: -8,
            transition: { duration: 0.2, ease: 'easeOut' },
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.3,
            delay: index * 0.02,
          }}
        >
          <div className="flex flex-col md:flex-row overflow-hidden">
            {/* Enhanced image section */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
              {coverImage ? (
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src={typeof coverImage === 'string' ? coverImage : '/next.svg'}
                    alt={name}
                    fill
                    className="object-cover"
                    style={{
                      filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
                    }}
                  />
                </motion.div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center border border-white/20">
                      <svg
                        className="w-8 h-8 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 font-medium text-sm">Project Preview</span>
                  </div>
                </div>
              )}

              {/* Floating category badge */}
              <motion.div
                className="absolute top-4 left-4 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md text-xs font-bold text-white rounded-full border border-white/20">
                  {category || 'Web App'}
                </span>
              </motion.div>
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between relative">
              {/* Content Section */}
              <div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-300">
                    {name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {description}
                  </p>
                </motion.div>

                {/* Enhanced tech stack */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {technologies.slice(0, 4).map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-primary/50 hover:bg-primary/20 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {technologies.length > 4 && (
                    <span className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-white/5 rounded-full border border-white/10">
                      +{technologies.length - 4} more
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Enhanced action buttons */}
              <motion.div
                className="flex items-center gap-4 pt-4 border-t border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Link
                  href={`/projects/${slug}`}
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-orange-600 text-white font-semibold text-sm rounded-xl hover:from-primary/90 hover:to-orange-600/90 hover:scale-105 transition-all duration-300 relative z-30"
                  style={{ pointerEvents: 'auto' }}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {demo && (
                    <motion.a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-400 hover:text-primary bg-white/5 hover:bg-primary/20 rounded-xl transition-all duration-300 relative z-30 group"
                      title="Visit Website"
                      style={{ pointerEvents: 'auto' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  )}
                  {github && (
                    <motion.a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/20 rounded-xl transition-all duration-300 relative z-30 group"
                      style={{ pointerEvents: 'auto' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Enhanced grid card layout
  return (
    <Link href={`/projects/${slug}`} className="block cursor-pointer h-full group">
      <motion.div
        className="relative bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-primary/40 transition-all duration-300 h-full flex flex-col cursor-pointer"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.25),
            0 4px 16px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 0 20px rgba(255, 126, 0, 0.01)
          `,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: `
            0 25px 60px rgba(255, 126, 0, 0.15),
            0 15px 30px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 0 40px rgba(255, 126, 0, 0.03)
          `,
          y: -8,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.3,
          delay: index * 0.02,
        }}
      >
        {/* Enhanced Image Section */}
        <div className="relative h-52 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

          {coverImage ? (
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={typeof coverImage === 'string' ? coverImage : '/next.svg'}
                alt={name}
                fill
                className="object-cover"
                style={{
                  filter: 'brightness(0.95) contrast(1.1) saturate(1.1)',
                }}
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              <div className="text-center z-10">
                <div className="w-20 h-20 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <svg
                    className="w-10 h-10 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-400 font-medium">Project Preview</span>
              </div>
            </div>
          )}

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3 + index * 0.05,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <span className="px-4 py-2 bg-black/70 backdrop-blur-md text-xs font-bold text-white rounded-full border border-white/30 shadow-lg">
              {category || 'Web App'}
            </span>
          </motion.div>

          {/* Professional hover overlay */}
          <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-15">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white"
              >
                <svg
                  className="w-8 h-8 mx-auto mb-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="text-sm font-medium">View Details</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Content Section */}
        <div className="p-6 flex flex-col flex-1 relative">
          {/* Enhanced Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-400 transition-all duration-500">
              {name}
            </h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2 flex-grow leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {description}
            </p>
          </motion.div>

          {/* Enhanced Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.05 }}
          >
            {technologies.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1.5 text-xs font-semibold bg-white/10 text-gray-300 rounded-full border border-white/20 hover:border-primary/50 hover:bg-primary/20 hover:text-white transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {technologies.length > 3 && (
              <span className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-white/5 rounded-full border border-white/10">
                +{technologies.length - 3}
              </span>
            )}
          </motion.div>

          {/* Enhanced Action Bar */}
          <motion.div
            className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.05 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300 group-hover:scale-105">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>

            <div className="flex items-center gap-2">
              {demo && (
                <motion.div
                  className="p-2.5 text-gray-400 group-hover:text-primary bg-white/5 group-hover:bg-primary/20 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              )}
              {github && (
                <motion.div
                  className="p-2.5 text-gray-400 group-hover:text-white bg-white/5 group-hover:bg-white/20 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Github className="w-4 h-4" />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};
