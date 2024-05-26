"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import AuthSocial from "./auth-social";
import { Button } from "../ui/button";

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderLabel?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
  canGoBack?: boolean;
}

const AuthWrapper = ({
  children,
  headerLabel,
  subHeaderLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  canGoBack,
}: AuthCardWrapperProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">{headerLabel}</h2>
        <p className="font-light">
          {subHeaderLabel}{" "}
          <span>
            {backButtonLabel && backButtonHref && (
              <Button
                variant="link"
                asChild
                className="-mt-2 p-0 text-blue-600"
              >
                <Link href={backButtonHref}>{backButtonLabel}</Link>
              </Button>
            )}
          </span>
        </p>
      </div>
      {children}
      {showSocial && <AuthSocial />}
      {canGoBack && (
        <Button
          variant="link"
          className="w-fit p-0 text-blue-600"
          onClick={() => router.back()}
        >
          Back
        </Button>
      )}
    </div>
  );
};

export default AuthWrapper;
