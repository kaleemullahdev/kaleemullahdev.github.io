/**
 * Shared Sanity configuration
 * This file contains all the configuration that needs to be consistent across apps
 */

// Support both Next.js and Sanity Studio environment variables
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || 'r09ozqjm', // fallback to your project ID
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_STUDIO_PROJECT_ID'
);

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production', // fallback to production
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET or SANITY_STUDIO_DATASET'
);

// API version for Sanity
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  process.env.SANITY_STUDIO_API_VERSION ||
  '2024-01-01';

// Studio URL for edit intents
export const studioUrl = '/studio';

// Helper function to assert required values
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

// Token for server-side operations (optional)
export const token = process.env.SANITY_API_TOKEN || process.env.SANITY_API_READ_TOKEN;
