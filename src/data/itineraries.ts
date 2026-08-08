export type ItineraryType = 'nature' | 'beach' | 'culture' | 'adventure'

export interface DayPlan {
  day: number
  title: string
  location: string
  activities: string[]
  overnight?: string
  meals?: string
  note?: string
}

export interface Itinerary {
  id: string
  days: 7 | 14 | 21
  title: string
  subtitle: string
  type: ItineraryType[]
  description: string
  highlights: string[]
  image: string
  difficulty: 'facile' | 'modéré' | 'soutenu'
  bestSeason: string
  budgetHint: string
  daysPlan: DayPlan[]
}

export const itineraries: Itinerary[] = [
  {
    id: 'classic-7',
    days: 7,
    title: 'Essentiel Hauts Plateaux & Est',
    subtitle: 'Lémuriens, forêts primaires et capitale historique',
    type: ['nature', 'culture'],
    description:
      'Un circuit compact idéal pour une première rencontre avec Madagascar : Antananarivo, le chant des Indri à Andasibe et l’immersion en forêt tropicale humide.',
    highlights: ['Indri indri', 'Rova d’Antananarivo', 'Parc Andasibe-Mantadia', 'Réserve Analamazaotra'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80',
    difficulty: 'facile',
    bestSeason: 'Avril – Novembre',
    budgetHint: 'Moyen (hébergements mid-range + guides)',
    daysPlan: [
      {
        day: 1,
        title: 'Arrivée à Antananarivo',
        location: 'Antananarivo',
        activities: [
          'Accueil à l’aéroport Ivato et transfert hôtel',
          'Balade au lac Anosy et colline d’Ambohimanga (UNESCO) si temps disponible',
          'Dîner d’accueil avec romazava',
        ],
        overnight: 'Antananarivo',
        meals: 'Dîner',
      },
      {
        day: 2,
        title: 'Capitale des Hauts Plateaux',
        location: 'Antananarivo',
        activities: [
          'Visite du Rova (Palais de la Reine) et colline d’Analamanga',
          'Marché artisanal de la Digue ou Analakely',
          'Musée de la Photographie ou atelier de soie',
        ],
        overnight: 'Antananarivo',
        meals: 'Petit-déjeuner',
      },
      {
        day: 3,
        title: 'Route vers Andasibe',
        location: 'Andasibe',
        activities: [
          'Route panoramique vers l’Est (~3h30)',
          'Arrêt à la ferme de crocodiles / plantation de litchis selon saison',
          'Installation lodge et première promenade en forêt',
        ],
        overnight: 'Andasibe',
        meals: 'Petit-déjeuner, dîner',
      },
      {
        day: 4,
        title: 'Parc National Andasibe-Mantadia',
        location: 'Andasibe-Mantadia',
        activities: [
          'Trekking matinal pour entendre et observer les Indri',
          'Recherche de sifakas, lémurs à diadème et microcèbes',
          'Après-midi : visite de la réserve privée Analamazaotra ou Île aux Lémuriens',
        ],
        overnight: 'Andasibe',
        meals: 'Petit-déjeuner, pique-nique, dîner',
        note: 'Chaussures de marche et anti-moustique indispensables',
      },
      {
        day: 5,
        title: 'Forêt primaire & nuitée',
        location: 'Andasibe',
        activities: [
          'Randonnée plus longue dans Mantadia (si condition physique ok)',
          'Observation de caméléons et oiseaux endémiques',
          'Soirée libre ou night walk pour voir microcèbes et frogs',
        ],
        overnight: 'Andasibe',
        meals: 'Petit-déjeuner, dîner',
      },
      {
        day: 6,
        title: 'Retour à Tana',
        location: 'Antananarivo',
        activities: [
          'Route retour vers la capitale',
          'Temps libre shopping (épices, vanille, artisanat)',
          'Dîner d’adieu',
        ],
        overnight: 'Antananarivo',
        meals: 'Petit-déjeuner',
      },
      {
        day: 7,
        title: 'Départ',
        location: 'Antananarivo – Aéroport',
        activities: [
          'Transfert aéroport selon horaire de vol',
          'Assistance enregistrement',
        ],
        meals: 'Petit-déjeuner',
      },
    ],
  },
  {
    id: 'west-14',
    days: 14,
    title: 'Ouest mythique : Baobabs & Tsingy',
    subtitle: 'Avenue des Baobabs, Tsingy de Bemaraha UNESCO et côte ouest',
    type: ['nature', 'adventure'],
    description:
      'Le grand classique de l’Ouest : paysages lunaires des Tsingy, allée des baobabs au golden hour, villages sakalava et pistes de latérite.',
    highlights: [
      'Tsingy de Bemaraha (UNESCO)',
      'Avenue des Baobabs',
      'Morondava',
      'Kirindy (fossa)',
      'Belo-sur-Tsiribihina',
    ],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80',
    difficulty: 'soutenu',
    bestSeason: 'Mai – Octobre (pistes praticables)',
    budgetHint: 'Moyen à élevé (4x4 + guides Tsingy)',
    daysPlan: [
      {
        day: 1,
        title: 'Arrivée Antananarivo',
        location: 'Antananarivo',
        activities: ['Accueil aéroport, installation, briefing voyage'],
        overnight: 'Antananarivo',
      },
      {
        day: 2,
        title: 'Vol ou route vers Morondava',
        location: 'Morondava',
        activities: [
          'Vol intérieur Tana → Morondava (recommandé) ou longue route',
          'Installation bord de mer, première baignade',
        ],
        overnight: 'Morondava',
      },
      {
        day: 3,
        title: 'Avenue des Baobabs & Kirindy',
        location: 'Morondava / Kirindy',
        activities: [
          'Lever ou coucher de soleil à l’Avenue des Baobabs',
          'Réserve de Kirindy : chance d’observer le fossa',
          'Baobabs Amoureux et baobabs sacré',
        ],
        overnight: 'Morondava ou Kirindy',
        note: 'Golden hour incontournable',
      },
      {
        day: 4,
        title: 'Vers Belo-sur-Tsiribihina',
        location: 'Belo-sur-Tsiribihina',
        activities: [
          'Piste vers Belo (4x4)',
          'Traversée de villages sakalava',
          'Préparation de l’expédition Tsingy',
        ],
        overnight: 'Belo-sur-Tsiribihina',
      },
      {
        day: 5,
        title: 'Entrée dans les Tsingy',
        location: 'Parc National Tsingy de Bemaraha',
        activities: [
          'Route jusqu’au parc',
          'Première exploration des Petits Tsingy',
          'Installation camp ou lodge proche du parc',
        ],
        overnight: 'Bekopaka / Tsingy',
      },
      {
        day: 6,
        title: 'Grands Tsingy – journée complète',
        location: 'Tsingy de Bemaraha',
        activities: [
          'Trekking technique dans les Grands Tsingy (via ferrata, ponts suspendus)',
          'Canyons, forêts de pierre, points de vue spectaculaires',
          'Observation de lémuriens des Tsingy',
        ],
        overnight: 'Bekopaka',
        note: 'Bonne condition physique et absence de vertige recommandées',
      },
      {
        day: 7,
        title: 'Manambolo & retour',
        location: 'Gorges du Manambolo',
        activities: [
          'Descente en pirogue dans les gorges du Manambolo',
          'Grottes et formations calcaires',
          'Route retour vers Belo puis Morondava',
        ],
        overnight: 'Morondava',
      },
      {
        day: 8,
        title: 'Journée libre Morondava',
        location: 'Morondava',
        activities: [
          'Plage, marché local, ou seconde visite baobabs',
          'Détente après les Tsingy',
        ],
        overnight: 'Morondava',
      },
      {
        day: 9,
        title: 'Route vers Antsirabe',
        location: 'Antsirabe',
        activities: [
          'Longue route vers les Hauts Plateaux',
          'Paysages de rizières et villages betsileo',
        ],
        overnight: 'Antsirabe',
      },
      {
        day: 10,
        title: 'Antsirabe & environs',
        location: 'Antsirabe',
        activities: [
          'Ville thermale, rickshaws, ateliers d’artisanat',
          'Lacs volcaniques (optionnel)',
        ],
        overnight: 'Antsirabe',
      },
      {
        day: 11,
        title: 'Retour Antananarivo',
        location: 'Antananarivo',
        activities: ['Route vers Tana, temps libre'],
        overnight: 'Antananarivo',
      },
      {
        day: 12,
        title: 'Journée libre / culture',
        location: 'Antananarivo',
        activities: [
          'Ambohimanga, marchés, ou extension optionnelle',
        ],
        overnight: 'Antananarivo',
      },
      {
        day: 13,
        title: 'Buffer / shopping',
        location: 'Antananarivo',
        activities: ['Derniers achats, repos'],
        overnight: 'Antananarivo',
      },
      {
        day: 14,
        title: 'Départ',
        location: 'Aéroport Ivato',
        activities: ['Transfert aéroport'],
      },
    ],
  },
  {
    id: 'full-21',
    days: 21,
    title: 'Grand Tour de l’Île',
    subtitle: 'Nord, Est, Hauts Plateaux, Sud et Ouest — le voyage complet',
    type: ['nature', 'beach', 'culture', 'adventure'],
    description:
      'Le circuit ultime pour découvrir la diversité extrême de Madagascar : des Tsingy Rouges du Nord aux baleines de Sainte-Marie, en passant par Isalo, les baobabs et les forêts de l’Est.',
    highlights: [
      'Diego Suarez & Tsingy Rouges',
      'Nosy Be',
      'Andasibe / Indri',
      'Isalo',
      'Avenue des Baobabs',
      'Île Sainte-Marie (baleines en saison)',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    difficulty: 'soutenu',
    bestSeason: 'Mai – Octobre (ou juillet-septembre pour les baleines)',
    budgetHint: 'Élevé (vols intérieurs + 4x4 + lodges)',
    daysPlan: [
      {
        day: 1,
        title: 'Arrivée Antananarivo',
        location: 'Antananarivo',
        activities: ['Accueil, installation, briefing'],
        overnight: 'Antananarivo',
      },
      {
        day: 2,
        title: 'Vol vers Diego Suarez',
        location: 'Antsiranana (Diego)',
        activities: [
          'Vol Tana → Diego',
          'Baie de Diego, Montagne des Français (point de vue)',
        ],
        overnight: 'Diego Suarez',
      },
      {
        day: 3,
        title: 'Tsingy Rouges & 3 Baies',
        location: 'Nord',
        activities: [
          'Tsingy Rouges (formations spectaculaires)',
          'Baies de Sakalava, des Pigeons, de Ramena',
        ],
        overnight: 'Diego Suarez',
      },
      {
        day: 4,
        title: 'Montagne d’Ambre',
        location: 'Parc National Montagne d’Ambre',
        activities: [
          'Forêt d’altitude, cascades, lémuriens couronnés',
          'Retour Diego',
        ],
        overnight: 'Diego Suarez',
      },
      {
        day: 5,
        title: 'Vers Nosy Be',
        location: 'Nosy Be',
        activities: [
          'Transfert bateau ou vol vers Nosy Be',
          'Installation plage, première baignade',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 6,
        title: 'Nosy Komba & Tanikely',
        location: 'Archipel de Nosy Be',
        activities: [
          'Excursion Nosy Komba (lémuriens) et Nosy Tanikely (snorkeling)',
          'Ylang-ylang et plantations',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 7,
        title: 'Journée libre Nosy Be',
        location: 'Nosy Be',
        activities: ['Plage, détente, ou plongée optionnelle'],
        overnight: 'Nosy Be',
      },
      {
        day: 8,
        title: 'Retour Tana puis Andasibe',
        location: 'Andasibe',
        activities: [
          'Vol ou route vers Tana puis Andasibe',
          'Première immersion forêt',
        ],
        overnight: 'Andasibe',
      },
      {
        day: 9,
        title: 'Andasibe – Indri',
        location: 'Andasibe-Mantadia',
        activities: [
          'Observation des Indri et autres lémuriens',
          'Night walk optionnel',
        ],
        overnight: 'Andasibe',
      },
      {
        day: 10,
        title: 'Route vers Antsirabe',
        location: 'Antsirabe',
        activities: ['Route Hauts Plateaux, paysages de rizières'],
        overnight: 'Antsirabe',
      },
      {
        day: 11,
        title: 'Vers Ranomafana',
        location: 'Ranomafana',
        activities: [
          'Parc National Ranomafana (UNESCO)',
          'Lémuriens dorés, forêt tropicale humide',
        ],
        overnight: 'Ranomafana',
      },
      {
        day: 12,
        title: 'Ranomafana – Ambalavao',
        location: 'Ambalavao',
        activities: [
          'Fin de visite parc',
          'Route vers Ambalavao, atelier papier antaimoro',
        ],
        overnight: 'Ambalavao / près d’Isalo',
      },
      {
        day: 13,
        title: 'Parc National de l’Isalo',
        location: 'Isalo',
        activities: [
          'Trek canyons, piscine naturelle, fenêtre de l’Isalo',
          'Paysages de grès sculptés',
        ],
        overnight: 'Ranohira / Isalo',
      },
      {
        day: 14,
        title: 'Isalo – Toliara – Morondava (logistique)',
        location: 'Vers Ouest',
        activities: [
          'Route ou combinaison route/vol selon disponibilité',
          'Vers la côte ouest',
        ],
        overnight: 'Morondava ou étape',
        note: 'Ajustement logistique selon vols intérieurs',
      },
      {
        day: 15,
        title: 'Avenue des Baobabs',
        location: 'Morondava',
        activities: [
          'Coucher de soleil Avenue des Baobabs',
          'Kirindy si temps',
        ],
        overnight: 'Morondava',
      },
      {
        day: 16,
        title: 'Retour Tana',
        location: 'Antananarivo',
        activities: ['Vol ou route retour capitale'],
        overnight: 'Antananarivo',
      },
      {
        day: 17,
        title: 'Vers Sainte-Marie',
        location: 'Île Sainte-Marie',
        activities: [
          'Vol vers Sainte-Marie',
          'Installation, plage',
        ],
        overnight: 'Sainte-Marie',
      },
      {
        day: 18,
        title: 'Baleines & île',
        location: 'Sainte-Marie',
        activities: [
          'Observation des baleines à bosse (juillet–septembre)',
          'Ou plages, île aux Nattes, cimetière des pirates',
        ],
        overnight: 'Sainte-Marie',
        note: 'Saison baleines : juil.–sept.',
      },
      {
        day: 19,
        title: 'Journée libre Sainte-Marie',
        location: 'Sainte-Marie',
        activities: ['Détente, snorkeling, vélo'],
        overnight: 'Sainte-Marie',
      },
      {
        day: 20,
        title: 'Retour Tana',
        location: 'Antananarivo',
        activities: ['Vol retour, dernier soir'],
        overnight: 'Antananarivo',
      },
      {
        day: 21,
        title: 'Départ international',
        location: 'Aéroport Ivato',
        activities: ['Transfert aéroport'],
      },
    ],
  },
  {
    id: 'beach-7',
    days: 7,
    title: 'Nosy Be & Archipel',
    subtitle: 'Plages, ylang-ylang, snorkeling et îles paradisiaques',
    type: ['beach'],
    description:
      'Une semaine 100 % mer et détente dans l’archipel de Nosy Be : plages de sable fin, lémuriens de Nosy Komba, récifs de Tanikely et parfums d’ylang-ylang.',
    highlights: ['Nosy Be', 'Nosy Komba', 'Nosy Tanikely', 'Nosy Iranja', 'Plongée / snorkeling'],
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=900&q=80',
    difficulty: 'facile',
    bestSeason: 'Avril – Décembre (éviter cyclones janv.–mars)',
    budgetHint: 'Moyen à élevé selon standing des hôtels',
    daysPlan: [
      {
        day: 1,
        title: 'Arrivée Nosy Be',
        location: 'Nosy Be (Fascene)',
        activities: [
          'Accueil aéroport, transfert hôtel plage',
          'Installation et première baignade',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 2,
        title: 'Nosy Komba & Tanikely',
        location: 'Archipel',
        activities: [
          'Excursion bateau : Nosy Komba (lémuriens macaco)',
          'Nosy Tanikely – parc marin, snorkeling exceptionnel',
          'Déjeuner picnic sur l’île',
        ],
        overnight: 'Nosy Be',
        meals: 'Petit-déjeuner, déjeuner',
      },
      {
        day: 3,
        title: 'Journée libre / plage',
        location: 'Nosy Be',
        activities: [
          'Plage de Andilana ou Ambondrona',
          'Option : spa, massages, ou tour des plantations d’ylang-ylang',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 4,
        title: 'Nosy Iranja',
        location: 'Nosy Iranja',
        activities: [
          'Excursion à l’île aux tortues',
          'Banc de sable blanc à marée basse',
          'Baignade et détente',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 5,
        title: 'Plongée ou pêche au gros (option)',
        location: 'Nosy Be',
        activities: [
          'Baptême de plongée ou sortie pêche',
          'Ou journée libre supplémentaire',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 6,
        title: 'Hell-Ville & marché',
        location: 'Nosy Be',
        activities: [
          'Visite de Hell-Ville (Andoany)',
          'Marché local, artisanat, épices',
          'Coucher de soleil sur la plage',
        ],
        overnight: 'Nosy Be',
      },
      {
        day: 7,
        title: 'Départ',
        location: 'Aéroport Fascene',
        activities: ['Transfert aéroport selon vol'],
      },
    ],
  },
  {
    id: 'south-10',
    days: 14,
    title: 'Sud & Isalo – RN7 mythique',
    subtitle: 'La Route Nationale 7 : rizières, Ranomafana, Isalo et grand Sud',
    type: ['nature', 'culture', 'adventure'],
    description:
      'Le voyage mythique le long de la RN7 : des Hauts Plateaux au massif de l’Isalo, en passant par les forêts de Ranomafana et les paysages du grand Sud.',
    highlights: ['RN7', 'Ranomafana UNESCO', 'Isalo', 'Ambalavao', 'Antsirabe', 'Anja Reserve'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80',
    difficulty: 'modéré',
    bestSeason: 'Avril – Novembre',
    budgetHint: 'Moyen',
    daysPlan: [
      {
        day: 1,
        title: 'Arrivée Antananarivo',
        location: 'Antananarivo',
        activities: ['Accueil et installation'],
        overnight: 'Antananarivo',
      },
      {
        day: 2,
        title: 'Tana – Antsirabe',
        location: 'Antsirabe',
        activities: [
          'Route RN7, arrêts villages et vues',
          'Antsirabe : rickshaws, artisanat, sources thermales',
        ],
        overnight: 'Antsirabe',
      },
      {
        day: 3,
        title: 'Antsirabe – Ambositra – Ranomafana',
        location: 'Ranomafana',
        activities: [
          'Ambositra (capitale de l’artisanat bois)',
          'Arrivée Ranomafana, première balade',
        ],
        overnight: 'Ranomafana',
      },
      {
        day: 4,
        title: 'Parc National Ranomafana',
        location: 'Ranomafana',
        activities: [
          'Trekking forêt tropicale',
          'Lémuriens dorés, bambous, cascades',
        ],
        overnight: 'Ranomafana',
      },
      {
        day: 5,
        title: 'Ranomafana – Ambalavao',
        location: 'Ambalavao',
        activities: [
          'Route vers Ambalavao',
          'Atelier papier antaimoro, marché zebu',
        ],
        overnight: 'Ambalavao',
      },
      {
        day: 6,
        title: 'Réserve d’Anja & vers Isalo',
        location: 'Ranohira',
        activities: [
          'Réserve communautaire d’Anja (ring-tailed lemurs)',
          'Route vers le massif de l’Isalo',
        ],
        overnight: 'Ranohira',
      },
      {
        day: 7,
        title: 'Parc National de l’Isalo',
        location: 'Isalo',
        activities: [
          'Trek complet : canyons, piscine naturelle, Namaza',
          'Coucher de soleil à la Fenêtre de l’Isalo',
        ],
        overnight: 'Ranohira',
      },
      {
        day: 8,
        title: 'Isalo – Toliara',
        location: 'Toliara (Tuléar)',
        activities: [
          'Route vers la côte sud-ouest',
          'Paysages de spiny forest et baobabs du Sud',
        ],
        overnight: 'Toliara',
      },
      {
        day: 9,
        title: 'Ifaty ou Anakao',
        location: 'Ifaty / Anakao',
        activities: [
          'Plage, récif, option baobabs d’Ifaty',
          'Rencontre avec pêcheurs vezo',
        ],
        overnight: 'Ifaty ou Anakao',
      },
      {
        day: 10,
        title: 'Journée mer',
        location: 'Côte sud-ouest',
        activities: ['Snorkeling, détente, pirogue vezo'],
        overnight: 'Ifaty / Anakao',
      },
      {
        day: 11,
        title: 'Retour Toliara – vol Tana',
        location: 'Antananarivo',
        activities: ['Vol Toliara → Antananarivo'],
        overnight: 'Antananarivo',
      },
      {
        day: 12,
        title: 'Journée libre Tana',
        location: 'Antananarivo',
        activities: ['Culture, shopping, repos'],
        overnight: 'Antananarivo',
      },
      {
        day: 13,
        title: 'Buffer',
        location: 'Antananarivo',
        activities: ['Temps libre'],
        overnight: 'Antananarivo',
      },
      {
        day: 14,
        title: 'Départ',
        location: 'Aéroport',
        activities: ['Transfert aéroport'],
      },
    ],
  },
]
