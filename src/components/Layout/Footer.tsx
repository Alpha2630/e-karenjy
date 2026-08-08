import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-base-300/80 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.blockquote
          className="font-display text-xl md:text-2xl text-center text-primary italic max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          « {t('footer.quote')} »
        </motion.blockquote>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className="font-display text-lg mb-3">Madagascar Voyage</h4>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Une expérience documentaire immersive pour découvrir la Grande Île autrement.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg mb-3">{t('footer.newsletter')}</h4>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Merci ! (démo)')
              }}
            >
              <input
                type="email"
                placeholder="email@exemple.com"
                className="input input-bordered input-sm flex-1 bg-base-100"
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                OK
              </button>
            </form>
          </div>
          <div>
            <h4 className="font-display text-lg mb-3">Liens utiles</h4>
            <ul className="text-sm text-base-content/70 space-y-1">
              <li>
                <a href="https://www.madagascar-tourisme.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                  Office du Tourisme
                </a>
              </li>
              <li>
                <a href="https://www.evisamada.gov.mg" target="_blank" rel="noreferrer" className="hover:text-primary">
                  e-Visa Madagascar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-base-content/50 pt-8 border-t border-base-content/10">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
