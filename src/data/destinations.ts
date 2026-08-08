export interface Destination {
  id: string
  name: string
  nameMg?: string
  lat: number
  lng: number
  region: string
  type: 'city' | 'nature' | 'beach' | 'culture'
  description: string
  image: string
  highlights: string[]
}

export const destinations: Destination[] = [
  {
    id: 'antananarivo',
    name: 'Antananarivo',
    nameMg: 'Antananarivo',
    lat: -18.8792,
    lng: 47.5079,
    region: 'Hauts Plateaux',
    type: 'city',
    description: 'Capitale historique des Hauts Plateaux, collines, palais de la Reine et marchés animés.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    highlights: ['Rova d\'Antananarivo', 'Marché Analakely', 'Lac Anosy'],
  },
  {
    id: 'andasibe',
    name: 'Andasibe-Mantadia',
    lat: -18.9333,
    lng: 48.4167,
    region: 'Est',
    type: 'nature',
    description: 'Forêt primaire et chant des Indri, les plus grands lémuriens du monde.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    highlights: ['Indri indri', 'Parc National Andasibe', 'Forêt primaire'],
  },
  {
    id: 'avenue-baobabs',
    name: 'Avenue des Baobabs',
    lat: -20.2500,
    lng: 44.4167,
    region: 'Ouest',
    type: 'nature',
    description: 'Allée mythique de baobabs Adansonia grandidieri au coucher du soleil.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    highlights: ['Baobabs géants', 'Golden hour', 'Photographie'],
  },
  {
    id: 'tsingy',
    name: 'Tsingy de Bemaraha',
    lat: -18.6667,
    lng: 44.7500,
    region: 'Ouest',
    type: 'nature',
    description: 'Forêt de pierre UNESCO, canyons tranchants et lémuriens des Tsingy.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    highlights: ['UNESCO', 'Trekking extrême', 'Paysages lunaires'],
  },
  {
    id: 'nosy-be',
    name: 'Nosy Be',
    lat: -13.3167,
    lng: 48.2500,
    region: 'Nord',
    type: 'beach',
    description: 'Île aux parfums, plages de sable fin, ylang-ylang et plongée.',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    highlights: ['Plages', 'Plongée', 'Nosy Komba'],
  },
  {
    id: 'isalo',
    name: 'Isalo',
    lat: -22.5500,
    lng: 45.3500,
    region: 'Sud',
    type: 'nature',
    description: 'Massif de grès sculpté, canyons, piscines naturelles et panoramas.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    highlights: ['Canyons', 'Piscine naturelle', 'Trek'],
  },
  {
    id: 'ranomafana',
    name: 'Ranomafana',
    lat: -21.2500,
    lng: 47.4500,
    region: 'Est',
    type: 'nature',
    description: 'Forêt tropicale humide, lémuriens dorés et sources thermales.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    highlights: ['Lémuriens dorés', 'Forêt tropicale', 'UNESCO'],
  },
  {
    id: 'sainte-marie',
    name: 'Île Sainte-Marie',
    lat: -16.9000,
    lng: 49.9000,
    region: 'Est',
    type: 'beach',
    description: 'Observation des baleines à bosse (juillet-septembre) et ambiance pirate.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    highlights: ['Baleines', 'Plages', 'Histoire pirate'],
  },
  {
    id: 'diego',
    name: 'Diego Suarez / Antsiranana',
    lat: -12.2787,
    lng: 49.2917,
    region: 'Nord',
    type: 'nature',
    description: 'Baie spectaculaire, Tsingy Rouges et Montagne d\'Ambre.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    highlights: ['Baie', 'Tsingy Rouges', 'Montagne d\'Ambre'],
  },
  {
    id: 'masoala',
    name: 'Masoala',
    lat: -15.3000,
    lng: 50.2000,
    region: 'Nord-Est',
    type: 'nature',
    description: 'Plus grande forêt primaire de Madagascar, biodiversité exceptionnelle.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    highlights: ['Forêt primaire', 'Aye-aye', 'Kayak'],
  },
]
