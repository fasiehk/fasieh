import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Favicon & PWA metadata
export const metadata: Metadata = {
  title: "Hafiz M Fasieh",
  description: "Full-stack and mobile developer building modern web and mobile experiences",
  icons: {
    icon: [
      { url: "https://i.postimg.cc/jSZ3qMVM/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "https://i.postimg.cc/jSZ3qMVM/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "https://i.postimg.cc/jSZ3qMVM/favicon.ico" },
    ],
    apple: [{ url: "https://i.postimg.cc/jSZ3qMVM/favicon-32x32.png", sizes: "180x180", type: "image/png" }],
  },
  themeColor: "#ffffff",
};

// Ensure proper scaling on mobile devices
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
