import { Hero } from '~/components/hero';
import { Projects } from '~/components/projects';
import { Services } from '~/components/services';
import { getProjects } from '@/lib/sanity.fetch';
import { getServices } from '@/lib/sanity.fetch';
import { PROJECTS_DATA } from '~/constants';
import type { ProjectWithQueryFields } from 'sanity-shared';

// Transformed project type for UI components - matches existing constants structure
interface ProjectData {
  id: number | string;
  slug: string;
  name: string;
  url: string;
  demo?: string;
  github?: string;
  githubUrl?: string;
  description: string;
  category: string;
  coverImage: string;
  thumbnail: string;
  logo?: string;
  technologies: string[];
  features: string[];
  duration: string;
  team: string;
  teamSize?: number;
  iterations?: number;
  techCount?: number;
  role: string;
  priority?: number;
  featured?: boolean;
  projectSections?: ProjectWithQueryFields['projectSections'];
}

interface ServiceData {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

const HomePage = async () => {
  // Fetch data server-side
  const [projects, services] = await Promise.allSettled([getProjects(), getServices()]);

  // Transform projects data - prioritize Sanity data over static data
  let projectsData: ProjectData[] = [];
  
  if (projects.status === 'fulfilled' && projects.value && projects.value.length > 0) {
    projectsData = projects.value.map((project): ProjectData => {
      // Cast to extended type to access query fields
      const extendedProject = project as ProjectWithQueryFields;
      // Get cover image URL from Sanity query result (it should have both coverImage and logoUrl)
      const coverImageUrl =
        extendedProject.coverImage ||
        (project.coverImages?.[0] as { url?: string })?.url ||
        `/next.svg`;

      return {
        id: project._id,
        name: project.name || 'Untitled Project',
        slug: project.slug?.current || '',
        url: project.url || '',
        demo: project.url || '',
        github: extendedProject.githubUrl || project.url || '',
        githubUrl: extendedProject.githubUrl || project.url || '',
        description: project.description || 'No description available',
        category: project.category || 'Web Development',
        coverImage: coverImageUrl,
        thumbnail: coverImageUrl,
        logo: extendedProject.logoUrl || `/next.svg`,
        technologies: project.technologies || ['React', 'Next.js'],
        features: project.projectSections?.map((section) => section.name || '') || [],
        duration: project.projectDimensions?.timeline
          ? `${project.projectDimensions.timeline.value} ${project.projectDimensions.timeline.unit}`
          : '3 months',
        team: project.projectDimensions?.teamSize
          ? `${project.projectDimensions.teamSize} developer${project.projectDimensions.teamSize > 1 ? 's' : ''}`
          : 'Solo',
        teamSize: project.projectDimensions?.teamSize || 1,
        iterations: project.projectDimensions?.iterations,
        techCount: project.projectDimensions?.technologies,
        role: 'Full Stack Developer',
        priority: project.priority || 10,
        featured: false, // Project type doesn't have featured field
        projectSections: project.projectSections || [],
      };
    });
  } else {
    // Fallback to static data if Sanity fetch fails
    projectsData = PROJECTS_DATA;
  }

  // Transform services data
  let servicesData: ServiceData[] | undefined;
  if (services.status === 'fulfilled' && services.value && services.value.length > 0) {
    servicesData = services.value.map(
      (service): ServiceData => ({
        title: service.name || '',
        icon: service.icon || 'code', // Pass string identifier instead of component
        description: service.shortDescription || service.description || '',
        features: service.categories || [],
      })
    );
  }

  return (
    <>
      <Hero />
      <Projects initialProjects={projectsData} />
      <Services initialServices={servicesData} />
    </>
  );
};

export default HomePage;
