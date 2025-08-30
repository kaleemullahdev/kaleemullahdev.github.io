import { publicClient as client } from 'sanity-shared';
import {
  projectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  servicesQuery,
} from './sanity.queries';
import type { ProjectWithQueryFields, Service } from 'sanity-shared';

export async function getProjects(): Promise<ProjectWithQueryFields[]> {
  return client.fetch(projectsQuery);
}

export async function getFeaturedProjects(): Promise<ProjectWithQueryFields[]> {
  return client.fetch(featuredProjectsQuery);
}

export async function getProjectBySlug(slug: string): Promise<ProjectWithQueryFields | null> {
  return client.fetch(projectBySlugQuery, { slug });
}

export async function getServices(): Promise<Service[]> {
  return client.fetch(servicesQuery);
}
