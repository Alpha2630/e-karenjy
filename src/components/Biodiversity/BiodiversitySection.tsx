import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { animals, biodiversityStats } from '@/data/animals'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function BiodiversitySection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-28 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
            {t('biodiversity.title')}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            {t('biodiversity.subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {biodiversityStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-base-100 rounded-2xl p-5 text-center shadow-sm border border-base-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="text-2xl md:text-3xl font-display text-primary font-semibold">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-base-content/60 mt-1 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animals carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.2 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="pb-12!"
        >
          {animals.map((animal) => (
            <SwiperSlide key={animal.id}>
              <motion.article
                className="bg-base-100 rounded-2xl overflow-hidden shadow-md border border-base-300 h-full"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-xl text-primary">{animal.name}</h3>
                    {animal.endemic && (
                      <span className="text-[10px] uppercase tracking-wider bg-secondary/15 text-secondary px-2 py-0.5 rounded-full">
                        Endémique
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-base-content/50 italic mb-2">{animal.nameScientific}</p>
                  <p className="text-sm text-base-content/80 leading-relaxed mb-3">
                    {animal.description}
                  </p>
                  <p className="text-xs text-accent font-medium">💡 {animal.funFact}</p>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
