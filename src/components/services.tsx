'use client'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const services = [
  {
    icon: 'web-development.svg',
    title: 'Frontend Development',
    description: 'Building responsive, performant user interfaces with React, Next.js, and modern CSS frameworks.',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimization']
  },
  {
    icon: 'performance-optimization.svg',
    title: 'Backend Development',
    description: 'Creating scalable server-side applications with Node.js, databases, and cloud services.',
    features: ['Node.js/Express', 'PostgreSQL/MongoDB', 'REST/GraphQL APIs', 'Cloud Deployment']
  },
  {
    icon: 'web-maintenance.svg',
    title: 'Full Stack Solutions',
    description: 'End-to-end web application development from concept to deployment and maintenance.',
    features: ['System Architecture', 'Database Design', 'CI/CD Pipeline', 'Ongoing Support']
  }
]

export const Services = () => {
  return (
    <section className="py-32 relative" id="services">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card hover:bg-card-hover transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src={`/${service.icon}`}
                    width={32}
                    height={32}
                    alt={service.title}
                    className="invert"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">
            Have a project in mind? Let&apos;s work together to create something amazing.
          </p>
          <motion.a
            href="mailto:kaleemullah786.ku61@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}