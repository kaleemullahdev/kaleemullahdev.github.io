import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECTS_DATA } from '~/constants'
import { ProjectDetail } from '~/components/project-detail'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS_DATA.find(p => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} - Case Study`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS_DATA.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}