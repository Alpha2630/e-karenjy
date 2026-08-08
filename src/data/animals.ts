export interface Animal {
  id: string
  name: string
  nameScientific: string
  category: 'lemur' | 'other'
  endemic: boolean
  description: string
  image: string
  funFact: string
}

export const animals: Animal[] = [
  {
    id: 'indri',
    name: 'Indri',
    nameScientific: 'Indri indri',
    category: 'lemur',
    endemic: true,
    description: 'Le plus grand lémurien vivant. Son chant territorial peut s\'entendre à plusieurs kilomètres.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
    funFact: 'Les Indri ne survivent pas en captivité. On ne les trouve qu\'à Madagascar.',
  },
  {
    id: 'ring-tailed',
    name: 'Lémur catta',
    nameScientific: 'Lemur catta',
    category: 'lemur',
    endemic: true,
    description: 'Le plus emblématique, queueé pour sa queuee rayée et sa vie sociale en groupes matriarcaux.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80',
    funFact: 'Ils passent jusqu\'à 40 % de leur journée au sol, unique parmi les lémuriens.',
  },
  {
    id: 'sifaka',
    name: 'Sifaka de Verreaux',
    nameScientific: 'Propithecus verreauxi',
    category: 'lemur',
    endemic: true,
    description: 'Connus pour leur danse latérale spectaculaire entre les arbres.',
    image: 'https://images.unsplash.com/photo-1555169062-470dad474e27?w=600&q=80',
    funFact: 'Ils peuvent faire des bonds de plus de 10 mètres.',
  },
  {
    id: 'mouse-lemur',
    name: 'Microcèbe',
    nameScientific: 'Microcebus murinus',
    category: 'lemur',
    endemic: true,
    description: 'Le plus petit primate du monde. Nocturne et ultra-mignon.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80',
    funFact: 'Pèse moins de 60 g à l\'âge adulte.',
  },
  {
    id: 'fossa',
    name: 'Fossa',
    nameScientific: 'Cryptoprocta ferox',
    category: 'other',
    endemic: true,
    description: 'Prédateur apex unique à Madagascar, ressemble à un croisement entre un chat et une mangouste.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08fdf90f9?w=600&q=80',
    funFact: 'Seule espèce de carnivore capable de chasser les lémuriens dans les arbres.',
  },
  {
    id: 'chameleon',
    name: 'Caméléon panthère',
    nameScientific: 'Furcifer pardalis',
    category: 'other',
    endemic: true,
    description: 'Caméléon spectaculaire aux couleurs changeantes, emblème de la diversité reptilienne.',
    image: 'https://images.unsplash.com/photo-1551986782-d0262c1d0c2b?w=600&q=80',
    funFact: 'Madagascar abrite près de la moitié des espèces de caméléons du monde.',
  },
]

export const biodiversityStats = [
  { label: 'Reptiles endémiques', value: '~90 %' },
  { label: 'Plantes endémiques', value: '~89 %' },
  { label: 'Mammifères endémiques', value: '~92 %' },
  { label: 'Espèces de lémuriens', value: '100+' },
  { label: 'Espèces de baobabs (sur 8 mondiales)', value: '6' },
  { label: 'Séparation de l\'Afrique', value: '~160 Ma' },
]
