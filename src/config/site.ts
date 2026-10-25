export interface OfficeInfo {
  name: string;
  type: "Head Office" | "Branch Office";
  address: string;
  phoneDisplay: string;
  phoneTel: string;
  fax: string;
  email: string;
  hours: string;
  locationQuery: string;
}

export interface SiteConfig {
  companyName: string;
  legalName: string;
  tagline: string;
  description: string;
  baseUrl: string;
  announcement: {
    enabled: boolean;
    badge: string;
    text: string;
    linkText?: string;
    linkHref?: string;
  };
  offices: {
    delhi: OfficeInfo;
    chandigarh: OfficeInfo;
  };
  contactEmails: {
    enquiry: string;
    general: string;
    support: string;
  };
  navigation: {
    main: { title: string; href: string; badge?: string }[];
    destinationsMenu: {
      title: string;
      region: "International" | "Domestic";
      items: { name: string; slug: string; tag?: string }[];
    }[];
    packagesMenu: {
      category: string;
      slug: string;
      description: string;
      iconName?: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Zenith Holidayz",
  legalName: "ZENITH HOLIDAYZ PRIVATE LIMITED",
  tagline: "Bespoke World Journeys & Curated Luxury Travel",
  description:
    "Experience extraordinary international and domestic vacations handcrafted by travel connoisseurs at Zenith Holidayz Private Limited. Offices in New Delhi and Chandigarh.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://zenithholidayz.com",
  announcement: {
    enabled: true,
    badge: "2026 Season",
    text: "Experience handcrafted luxury itineraries for Switzerland, Bali, Dubai, Kashmir & beyond.",
    linkText: "Plan Your Escape",
    linkHref: "/plan-your-trip",
  },
  offices: {
    delhi: {
      name: "Delhi Head Office",
      type: "Head Office",
      address: "74/1, LGF, World Trade Centre, Barakhamba Lane, Connaught Place, New Delhi – 110001, India",
      phoneDisplay: "+91-11-23350562-64",
      phoneTel: "+911123350562",
      fax: "+91-11-44480802",
      email: "contactus@zenithholidayz.com",
      hours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
      locationQuery: "World Trade Centre, Barakhamba Lane, Connaught Place, New Delhi",
    },
    chandigarh: {
      name: "Chandigarh Branch Office",
      type: "Branch Office",
      address: "Office No. D-78/2, Block-D2, Palsora, Sector-55, Chandigarh – 160036, India",
      phoneDisplay: "+91-172-4441212-14",
      phoneTel: "+911724441212",
      fax: "+91-172-4441210",
      email: "info@zenithholidayz.com",
      hours: "Monday – Saturday: 10:00 AM – 6:30 PM IST",
      locationQuery: "Sector-55, Chandigarh, India",
    },
  },
  contactEmails: {
    enquiry: "contactus@zenithholidayz.com",
    general: "info@zenithholidayz.com",
    support: "contactus@zenithholidayz.com",
  },
  navigation: {
    main: [
      { title: "Home", href: "/" },
      { title: "Destinations", href: "/destinations" },
      { title: "Holiday Packages", href: "/packages" },
      { title: "Experiences", href: "/experiences" },
      { title: "About Us", href: "/about" },
      { title: "Contact Us", href: "/contact" },
    ],
    destinationsMenu: [
      {
        title: "International Escapes",
        region: "International",
        items: [
          { name: "Switzerland", slug: "switzerland", tag: "Alpine Luxury" },
          { name: "Bali, Indonesia", slug: "bali", tag: "Tropical Serenity" },
          { name: "Dubai & Emirates", slug: "dubai", tag: "Modern Grandeur" },
          { name: "Thailand", slug: "thailand", tag: "Cultural & Islands" },
          { name: "Maldives", slug: "maldives", tag: "Private Atolls" },
          { name: "Japan", slug: "japan", tag: "Tradition & Future" },
          { name: "Paris, France", slug: "paris", tag: "Romance & Art" },
          { name: "United Kingdom", slug: "united-kingdom", tag: "Royal Heritage" },
        ],
      },
      {
        title: "Domestic Treasures",
        region: "Domestic",
        items: [
          { name: "Kashmir", slug: "kashmir", tag: "Paradise on Earth" },
          { name: "Rajasthan", slug: "rajasthan", tag: "Royal Heritage" },
          { name: "Kerala", slug: "kerala", tag: "God's Own Country" },
        ],
      },
    ],
    packagesMenu: [
      {
        category: "International Holidays",
        slug: "international",
        description: "Curated worldwide vacations with premium accommodations and private transfers.",
      },
      {
        category: "Domestic Holidays",
        slug: "domestic",
        description: "Discover the breathtaking beauty and rich royal heritage of India.",
      },
      {
        category: "Honeymoon Packages",
        slug: "honeymoon",
        description: "Intimate, romantic retreats designed for unforgettable celebrations.",
      },
      {
        category: "Family Holidays",
        slug: "family",
        description: "Balanced, immersive itineraries that engage all generations.",
      },
      {
        category: "Adventure Trips",
        slug: "adventure",
        description: "Alpine summits, desert safaris, and oceanic thrill expeditions.",
      },
      {
        category: "Luxury Escapes",
        slug: "luxury",
        description: "Five-star palatial retreats, private pool villas, and tailored concierges.",
      },
      {
        category: "Cultural Experiences",
        slug: "cultural",
        description: "Centuries of art, architecture, festivals, and culinary discoveries.",
      },
    ],
  },
};
