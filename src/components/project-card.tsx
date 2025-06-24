'use client'
import Link from 'next/link'
import Image from 'next/image'
import * as motion from 'motion/react-client'
type Project = {
  id: string
  name: string
  description: string
  coverImage: string
  url: string
  technologies: string[]
}

type GetRandomColor = (index: number) => { bg: string; text: string }

const getRandomColor: GetRandomColor = (index) => {
  const colorOptions = [
    { bg: 'bg-blue-100', text: 'text-blue-800' },
    { bg: 'bg-green-100', text: 'text-green-800' },
    { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    { bg: 'bg-indigo-100', text: 'text-indigo-800' },
    { bg: 'bg-purple-100', text: 'text-purple-800' },
    { bg: 'bg-pink-100', text: 'text-pink-800' },
    { bg: 'bg-red-100', text: 'text-red-800' },
    { bg: 'bg-gray-100', text: 'text-gray-800' },
    { bg: 'bg-teal-100', text: 'text-teal-800' },
    { bg: 'bg-orange-100', text: 'text-orange-800' },
  ]
  return colorOptions[index >= colorOptions?.length ? 0 : index]
}

export const ProjectCard = ({
  name,
  description,
  url,
  coverImage,
  technologies,
  id,
}: Project) => {
  return (
    <motion.div
      key={id}
      id={id}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, rotate: 0 }}
      className="flex flex-col pt-5 bg-white rounded-lg shadow-md cursor-pointer shadow-primary overflow-hidden h-full "
    >
      <motion.div
        className="relative h-52"
        initial={{ opacity: 1, scale: 1 }}
        // draggable
        whileHover={{ scale: 1.5 }}
      >
        <Image
          src={`/${coverImage}`}
          alt="Project 1"
          quality={90}
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex flex-col flex-grow p-4  justify-between">
        <div>
          <h3 className="text-lg text-textPrimary font-semibold mb-2">
            {name}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, key) => {
              const { bg, text } = getRandomColor(key)
              return (
                <p
                  key={key}
                  className={`px-2 py-1 ${bg} rounded-full ${text} text-xs font-medium`}
                >
                  {tech}
                </p>
              )
            })}
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Link href={url} target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1, delay: 0.1 }}
              className="px-4 py-2 text-sm bg-primary font-medium text-white rounded-lg"
            >
              View Project
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
