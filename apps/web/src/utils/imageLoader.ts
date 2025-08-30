export default function imageLoader({ src }: { src: string }) {
  // If in production and path starts with a slash, replace with ./
  if (process.env.NODE_ENV === 'production' && src.startsWith('/')) {
    return `.${src}`;
  }
  return src;
}
