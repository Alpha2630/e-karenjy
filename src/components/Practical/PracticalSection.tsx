import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  FileText,
  Calendar,
  Coins,
  Languages,
  MapPin,
  Users,
  Zap,
  Shield,
} from 'lucide-react'

const infos = [
  {
    icon: FileText,
    title: 'Visa (2026)',
    text: 'e-Visa ou à l’arrivée. Approximatif : 15 jours ~30 €, 30 jours ~35 €, 60 jours ~50 €. Passeport valable 6 mois minimum.',
  },
  {
    icon: Calendar,
    title: 'Meilleure période',
    text: 'Avril/mai à octobre/novembre (saison sèche). Juillet-septembre : observation des baleines à Sainte-Marie.',
  },
  {
    icon: Coins,
    title: 'Monnaie',
    text: 'Ariary (MGA). Cartes acceptées dans les grandes villes. Prévoir du cash pour l’intérieur.',
  },
  {
    icon: Languages,
    title: 'Langues',
    text: 'Malagasy (officiel) & Français. L’anglais est parlé dans le tourisme.',
  },
  {
    icon: MapPin,
    title: 'Géographie',
    text: 'Capitale : Antananarivo. Superficie : 587 041 km² (4e plus grande île du monde).',
  },
  {
    icon: Users,
    title: 'Population',
    text: 'Environ 32 millions d’habitants. Symbole national : Ravenala (arbre du voyageur) et zébu.',
  },
  {
    icon: Zap,
    title: 'Électricité',
    text: '220 V, prises type C / E (Europe). Adaptateur recommandé.',
  },
  {
    icon: Shield,
    title: 'Sécurité & transport',
    text: 'Taxi-brousse, vols intérieurs, 4x4 pour les pistes. Respecter les fady. Voyager de jour recommandé hors grandes villes.',
  },
]

export default function PracticalSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-28 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
            {t('practical.title')}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            {t('practical.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infos.map((info, i) => (
            <motion.div
              key={info.title}
              className="bg-base-100 rounded-2xl p-6 border border-base-300 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <info.icon size={20} />
              </div>
              <h3 className="font-display text-lg mb-2">{info.title}</h3>
              <p className="text-sm text-base-content/75 leading-relaxed">{info.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Key facts strip */}
        <motion.div
          className="mt-14 p-6 md:p-8 rounded-2xl bg-primary text-primary-content text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Madagascar s’est séparée de l’Afrique il y a ~160 millions d’années et de l’Inde il y a
            ~88 millions d’années → une évolution isolée exceptionnelle. Sites UNESCO : Tsingy de
            Bemaraha, Forêts humides de l’Atsinanana, Colline royale d’Ambohimanga.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
