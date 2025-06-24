'use client'
import { useState, useMemo } from 'react'
import { PRIMARY_LINK_CLASS, PROJECTS_DATA } from '~/constants'
import { ProjectCard } from './project-card'
const allTechStack = [
  {
    id: 'all',
    name: 'All',
  },
  {
    id: 'Next.js',
    name: 'Next.js',
  },
  {
    id: 'Gatsby.js',
    name: 'Gatsby.js',
  },
  // {
  //   id: 'astro',
  //   name: 'Astro',
  // },
  {
    id: 'Typescript',
    name: 'Typescript',
  },
  {
    id: 'Tailwind Css',
    name: 'Tailwind CSS',
  },
  {
    id: 'MUI',
    name: 'MUI',
  },
]
export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all')
  const allProjects = useMemo(() => {
    return activeTab == 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(({ technologies }) =>
          technologies.includes(activeTab),
        )
  }, [activeTab])
  return (
    <section className="section-container" id="projects">
      <div className="flex flex-col items-center  z-30  rounded-xl">
        <h3 className="text-headingText lg:text-3xl md:text-2xl text-2xl font-bold leading-3 text-center w-full">
          My Projects
        </h3>
        <div className="m-10">
          <ul className="hidden bg-slate-50 shadow-md py-2 px-4 rounded-full md:flex  items-center gap-2 font-primary text-sm">
            {allTechStack?.map(({ id, name }) => {
              return (
                <li
                  key={id}
                  className={`${PRIMARY_LINK_CLASS} ${activeTab === id ? 'opacity-100 bg-primary text-white' : 'opacity-70'}  py-3 px-5 cursor-pointer `}
                  onClick={() => setActiveTab(id)}
                >
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects?.map((data) => {
            return <ProjectCard key={data?.id} {...data} />
          })}
        </div>
      </div>
    </section>
  )
}
