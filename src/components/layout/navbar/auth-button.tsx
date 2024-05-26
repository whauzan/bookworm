"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const AuthButton = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Button variant="outline" asChild>
        <Link href="/auth/register">Register</Link>
      </Button>
      <Button asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
    </div>
  );
};

export default AuthButton;
