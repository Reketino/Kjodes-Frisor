export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.kjodesfrisorsalong.no/sitemap.xml",
    host: "https://www.kjodesfrisorsalong.no",
  };
}
