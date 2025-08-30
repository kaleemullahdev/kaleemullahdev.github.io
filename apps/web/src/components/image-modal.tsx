'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  altText?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  altText = 'Project image',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          ref={modalRef}
          className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
          >
            <Image
              src={
                images[currentIndex].startsWith('http')
                  ? images[currentIndex]
                  : `/${images[currentIndex]}`
              }
              width={1920}
              height={1080}
              alt={`${altText} - Image ${currentIndex + 1} of ${images.length}`}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg"
              priority
            />
          </motion.div>

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-lg overflow-x-auto px-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Navigate to specific image
                    const steps = index - currentIndex;
                    if (steps > 0) {
                      for (let i = 0; i < steps; i++) onNext();
                    } else {
                      for (let i = 0; i < Math.abs(steps); i++) onPrev();
                    }
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-white scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <Image
                    src={image.startsWith('http') ? image : `/${image}`}
                    width={64}
                    height={64}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
