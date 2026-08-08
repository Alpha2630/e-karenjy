import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'

const images = [
  { src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80', cat: 'paysages', alt: 'Avenue des Baobabs' },
  { src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80', cat: 'animaux', alt: 'Indri' },
  { src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=900&q=80', cat: 'plages', alt: 'Nosy Be' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80', cat: 'paysages', alt: 'Tsingy' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80', cat: 'paysages', alt: 'Isalo' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80', cat: 'plages', alt: 'Sainte-Marie' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80', cat: 'paysages', alt: 'Ranomafana' },
  { src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=900&q=80', cat: 'paysages', alt: 'Forêt Masoala' },
]

export default function GallerySection() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="font-display text-3xl md:text-5xl text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('gallery.title')}
        </motion.h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              className="break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
                <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
