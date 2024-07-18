import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "CRUD App",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-[28px] lg:pt-[72px] bg-white">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
