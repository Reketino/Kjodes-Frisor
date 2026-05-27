export const metadata = {
  title: "Bestill time",

  description: "Bestill time hos Kjødes Frisørsalong i Sykkylven.",

  alternates: {
    canonical: "/booking",
  },

  openGraph: {
    title: "Bestill time | Kjødes Frisørsalong",

    description: "Bestill time hos Kjødes Frisørsalong i Sykkylven.",

    url: "/booking",

    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Kjødes Frisørsalong",
      },
    ],
  },
};

export default function BookingLayout({ children }) {
  return children;
}
