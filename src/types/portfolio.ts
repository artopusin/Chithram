export interface Artwork {
  id: string;
  name: string;
  medium: string;
  image: string;
  description: string;
  shoppingLink?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export interface ArtistInfo {
  name: string;
  bio: string;
  photo: string;
  socialMedia: SocialMedia[];
}
