'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Links } from './hero'
import * as motion from 'motion/react-client'
import { AnimatePresence } from 'motion/react'

export const HireButton: React.FC<{ professionalLinks: Links[] }> = ({
  professionalLinks,
}) => {
  const [showIcons, setShowIcons] = useState(false)

  const onHireClick = () => {
    setShowIcons(!showIcons)
  }

  return (
    <div className="relative">
      <div
        className={`absolute top-1 w-1/2 xs:w-1/3 flex flex-row md:flex-row justify-evenly  items-center  bottom-full   transform -translate-x-1/5   space-x-2 transition-all`}
      >
        <AnimatePresence>
          {showIcons
            ? professionalLinks?.map((link, index) => {
                return (
                  <motion.div
                    className="bg-white  rounded-full shadow-lg shadow-gray-500 p-2 relative"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 * index + 1 }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0, delay: 0.1 },
                    }}
                    exit={{ opacity: 0, y: 0, scale: 0 }}
                    key={link.icon}
                  >
                    <Link
                      href={link.src || '/'}
                      target="_blank"
                      className="max-auto"
                    >
                      <Image
                        src={`/${link.icon}`}
                        width={40}
                        height={40}
                        alt="github"
                        className="text-white"
                      />
                    </Link>
                  </motion.div>
                )
              })
            : null}
        </AnimatePresence>
      </div>
      <div className="pt-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-20 py-3 mt-10 rounded-lg hover:bg-red-600 shadow-lg hover:shadow-xl transition duration-200 cursor-pointer font-medium text-lg"
          onClick={onHireClick}
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  )
}
