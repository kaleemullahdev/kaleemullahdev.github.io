'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Full-Stack Development', href: '#services' },
      { name: 'UI/UX Implementation', href: '#services' },
      { name: 'Performance Optimization', href: '#services' },
      { name: 'DevOps & Deployment', href: '#services' },
    ],
    resources: [
      { name: 'Portfolio', href: '#projects' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Resume', href: '/kaleem-resume.pdf' },
    ],
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/kaleemullahdev', icon: Github },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kaleem-ullah-dev/',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/kaleemullahdev',
      icon: Twitter,
    },
  ];

  return (
    <footer className="bg-black text-white relative z-10" id="contact">
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
              Full Stack Developer delivering high-performance web solutions that drive business
              growth and user engagement.
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
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300 cursor-pointer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Current Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for new projects</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-1">Response time</p>
                <p className="text-sm font-medium">Within 2 hours</p>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-orange-500/10 rounded-lg p-4 border border-primary/20">
                <p className="text-sm font-medium">Ready to start</p>
                <p className="text-xs text-gray-400 mt-1">Let&apos;s discuss your project!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-xs text-gray-400">
            <p>© {currentYear} Kaleem Ullah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
