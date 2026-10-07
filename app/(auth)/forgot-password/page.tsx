import type { Metadata } from "next";
import Link from "next/link";
import { AuthHeading } from "@/components/auth/auth-heading";
import { ForgotPasswordForm } from "@/components/auth/auth-forms";

export const metadata: Metadata = { title: "Reset password" };

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthHeading
        title="Reset your password"
        lead="Enter your account email and we'll send you a link to set a new password."
      />
      <ForgotPasswordForm />
      <p className="mt-5 text-sm text-graphite">
        Remembered it?{" "}
        <Link href="/login" className="italic text-accent underline-offset-4 hover:underline">
          Back to sign in
        </Link>
      </p>
    </>
  );
}
