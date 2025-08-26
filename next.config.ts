import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import type { NextConfig } from 'next'

const nextConfig = (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  
  return {
    output: 'export',
    assetPrefix: isDev ? undefined : '',
    images: {
      unoptimized: isDev ? true : false,
      loader: isDev ? 'default' : 'custom',
      loaderFile: isDev ? undefined : './src/utils/imageLoader.ts',
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    basePath: isDev ? '' : '',
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
   
    compiler: {
      removeConsole: !isDev,
    },
    // experimental: {
    //   optimizeCss: true,
    // },
  }
}

export default nextConfig