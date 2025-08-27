export default function imageLoader({ src }: { src: string }) {
  // If in production and path starts with a slash, replace with ./
  if (process.env.NODE_ENV === 'production' && src.startsWith('/')) {
    const updatedSrc = `.${src}`
    console.log('src', updatedSrc)
    return updatedSrc
  }
  return src
}
