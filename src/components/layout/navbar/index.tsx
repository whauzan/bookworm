import Image from "next/image";
import React from "react";

import { auth } from "@/server/auth";

import AuthButton from "./auth-button";
import Cart from "./cart";
import UserNav from "./user-nav";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="sticky top-0 flex w-full items-center justify-between bg-white px-8 py-4 shadow">
      <div className="flex items-center gap-x-0.5">
        <Image
          src="/Bookworm_Logo_Light.png"
          width={512}
          height={512}
          alt="Logo"
          className="size-7"
        />
        <h2 className="text-lg font-semibold">Bookworm</h2>
      </div>

      <ul className="flex items-center gap-x-16 text-sm font-normal">
        <li>Books</li>
        <li>Trending</li>
        <li>Fresh Picks</li>
      </ul>

      {!session ? (
        <AuthButton />
      ) : (
        <div className="flex items-center gap-x-6">
          <Cart expires={session?.expires as string} user={session?.user} />
          <UserNav expires={session?.expires as string} user={session?.user} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
