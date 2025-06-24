'use client'
import { useCallback, useState } from 'react'
import Link from 'next/link'

const navLinkClass =
  ' text-gray-600  p-2 px-6 hover:text-white  rounded-full cursor-pointer  font-medium hover:opacity-100 hover:bg-primary transition-all duration-1000'

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home')
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(`section#${sectionId}`)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      setActiveLink(sectionId)
    }
  }, [])
  const navLinks = [
    {
      id: 'home',
      title: 'Home',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'services',
      title: 'Services',
    },
  ]
  return (
    <header className="fixed top-0 left-0 right-0  z-50">
      <nav className="mx-w-[1440px] container mx-auto flex px-4 py-4 items-center justify-around md:justify-between">
        <Link href="/" className="hidden md:block">
          <div className="text-2xl text-textPrimary font-bold flex items-center gap-2">
            <div className="bg-slate-50 shadow-lg p-2 rounded-full">
              <span>KU</span>
            </div>
          </div>
        </Link>

        <ul
          className={` bg-slate-50 z-10 ${activeLink ? 'opacity-100' : 'opacity-70'} shadow-lg py-2 px-4 rounded-full flex  items-center gap-2 font-primary text-md hover:opacity-100`}
        >
          {navLinks?.map(({ id, title }) => {
            const isActive = activeLink == id
            return (
              <li
                key={id}
                className={`${navLinkClass} ${isActive ? 'opacity-100 bg-primary text-white' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {title}
              </li>
            )
          })}
        </ul>
        <div className="sm:hidden md:block"></div>
      </nav>
    </header>
  )
}
