import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Music, Utensils, Users, Sparkles } from 'lucide-react'

const topics = [
  {
    icon: Users,
    title: 'Les 18 ethnies',
    text: 'Merina, Betsileo, Betsimisaraka, Sakalava, Antandroy, Antaimoro… Chaque peuple apporte sa langue, ses rites et son rapport unique à la terre.',
  },
  {
    icon: Sparkles,
    title: 'Fady — les tabous',
    text: 'Les fady régissent la vie quotidienne et protègent les lieux sacrés. Les respecter est la première marque de respect envers les Malgaches.',
  },
  {
    icon: Music,
    title: 'Musique & danse',
    text: 'Salegy, tsapiky, hira gasy… La musique est partout : dans les fêtes, les cérémonies et les soirs de marché.',
  },
  {
    icon: Utensils,
    title: 'Gastronomie',
    text: 'Romazava, ravitoto, mofo gasy, vanille de Madagascar (1ère productrice mondiale), cacao, rhum arrangé… Une cuisine de terroir généreuse.',
  },
]

export default function CultureSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
            {t('culture.title')}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            {t('culture.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              className="flex gap-5 p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <topic.icon size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl mb-2">{topic.title}</h3>
                <p className="text-base-content/75 text-sm leading-relaxed">{topic.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Famadihana highlight */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative p-8 md:p-14 max-w-2xl">
            <h3 className="font-display text-2xl md:text-4xl text-white mb-4">
              Famadihana
            </h3>
            <p className="text-white/85 leading-relaxed">
              La « retournement des morts » : une cérémonie unique au monde où les familles
              sortent les restes de leurs ancêtres, les enveloppent de nouveaux lamba et dansent
              avec eux. Un moment de joie, de transmission et de lien entre les vivants et les morts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
