import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Syncopate } from "next/font/google";
const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight:["400" , "700"]

});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
