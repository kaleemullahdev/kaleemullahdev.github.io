'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, Sparkles, Expand } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageModal } from './image-modal';

interface ProjectSection {
  id: string;
  name: string;
  description: string;
  images: string[];
}

interface ProjectShowcaseSectionProps {
  projectSections?: ProjectSection[];
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  projectSections,
}) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    sectionIndex: number;
    imageIndex: number;
  }>({
    isOpen: false,
    sectionIndex: 0,
    imageIndex: 0,
  });

  if (!projectSections || projectSections.length === 0) return null;

  const handleOpenModal = (sectionIndex: number, imageIndex: number) => {
    setModalState({
      isOpen: true,
      sectionIndex,
      imageIndex,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNextImage = () => {
    setModalState((prev) => {
      const section = projectSections[prev.sectionIndex];
      if (!section) return prev;

      const nextIndex = (prev.imageIndex + 1) % section.images.length;
      return { ...prev, imageIndex: nextIndex };
    });
  };

  const handlePrevImage = () => {
    setModalState((prev) => {
      const section = projectSections[prev.sectionIndex];
      if (!section) return prev;

      const prevIndex = (prev.imageIndex - 1 + section.images.length) % section.images.length;
      return { ...prev, imageIndex: prevIndex };
    });
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Project Showcase</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the different sections and features of this project in detail
          </p>
        </motion.div>

        <div className="space-y-24">
          {projectSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Section Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-lg lg:text-xl font-medium text-primary uppercase tracking-wider">
                    {section.name || `Section ${index + 1}`}
                  </h3>
                </div>
                <div className="text-gray-300 leading-relaxed">
                  {section.description ? (
                    <p>
                      {typeof section.description === 'string'
                        ? section.description
                        : `Explore the ${section.name?.toLowerCase()} section showcasing the implementation and design choices. Our approach focused on creating an intuitive and engaging user experience.`}
                    </p>
                  ) : (
                    <p>
                      This section showcases the implementation and design choices made for{' '}
                      {section.name?.toLowerCase()}. Our approach focused on creating an intuitive
                      and engaging user experience.
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Fully responsive design</span>
                </div>
              </div>

              {/* Section Images */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {section?.images && section.images.length > 0 ? (
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-white/5 border border-white/20 rounded-2xl backdrop-blur-sm overflow-hidden">
                      {section.images.slice(0, 1).map((imageUrl, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative cursor-pointer group/image"
                          onClick={() => handleOpenModal(index, 0)}
                        >
                          <Image
                            src={imageUrl.startsWith('http') ? imageUrl : `/${imageUrl}`}
                            width={800}
                            height={500}
                            alt={section.name || `Project section ${index + 1}`}
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors flex items-center justify-center">
                            <Expand className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ))}

                      {/* Additional images as smaller thumbnails */}
                      {section.images.length > 1 && (
                        <div className="p-4 bg-gray-50 border-t border-gray-100">
                          <div className="flex gap-2 overflow-x-auto">
                            {section.images.slice(1, 4).map((imageUrl, thumbIndex) => (
                              <div
                                key={thumbIndex}
                                className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                                onClick={() => handleOpenModal(index, thumbIndex + 1)}
                              >
                                <Image
                                  src={imageUrl.startsWith('http') ? imageUrl : `/${imageUrl}`}
                                  width={80}
                                  height={80}
                                  alt={`${section.name} thumbnail ${thumbIndex + 2}`}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                                />
                              </div>
                            ))}
                            {section.images.length > 4 && (
                              <div
                                className="flex-shrink-0 w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-medium cursor-pointer hover:bg-gray-300 transition-colors"
                                onClick={() => handleOpenModal(index, 4)}
                              >
                                +{section.images.length - 4}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                    <span className="text-gray-400">No preview available</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {projectSections[modalState.sectionIndex]?.images && (
        <ImageModal
          images={projectSections[modalState.sectionIndex].images}
          currentIndex={modalState.imageIndex}
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          altText={projectSections[modalState.sectionIndex].name}
        />
      )}
    </section>
  );
};
