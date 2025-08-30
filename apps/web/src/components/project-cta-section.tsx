'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const ProjectCTASection: React.FC = () => {
  const handleContactClick = () => {
    // Try to open Tawk.to chat widget if available
    const windowWithTawk = window as typeof window & {
      Tawk_API?: {
        maximize: () => void;
      };
    };

    if (typeof window !== 'undefined' && windowWithTawk.Tawk_API) {
      windowWithTawk.Tawk_API.maximize();
    } else {
      // Fallback to contact page
      window.location.href = '/contact';
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 30% 50%, rgba(255, 126, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255, 126, 0, 0.1) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Let&apos;s Work Together</span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>

            <p className="text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Transform your ideas into reality with the same passion and expertise you see here.
              Let&apos;s create something extraordinary together.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary CTA - Start Chat */}
            <motion.button
              onClick={handleContactClick}
              className="group relative px-6 py-3 bg-primary text-white rounded-xl font-medium overflow-hidden cursor-pointer z-30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: `
                  0 10px 40px rgba(255, 126, 0, 0.3),
                  0 5px 20px rgba(0, 0, 0, 0.2)
                `,
                pointerEvents: 'auto',
                position: 'relative',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            {/* Secondary CTA - View Contact */}
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer relative z-30"
                style={{
                  boxShadow: `
                    0 4px 20px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  pointerEvents: 'auto',
                  position: 'relative',
                }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                View Contact Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced More Projects Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              <span className="text-sm">Or explore more of my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Enhanced Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-12 border-t border-gradient-to-r from-transparent via-white/10 to-transparent"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary/30">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-white font-semibold">Quick Response</h4>
                <p className="text-gray-400 text-sm">Usually reply within 2-4 hours</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary/30">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <h4 className="text-white font-semibold">Free Consultation</h4>
                <p className="text-gray-400 text-sm">Let&apos;s discuss your project needs</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary/30">
                  <span className="text-primary font-bold">⚡</span>
                </div>
                <h4 className="text-white font-semibold">Fast Delivery</h4>
                <p className="text-gray-400 text-sm">Quality work, delivered on time</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
