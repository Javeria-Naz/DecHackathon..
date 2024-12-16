// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar/>
        <Header/>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
