'use client'
import Link from 'next/link'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
  ],
  social: [
    { name: 'GitHub', icon: 'github.svg', href: 'https://github.com/kaleemullahdev' },
    { name: 'LinkedIn', icon: 'linkedin.svg', href: 'https://www.linkedin.com/in/kaleem-ullah-dev/' },
    { name: 'Email', icon: 'email.svg', href: 'mailto:kaleemullah786.ku61@gmail.com' },
  ],
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative pt-32 pb-8 border-t border-border" id="about">
      {/* Main Footer Content */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">Kaleem Ullah</span>
              </span>
            </div>
            
            <p className="text-text-secondary mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences. 
              Specializing in modern web technologies and delivering high-quality solutions.
            </p>
            
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full hover:bg-card-hover transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={`/${link.icon}`}
                    width={20}
                    height={20}
                    alt={link.name}
                    className="invert"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:kaleemullah786.ku61@gmail.com"
                className="block text-text-secondary hover:text-primary transition-colors"
              >
                kaleemullah786.ku61@gmail.com
              </a>
              <p className="text-text-secondary">
                Available for freelance work and full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} Kaleem Ullah. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  )
}