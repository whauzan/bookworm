"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import { newVerification } from "@/server/action/token";

import { FormError, FormSuccess } from "../ui/form";

const NewVerificationForm = () => {
  const token = useSearchParams().get("token");
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleVerification = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("No token found");
      return;
    }
    newVerification(token).then((data) => {
      if (data.error) {
        setError(data.error);
      }
      if (data.success) {
        setSuccess(data.success);
        router.push("/auth/login");
      }
    });
  }, [error, success, token, router]);

  useEffect(() => {
    handleVerification();
  }, [handleVerification]);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p>{!success && !error ? "Verifying email..." : null}</p>
      <FormSuccess message={success} />
      <FormError message={error} />
    </div>
  );
};

export default NewVerificationForm;
