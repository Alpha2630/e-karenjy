import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'

export default function Hero() {
  const { t } = useTranslation()
  const { setHasStarted } = useAppStore()

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image - Avenue des Baobabs golden hour style */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=85)`,
        }}
      />
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          className="text-amber-200/90 tracking-[0.35em] uppercase text-xs md:text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          L’expérience immersive
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            to="/map"
            onClick={() => setHasStarted(true)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-content font-medium rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.03]"
          >
            {t('hero.cta')}
            <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
