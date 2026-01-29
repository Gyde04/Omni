import type { Metadata } from "next";
import { Space_Grotesk, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OMNI HORIZON TECHNOLOGY LTD",
  description:
    "OMNI HORIZON TECHNOLOGY LTD is a technology company delivering future-ready platforms, intelligent products, and resilient digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
