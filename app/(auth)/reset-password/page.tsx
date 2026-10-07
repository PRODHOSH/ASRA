import type { Metadata } from "next";
import { AuthHeading } from "@/components/auth/auth-heading";
import { ResetPasswordForm } from "@/components/auth/auth-forms";

export const metadata: Metadata = { title: "Set a new password" };

export default function ResetPasswordPage() {
  return (
    <>
      <AuthHeading
        title="Set a new password"
        lead="Choose a password you don't use anywhere else."
      />
      <ResetPasswordForm />
    </>
  );
}
