"use client";

import { ShoppingCart } from "lucide-react";
import { Session } from "next-auth";
import React from "react";

const Cart = ({ user }: Session) => {
  if (user)
    return (
      <div>
        <ShoppingCart />
      </div>
    );
};

export default Cart;
