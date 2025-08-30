'use client';

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export type Links = {
  src?: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  type?: string;
};

const professionalLinks: Links[] = [
  {
    src: 'https://github.com/kaleemullahdev',
    icon: Github,
    name: 'GitHub',
    type: '_blank',
  },
  {
    src: 'https://www.linkedin.com/in/kaleem-ullah-dev/',
    icon: Linkedin,
    name: 'LinkedIn',
    type: '_blank',
  },
  {
    src: 'mailto:kaleemullah786.ku61@gmail.com',
    icon: Mail,
    name: 'Email',
  },
];

// Animated Counter Component
const AnimatedCounter = ({
  value,
  suffix = '',
  delay = 0,
}: {
  value: number;
  suffix?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(value);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, value, delay]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <span
      ref={ref}
      className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent"
    >
      0{suffix}
    </span>
  );
};

export const HeroClient: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          {/* Enhanced Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-orange-500/20 border border-primary/40 rounded-full mb-8 backdrop-blur-sm shadow-xl"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
              <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Available for New Projects • Top Rated Developer
            </span>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[0.9] tracking-tight mb-6">
              <motion.span
                className="block text-white mb-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.span>
              <motion.span
                className="block relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                    That Delivers Results
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-full opacity-80" />
                </span>
              </motion.span>
            </h1>

            {/* Decorative Elements */}
            <div className="relative">
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-primary/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Client-Focused Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10 max-w-2xl lg:max-w-none"
          >
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 font-semibold">
              Transform your ideas into{' '}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                profitable web solutions
              </span>
            </p>

            <div className="space-y-3 text-lg text-gray-400 leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>
                  <strong className="text-gray-300">React, Next.js & TypeScript</strong> expert with
                  7+ years experience
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>
                  <strong className="text-gray-300">50+ successful projects</strong> delivered on
                  time and budget
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">✓</span>
                <span>
                  <strong className="text-gray-300">End-to-end development</strong> from design to
                  deployment
                </span>
              </p>
            </div>

            <motion.div
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary">
                Ready to start your project today
              </span>
            </motion.div>
          </motion.div>

          {/* Action-Oriented CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white rounded-xl font-bold shadow-xl shadow-primary/30 transition-all duration-200 flex items-center gap-2 cursor-pointer">
                  Hire Me Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#projects">
                <button className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm cursor-pointer">
                  View Portfolio
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center gap-6 justify-center lg:justify-start"
          >
            <span className="text-sm text-gray-400">Let&apos;s connect</span>
            <div className="flex gap-3">
              {professionalLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.src || '/'}
                    target={link.type}
                    className="group w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Enhanced Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          style={{ y, opacity: opacity, scale }}
          className="relative"
        >
          <div className="relative max-w-lg mx-auto">
            {/* Clean image container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Simple image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/image.jpg"
                  alt="Kaleem Ullah"
                  fill
                  quality={95}
                  priority
                  className="object-cover"
                  style={{
                    objectPosition: 'center',
                  }}
                />
              </div>

              {/* Professional overlay badges */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="px-4 py-2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg">
                  <span className="text-white text-sm font-medium">Senior Developer</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="px-4 py-2 bg-primary/90 backdrop-blur-sm border border-primary/30 rounded-lg">
                  <span className="text-white text-sm font-medium">Full Stack</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced stats section */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              {[
                { value: 50, suffix: '+', label: 'Projects', delay: 0 },
                { value: 7, suffix: '+', label: 'Years Exp', delay: 200 },
                { value: 98, suffix: '%', label: 'Success Rate', delay: 400 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-300">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={stat.delay} />
                      <div className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
