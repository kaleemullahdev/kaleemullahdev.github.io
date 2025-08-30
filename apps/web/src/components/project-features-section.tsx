'use client';

import { motion } from 'motion/react';
import { CheckCircle, Code2, Layers, Zap, Shield, Smartphone } from 'lucide-react';

interface ProjectFeaturesSectionProps {
  technologies?: string[];
}

export const ProjectFeaturesSection: React.FC<ProjectFeaturesSectionProps> = ({
  technologies = [],
}) => {
  const features = [
    {
      icon: Code2,
      title: 'Modern Architecture',
      description:
        'Built with latest technologies and best practices for optimal performance and maintainability.',
    },
    {
      icon: Zap,
      title: 'Optimized Performance',
      description:
        'Fast loading times and smooth interactions through careful optimization and caching strategies.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description:
        'Seamless experience across all devices and screen sizes with mobile-first approach.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security measures and robust error handling for reliable operation.',
    },
    {
      icon: Layers,
      title: 'Scalable Solution',
      description:
        'Modular architecture that can easily adapt and scale to growing business needs.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description:
        'Comprehensive testing and code reviews ensure high-quality, bug-free implementation.',
    },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Key Features & Highlights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the core features and technical excellence that make this project stand out
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300"
              style={{
                boxShadow: `
                  0 4px 20px rgba(0, 0, 0, 0.3),
                  0 2px 10px rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 border border-primary/30">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        {technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technologies Used</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-gray-300 font-medium backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
