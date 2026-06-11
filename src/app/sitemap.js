

export default function sitemap() {
const baseUrl = "https://kjodesfrisorsalong.no"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
