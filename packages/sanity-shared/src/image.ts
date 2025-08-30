import imageUrlBuilder from '@sanity/image-url';
import { publicClient } from './client';

/**
 * Shared image URL builder
 */
const builder = imageUrlBuilder(publicClient);

/**
 * Helper function to generate image URLs from Sanity image references
 */
export function urlFor(source: any) {
  return builder.image(source);
}

/**
 * Get image dimensions from Sanity image asset
 */
export function getImageDimensions(
  image: any
): { width: number; height: number; aspectRatio: number } | null {
  if (!image?.asset?._ref) return null;

  const dimensions = image.asset._ref.split('-')[2];
  if (!dimensions) return null;

  const [width, height] = dimensions.split('x').map(Number);

  return {
    width,
    height,
    aspectRatio: width / height,
  };
}
