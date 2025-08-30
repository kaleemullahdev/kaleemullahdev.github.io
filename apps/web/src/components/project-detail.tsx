'use client';

import { ProjectHeroSection } from './project-hero-section';
import { ProjectFeaturesSection } from './project-features-section';
import { ProjectShowcaseSection } from './project-showcase-section';
import { ProjectCTASection } from './project-cta-section';

type ProjectSection = {
  id: string;
  name: string;
  description: string;
  images: string[];
};

type ProjectDetailProps = {
  project: {
    id: number;
    slug: string;
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    thumbnail?: string;
    images?: string[];
    category?: string;
    duration?: string;
    team?: string;
    role?: string;
    features?: string[];
    challenges?: string[];
    solutions?: string[];
  };
  projectSections?: ProjectSection[];
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, projectSections }) => {
  if (!project) return null;
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <ProjectHeroSection project={project} />

      {/* Features Section */}
      <ProjectFeaturesSection technologies={project.technologies} />

      {/* Project Showcase Section */}
      <ProjectShowcaseSection projectSections={projectSections} />

      {/* Call to Action Section */}
      <ProjectCTASection />
    </div>
  );
};
