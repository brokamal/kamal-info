import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamal's Info",
  description: "Kamal's Information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} antialiased`} lang="en">  
      <body className="antialiased">
        <NavBar />
        <main className="max-w-xl mx-4 mt-8 lg:mx-auto flex-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
        <Footer /> 
        </main>

      </body>
    </html>
  );
}
