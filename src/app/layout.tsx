import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Olayinka Ayodele | Software Engineer",
  description: "crafted with wit by theactualdev",
  icons: [{sizes: "64x64 32x", type: "image/x-icon", url: "/favicon.ico", rel:"icon"}, {url: "https://olayinka.codes/image.jpg", type: "image/png", rel: "apple-touch-icon"}],
  applicationName: "theactualdev",
  authors: [{ name: "Olayinka Ayodele", url: "https://olayinka.codes" }],
  generator: "Next.js",
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Frontend Developer",
    "Developer",
    "Web Developer",
    "theactualdev",
    "Olayinka Ayodele",
    "Olayinka",
    "Ayodele",
    "Software Engineer in Nigeria",
    "Software Engineer in Lagos",
    "Software Engineer in Africa",
    "Software Engineer in the World",
    "Software Engineer in the Universe",
    "Software Engineer in the Galaxy",
    "Software Engineer in the Solar System",
    "Software Engineer in the Milky Way",
    "Software Engineer in the Andromeda Galaxy",
    "Software Engineer in the Multiverse",
    "Software Engineer in the Omniverse",
    "Software Engineer in the Metaverse",
    "Open to Work",
    "Freelancer",
    "Frontend Development Portfolio",
    "Personal Website",
    "Portfolio",
    "Software Developer",
    "Software Engineer Portfolio",
    "Software Developer Portfolio",
    "Frontend Developer Portfolio",
    "Web Developer Portfolio",
    "Frontend Engineer Portfolio",
    "Web Engineer Portfolio",
    "Javascript",
  ],
  referrer: "origin",
  creator: "Olayinka Ayodele",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    nosnippet: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': "large",
      notranslate: false,
    }
  },
  openGraph: {
    type: "website",
    url: "https://olayinka.codes",
    title: "Olayinka Ayodele | Software Engineer",
    description: "crafted with wit by theactualdev",
    siteName: "theactualdev",
    images: [
      {
        url: "https://olayinka.codes/image.jpg",
        width: 1200,
        height: 630,
        alt: "Olayinka Ayodele | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theactualdev",
    creator: "@theactualdev",
    title: "Olayinka Ayodele | Software Engineer",
    description: "crafted with wit by theactualdev",
    images: "https://olayinka.codes/image.jpg",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
