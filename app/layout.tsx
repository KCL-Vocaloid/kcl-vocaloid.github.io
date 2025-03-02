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

export const metadata: Metadata = {
  title: "King's College London Vocaloid Society",
  description: "London's first Vocaloid Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="from-cyan-600 to-teal-50 bg-gradient-to-t animate-gradient"
        /* {`${geistSans.variable} ${geistMono.variable} antialiased`} */
      >
            
        {children}
      </body>
    </html>
  );
}
