export type PackageCategory =
  | "international"
  | "domestic"
  | "honeymoon"
  | "family"
  | "adventure"
  | "luxury"
  | "cultural";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
}

export interface HolidayPackage {
  id: string;
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  region: "International" | "Domestic";
  categories: PackageCategory[];
  duration: {
    days: number;
    nights: number;
  };
  startingEstimate: string;
  pricingNote: string;
  coverImage: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  accommodationType: string;
  itinerary: ItineraryDay[];
  featured: boolean;
  bestSeason: string;
}

export const packages: HolidayPackage[] = [
  {
    id: "pkg-swiss-grandeur",
    slug: "grand-swiss-alpine-wonders",
    title: "Grand Swiss Alpine Wonders & Panoramic Rail",
    destinationSlug: "switzerland",
    destinationName: "Switzerland",
    region: "International",
    categories: ["international", "luxury", "honeymoon"],
    duration: { days: 8, nights: 7 },
    startingEstimate: "From ₹2,45,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Final cost customized based on season, flight selection & hotel category.",
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Journey aboard the Glacier Express through snow-crested mountain passes, ascend Jungfraujoch, and discover Zurich, Lucerne & Interlaken.",
    overview:
      "A flagship European itinerary designed for travelers who appreciate cinematic beauty and Swiss precision. Experience first-class panoramic rail travel, stay in handpicked 4-star and 5-star mountain-view chalets, and cruise the turquoise waters of Lake Lucerne before reaching the Top of Europe.",
    highlights: [
      "1st Class Swiss Travel Pass with unlimited scenic train travel",
      "Excursion to Jungfraujoch – Top of Europe (3,454m) with Ice Palace visit",
      "Glacier Express scenic train from St. Moritz or Chur to Zermatt",
      "Lake Lucerne romantic private steam-paddle cruise",
      "Mount Titlis revolving cable car & Glacier Cave walk",
    ],
    inclusions: [
      "7 Nights 4-Star / 5-Star handpicked accommodation with daily breakfast",
      "8-Day 1st Class Swiss Travel Pass for all trains, boats & city trams",
      "Excursion tickets to Jungfraujoch & Mount Titlis Rotair",
      "Private airport transfers in Zurich / Geneva",
      "Zenith personalized concierge & travel document package",
    ],
    exclusions: [
      "International airfare and Schengen visa fees",
      "Meals other than daily breakfast unless specified",
      "Personal expenses, optional mountain excursions & porterage",
      "Travel and medical insurance (recommended)",
    ],
    accommodationType: "4-Star Superior / 5-Star Boutique Hotels",
    bestSeason: "May to October (Alpine Greens) / December to March (Winter Wonderland)",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich – Scenic Rail to Lucerne",
        description:
          "Arrive at Zurich Airport. Zenith concierge coordinates your first-class rail transfer to Lucerne. Check into your lakeside hotel and enjoy an evening stroll across the historic Chapel Bridge.",
        meals: "Breakfast (on subsequent days)",
      },
      {
        day: 2,
        title: "Mount Titlis Rotair & Glacier Experience",
        description:
          "Board the scenic train to Engelberg and ascend via the Titlis Rotair revolving cable car. Marvel at the 360-degree glacier panoramas, walk through the Ice Cave, and brave the Cliff Walk.",
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Lucerne to Interlaken via the GoldenPass Panoramic Rail",
        description:
          "Embark on the GoldenPass panoramic express winding past crystal lakes and alpine cascades into Interlaken, nestled between Lake Thun and Lake Brienz.",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Jungfraujoch – Top of Europe Expedition",
        description:
          "Ride the Eiger Express tri-cable gondola and cogwheel railway to Jungfraujoch. Stand at the Sphinx Observatory overlooking the monumental Aletsch Glacier.",
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Interlaken to Zermatt – The Realm of the Matterhorn",
        description:
          "Travel south through the Valais region to car-free Zermatt. Gaze upon the iconic pyramid of the Matterhorn and explore the picturesque alpine village.",
        meals: "Breakfast",
      },
      {
        day: 6,
        title: "Gornergrat Cogwheel Mountain Railway",
        description:
          "Ascend to Gornergrat (3,089m) for the most breathtaking vista of the Matterhorn and surrounding 29 four-thousand-meter peaks.",
        meals: "Breakfast",
      },
      {
        day: 7,
        title: "Zermatt to Zurich – Lake Promenade & Old Town",
        description:
          "Rail transfer back to vibrant Zurich. Enjoy an afternoon shopping along Bahnhofstrasse and an evening farewell dinner along Lake Zurich.",
        meals: "Breakfast",
      },
      {
        day: 8,
        title: "Zurich Departure",
        description:
          "Breakfast at the hotel, private transfer to Zurich Airport for your onward international flight with unforgettable Swiss memories.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-bali-romantic",
    slug: "bali-luxury-villas-island-bliss",
    title: "Bali Luxury Villas, Sacred Temples & Island Serenity",
    destinationSlug: "bali",
    destinationName: "Bali",
    region: "International",
    categories: ["international", "honeymoon", "luxury"],
    duration: { days: 7, nights: 6 },
    startingEstimate: "From ₹88,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Tailored to chosen dates, room category & flight rates.",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Private pool villa in the Ubud jungle followed by clifftop ocean sunsets in Seminyak, private catamaran trip, and couple's spa rituals.",
    overview:
      "A dual-destination sanctuary blending the spiritual jungle tranquility of Ubud with the chic coastal elegance of Seminyak or Nusa Dua. Enjoy floating breakfasts, private chauffeured excursions to sacred water temples, and an unforgettable seafood dinner on Jimbaran Bay.",
    highlights: [
      "3 Nights in a Private Pool Villa in Ubud + 3 Nights in a 5-Star Beachfront Resort",
      "Signature Floating Breakfast in your private pool",
      "Private tour to Tegalalang Rice Terraces, Aloha Swing & Tirta Empul",
      "Uluwatu Clifftop Temple sunset & Kecak Fire Dance performance",
      "Romantic 4-course candlelit dinner on Jimbaran Beach",
    ],
    inclusions: [
      "6 Nights luxury accommodation with daily breakfast",
      "Private air-conditioned vehicle with dedicated English-speaking chauffeur-guide",
      "All monument entrance fees, swing passes & temple sarongs",
      "One 90-minute traditional Balinese couple's massage",
      "Round-trip airport & inter-hotel transfers",
    ],
    exclusions: [
      "International flights and Indonesian Visa on Arrival fee ($35 USD)",
      "Lunches and dinners not specified in the itinerary",
      "Personal water sports, tips and gratuities",
    ],
    accommodationType: "5-Star Private Pool Villas & Beachfront Resorts",
    bestSeason: "April through October",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar – Transfer to Ubud Rainforest Sanctuary",
        description:
          "Warm Balinese welcome at Ngurah Rai Airport with fresh flower leis. Private transfer through lush countryside to your private pool villa in Ubud. Evening at leisure.",
        meals: "Welcome drink",
      },
      {
        day: 2,
        title: "Ubud Cultural Discovery & Jungle Swing",
        description:
          "Morning floating breakfast. Tour the emerald Tegalalang rice terraces, try the famous Bali swing with panoramic canyon views, and visit the sacred monkey forest.",
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Mount Batur View & Tirta Empul Sacred Springs",
        description:
          "Drive to Kintamani overlooking the volcanic caldera and Lake Batur. Experience a sacred holy water blessing ceremony at Tirta Empul Temple.",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Ubud to Seminyak Coastline – Tanah Lot Sunset",
        description:
          "Check out from Ubud and travel south to Seminyak. En route, visit the iconic sea temple of Tanah Lot perched on an offshore rock formation.",
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Nusa Penida Island Day Excursion by Speedboat",
        description:
          "Board a high-speed catamaran to Nusa Penida. Visit Kelingking 'T-Rex' Beach, Broken Beach, Angel's Billabong, and snorkel in Crystal Bay.",
        meals: "Breakfast, Lunch",
      },
      {
        day: 6,
        title: "Uluwatu Sunset & Jimbaran Seafood Dinner",
        description:
          "Afternoon at leisure by the beach. Later, visit the spectacular Uluwatu cliff temple and watch the hypnotic Kecak dance followed by a candlelit seafood dinner on Jimbaran sands.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 7,
        title: "Farewell Bali",
        description:
          "Relax with a morning spa treatment, souvenir shopping in Seminyak boutiques, and private transfer to Denpasar Airport for departure.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-dubai-opulence",
    slug: "dubai-desert-safari-skyline-opulence",
    title: "Dubai Skyline Opulence & Royal Desert Safari",
    destinationSlug: "dubai",
    destinationName: "Dubai",
    region: "International",
    categories: ["international", "family", "luxury"],
    duration: { days: 6, nights: 5 },
    startingEstimate: "From ₹72,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Final package verified based on travel dates and room occupancy.",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Burj Khalifa 124th floor, private sunset yacht cruise along the Marina, luxury desert safari with Bedouin banquet, and Museum of the Future.",
    overview:
      "Experience Dubai's world-renowned grandeur. Stay in a five-star hotel near Downtown or the Marina, marvel at the skyline from the world's tallest building, glide across the Persian Gulf on a private yacht, and venture deep into the golden dunes for an authentic Arabian desert safari.",
    highlights: [
      "Burj Khalifa 'At The Top' Observatory (124th & 125th Floors)",
      "Premium 4x4 Desert Safari with dune bashing, camel rides & gourmet BBQ dinner",
      "Private 2-hour sunset motor yacht cruise past Atlantis The Palm",
      "Museum of the Future entry tickets",
      "Dubai Frame & historic Dubai Creek abra boat crossing",
    ],
    inclusions: [
      "5 Nights 5-Star luxury city hotel accommodation with breakfast",
      "All mentioned transfers in private air-conditioned vehicle",
      "Desert Safari in 4WD Land Cruiser with live Tanoura & fire shows",
      "All attraction entrance tickets pre-booked with fast-track entry",
      "Zenith on-ground concierge support throughout",
    ],
    exclusions: [
      "International flights and UAE tourist visa fee",
      "Tourism Dirham fee payable directly at hotel check-in",
      "Personal shopping and alcoholic beverages during meals",
    ],
    accommodationType: "5-Star Downtown / Marina Luxury Hotels",
    bestSeason: "October through April",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai – Marina Dhow Dinner Cruise",
        description:
          "Arrive at Dubai International Airport. Private luxury transfer to your hotel. In the evening, enjoy a glass-enclosed dinner cruise through Dubai Marina.",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "City Landmarks & Burj Khalifa At The Top",
        description:
          "Morning city tour covering Dubai Frame and Jumeirah Mosque. Afternoon at Dubai Mall and ascend Burj Khalifa to witness the dancing fountain show.",
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Museum of the Future & Old Dubai Souks",
        description:
          "Explore the architectural miracle of the Museum of the Future. In the afternoon, take a traditional wooden abra boat across Dubai Creek to the Gold and Spice Souks.",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Premium Red Dune Desert Safari",
        description:
          "Morning at leisure. Mid-afternoon, board a private 4x4 into the high Lahbab dunes for thrilling dune bashing, sandboarding, and sunset photography followed by a royal Bedouin banquet under the stars.",
        meals: "Breakfast, BBQ Dinner",
      },
      {
        day: 5,
        title: "Palm Jumeirah & Private Sunset Yacht Cruise",
        description:
          "Visit The View at The Palm for 360-degree views of the archipelago. In the late afternoon, embark on a private motor yacht cruise from Dubai Marina.",
        meals: "Breakfast",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Breakfast at the hotel, last-minute shopping at Mall of the Emirates, and private airport transfer for your flight home.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-kashmir-paradise",
    slug: "kashmir-paradise-valleys-gulmarg-shikara",
    title: "Kashmir Paradise: Dal Lake Houseboat, Gulmarg & Pahalgam",
    destinationSlug: "kashmir",
    destinationName: "Kashmir",
    region: "Domestic",
    categories: ["domestic", "family", "honeymoon", "cultural"],
    duration: { days: 6, nights: 5 },
    startingEstimate: "From ₹46,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Exact rates customized to season and preferred vehicle.",
    coverImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Heritage cedar houseboat stay on Dal Lake, Gulmarg Gondola Phase 1 & 2 to Apharwat peak, Betaab Valley in Pahalgam, and Mughal gardens.",
    overview:
      "Immerse yourself in the timeless beauty of the Kashmir Valley. Sip fragrant saffron kahwa on your private houseboat deck, glide past floating lotus gardens on a shikara, conquer the snow fields of Gulmarg, and walk through the tranquil pine valleys of Pahalgam along the roaring Lidder River.",
    highlights: [
      "1 Night in a Luxury Handcarved Cedar Houseboat + 4 Nights in Premium Valley Resorts",
      "Gulmarg Gondola Ride (Phase 1 & 2 up to 13,780 ft)",
      "Pahalgam excursion including Betaab Valley, Aru Valley and Chandanwari",
      "Sunset Shikara ride on Dal Lake with visit to Char Chinar",
      "Mughal Gardens: Shalimar Bagh, Nishat Bagh and Chashme Shahi",
    ],
    inclusions: [
      "5 Nights accommodation with daily breakfast and dinner (MAP plan)",
      "Exclusive private vehicle (Innova / Crysta) for all transfers and sightseeing",
      "1-Hour private Shikara ride on Dal Lake",
      "Toll taxes, parking, driver allowance and fuel charges",
      "Zenith local representative support in Srinagar",
    ],
    exclusions: [
      "Airfare to and from Srinagar",
      "Gondola tickets, pony rides and union cab charges in Pahalgam/Gulmarg",
      "Personal tips, laundry and entry tickets to gardens",
    ],
    accommodationType: "Heritage Luxury Houseboat & 4-Star Mountain Resorts",
    bestSeason: "April to October (Gardens & Greenery) / December to February (Snow)",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar – Check-in to Houseboat & Sunset Shikara",
        description:
          "Arrive at Srinagar Airport. Zenith representative assists with your transfer to a luxury cedarwood houseboat on Dal Lake. Enjoy an evening romantic shikara boat ride.",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg – Meadow of Flowers",
        description:
          "Scenic drive through apple orchards to Gulmarg. Check into your resort and board the world's highest gondola to Apharwat Peak for breathtaking Himalayan panoramas.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 3,
        title: "Gulmarg to Pahalgam – Valley of Shepherds",
        description:
          "Drive to Pahalgam passing through saffron fields in Pampore and the ancient ruins of Avantipur. Arrive at the scenic banks of the Lidder River.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 4,
        title: "Pahalgam Valley Exploration (Aru, Betaab & Chandanwari)",
        description:
          "Visit the picturesque Betaab Valley, famous for its Bollywood heritage, the meadows of Aru Valley, and the snowy riverbanks of Chandanwari.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 5,
        title: "Pahalgam to Srinagar – Mughal Gardens & Old City",
        description:
          "Return to Srinagar. Visit the grand Mughal gardens laid out by Emperor Jahangir, explore the Jamia Masjid, and shop for authentic Pashmina shawls and walnuts.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 6,
        title: "Srinagar Departure",
        description:
          "Breakfast overlooking the lake, followed by private transfer to Srinagar Airport for your return flight.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-rajasthan-royalty",
    slug: "royal-rajasthan-heritage-palaces-desert",
    title: "Royal Rajasthan: Jaipur, Udaipur & Jodhpur Heritage",
    destinationSlug: "rajasthan",
    destinationName: "Rajasthan",
    region: "Domestic",
    categories: ["domestic", "cultural", "family", "luxury"],
    duration: { days: 8, nights: 7 },
    startingEstimate: "From ₹58,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Verified itinerary tailored to preferred dates and palace tiers.",
    coverImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Stay in converted royal palaces, explore Amer Fort, cruise Lake Pichola at sunset, and discover Mehrangarh Fort in the Blue City.",
    overview:
      "A regal odyssey through the vibrant royal capitals of Rajasthan. Experience the grand Pink City of Jaipur, cross the Aravalli hills to the magnificent Sun City of Jodhpur, and conclude in the romantic white-marble lake city of Udaipur.",
    highlights: [
      "Private boat ride on Lake Pichola past Jag Mandir Island Palace",
      "Amer Fort with elephant/jeep ascent and City Palace in Jaipur",
      "Mehrangarh Fort and Jaswant Thada cenotaphs in Jodhpur",
      "Stay in authentic heritage havelis with traditional courtyards",
      "Live Rajasthani folk music, puppet shows & royal dining",
    ],
    inclusions: [
      "7 Nights accommodation in 4-Star / Heritage hotels with breakfast",
      "Private air-conditioned chauffeur-driven vehicle throughout",
      "Private boat cruise on Lake Pichola in Udaipur",
      "Monument entry assistance and English-speaking local guides",
      "All interstate taxes, tolls and driver allowances",
    ],
    exclusions: [
      "Airfare / Train fare to Jaipur and from Udaipur",
      "Camera fees, monuments tickets, lunches and dinners",
      "Personal shopping and travel insurance",
    ],
    accommodationType: "Heritage Haveli & Palatial Resorts",
    bestSeason: "October through March",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur – The Pink City",
        description:
          "Arrive in Jaipur and check into your heritage hotel. In the evening, visit Birla Temple and enjoy traditional Rajasthani dinner at Chokhi Dhani.",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Jaipur Forts & Palaces",
        description:
          "Ascend to the hilltop Amer Fort, photograph the facade of Hawa Mahal, and explore City Palace museum and Jantar Mantar observatory.",
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur via Pushkar",
        description:
          "Drive to Jodhpur with an en-route stop at holy Pushkar to visit the rare Lord Brahma Temple and the sacred lake ghats.",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Jodhpur Blue City & Mehrangarh Fort",
        description:
          "Tour the massive Mehrangarh Fort, Jaswant Thada marble memorial, and walk through the blue-painted old quarters near the Clock Tower.",
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Jodhpur to Udaipur via Ranakpur Jain Temples",
        description:
          "Journey to Udaipur through the Aravalli hills. Stop at Ranakpur to marvel at the 1,444 uniquely hand-carved marble pillars of the 15th-century temple.",
        meals: "Breakfast",
      },
      {
        day: 6,
        title: "Udaipur – City Palace & Lake Pichola Cruise",
        description:
          "Explore the grand City Palace complex overlooking Lake Pichola, stroll through Saheliyon-ki-Bari gardens, and take a sunset boat cruise.",
        meals: "Breakfast",
      },
      {
        day: 7,
        title: "Udaipur Monsoonal Palaces & Artisan Markets",
        description:
          "Visit Monsoon Palace (Sajjangarh) for panoramic views of Udaipur's lakes and mountains. Afternoon free for miniature paintings and silver handicraft shopping.",
        meals: "Breakfast",
      },
      {
        day: 8,
        title: "Udaipur Departure",
        description:
          "Breakfast at the hotel, private transfer to Udaipur Airport for onward journey.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-maldives-luxury",
    slug: "maldives-overwater-bungalow-private-atoll",
    title: "Maldives Private Atoll & Luxury Overwater Villa Escape",
    destinationSlug: "maldives",
    destinationName: "Maldives",
    region: "International",
    categories: ["international", "luxury", "honeymoon"],
    duration: { days: 5, nights: 4 },
    startingEstimate: "From ₹1,65,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Includes seaplane transfers & full board meal plan.",
    coverImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Direct ocean access from your private overwater pool villa, scenic seaplane flight over coral rings, gourmet dining, and house reef snorkeling.",
    overview:
      "The pinnacle of tropical seclusion. Spend four unforgettable nights suspended over crystalline turquoise lagoons. Step down from your sun deck directly into coral gardens, enjoy champagne breakfast in your pool, and sail into golden sunsets on a private catamaran.",
    highlights: [
      "4 Nights in an Overwater Lagoon Villa with private plunge pool",
      "Roundtrip Scenic Seaplane transfers between Velana Airport and resort",
      "All-Inclusive dining plan (Gourmet breakfast, lunch, dinner & select beverages)",
      "Complimentary guided house-reef snorkeling safari & kayak rentals",
      "Sunset dolphin cruise with champagne & canapés",
    ],
    inclusions: [
      "4 Nights overwater villa accommodation",
      "Seaplane transfers for two passengers",
      "All meals (Breakfast, Lunch & Dinner) at resort restaurants",
      "Applicable Maldives Green Taxes and service charges",
      "Dedicated resort villa butler service",
    ],
    exclusions: [
      "International flights to Male (MLE)",
      "Motorized water sports and deep-sea diving excursions",
      "Spa treatments and premium vintage cellar wines",
    ],
    accommodationType: "5-Star Ultra-Luxury Private Island Resort",
    bestSeason: "November through April",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Male – Seaplane Flight to Island Paradise",
        description:
          "Arrive at Velana International Airport. Access the private resort lounge before boarding your thrilling seaplane transfer over shimmering coral atolls. Check in to your overwater villa.",
        meals: "Lunch, Dinner",
      },
      {
        day: 2,
        title: "Lagoon Exploration & Coral Reef Snorkeling",
        description:
          "Awaken to the sound of gentle waves. Don snorkeling gear and discover vibrant clownfish, sea turtles, and harmless reef sharks right from your villa steps.",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Overwater Spa & Sunset Dolphin Cruise",
        description:
          "Indulge in a signature couple's treatment at the glass-floored overwater spa. In the late afternoon, set sail on a wooden dhoni to spot spinner dolphins leaping in the sunset.",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Private Sandbank Lunch & Starlit Dinner",
        description:
          "Experience pure castaway luxury with a private boat ride to an uninhabited sandbank for a gourmet picnic. Conclude with a candlelit 5-course beach dinner under the stars.",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Farewell Paradise",
        description:
          "Final morning swim in the warm Indian Ocean. Seaplane transfer back to Male Airport for your international flight home.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-kerala-backwaters",
    slug: "kerala-backwater-houseboat-munnar-tea-hills",
    title: "Enchanting Kerala: Alleppey Houseboat & Munnar Tea Hills",
    destinationSlug: "kerala",
    destinationName: "Kerala",
    region: "Domestic",
    categories: ["domestic", "family", "honeymoon", "cultural"],
    duration: { days: 6, nights: 5 },
    startingEstimate: "From ₹38,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Tailored to chosen dates, room category & flight rates.",
    coverImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Private overnight cruise on an authentic luxury houseboat in Alleppey, rolling misty tea estates in Munnar, and Kochi colonial heritage.",
    overview:
      "Discover God's Own Country in supreme comfort. Travel from the Portuguese and Dutch quarters of Fort Kochi up into the cool misty mountains of Munnar, explore the spice trails of Thekkady, and cruise slowly through the palm-lined canals of Alleppey aboard your private air-conditioned houseboat.",
    highlights: [
      "1 Night Private Air-Conditioned Houseboat cruise in Alleppey backwaters",
      "2 Nights in a luxury tea plantation resort in Munnar",
      "Tea museum visit, Eravikulam National Park & Mattupetty Dam",
      "Periyar Lake boat safari and spice garden walk in Thekkady",
      "Kathakali cultural dance performance & traditional Kerala Sadya feast",
    ],
    inclusions: [
      "5 Nights accommodation (including 1 Night Private Houseboat with all meals)",
      "Daily breakfast at all hotels and full meals on the houseboat",
      "Exclusive private air-conditioned vehicle for all transfers and sightseeing",
      "Spice plantation guided walk and entry tickets",
      "All driver charges, toll taxes and interstate parking fees",
    ],
    exclusions: [
      "Airfare or train fare to/from Kochi",
      "Ayurvedic massage treatments and optional boat safaris",
      "Personal expenses and tipping",
    ],
    accommodationType: "4-Star Plantation Resorts & Luxury Houseboat",
    bestSeason: "September through March",
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi – Transfer to Misty Munnar",
        description:
          "Arrive at Kochi Airport. Drive through winding ghats past Cheeyappara and Valara waterfalls to Munnar. Check into your resort surrounded by tea plantations.",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Munnar Tea Estates & Eravikulam National Park",
        description:
          "Visit Eravikulam National Park to spot the endangered Nilgiri Tahr. Explore the Tata Tea Museum and enjoy boating at Mattupetty Dam.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 3,
        title: "Munnar to Thekkady (Periyar)",
        description:
          "Scenic drive to Thekkady. Tour an organic spice plantation smelling fresh cardamom and cinnamon, followed by an evening Kathakali cultural show.",
        meals: "Breakfast, Dinner",
      },
      {
        day: 4,
        title: "Thekkady to Alleppey – Board Private Houseboat",
        description:
          "Drive to Alleppey and board your traditional luxury houseboat. Cruise through narrow canals, observing village life, paddy fields, and water lilies while your onboard chef prepares fresh Karimeen fish.",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Alleppey to Fort Kochi Heritage",
        description:
          "Disembark after breakfast and drive to Fort Kochi. Stroll past the iconic Chinese fishing nets, St. Francis Church, and Jewish Synagogue in Mattancherry.",
        meals: "Breakfast",
      },
      {
        day: 6,
        title: "Kochi Departure",
        description:
          "Breakfast at the hotel, transfer to Cochin International Airport for your departure flight.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-japan-sakura",
    slug: "timeless-japan-tokyo-kyoto-bullet-train",
    title: "Timeless Japan: Tokyo, Mount Fuji, Kyoto & Bullet Train",
    destinationSlug: "japan",
    destinationName: "Japan",
    region: "International",
    categories: ["international", "cultural", "luxury"],
    duration: { days: 9, nights: 8 },
    startingEstimate: "From ₹2,85,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Exact pricing tailored to cherry blossom / autumn peak seasons.",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Shinkansen bullet train from futuristic Tokyo to imperial Kyoto, Hakone Mount Fuji cruise, authentic Ryokan onsen stay, and bamboo groves.",
    overview:
      "A transcendent journey through Japan's contrasting realms. Immerse yourself in the buzzing neon energy and culinary brilliance of Tokyo, soak in mineral-rich thermal onsens overlooking Mount Fuji in Hakone, and explore centuries of zen serenity in Kyoto's imperial shrines.",
    highlights: [
      "7-Day Japan Rail Pass (Ordinary / Green Car available)",
      "Hakone day tour with Mount Fuji 5th station & Lake Ashi pirate boat",
      "1 Night stay in a traditional luxury Ryokan with private Onsen bath & Kaiseki banquet",
      "Kyoto's Fushimi Inari 10,000 Torii gates & Arashiyama Bamboo Grove",
      "Private authentic Japanese tea ceremony with a Kyoto tea master",
    ],
    inclusions: [
      "8 Nights 4-Star / 5-Star accommodation including 1 night Ryokan",
      "Daily Japanese or Western breakfast and 1 Kaiseki multi-course dinner",
      "Japan Rail Pass for seamless bullet train transit",
      "Private guided tours in Tokyo and Kyoto with licensed English guides",
      "All regional airport arrival and departure transfers",
    ],
    exclusions: [
      "International flights and Japan tourist visa",
      "Lunches and dinners not listed in the itinerary",
      "Luggage forwarding courier fees (optional convenience)",
    ],
    accommodationType: "4-Star Superior Hotels & Luxury Ryokan",
    bestSeason: "March to May (Sakura) & October to November (Autumn)",
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description: "Arrive at Tokyo Haneda or Narita Airport. Private transfer to your luxury hotel in Shinjuku or Ginza. Rest and adjust to the time zone.",
        meals: "Meals on flight",
      },
      {
        day: 2,
        title: "Tokyo Highlights – Shibuya, Meiji Shrine & Asakusa",
        description: "Explore the ancient Senso-ji temple in Asakusa, stroll the peaceful gardens of Meiji Jingu shrine, and experience the world-famous Shibuya crossing.",
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Mount Fuji & Hakone Lake Cruise",
        description: "Travel to Hakone. Ascend to Mount Fuji 5th Station, cruise across Lake Ashi, and take the Komagatake ropeway. Check into your traditional Ryokan and soak in natural hot springs.",
        meals: "Breakfast, Kaiseki Dinner",
      },
      {
        day: 4,
        title: "Shinkansen Bullet Train to Kyoto",
        description: "Board the sleek Shinkansen bullet train reaching speeds of 300 km/h into historic Kyoto. Evening walk through the historic Gion geisha district.",
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Kyoto – Kinkaku-ji Golden Pavilion & Bamboo Grove",
        description: "Visit the shimmering Kinkaku-ji (Golden Pavilion), walk through the towering Arashiyama bamboo forest, and visit Tenryu-ji zen temple.",
        meals: "Breakfast",
      },
      {
        day: 6,
        title: "Fushimi Inari & Nara Deer Park Day Trip",
        description: "Walk under thousands of vermilion torii gates at Fushimi Inari Shrine. In the afternoon, visit Nara Park to meet sacred bowed sika deer and Todai-ji giant Buddha.",
        meals: "Breakfast",
      },
      {
        day: 7,
        title: "Kyoto to Tokyo",
        description: "Return via bullet train to Tokyo. Afternoon free for upscale shopping in Ginza or visiting Akihabara and teamLab Planets digital art museum.",
        meals: "Breakfast",
      },
      {
        day: 8,
        title: "Tokyo Free Day for Discovery",
        description: "Full day at leisure to explore Tokyo's Michelin-starred restaurants, Tsukiji Outer Fish Market, or visit Tokyo Disneyland.",
        meals: "Breakfast",
      },
      {
        day: 9,
        title: "Tokyo Departure",
        description: "Breakfast at hotel, private transfer to Haneda or Narita airport for your flight home.",
        meals: "Breakfast",
      },
    ],
  },
  {
    id: "pkg-thailand-islands",
    slug: "thailand-bangkok-phuket-krabi-island-hopping",
    title: "Tropical Thailand: Bangkok Grandeur, Phuket & Krabi Bays",
    destinationSlug: "thailand",
    destinationName: "Thailand",
    region: "International",
    categories: ["international", "family", "adventure"],
    duration: { days: 7, nights: 6 },
    startingEstimate: "From ₹54,000*",
    pricingNote: "*Sample starting estimate per person on twin-sharing basis. Tailored to chosen season and hotel category.",
    coverImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Bangkok Grand Palace and Chao Phraya cruise, speedboat through Phi Phi and Maya Bay, and cliff-side tranquility in Krabi.",
    overview:
      "A vibrant journey through the Kingdom of Thailand. Marvel at Bangkok's glittering golden spires, fly south to the turquoise Andaman Sea, island-hop aboard speedboats through Phi Phi and James Bond Island, and relax on powder-soft beaches.",
    highlights: [
      "Bangkok Grand Palace, Wat Pho (Reclining Buddha) & river dinner cruise",
      "Full-day speedboat island tour to Phi Phi Islands, Maya Bay & Khai Island",
      "Sea kayaking around towering limestone karsts in Phang Nga Bay",
      "Sunset seafood barbecue by the beach in Krabi",
      "All domestic flights (Bangkok to Phuket / Krabi) coordinated",
    ],
    inclusions: [
      "6 Nights 4-Star / 5-Star beach resort accommodation with daily breakfast",
      "Round-trip airport transfers and sightseeing in private AC vehicles",
      "Full day Phi Phi Island tour with buffet lunch and snorkeling gear",
      "Chao Phraya luxury dinner cruise with live traditional music",
      "All national park conservation entry fees",
    ],
    exclusions: [
      "International flights and travel insurance",
      "Water sports (parasailing, jet-ski) and personal expenses",
      "Meals not specifically stated in the itinerary",
    ],
    accommodationType: "4-Star & 5-Star Tropical Beach Resorts",
    bestSeason: "November through April",
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok – Chao Phraya Luxury Dinner Cruise",
        description: "Arrive at Suvarnabhumi Airport. Private transfer to your riverside hotel. In the evening, cruise past illuminated temples on a luxury dinner cruise.",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Bangkok Cultural Treasures – Grand Palace & Wat Arun",
        description: "Tour the spectacular Grand Palace and the Temple of the Reclining Buddha. Take a longtail boat across the river to visit the porcelain pagoda of Wat Arun.",
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Fly to Phuket – Beachside Leisure",
        description: "Short flight to Phuket. Private transfer to your beachfront resort. Spend the afternoon swimming in the Andaman Sea or exploring Patong's night markets.",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Phi Phi Islands & Maya Bay by Speedboat",
        description: "Full-day speedboat excursion to Phi Phi Don and Phi Phi Leh. Swim in the emerald lagoon of Maya Bay, snorkel among colorful coral reefs, and enjoy a beachfront lunch.",
        meals: "Breakfast, Lunch",
      },
      {
        day: 5,
        title: "Phuket to Krabi via Phang Nga Bay",
        description: "Scenic transfer to Krabi with a stop for canoeing around the legendary James Bond Island limestone needle. Check into your Krabi cliff-view resort.",
        meals: "Breakfast, Lunch",
      },
      {
        day: 6,
        title: "Krabi 4-Island Tour & Railay Beach",
        description: "Visit Railay Beach, Phra Nang Cave beach, Tup Island sandbar, and Chicken Island with crystal clear snorkeling waters.",
        meals: "Breakfast",
      },
      {
        day: 7,
        title: "Krabi Departure",
        description: "Breakfast at the resort, private transfer to Krabi Airport for your connecting flight home.",
        meals: "Breakfast",
      },
    ],
  },
];
