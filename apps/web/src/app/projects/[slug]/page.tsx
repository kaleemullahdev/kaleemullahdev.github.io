import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjects, getProjectBySlug } from '@/lib/sanity.fetch';
import { ProjectDetail } from '~/components/project-detail';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const project = await getProjectBySlug(slug);

    if (!project) {
      return {
        title: 'Project Not Found',
      };
    }

    return {
      title: `${project.name} - Case Study`,
      description: project.description || `Case study for ${project.name}`,
    };
  } catch {
    return {
      title: 'Project Not Found',
    };
  }
}

export async function generateStaticParams() {
  try {
    const projects = await getProjects();
    return projects
      .map((project) => ({
        slug: project.slug?.current || '',
      }))
      .filter((param) => param.slug); // Filter out empty slugs
  } catch {
    return [];
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  try {
    const sanityProject = await getProjectBySlug(slug);

    if (!sanityProject) {
      notFound();
    }

    // Transform Sanity data to match ProjectDetail component expectations
    const project = {
      id: parseInt(sanityProject._id.replace(/[^0-9]/g, '') || '1'), // Convert _id to number
      name: sanityProject.name || 'Untitled Project',
      slug: sanityProject.slug?.current || '',
      description: sanityProject.description || 'No description available',
      technologies: sanityProject.technologies || ['React', 'Next.js'],
      github: sanityProject.url,
      demo: sanityProject.url,
      thumbnail: sanityProject?.coverImages?.[0]?.url || "",
      images: [] as string[],
      category: sanityProject.category || 'Web Development',
      duration: sanityProject.projectDimensions?.timeline
        ? `${sanityProject.projectDimensions.timeline.value} ${sanityProject.projectDimensions.timeline.unit}`
        : '3 months',
      team: sanityProject.projectDimensions?.teamSize
        ? `${sanityProject.projectDimensions.teamSize} developer${sanityProject.projectDimensions.teamSize > 1 ? 's' : ''}`
        : 'Solo',
      role: 'Full Stack Developer',
      features:
        sanityProject.projectSections?.map((section) => section.name || '').filter(Boolean) || [],
      challenges:
        sanityProject.projectSections
          ?.filter((section) => section.name?.toLowerCase().includes('challenge'))
          .map(() => 'Challenge description') || [],
      solutions:
        sanityProject.projectSections
          ?.filter((section) => section.name?.toLowerCase().includes('solution'))
          .map(() => 'Solution description') || [],
    };

    // Transform project sections for the showcase
    const transformedProjectSections =
      sanityProject.projectSections?.map((section) => ({
        id: section._key || section.id || section.name || 'section',
        name: section.name || 'Untitled Section',
        description:
          typeof section.description === 'string'
            ? section.description
            : Array.isArray(section.description)
              ? section.description
                .map((block) =>
                  block._type === 'block'
                    ? block.children?.map((child) => child.text).join(' ') || ''
                    : ''
                )
                .join(' ')
              : '',
        images: section.images?.map((img) => (img as { url?: string }).url).filter((url): url is string => Boolean(url)) || [],
      })) || [];

    return <ProjectDetail project={project} projectSections={transformedProjectSections} />;
  } catch {
    notFound();
  }
}
