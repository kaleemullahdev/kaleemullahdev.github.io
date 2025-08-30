'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Monitor,
  Shield,
  Rocket,
  Zap,
  Wrench,
  Code,
  Cloud,
  Puzzle,
  Lightbulb,
  Database,
  Smartphone,
  Settings,
  Users,
} from 'lucide-react';

type Service = {
  title: string;
  icon: string; // Changed from React.ElementType to string
  description: string;
  features: string[];
};

interface ServicesProps {
  initialServices?: Service[];
}

// Icon mapping for client-side use
const iconMap: { [key: string]: React.ElementType } = {
  monitor: Monitor,
  code: Code,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
  shield: Shield,
  rocket: Rocket,
  settings: Settings,
  zap: Zap,
  wrench: Wrench,
  puzzle: Puzzle,
  lightbulb: Lightbulb,
};

const services: Service[] = [
  {
    title: 'Full-Stack Web Development',
    icon: 'rocket',
    description:
      'Complete web application development from concept to launch, delivering scalable solutions that grow with your business.',
    features: [
      'React & Next.js Development',
      'Node.js & Express APIs',
      'Database Architecture',
      'Real-time Features',
      'Mobile-First Design',
    ],
  },
  {
    title: 'Frontend Excellence',
    icon: 'monitor',
    description:
      'Transform designs into pixel-perfect, fast-loading websites that convert visitors into customers.',
    features: [
      'Figma to Production Code',
      'Component Libraries',
      'Smooth Animations',
      'Cross-browser Compatibility',
      'SEO Optimization',
    ],
  },
  {
    title: 'Performance & Speed',
    icon: 'zap',
    description:
      'Optimize your website for lightning-fast loading times and improved search rankings.',
    features: [
      'Core Web Vitals Optimization',
      'Bundle Size Reduction',
      'Image & Asset Optimization',
      'Caching Implementation',
      'Performance Monitoring',
    ],
  },
  {
    title: 'Ongoing Support',
    icon: 'wrench',
    description:
      'Reliable maintenance and support to keep your website secure, updated, and running smoothly.',
    features: [
      'Bug Fixes & Updates',
      'Security Monitoring',
      'Content Management',
      'Performance Tracking',
      'Priority Support',
    ],
  },
  {
    title: 'Code Modernization',
    icon: 'code',
    description:
      'Upgrade legacy applications with modern technologies for better performance and maintainability.',
    features: [
      'React Migration',
      'TypeScript Integration',
      'Code Quality Improvement',
      'Testing Implementation',
      'Documentation',
    ],
  },
  {
    title: 'Deployment & Hosting',
    icon: 'cloud',
    description:
      'Professional deployment setup with automated workflows and reliable hosting solutions.',
    features: [
      'Automated Deployments',
      'Cloud Hosting Setup',
      'Domain Configuration',
      'SSL Certificates',
      'Backup Systems',
    ],
  },
  {
    title: 'API & Integrations',
    icon: 'puzzle',
    description:
      'Connect your application with third-party services and build custom APIs for seamless functionality.',
    features: [
      'Payment Processing',
      'Social Media APIs',
      'CMS Integration',
      'Authentication Systems',
      'Custom API Development',
    ],
  },
  {
    title: 'Technical Consulting',
    icon: 'lightbulb',
    description:
      'Strategic technical advice to help you make informed decisions and avoid costly mistakes.',
    features: [
      'Technology Stack Selection',
      'Architecture Planning',
      'Code Reviews',
      'Performance Audits',
      'Growth Strategy',
    ],
  },
];

export const Services = ({ initialServices }: ServicesProps = {}) => {
  const servicesData = initialServices || services;
  return (
    <section className="py-20 px-4 bg-black" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive development services to bring your vision to life with cutting-edge
            technology and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-full"
            >
              <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24"
        >
          <div className="max-w-6xl mx-auto">
            {/* Enhanced CTA Section */}
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background with theme colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-orange-600/10 to-primary/20" />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 p-8 md:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - Content */}
                  <div className="text-left">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-primary">
                          Available for New Projects
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Build{' '}
                        <span className="relative">
                          <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                            Something Amazing?
                          </span>
                          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full" />
                        </span>
                      </h3>

                      <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                        Transform your ideas into powerful digital solutions. From concept to
                        launch, let&apos;s create something that makes a real impact.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl cursor-pointer"
                          >
                            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            Start Your Project
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href="/#projects"
                            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                            View Portfolio
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right side - Features/Benefits */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6"
                  >
                    {[
                      {
                        icon: Zap,
                        title: 'Fast Delivery',
                        desc: 'Quick turnaround without compromising quality',
                      },
                      {
                        icon: Shield,
                        title: 'Reliable Solutions',
                        desc: 'Built with best practices and security in mind',
                      },
                      {
                        icon: Users,
                        title: 'Collaborative Process',
                        desc: 'Work closely with you throughout the project',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-orange-600/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  value: '7+',
                  label: 'Years Experience',
                  desc: 'Professional Development',
                },
                {
                  value: '50+',
                  label: 'Projects Delivered',
                  desc: 'Successful Launches',
                },
                {
                  value: '98%',
                  label: 'Client Satisfaction',
                  desc: 'Happy Clients',
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center group-hover:border-primary/40 transition-all duration-300">
                    {/* Background glow with theme colors */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-3">
                        {stat.value}
                      </div>
                      <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
                      <div className="text-gray-400 text-sm">{stat.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<Service & { index: number }> = ({
  title,
  description,
  icon,
  features,
  index,
}) => {
  const Icon = iconMap[icon] || Code;

  // Use theme colors with subtle variations
  const getServiceGradient = (index: number) => {
    // Alternate between different intensities of the primary/orange theme
    const gradients = [
      'from-primary/20 via-primary/10 to-primary/5',
      'from-primary/15 via-primary/8 to-orange-600/10',
      'from-orange-600/20 via-primary/10 to-primary/15',
      'from-primary/25 via-orange-600/15 to-primary/10',
    ];
    return gradients[index % gradients.length];
  };

  const getIconColor = (index: number) => {
    // Subtle variations of the theme colors
    const colors = ['text-primary', 'text-orange-400', 'text-primary', 'text-orange-500'];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl transition-all duration-300 h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Theme gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getServiceGradient(index)} opacity-60`}
      />

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Border and glow effect */}
      <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition-colors duration-300" />

      {/* Compact Content */}
      <div className="relative p-6 flex flex-row gap-6 items-center z-10">
        {/* Icon section */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:border-primary/40 transition-all duration-300">
            <Icon
              className={`w-7 h-7 ${getIconColor(index)} group-hover:scale-110 transition-transform duration-300`}
            />
          </div>
          {/* Subtle glow effect */}
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${getServiceGradient(index)} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg`}
          />
        </div>

        {/* Content section */}
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white transition-colors">
              {title}
            </h3>
          </div>

          {/* Compact description */}
          <p className="text-gray-400 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {description}
          </p>

          {/* All features displayed */}
          <div className="flex flex-wrap gap-1">
            {features.map((feature, featureIndex) => (
              <span
                key={featureIndex}
                className="inline-flex items-center text-xs bg-white/10 text-gray-300 hover:text-white px-2 py-1 rounded-md hover:bg-primary/20 transition-colors cursor-default"
              >
                <span className="font-medium">{feature}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
