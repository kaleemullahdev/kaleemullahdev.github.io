'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Layers, Target, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectHeroSectionProps {
  project: {
    id: number;
    name: string;
    description: string;
    category?: string;
    thumbnail?: string;
    demo?: string;
    github?: string;
    duration?: string;
    team?: string;
    technologies: string[];
    images?: string[];
  };
}

export const ProjectHeroSection: React.FC<ProjectHeroSectionProps> = ({ project }) => {
  const {
    name,
    description,
    category,
    thumbnail,
    demo,
    github,
    duration,
    team,
    technologies,
    images,
  } = project;

  // Process all images for display
  const allImages: { url: string; alt: string }[] = [];

  if (thumbnail) {
    allImages.push({
      url: thumbnail,
      alt: `${name} main screenshot`,
    });
  }

  if (images && images.length > 0) {
    images.forEach((img, idx) => {
      if (img && img !== thumbnail) {
        allImages.push({
          url: img,
          alt: `${name} screenshot ${idx + 1}`,
        });
      }
    });
  }

  const projectStats = [
    { label: 'Timeline', value: duration || '3 Months', icon: Calendar },
    { label: 'Team Size', value: team || 'Solo', icon: Users },
    {
      label: 'Technologies',
      value: `${technologies.length}+ Tools`,
      icon: Layers,
    },
    { label: 'Status', value: 'Completed', icon: Target },
  ];

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12 relative z-40"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 px-6 py-3 text-white bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl font-medium hover:bg-white/10 hover:border-primary/50 transition-all cursor-pointer group"
            style={{
              boxShadow: `
                0 4px 20px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
            }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo and Title */}
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center border border-primary/20">
                <span className="text-3xl font-bold text-primary">{name?.charAt(0) || 'P'}</span>
              </div>

              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{name}</h1>
                {category && (
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                    {category}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {description && <p className="text-lg text-gray-300 leading-relaxed">{description}</p>}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 relative z-40">
              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors cursor-pointer relative z-40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    pointerEvents: 'auto',
                    position: 'relative',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  Visit Website
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors cursor-pointer border border-white/20 relative z-40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    pointerEvents: 'auto',
                    position: 'relative',
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Source Code
                </motion.a>
              )}
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-4">
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/20 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="font-semibold text-white">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Main Project Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {thumbnail && thumbnail.trim() !== '' ? (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-white/5 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden">
                  <Image
                    src={thumbnail.startsWith('http') ? thumbnail : `/${thumbnail}`}
                    alt={`${name} main screenshot`}
                    width={800}
                    height={500}
                    className="w-full h-auto max-h-[500px] object-cover"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative max-w-[600px] mx-auto bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-12 flex items-center justify-center min-h-[400px] border border-white/20">
                <span className="text-gray-500 text-lg">No preview available</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
