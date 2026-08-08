import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import HomePage from '@/pages/HomePage'
import MapPage from '@/pages/MapPage'
import BiodiversityPage from '@/pages/BiodiversityPage'
import CulturePage from '@/pages/CulturePage'
import ExperiencesPage from '@/pages/ExperiencesPage'
import GalleryPage from '@/pages/GalleryPage'
import PracticalPage from '@/pages/PracticalPage'
import '@/i18n'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="biodiversity" element={<BiodiversityPage />} />
          <Route path="culture" element={<CulturePage />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="practical" element={<PracticalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
