export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",

  name: "Kjødes Frisørsalong AS",
  url: "https://www.kjodesfrisorsalong.no/",
  telephone: "+4770254680",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Storgata 5",
    postalCode: "6230",
    addressLocality: "Sykkylven",
    addressCountry: "NO",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
};
