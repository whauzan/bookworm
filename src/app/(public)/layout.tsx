import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import "../globals.css";

import Navbar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookworm",
  description: "Bookstore that you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <main className="px-36">{children}</main>
        </div>
      </body>
    </html>
  );
}
