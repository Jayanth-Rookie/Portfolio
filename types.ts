
export interface Exhibition {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description?: string;
}

export type PortfolioCategory = 'storytelling' | 'shortform' | 'motion';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  thumbnail: string;     // The poster image
  videoSrc?: string;     // Optional: For direct MP4 previews/files
  youtubeId?: string;    // Optional: For YouTube Embeds
  instagramUrl?: string; // Optional: For Instagram Reels
  stats?: string;        // e.g. "2.5M Views"
  client?: string;       // e.g. "Nike"
}

export interface NavLink {
  label: string;
  href: string;
}
