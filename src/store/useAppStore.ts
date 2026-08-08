import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Lang = 'fr' | 'en' | 'mg'
export type Theme = 'madagascar-light' | 'madagascar-dark'

interface AppState {
  lang: Lang
  theme: Theme
  isLoading: boolean
  hasStarted: boolean
  setLang: (lang: Lang) => void
  setTheme: (theme: Theme) => void
  setLoading: (v: boolean) => void
  setHasStarted: (v: boolean) => void
  toggleTheme: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      lang: 'fr',
      theme: 'madagascar-light',
      isLoading: true,
      hasStarted: false,
      setLang: (lang) => set({ lang }),
      setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme)
        set({ theme })
      },
      setLoading: (isLoading) => set({ isLoading }),
      setHasStarted: (hasStarted) => set({ hasStarted }),
      toggleTheme: () => {
        const next = get().theme === 'madagascar-light' ? 'madagascar-dark' : 'madagascar-light'
        document.documentElement.setAttribute('data-theme', next)
        set({ theme: next })
      },
    }),
    {
      name: 'madagascar-voyage-store',
      partialize: (s) => ({ lang: s.lang, theme: s.theme }),
    }
  )
)
