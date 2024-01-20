"use client";
import AuthLayout from "../components/AuthLayout";
import SignInForm from "../components/SignInForm";

export default function signIn() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}
