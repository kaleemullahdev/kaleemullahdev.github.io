import { ContactPage } from '~/components/contact-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Kaleem Ullah - Full Stack Developer',
  description:
    'Get in touch with Kaleem Ullah for web development projects, technical consultation, or collaboration opportunities.',
};

export default function Contact() {
  return <ContactPage />;
}
