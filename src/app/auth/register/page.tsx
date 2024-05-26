import React from "react";

import AuthWrapper from "@/components/auth/auth-wrapper";
import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <AuthWrapper
      headerLabel="Register"
      subHeaderLabel="Already have an account?"
      backButtonLabel="Log In"
      backButtonHref="/auth/login"
      showSocial
    >
      <RegisterForm />
    </AuthWrapper>
  );
};

export default RegisterPage;
