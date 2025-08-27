'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  MapPin,
  Code2,
  Heart
} from 'lucide-react'
import { motion } from 'motion/react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigation = {
    services: [
      { name: 'Frontend Development', href: '#services' },
      { name: 'Backend Development', href: '#services' },
      { name: 'Mobile Development', href: '#services' },
      { name: 'Cloud & DevOps', href: '#services' },
    ],
    resources: [
      { name: 'Projects', href: '#projects' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Resume', href: '/resume.pdf' },
    ],
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/kaleemullahdev', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kaleem-ullah-dev/', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/kaleemullahdev', icon: Twitter },
  ]

  return (
    <footer className="bg-gray-900 text-white relative z-10" id="contact">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Get in touch for collaborations, projects, or just to say hello!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2 font-medium text-sm"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Personal Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold">
                  KU
                </div>
                <h2 className="text-xl font-bold">Kaleem Ullah</h2>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              Full Stack Developer crafting exceptional digital experiences with modern technologies.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4 text-sm">
              <a
                href="mailto:kaleemullah786.ku61@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                kaleemullah786.ku61@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Islamabad, Pakistan
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(social => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              {navigation.services.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <Code2 className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm">
              {navigation.resources.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Current Status</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for freelance</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-1">Currently working on</p>
                <p className="text-sm font-medium">AI-Powered Web Solutions</p>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm font-medium">Open to collaborations</p>
                <p className="text-xs text-gray-400 mt-1">Let's create something amazing!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
            <p>© {currentYear} Kaleem Ullah. All rights reserved.</p>
            <p className="flex items-center gap-1 mt-2 sm:mt-0">
              Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}