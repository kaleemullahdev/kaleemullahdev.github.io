import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HireButton } from './HireButton'
import * as motion from 'motion/react-client'

type Props = {
  imageUrl?: string
}

export type Links = {
  src?: string
  icon: string
  type?: string
}

const professionalLinks: Links[] = [
  {
    src: 'https://github.com/kaleemullahdev',
    icon: 'github.svg',
    type: '_blank',
  },
  {
    src: 'https://www.linkedin.com/in/kaleem-ullah-dev/',
    icon: 'linkedin.svg',
    type: '_blank',
  },
  {
    src: 'mailto:kaleemullah786.ku61@gmail.com',
    icon: 'email.svg',
  },
]

export const Hero: React.FC<Props> = () => {
  return (
    <section className="section-container pt-30 mx-auto" id="home">
      <div className="flex flex-col md:flex-row items-center gap-12 z-30  shadow-lg p-10 rounded-xl">
        <div
          key="box"
          className="md:w-1/2 relative w-full flex items-center flex-col"
          data-aos="fade-left"
        >
          <div className="shadow-primary shadow-sm rounded-full">
            <Image
              src={`/profile.png`}
              height={300}
              width={300}
              sizes="100vw"
              quality={100}
              className="rounded-full"
              alt="Profile Image"
            />
          </div>
          <div className="md:w-1/3 w-full flex flex-row md:flex-row justify-evenly  items-center mt-8">
            {professionalLinks?.map((link, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 * index + 1 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0, delay: 0.1 },
                  }}
                  exit={{ opacity: 0, y: 0 }}
                  className="bg-white  rounded-full shadow-lg shadow-gray-500 p-2 relative"
                  key={link.icon}
                >
                  <Link
                    href={link.src || '/'}
                    target={link.type}
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
            })}
          </div>
        </div>
        <div className="md:w-1/4 mb-8 md:mb-0 space-y-8" data-aos="fade-right">
          <h1 className="text-headingText md:text-4xl text-2xl font-bold md:leading-12 sm:leading-4">
            Full Stack (Front-End Heavy) Developer
          </h1>
          <p className="text-lg text-headingText leading-relaxed max-w-xl">
            Hi {`I'm`} Kaleem Ullah. A creative Frontend Developer with 5+ years
            of experience in building high-performance, scalable, and responsive
            web solutions.
          </p>
          <HireButton professionalLinks={professionalLinks} />
        </div>
      </div>
    </section>
  )
}
