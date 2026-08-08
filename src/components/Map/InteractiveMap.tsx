import { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet'
import L, { type LatLngBoundsExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { motion } from 'framer-motion'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Chip } from '@mui/material'
import { destinations, type Destination } from '@/data/destinations'
import { useTranslation } from 'react-i18next'
import { MapPin, X, MousePointerClick } from 'lucide-react'

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl

type DestinationType = Destination['type']

const MADAGASCAR_BOUNDS: LatLngBoundsExpression = [
  [-26.5, 41.5], // sud-ouest
  [-10.5, 51.5], // nord-est
]

const TYPE_COLORS: Record<DestinationType, string> = {
  nature: '#2d6a4f',
  beach: '#1e6f8a',
  culture: '#c45c26',
  city: '#6b4f8a',
}

const TYPE_LABELS: Record<DestinationType, string> = {
  nature: 'Nature',
  beach: 'Plage',
  culture: 'Culture',
  city: 'Ville',
}

function makeIcon(type: DestinationType, active: boolean) {
  const color = TYPE_COLORS[type] ?? '#0d5c4b'
  const size = active ? 34 : 26
  return L.divIcon({
    className: 'madagascar-marker',
    html: `<span style="
      display:block;width:${size}px;height:${size}px;
      border-radius:50% 50% 50% 0;
      background:${color};
      transform:rotate(-45deg);
      border:2px solid white;
      box-shadow:0 2px 6px rgba(0,0,0,0.4);
    "></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  })
}

// Cadre automatiquement toutes les destinations au premier rendu,
// puis recentre la carte quand on sélectionne une destination via les chips.
function MapController({ selected }: { selected: Destination | null }) {
  const map = useMap()
  const hasFit = useRef(false)

  useEffect(() => {
    if (hasFit.current) return
    hasFit.current = true
    const bounds = L.latLngBounds(destinations.map((d) => [d.lat, d.lng] as [number, number]))
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 7 })
  }, [map])

  useEffect(() => {
    if (selected) {
      map.flyTo([selected.lat, selected.lng], 8, { duration: 0.8 })
    }
  }, [selected, map])

  return null
}

export default function InteractiveMap() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<Destination | null>(null)
  const [scrollZoomActive, setScrollZoomActive] = useState(false)

  const icons = useMemo(() => {
    const map = new Map<string, L.DivIcon>()
    destinations.forEach((d) => map.set(d.id, makeIcon(d.type, selected?.id === d.id)))
    return map
  }, [selected])

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
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-base-300 h-105 md:h-140"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Empêche la molette de "voler" le scroll de la page tant qu'on
              n'a pas volontairement cliqué sur la carte */}
          {!scrollZoomActive && (
            <div
              className="absolute inset-0 z-500 flex items-center justify-center bg-black/10 backdrop-blur-[1px] cursor-pointer"
              onClick={() => setScrollZoomActive(true)}
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 text-white text-sm">
                <MousePointerClick size={16} />
                Cliquez pour activer le zoom
              </span>
            </div>
          )}

          <MapContainer
            center={[-18.8, 46.7]}
            zoom={6}
            minZoom={5}
            maxZoom={12}
            maxBounds={MADAGASCAR_BOUNDS}
            maxBoundsViscosity={1.0}
            scrollWheelZoom={scrollZoomActive}
            zoomControl={false}
            className="h-full w-full"
            style={{ background: '#0f1a17' }}
          >
            <ZoomControl position="bottomright" />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <MapController selected={selected} />
            {destinations.map((d) => (
              <Marker
                key={d.id}
                position={[d.lat, d.lng]}
                icon={icons.get(d.id)}
                eventHandlers={{ click: () => setSelected(d) }}
              >
                <Popup className="madagascar-popup">
                  <strong>{d.name}</strong>
                  <br />
                  <span className="text-xs">{d.region} · {TYPE_LABELS[d.type]}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Légende des couleurs */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-base-content/60">
          {(Object.keys(TYPE_LABELS) as DestinationType[]).map((type) => (
            <span key={type} className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: TYPE_COLORS[type] }} />
              {TYPE_LABELS[type]}
            </span>
          ))}
        </div>

        {/* Chips — toutes les destinations, scrollables sur mobile */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 px-1 md:flex-wrap md:justify-center md:overflow-visible">
          {destinations.map((d) => (
            <Chip
              key={d.id}
              label={d.name}
              onClick={() => setSelected(d)}
              icon={<MapPin size={14} />}
              variant={selected?.id === d.id ? 'filled' : 'outlined'}
              color={selected?.id === d.id ? 'primary' : 'default'}
              sx={{
                borderColor: 'var(--color-primary)',
                color: selected?.id === d.id ? undefined : 'inherit',
                flexShrink: 0,
              }}
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
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <DialogTitle className="absolute! bottom-0 left-0 right-0 text-white! pb-3!">
                {selected.name}
              </DialogTitle>
            </div>
            <DialogContent className="pt-4!">
              <p className="text-sm text-base-content/60 mb-2">
                {selected.region} · {TYPE_LABELS[selected.type]}
              </p>
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

      <style>{`
        .madagascar-popup .leaflet-popup-content-wrapper {
          background: var(--color-base-100);
          color: var(--color-base-content);
          border-radius: 12px;
        }
        .madagascar-popup .leaflet-popup-tip {
          background: var(--color-base-100);
        }
        .madagascar-marker { background: transparent; border: none; }
      `}</style>
    </section>
  )
}