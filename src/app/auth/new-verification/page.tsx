import React, { Suspense } from "react";

import AuthWrapper from "@/components/auth/auth-wrapper";
import NewVerificationForm from "@/components/auth/new-verification-form";

const NewVerificationPage = () => {
  return (
    <AuthWrapper
      headerLabel="Verify your account"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </AuthWrapper>
  );
};

export default NewVerificationPage;
