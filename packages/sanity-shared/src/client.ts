import { createClient } from '@sanity/client';
import { apiVersion, dataset, projectId, token } from './config';

/**
 * Client for server-side operations with authentication
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // We use CDN in the public client
  token, // Include token for authenticated requests
});

/**
 * Client for public/client-side operations
 */
export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
});

/**
 * Preview client for draft content
 */
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts',
  token,
});
