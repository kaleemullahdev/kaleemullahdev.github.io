'use client'

import { motion } from 'motion/react'
import { 
  Code, 
  Palette, 
  Rocket, 
  Globe, 
  Monitor, 
  Server,
  Smartphone,
  Database,
  Shield
} from 'lucide-react'

type Service = {
  title: string
  icon: React.ElementType
  description: string
  features: string[]
}

const services: Service[] = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    description: 'Creating stunning, responsive user interfaces with modern frameworks and best practices.',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimization']
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Building robust, scalable server-side applications and APIs.',
    features: ['Node.js/Python', 'RESTful APIs', 'GraphQL', 'Microservices']
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Developing cross-platform mobile applications with native performance.',
    features: ['React Native', 'Flutter', 'Progressive Web Apps', 'App Store Deployment']
  },
  {
    title: 'Database Design',
    icon: Database,
    description: 'Designing and optimizing database schemas for maximum efficiency.',
    features: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Optimization']
  },
  {
    title: 'Cloud & DevOps',
    icon: Globe,
    description: 'Deploying and managing applications in cloud environments.',
    features: ['AWS/Azure', 'Docker', 'CI/CD', 'Kubernetes']
  },
  {
    title: 'Security & Testing',
    icon: Shield,
    description: 'Ensuring application security and quality through comprehensive testing.',
    features: ['Security Audits', 'Unit Testing', 'E2E Testing', 'Performance Testing']
  }
]

export const Services = () => {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent pb-2 mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive development services to bring your vision to life with cutting-edge technology and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <Rocket className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Ready to start your project?</h3>
              <p className="text-gray-600">Let's discuss how I can help bring your ideas to life.</p>
            </div>
            <a
              href="mailto:kaleemullah786.ku61@gmail.com"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ServiceCard: React.FC<Service> = ({ title, description, icon: Icon, features }) => {
  return (
    <motion.div
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <motion.div
          className="mt-6 inline-flex items-center text-primary font-medium text-sm cursor-pointer"
          whileHover={{ x: 4 }}
        >
          <span>Learn more</span>
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}