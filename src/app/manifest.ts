import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sanctuary Private Aesthetic Dentistry",
    short_name: "Sanctuary Dental",
    description:
      "Sub-second luxury clinical portfolio and high-converting private consultation platform for UK cosmetic dentistry.",
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

