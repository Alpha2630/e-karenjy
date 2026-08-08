import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useAppStore, type Lang } from '@/store/useAppStore'
import { Drawer, IconButton, Tooltip } from '@mui/material'

const navItems = [
  { path: '/', key: 'home' },
  { path: '/map', key: 'map' },
  { path: '/biodiversity', key: 'biodiversity' },
  { path: '/culture', key: 'culture' },
  { path: '/experiences', key: 'experiences' },
  { path: '/gallery', key: 'gallery' },
  { path: '/practical', key: 'practical' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const { theme, toggleTheme, setLang, lang } = useAppStore()
  const [open, setOpen] = useState(false)

  const changeLang = (l: Lang) => {
    setLang(l)
    i18n.changeLanguage(l)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300/50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-display text-xl md:text-2xl font-semibold text-primary tracking-tight">
            Madagascar
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path ? 'text-primary' : 'text-base-content/70 hover:text-primary'
                }`}
              >
                {t(`nav.${item.key}`)}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <Tooltip title="Langue">
              <div className="hidden sm:flex items-center gap-0.5 mr-1">
                {(['fr', 'en', 'mg'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLang(l)}
                    className={`px-2 py-1 text-xs uppercase rounded ${
                      lang === l ? 'bg-primary text-primary-content' : 'hover:bg-base-200'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </Tooltip>

            <Tooltip title={theme === 'madagascar-light' ? 'Mode sombre' : 'Mode clair'}>
              <IconButton onClick={toggleTheme} size="small" className="!text-base-content">
                {theme === 'madagascar-light' ? <Moon size={18} /> : <Sun size={18} />}
              </IconButton>
            </Tooltip>

            <IconButton className="lg:!hidden !text-base-content" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </IconButton>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-72 p-6 bg-base-100 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="font-display text-xl text-primary">Menu</span>
            <IconButton onClick={() => setOpen(false)}>
              <X size={22} />
            </IconButton>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-content'
                    : 'hover:bg-base-200'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-base-300">
            <div className="flex gap-2 mb-4">
              {(['fr', 'en', 'mg'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => changeLang(l)}
                  className={`flex-1 py-2 text-sm uppercase rounded ${
                    lang === l ? 'bg-primary text-primary-content' : 'bg-base-200'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
