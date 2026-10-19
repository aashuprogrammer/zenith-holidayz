export interface ExperienceStyle {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  idealDestinations: string[];
  keyHighlights: string[];
}

export const experiences: ExperienceStyle[] = [
  {
    id: "exp-romantic",
    slug: "romantic-getaways",
    title: "Romantic Getaways & Honeymoons",
    tagline: "Intimate escapes curated for unforgettable celebrations of love.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Private overwater villas, secluded sandbank candlelit dinners, and couples' spa treatments designed for newlyweds and anniversaries.",
    fullDescription:
      "From private overwater retreats in the Maldives to floating breakfasts in the tranquil rainforests of Ubud and horse-drawn carriage rides in Swiss alpine valleys, our romantic getaways are meticulously designed for moments of pure intimacy and shared joy.",
    idealDestinations: ["Maldives", "Bali", "Switzerland", "Paris", "Kashmir"],
    keyHighlights: [
      "Private overwater bungalows & secluded pool villas",
      "Sunset champagne cruises on private catamarans",
      "Starlit sandbank dining curated by private chefs",
      "Holistic wellness and couples' therapy treatments",
    ],
  },
  {
    id: "exp-mountain",
    slug: "mountain-adventures",
    title: "Mountain Adventures & Alpine Panoramas",
    tagline: "Elevate your perspective amidst breathtaking high-altitude peaks.",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Panoramic cogwheel rail, glacial peaks, snow meadows in Kashmir, and first-class Swiss passes through the heart of the Alps.",
    fullDescription:
      "Breathe in the crispest mountain air on earth. Traverse glacier passes aboard the Glacier Express, stand at Jungfraujoch 3,454 meters high, ascend the Gulmarg Gondola over pristine Himalayan snowdrifts, and cozy up beside crackling fireplaces in alpine chalets.",
    idealDestinations: ["Switzerland", "Kashmir", "Japan (Mount Fuji)", "Himachal"],
    keyHighlights: [
      "First-class panoramic rail journeys across glacier viaducts",
      "Gondolas and cable cars to continental peaks",
      "Charming luxury chalets with thermal infinity pools",
      "Guided alpine walks and seasonal winter sports",
    ],
  },
  {
    id: "exp-beach",
    slug: "beach-escapes",
    title: "Beach & Island Escapes",
    tagline: "Sun-drenched coastlines, turquoise lagoons & coral sanctuaries.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Turquoise lagoons, powder-soft sands, coral reef snorkeling, and beachfront luxury resorts across the Indian and Pacific Oceans.",
    fullDescription:
      "Reclaim peace of mind where turquoise water meets powder-white sand. From the dramatic limestone karsts of Phuket and Krabi to the tranquil shores of Nusa Dua and private island atolls in the Maldives, indulge in bespoke barefoot luxury.",
    idealDestinations: ["Maldives", "Bali", "Thailand", "Kerala"],
    keyHighlights: [
      "Direct beach and lagoon access from private villas",
      "Snorkeling with manta rays, sea turtles & vibrant reefs",
      "Island-hopping expeditions by private speedboat",
      "Sunset seafood barbecues accompanied by ocean breezes",
    ],
  },
  {
    id: "exp-luxury",
    slug: "luxury-experiences",
    title: "Luxury & Bespoke Concierge",
    tagline: "Extraordinary hospitality, private charters & five-star retreats.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Five-star palatial retreats, private yacht charters, bespoke VIP access to landmarks, and dedicated travel concierges.",
    fullDescription:
      "Crafted for the discerning traveler who values seamless privacy and exceptional distinction. Every detail is handled by Zenith Holidayz, from VIP tarmac greetings and helicopter transfers to reservations at Michelin-starred establishments and converted royal palaces.",
    idealDestinations: ["Dubai", "Switzerland", "Paris", "Rajasthan", "Maldives"],
    keyHighlights: [
      "Private motor yacht charters along premier coastlines",
      "VIP skip-the-line access to global landmarks and museums",
      "Converted heritage palace and ultra-luxury suite stays",
      "24/7 dedicated travel concierge and private chauffeur service",
    ],
  },
  {
    id: "exp-cultural",
    slug: "cultural-exploration",
    title: "Cultural Exploration & Royal Heritage",
    tagline: "Centuries of art, architecture, rituals & royal history.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Immerse yourself in grand royal fortresses, sacred Buddhist and Hindu temples, Shinto shrines, and historic European capitals.",
    fullDescription:
      "Step inside living history. Walk through the golden sandstone fortresses of Rajasthan, participate in tranquil tea ceremonies in historic Kyoto, discover the timeless art treasures of Paris, and cruise through ancient backwaters dotted with traditional architecture.",
    idealDestinations: ["Rajasthan", "Japan", "Paris", "Thailand", "Kerala"],
    keyHighlights: [
      "Guided private tours with veteran historians & art specialists",
      "Authentic cultural workshops, tea ceremonies & culinary classes",
      "Private access to royal courtyards and heritage sanctuaries",
      "Traditional performing arts and festive celebrations",
    ],
  },
  {
    id: "exp-family",
    slug: "family-adventures",
    title: "Family Holidays & Multi-Generation Travel",
    tagline: "Thoughtfully balanced journeys that inspire every generation.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    shortDescription:
      "Spacious accommodations, engaging activities for all ages, relaxed pacing, and seamless logistics for effortless family bonding.",
    fullDescription:
      "Traveling with loved ones should be pure pleasure, not logistical stress. We design multi-generational family holidays with interconnected suites, child-friendly excursions, comfortable private transport, and tailored pacing so grandparents, parents, and children all thrive.",
    idealDestinations: ["Dubai", "Singapore", "Thailand", "Kashmir", "Switzerland"],
    keyHighlights: [
      "Interconnected family suites and spacious multi-bedroom villas",
      "Interactive theme parks, aquariums and science centers",
      "Comfortable private Mercedes Sprinters and spacious SUVs",
      "Gentle itineraries with balanced activity and rest days",
    ],
  },
];
