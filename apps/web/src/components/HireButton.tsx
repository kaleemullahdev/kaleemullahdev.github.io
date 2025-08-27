'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Links } from './hero'
import * as motion from 'motion/react-client'

export const HireButton: React.FC<{ professionalLinks: Links[] }> = ({
  professionalLinks,
}) => {
  return (
    <motion.a
      href="mailto:kaleemullah786.ku61@gmail.com"
      className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-accent to-accent-light rounded-lg hover:shadow-xl transition-all duration-200 font-medium group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>Get In Touch</span>
      <svg 
        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </motion.a>
  )
}