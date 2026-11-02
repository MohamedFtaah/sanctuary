import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Scinico Family Dental",
    short_name: "Scinico Dental",
    description:
      "Personalized, honest dental care on Madison’s Near-East Side. Led by Dr. Richard N. Scinico, DMD.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3fbff",
    theme_color: "#002532",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

