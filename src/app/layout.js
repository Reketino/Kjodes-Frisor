import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://kjodesfrisorsalong.no"),

  title: "Kjødes Frisørsalong",

  description: "Frisør i Sykkylven – klipp, styling, farge og timebestilling.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Kjødes Frisørsalong",

    description:
      "Frisør i Sykkylven – klipp, styling, farge og timebestilling.",

    url: "https://kjodesfrisorsalong.no",

    images: [
      {
        url: "/assets/Logo.png",
        width: 1200,
        height: 630,
        alt: "Kjødes Frisørsalong logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />

        <main className="grow mt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
