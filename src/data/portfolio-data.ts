import type { Artwork, Achievement, ArtistInfo } from '@/types/portfolio';

export const artistInfo: ArtistInfo = {
 "name": "Chithra Kanchi",
  "bio": "I am a passionate artist dedicated to creating meaningful and beautiful works of art. With years of experience in various mediums including oil, watercolor, and mixed media, I strive to capture the essence of emotion and beauty in every piece. My work has been featured in numerous exhibitions and I am committed to sharing my love of art through teaching and community engagement.",
  "photo": "/images/portfolio/artist.jpg",
  socialMedia: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/chithrajagadeesh.kanchi/",
      icon: "facebook"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/chithram_82",
      icon: "instagram"
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@Artspott",
      icon: "youtube"
    }
  ]
};

export const artworks: Artwork[] = [
  {
    id: "1",
    name: "Abstract Dreams",
    medium: "Acrylic on Canvas",
    image: "/images/portfolio/art1.png",
    description: "A vibrant exploration of color and form, this abstract piece captures the essence of dreams and imagination.",
    shoppingLink: "#"
  },
  {
    id: "2",
    name: "Modern Expression",
    medium: "Acrylic on Canvas",
    image: "/images/portfolio/art2.png",
    description: "Contemporary art piece showcasing bold colors and dynamic composition.",
    shoppingLink: "#"
  },
  {
    id: "3",
    name: "Serene Landscape",
    medium: "Watercolor",
    image: "/images/portfolio/art3.png",
    description: "A peaceful watercolor landscape capturing the tranquility of nature.",
    shoppingLink: "#"
  },
  {
    id: "4",
    name: "Portrait Study",
    medium: "Oil on Canvas",
    image: "/images/portfolio/art4.png",
    description: "An expressive portrait showcasing the depth of human emotion.",
    shoppingLink: "#"
  },
  {
    id: "5",
    name: "Contemporary Fusion",
    medium: "Mixed Media",
    image: "/images/portfolio/art5.png",
    description: "A unique blend of materials and techniques creating a striking visual impact.",
    shoppingLink: "#"
  }
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Excellence in Art Award",
    description: "Received recognition for outstanding contribution to contemporary art.",
    image: "/images/portfolio/achievement-1.jpg",
    date: "2024"
  },
  {
    id: "2",
    title: "First Place - Art Competition",
    description: "Won first place in the regional art competition for abstract painting.",
    image: "/images/portfolio/achievement-2.jpg",
    date: "2023"
  },
  {
    id: "3",
    title: "Gallery Exhibition",
    description: "Featured artist at prestigious gallery exhibition showcasing contemporary works.",
    image: "/images/portfolio/achievement-3.jpg",
    date: "2023"
  }
];

export const artClassImages = [
  {
    id: "1",
    image: "/images/portfolio/class1.jpeg",
    alt: "below 12 years art class in session"
  },
  {
    id: "2",
    image: "/images/portfolio/class2.jpeg",
    alt: "Basics of sketching being taught to students"
  },
  {
    id: "3",
    image: "/images/portfolio/artclass3.jpg",
    alt: "Kids engaged in creative art activities"
  }
];

export const youtubeVideos = [
  {
    id: "1",
    videoId: "8BM7wHBIWGI",
    title: "Latest art work process"
  },
  {
    id: "2",
    videoId: "qOCAoCBTf94",
    title: "My personal faourite"
  },
  {
    id: "3",
    videoId: "videoseries?list=PLrjLOmy_ehzGfyzV828v0tQOqsAvqsRFX",
    title: "Digital Art Series"
  }
];
