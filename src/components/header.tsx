'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, Variants } from 'motion/react'

const menuItems = [
  { title: 'Home', href: '/', isSection: false },
  { title: 'Services', href: '/#services', isSection: true },
  { title: 'Projects', href: '/#projects', isSection: true },
  { title: 'About', href: '/#about', isSection: true },
  { title: 'Contact', href: '/#contact', isSection: true },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavClick = (href: string, isSection: boolean) => {
    if (href === '/') {
      setActiveSection('')
    } else if (isSection && href.startsWith('/#')) {
      const sectionId = href.substring(2)
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const scrollToSection = () => {
      if (typeof window !== 'undefined' && window.location.hash) {
        const sectionId = window.location.hash.substring(1)
        setActiveSection(sectionId)
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    scrollToSection()
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return

      const sections = menuItems.filter(item => item.isSection).map(item => item.href.substring(2))

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const sidebarVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        when: 'beforeChildren',
        staggerChildren: 0.07,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 35,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const menuItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 22,
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 22,
      },
    },
  }

  const buttonVariants: Variants = {
    open: {
      rotate: 90,
      scale: 1,
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
    closed: {
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 500, damping: 30 },
    },
    tap: {
      scale: 0.9,
      transition: { type: 'spring', stiffness: 500, damping: 10 },
    },
  }

  return (
    <header className="fixed top-2 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex items-center h-full w-full justify-center">
            <div className="relative bg-primary/50 backdrop-blur-sm rounded-full h-full shadow-2xl shadow-black/20 px-1 border border-white/20">
              <ul className="relative flex items-center h-full lg:px-2 xl:px-3 lg:py-1.5 xl:py-2 text-black lg:gap-0.5 xl:gap-0">
                <li className="mr-1">
                  <Link
                    href="/"
                    className="flex items-center lg:px-2 xl:px-3 py-1 hover:bg-white/30 rounded-full transition-all duration-200 group"
                  >
                    <div className="lg:w-8 xl:w-10 lg:h-8 xl:h-10 relative">
                      <div className="w-full h-full rounded-full overflow-hidden" style={{
                        background: "linear-gradient(145deg, #0a0a0a, #1a1a1a)",
                        boxShadow: "inset 2px 2px 5px #000000, inset -2px -2px 5px #2a2a2a"
                      }}>
                        <Image
                          src="/image.jpg"
                          alt="Kaleem Ullah"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover opacity-90"
                          style={{ filter: "contrast(1.1) brightness(0.9)" }}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="lg:ml-2 xl:ml-2.5 font-semibold text-black lg:text-xs xl:text-sm lg:tracking-tight xl:tracking-wide">
                      Kaleem Ullah
                    </span>
                  </Link>
                </li>

                <li className="lg:h-5 xl:h-6 w-px bg-gradient-to-b from-transparent via-black/30 to-transparent lg:mx-2 xl:mx-3"></li>

                {menuItems.map(({ title, href, isSection }, index) => {
                  let isActive = false

                  if (href === '/') {
                    isActive = pathname === '/' && !activeSection
                  } else if (isSection) {
                    isActive = pathname === '/' && `/#${activeSection}` === href
                  } else {
                    isActive = pathname === href
                  }

                  return (
                    <li key={index}>
                      <Link
                        href={href}
                        onClick={() => handleNavClick(href, isSection)}
                        className="relative group"
                      >
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse"></span>
                        )}

                        <span
                          className={`relative flex items-center lg:py-1.5 xl:py-2 lg:px-3 xl:px-4 rounded-full font-medium lg:text-xs xl:text-[13px] transition-all duration-300 ${
                            isActive
                              ? 'bg-white text-black shadow-lg shadow-black/20 border border-white/50'
                              : 'text-black/90 hover:text-black hover:bg-white/50'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-lg shadow-primary/50"></span>
                          )}
                          {title}
                        </span>
                      </Link>
                    </li>
                  )
                })}

                <li className="lg:pl-1 xl:pl-2">
                  <a
                    href="mailto:kaleemullah786.ku61@gmail.com"
                    className="relative lg:px-4 xl:px-5 lg:py-1.5 xl:py-2 rounded-full font-medium lg:text-xs xl:text-[13px] bg-gradient-to-r from-primary to-primary/80 text-white hover:from-white hover:to-gray-100 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
                  >
                    <span className="relative z-10 lg:inline xl:inline">
                      <span className="lg:hidden xl:inline">Hire Me</span>
                      <span className="lg:inline xl:hidden">Hire</span>
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-10 h-10">
              <div className="w-full h-full rounded-full overflow-hidden" style={{
                background: "linear-gradient(145deg, #0a0a0a, #1a1a1a)",
                boxShadow: "inset 2px 2px 5px #000000, inset -2px -2px 5px #2a2a2a"
              }}>
                <Image
                  src="/image.jpg"
                  alt="Kaleem Ullah"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover opacity-90"
                  style={{ filter: "contrast(1.1) brightness(0.9)" }}
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </Link>

          <motion.button
            onClick={toggleMenu}
            className="flex-shrink-0 bg-primary p-2 text-secondary rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={isMenuOpen}
            initial="closed"
            animate={isMenuOpen ? 'open' : 'closed'}
            whileTap="tap"
            variants={buttonVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-40 lg:hidden backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed inset-y-0 left-0 z-40 lg:hidden w-full"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <div className="bg-primary h-screen w-full flex flex-col overflow-y-auto hide-scrollbar shadow-xl">
          <nav className="p-20 pt-10 mt-10 pb-0 w-full">
            <ul className="text-secondary uppercase font-extrabold text-3xl">
              {menuItems.map(({ title, href }, index) => (
                <motion.li
                  key={index}
                  className="mb-6 cursor-pointer"
                  variants={menuItemVariants}
                  whileHover={{
                    x: 10,
                    transition: { type: 'spring', stiffness: 400 },
                  }}
                >
                  <Link href={href} onClick={closeMenu} className="block">
                    <p className="break-words">{title}</p>

                    <svg
                      viewBox="0 0 500 30"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full mt-2"
                    >
                      <line
                        x1="10"
                        y1="15"
                        x2="490"
                        y2="15"
                        stroke="#F5F5EE"
                        strokeWidth="4"
                        strokeDasharray="10, 15"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  )
}