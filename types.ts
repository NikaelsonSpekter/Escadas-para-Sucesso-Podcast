
export interface Episode {
  id: string;
  title: string;
  slug: string;
  date: string;
  duration: string;
  guest: string;
  categories: string[];
  shortDesc: string;
  fullDesc: string;
  youtubeUrl?: string;
  coverImage: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  coverImage: string;
  readingTime: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
