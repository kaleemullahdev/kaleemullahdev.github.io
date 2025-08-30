import groq from 'groq';

// Projects queries
export const projectsQuery = groq`
  *[_type == "project"] | order(priority asc, _createdAt desc) {
    _id,
    name,
    slug,
    description,
    category,
    priority,
    featured,
    url,
    githubUrl,
    logo,
    "logoUrl": logo.asset->url,
    coverImages[] {
      asset,
      alt,
      "url": asset->url
    },
    "coverImage": coverImages[0].asset->url,
    technologies,
    projectDimensions {
      timeline {
        value,
        unit
      },
      teamSize,
      iterations,
      technologies
    },
    projectSections[] {
      _id,
      id,
      name,
      description,
      images[] {
        asset,
        alt,
        "url": asset->url
      }
    }
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(priority asc, _createdAt desc)[0...6] {
    _id,
    name,
    slug,
    description,
    category,
    url,
    logo,
    "logoUrl": logo.asset->url,
    coverImages,
    "coverImage": coverImages[0].asset->url,
    technologies
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    category,
    priority,
    featured,
    url,
    githubUrl,
    logo,
    "logoUrl": logo.asset->url,
    coverImages[] {
      asset,
      alt,
      "url": asset->url
    },
    "coverImage": coverImages[0].asset->url,
    technologies,
    projectDimensions {
      timeline {
        value,
        unit
      },
      teamSize,
      iterations,
      technologies
    },
    projectSections[] {
      _id,
      id,
      name,
      description,
      images[] {
        asset,
        alt,
        "url": asset->url
      }
    }
  }
`;

// Services queries
export const servicesQuery = groq`
  *[_type == "service"] | order(_createdAt asc) {
    _id,
    name,
    "slug": id.current,
    shortDescription,
    description,
    icon,
    categories,
    features[] {
      title,
      description,
      icon
    }
  }
`;
