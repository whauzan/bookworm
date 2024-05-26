import React from "react";

import AuthWrapper from "@/components/auth/auth-wrapper";
import LoginForm from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <AuthWrapper
      headerLabel="Log in"
      subHeaderLabel="New to Bookworm?"
      backButtonLabel="Sign up for an account"
      backButtonHref="/auth/register"
      showSocial
    >
      <LoginForm />
    </AuthWrapper>
  );
};

export default LoginPage;
