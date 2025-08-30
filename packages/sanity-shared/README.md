# Sanity Shared Package

This package contains shared Sanity configuration, clients, and utilities used by both the studio and web applications.

## What's Included

### Configuration (`config.ts`)

- `projectId` - Sanity project ID (from env vars or fallback)
- `dataset` - Sanity dataset (from env vars or fallback)
- `apiVersion` - API version for Sanity queries
- `token` - Authentication token for server-side operations
- `studioUrl` - Studio URL for edit intents

### Clients (`client.ts`)

- `sanityClient` - Authenticated client for server-side operations
- `publicClient` - Public client for client-side operations (with CDN)
- `previewClient` - Preview client for draft content

### Image Utilities (`image.ts`)

- `urlFor()` - Generate optimized image URLs from Sanity references
- `getImageDimensions()` - Extract image dimensions from asset references

### Types (`types.ts`)

- Common TypeScript types for Sanity documents
- Re-exports generated types from the web app

## Usage

### In Web App

```typescript
import { publicClient, urlFor, projectId, dataset } from 'sanity-shared';

// Use the shared client
const data = await publicClient.fetch(query);

// Generate image URLs
const imageUrl = urlFor(image).width(800).url();
```

### In Studio App

```typescript
import { projectId, dataset } from 'sanity-shared/config';

// Use in sanity.config.ts
export default defineConfig({
  projectId,
  dataset,
  // ...
});
```

## Environment Variables

The package looks for these environment variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` or `SANITY_STUDIO_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` or `SANITY_STUDIO_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` or `SANITY_STUDIO_API_VERSION`
- `SANITY_API_TOKEN` or `SANITY_API_READ_TOKEN`

## Benefits

1. **Single Source of Truth**: All Sanity configuration is centralized
2. **Type Safety**: Shared types ensure consistency across apps
3. **DRY Principle**: No duplicate client setup or utilities
4. **Easy Maintenance**: Update configuration in one place
5. **Consistent API**: Both apps use the same Sanity API configuration
