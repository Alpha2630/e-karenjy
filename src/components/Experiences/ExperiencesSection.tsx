import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { itineraries, type Itinerary, type ItineraryType } from '@/data/itineraries'
import {
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from '@mui/material'
import {
  Calendar,
  Mountain,
  Waves,
  Landmark,
  Compass,
  Wallet,
  Gauge,
  X,
  MapPin,
  Utensils,
  Moon,
} from 'lucide-react'

const filters: { id: 'all' | ItineraryType; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'nature', label: 'Nature' },
  { id: 'beach', label: 'Plage' },
  { id: 'culture', label: 'Culture' },
  { id: 'adventure', label: 'Aventure' },
]

const typeIcon: Record<ItineraryType, React.ReactNode> = {
  nature: <Mountain size={14} />,
  beach: <Waves size={14} />,
  culture: <Landmark size={14} />,
  adventure: <Compass size={14} />,
}

const difficultyColor = {
  facile: 'badge-success',
  modéré: 'badge-warning',
  soutenu: 'badge-error',
}

export default function ExperiencesSection() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<'all' | ItineraryType>('all')
  const [selected, setSelected] = useState<Itinerary | null>(null)

  const filtered =
    filter === 'all'
      ? itineraries
      : itineraries.filter((it) => it.type.includes(filter))

  return (
    <section className="py-20 md:py-28 bg-base-200/40">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
            {t('experiences.title')}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            {t('experiences.subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <Chip
              key={f.id}
              label={f.label}
              onClick={() => setFilter(f.id)}
              color={filter === f.id ? 'primary' : 'default'}
              variant={filter === f.id ? 'filled' : 'outlined'}
              sx={{ fontWeight: filter === f.id ? 600 : 400 }}
            />
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((it, i) => (
              <motion.article
                key={it.id}
                layout
                className="group relative rounded-2xl overflow-hidden h-[320px] md:h-[360px] shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setSelected(it)}
                whileHover={{ y: -4 }}
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-accent text-accent-content font-semibold">
                      <Calendar size={12} />
                      {it.days} jours
                    </span>
                    {it.type.map((ty) => (
                      <span
                        key={ty}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-full bg-white/20 text-white backdrop-blur-sm"
                      >
                        {typeIcon[ty]}
                        {ty}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-1 leading-tight">
                    {it.title}
                  </h3>
                  <p className="text-white/75 text-sm mb-3 line-clamp-2">{it.subtitle}</p>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span className={`badge badge-sm ${difficultyColor[it.difficulty]} border-0`}>
                      {it.difficulty}
                    </span>
                    <span className="truncate">{it.bestSeason}</span>
                  </div>
                  <p className="mt-3 text-sm text-amber-200/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Voir le programme jour par jour →
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-base-content/60 py-12">
            Aucun circuit pour ce filtre.
          </p>
        )}
      </div>

      {/* Detailed Dialog */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '92vh',
            background: 'var(--color-base-100)',
            color: 'var(--color-base-content)',
          },
        }}
      >
        {selected && (
          <>
            {/* Hero image header */}
            <div className="relative h-44 md:h-56 overflow-hidden shrink-0">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-xs rounded-full bg-accent text-accent-content font-semibold">
                    {selected.days} jours
                  </span>
                  {selected.type.map((ty) => (
                    <span
                      key={ty}
                      className="px-2 py-0.5 text-[10px] uppercase rounded-full bg-white/25 text-white"
                    >
                      {ty}
                    </span>
                  ))}
                </div>
                <DialogTitle
                  sx={{ p: 0, color: 'white', fontFamily: 'Playfair Display, serif', fontSize: { xs: '1.4rem', md: '1.75rem' } }}
                >
                  {selected.title}
                </DialogTitle>
                <p className="text-white/80 text-sm mt-1">{selected.subtitle}</p>
              </div>
            </div>

            <DialogContent dividers sx={{ px: { xs: 2, md: 3 }, py: 3 }}>
              <p className="text-base-content/85 leading-relaxed mb-6">
                {selected.description}
              </p>

              {/* Meta row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/80">
                  <Gauge size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-base-content/50 uppercase tracking-wide">Difficulté</p>
                    <p className="font-medium capitalize">{selected.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/80">
                  <Calendar size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-base-content/50 uppercase tracking-wide">Meilleure saison</p>
                    <p className="font-medium text-sm">{selected.bestSeason}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/80">
                  <Wallet size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-base-content/50 uppercase tracking-wide">Budget indicatif</p>
                    <p className="font-medium text-sm">{selected.budgetHint}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selected.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 text-xs rounded-full bg-primary/12 text-primary font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <Typography
                variant="h6"
                sx={{ fontFamily: 'Playfair Display, serif', mb: 2, color: 'inherit' }}
              >
                Programme jour par jour
              </Typography>

              <Stepper orientation="vertical" nonLinear activeStep={-1}>
                {selected.daysPlan.map((d) => (
                  <Step key={d.day} expanded>
                    <StepLabel
                      StepIconComponent={() => (
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold shrink-0">
                          {d.day}
                        </div>
                      )}
                    >
                      <span className="font-display text-base md:text-lg">{d.title}</span>
                    </StepLabel>
                    <StepContent>
                      <div className="pb-4 pl-1">
                        <p className="flex items-center gap-1.5 text-sm text-primary/80 mb-2">
                          <MapPin size={14} />
                          {d.location}
                        </p>
                        <ul className="space-y-1.5 mb-3">
                          {d.activities.map((a, idx) => (
                            <li key={idx} className="text-sm text-base-content/80 flex gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-3 text-xs text-base-content/60">
                          {d.overnight && (
                            <span className="inline-flex items-center gap-1">
                              <Moon size={12} /> {d.overnight}
                            </span>
                          )}
                          {d.meals && (
                            <span className="inline-flex items-center gap-1">
                              <Utensils size={12} /> {d.meals}
                            </span>
                          )}
                        </div>
                        {d.note && (
                          <p className="mt-2 text-xs text-secondary italic bg-secondary/10 px-2 py-1 rounded">
                            💡 {d.note}
                          </p>
                        )}
                      </div>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </DialogContent>

            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button onClick={() => setSelected(null)} variant="outlined" color="inherit">
                Fermer
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSelected(null)
                  // Placeholder – could open contact / booking
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                }}
              >
                Demander ce circuit
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  )
}
