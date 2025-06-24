import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const nextConfig = (phase: string) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const nextConfig = {
    output: 'export',
    assetPrefix: isDev ? undefined : '/kaleem-ullah',
    images: {
      unoptimized: isDev ? true : false,
      loader: isDev ? 'default' : 'custom',
      loaderFile: isDev ? undefined : './src/utils/imageLoader.ts',
    },
    basePath: isDev ? '' : '/kaleem-ullah',
  }

  return nextConfig
}

export default nextConfig
