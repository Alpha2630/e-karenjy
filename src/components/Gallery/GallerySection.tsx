import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'

const images = [
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Walking_the_Avenue_of_the_Baobabs.jpg?width=900', cat: 'paysages', alt: 'Avenue des Baobabs' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indri_(Indri_indri).jpg?width=900', cat: 'animaux', alt: 'Indri' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nosy_Be_beach_(3186856441).jpg?width=900', cat: 'plages', alt: 'Nosy Be' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Big_Tsingy,_Madagascar_(23822944469).jpg?width=900', cat: 'paysages', alt: 'Tsingy' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Isalo_National_Park_01.jpg?width=900', cat: 'paysages', alt: 'Isalo' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Humpback_whale_Sainte_Marie_Madagascar_July_2013.JPG?width=900', cat: 'plages', alt: 'Sainte-Marie' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Namorona_River_in_Ranomafana_National_Park_2013_1.jpg?width=900', cat: 'paysages', alt: 'Ranomafana' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lowland_rainforest,_Masoala_National_Park,_Madagascar.jpg?width=900', cat: 'paysages', alt: 'Forêt Masoala' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ring-tailed_lemur_(Lemur_catta).jpg?width=900', cat: 'animaux', alt: 'Lémur catta' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg?width=900', cat: 'animaux', alt: 'Caméléon panthère' },
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
            className="fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4"
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