import type { Metadata } from "next";
import Link from "next/link";
import { AuthHeading, OrDivider } from "@/components/auth/auth-heading";
import { LoginForm } from "@/components/auth/auth-forms";
import { OAuthButtons } from "@/components/auth/oauth-buttons";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <>
      <AuthHeading title="Sign in to ASRA" lead="Pick up your research where you left off." />
      <OAuthButtons />
      <OrDivider />
      <LoginForm />
      <p className="mt-5 text-sm text-graphite">
        New to ASRA?{" "}
        <Link href="/signup" className="italic text-accent underline-offset-4 hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
