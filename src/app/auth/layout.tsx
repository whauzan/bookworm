import { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookworm",
  description: "Bookstore that you love",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full lg:grid lg:grid-cols-6">
          <div className="col-span-2 hidden h-screen border-r lg:block">
            <div className="relative flex size-full items-center justify-center bg-gray-50 bg-dot-black/[0.2]">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] "></div>
              <div className="flex items-center gap-x-4 px-2">
                <Image
                  src="/Bookworm_Logo_Light.png"
                  width={512}
                  height={512}
                  alt="Logo"
                  className="size-24"
                />
                <p className="text-3xl font-bold text-secondary-foreground">
                  Discover Your Next Favorite Book in Just Seconds.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-center bg-white py-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
