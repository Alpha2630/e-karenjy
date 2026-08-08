import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip } from '@mui/material'
import { destinations, type Destination } from '@/data/destinations'
import { useTranslation } from 'react-i18next'
import { MapPin, X } from 'lucide-react'

// Fix default marker icons
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

function MapController() {
  return null
}

export default function InteractiveMap() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<Destination | null>(null)

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">
            {t('map.title')}
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            {t('map.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-base-300 h-[420px] md:h-[560px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MapContainer
            center={[-18.8, 46.7]}
            zoom={6}
            scrollWheelZoom={true}
            className="h-full w-full"
            style={{ background: '#0f1a17' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <MapController />
            {destinations.map((d) => (
              <Marker
                key={d.id}
                position={[d.lat, d.lng]}
                icon={customIcon}
                eventHandlers={{
                  click: () => setSelected(d),
                }}
              >
                <Popup>
                  <strong>{d.name}</strong>
                  <br />
                  <span className="text-xs">{d.region}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Quick chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {destinations.slice(0, 8).map((d) => (
            <Chip
              key={d.id}
              label={d.name}
              onClick={() => setSelected(d)}
              icon={<MapPin size={14} />}
              variant="outlined"
              sx={{ borderColor: 'var(--color-primary)', color: 'inherit' }}
            />
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'var(--color-base-100)',
            color: 'var(--color-base-content)',
          },
        }}
      >
        {selected && (
          <>
            <div className="relative h-48 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <DialogTitle className="!absolute bottom-0 left-0 right-0 !text-white !pb-3">
                {selected.name}
              </DialogTitle>
            </div>
            <DialogContent className="!pt-4">
              <p className="text-sm text-base-content/60 mb-2">{selected.region} · {selected.type}</p>
              <p className="text-base-content/90 leading-relaxed mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 text-xs rounded-full bg-primary/15 text-primary"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelected(null)} startIcon={<X size={16} />}>
                Fermer
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  )
}
