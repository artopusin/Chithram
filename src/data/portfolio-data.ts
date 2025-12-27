import type { Artwork, Achievement, ArtistInfo } from '@/types/portfolio';

export const artistInfo: ArtistInfo = {
 "name": "Chithra Kanchi",
  "bio": "I am a passionate artist dedicated to creating meaningful and beautiful works of art. With years of experience in various mediums including oil, watercolor, and mixed media, I strive to capture the essence of emotion and beauty in every piece. My work has been featured in numerous exhibitions and I am committed to sharing my love of art through teaching and community engagement.",
  "photo": "https://i.postimg.cc/wBRbvTTf/artistimg.jpg",
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
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/4381e2d2-1d41-44a2-a13f-528223a2d7a9.jpg",
    description: "A vibrant exploration of color and form, this abstract piece captures the essence of dreams and imagination.",
    shoppingLink: "#"
  },
  {
    id: "2",
    name: "Modern Expression",
    medium: "Acrylic on Canvas",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/48bc2400-4247-4bb9-9f73-f9078b30363f.jpg",
    description: "Contemporary art piece showcasing bold colors and dynamic composition.",
    shoppingLink: "#"
  },
  {
    id: "3",
    name: "Serene Landscape",
    medium: "Watercolor",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/bb43c77e-ac5d-468e-9a3c-901d0c6ce7f7.jpg",
    description: "A peaceful watercolor landscape capturing the tranquility of nature.",
    shoppingLink: "#"
  },
  {
    id: "4",
    name: "Portrait Study",
    medium: "Oil on Canvas",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/8843a9bc-d4fd-4145-b461-2470a55d91ac.jpg",
    description: "An expressive portrait showcasing the depth of human emotion.",
    shoppingLink: "#"
  },
  {
    id: "5",
    name: "Contemporary Fusion",
    medium: "Mixed Media",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/82691f7f-815a-4130-b2cd-5e14585474d0.jpg",
    description: "A unique blend of materials and techniques creating a striking visual impact.",
    shoppingLink: "#"
  }
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Excellence in Art Award",
    description: "Received recognition for outstanding contribution to contemporary art.",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/89475096-43fa-4744-9559-0550e2bec7df.jpg",
    date: "2024"
  },
  {
    id: "2",
    title: "First Place - Art Competition",
    description: "Won first place in the regional art competition for abstract painting.",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/d3351dcc-120a-42a4-8f64-569cfe6f1fa9.jpg",
    date: "2023"
  },
  {
    id: "3",
    title: "Gallery Exhibition",
    description: "Featured artist at prestigious gallery exhibition showcasing contemporary works.",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/f1320f3c-962d-423c-a469-65555744d2db.jpg",
    date: "2023"
  }
];

export const artClassImages = [
  {
    id: "1",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/8d83f3f7-a45e-4d55-b631-0e3ab1d39c2e.jpg",
    alt: "Children learning painting in art class"
  },
  {
    id: "2",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/270d9b87-8204-4cde-8ddb-12284ef3f5db.jpg",
    alt: "Art workshop with students learning techniques"
  },
  {
    id: "3",
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/edbf1eea-2cd5-4e87-a335-ae90022f115b.jpg",
    alt: "Kids engaged in creative art activities"
  }
];

export const youtubeVideos = [
  {
    id: "1",
    videoId: "dQw4w9WgXcQ",
    title: "Art Tutorial: Watercolor Techniques"
  },
  {
    id: "2",
    videoId: "dQw4w9WgXcQ",
    title: "Behind the Scenes: Creating Abstract Art"
  },
  {
    id: "3",
    videoId: "dQw4w9WgXcQ",
    title: "Art Class Highlights"
  }
];
