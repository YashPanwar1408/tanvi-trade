// src/data/brands.ts
import sugarCover from '../assets/brands/sugar.jpg';
import lakmeCover from '../assets/brands/lakme.jpg';
import glamup21Cover from '../assets/brands/glamup.jpg';
import reneeCover from '../assets/brands/renee.jpg';

import sugarLogo from '../assets/brands/sugar.jpg'; // if you have logos
import lakmeLogo from '../assets/brands/lakme.jpg';
import glamup21Logo from '../assets/brands/glamup.jpg';
import reneeLogo from '../assets/brands/renee.jpg';

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  logoUrl: string;
  coverImageUrl: string;
  themeColor: string;
  videoUrl?: string;
}

export const brands: Brand[] = [
  {
    id: "brand-sugar",
    name: "Sugar",
    slug: "sugar",
    description: "Bold, vibrant, and cruelty-free makeup for the modern woman",
    longDescription: "...",
    logoUrl: sugarLogo, // or use a placeholder if you don't have a logo
    coverImageUrl: sugarCover,
    themeColor: "bg-sugar",
    videoUrl: "https://res.cloudinary.com/dykqu1tie/video/upload/v1745676079/3971844-hd_1920_1080_25fps_hatyy6.mp4"
  },
  {
    id: "brand-lakme",
    name: "Lakme",
    slug: "lakme",
    description: "...",
    longDescription: "...",
    logoUrl: lakmeLogo,
    coverImageUrl: lakmeCover,
    themeColor: "bg-lakme",
    videoUrl: "https://res.cloudinary.com/dykqu1tie/video/upload/v1745676115/3182035-uhd_3840_2160_25fps_uayq9r.mp4"
  },
  {
    id: "brand-glamup21",
    name: "GlamUp21",
    slug: "glamup21",
    description: "...",
    longDescription: "...",
    logoUrl: glamup21Logo,
    coverImageUrl: glamup21Cover,
    themeColor: "bg-glamup21",
    videoUrl: "https://res.cloudinary.com/dykqu1tie/video/upload/v1745676078/3971845-hd_1920_1080_25fps_csfq1r.mp4"
  },
  {
    id: "brand-renee",
    name: "Renee",
    slug: "renee",
    description: "...",
    longDescription: "...",
    logoUrl: reneeLogo,
    coverImageUrl: reneeCover,
    themeColor: "bg-renee",
    videoUrl: "https://res.cloudinary.com/dawvvzwyw/video/upload/v1743959482/3181676-uhd_3840_2160_25fps_wl0iab.mp4" // <-- Your Cloudinary video link here
}
];