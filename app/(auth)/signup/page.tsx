import type { Metadata } from "next";
import Link from "next/link";
import { AuthHeading, OrDivider } from "@/components/auth/auth-heading";
import { SignupForm } from "@/components/auth/auth-forms";
import { OAuthButtons } from "@/components/auth/oauth-buttons";

export const metadata: Metadata = { title: "Create account" };

export default function SignupPage() {
  return (
    <>
      <AuthHeading
        title="Create your ASRA account"
        lead="Start with a research question. ASRA does the reading."
      />
      <OAuthButtons />
      <OrDivider />
      <SignupForm />
      <p className="mt-5 text-sm text-graphite">
        Already have an account?{" "}
        <Link href="/login" className="italic text-accent underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}
