"use client";

import Link from "next/link";
import { useState } from "react";
import { Field, PasswordField, SubmitButton } from "./fields";

/*
 * Frontend only: forms validate in the browser and stop there. Wire the
 * `onValid` callbacks to your auth service when the backend exists.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

type Errors = Partial<Record<"name" | "email" | "password" | "confirm", string>>;

function useAuthForm(
  validate: (data: FormData) => Errors,
  onValid?: (data: FormData) => void,
) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) return;
    onValid?.(data);
    setDone(true);
  }

  return { errors, done, onSubmit };
}

const value = (data: FormData, key: string) => String(data.get(key) ?? "");

export function LoginForm() {
  const { errors, onSubmit } = useAuthForm((data) => {
    const found: Errors = {};
    if (!EMAIL_PATTERN.test(value(data, "email").trim())) found.email = "Enter a valid email address.";
    if (!value(data, "password")) found.password = "Enter your password.";
    return found;
  });

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@university.edu"
        required
        error={errors.email}
      />
      <PasswordField
        label="Password"
        name="password"
        autoComplete="current-password"
        required
        error={errors.password}
        aside={
          <Link
            href="/forgot-password"
            className="text-[13px] text-graphite underline-offset-4 hover:text-ink hover:underline"
          >
            Forgot password?
          </Link>
        }
      />
      <SubmitButton>Sign in</SubmitButton>
    </form>
  );
}

export function SignupForm() {
  const { errors, done, onSubmit } = useAuthForm((data) => {
    const found: Errors = {};
    if (!value(data, "name").trim()) found.name = "Enter your name.";
    if (!EMAIL_PATTERN.test(value(data, "email").trim())) found.email = "Enter a valid email address.";
    if (value(data, "password").length < MIN_PASSWORD_LENGTH)
      found.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
    return found;
  });

  if (done)
    return (
      <InboxNotice
        title="Confirm your email"
        body="We sent a confirmation link to your inbox. Open it to finish creating your account."
      />
    );

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <Field label="Full name" name="name" autoComplete="name" required error={errors.name} />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@university.edu"
        required
        error={errors.email}
      />
      <PasswordField
        label="Password"
        name="password"
        autoComplete="new-password"
        minLength={MIN_PASSWORD_LENGTH}
        placeholder="At least 8 characters"
        required
        error={errors.password}
      />
      <SubmitButton>Create account</SubmitButton>
    </form>
  );
}

export function ForgotPasswordForm() {
  const { errors, done, onSubmit } = useAuthForm((data) =>
    EMAIL_PATTERN.test(value(data, "email").trim()) ? {} : { email: "Enter a valid email address." },
  );

  if (done)
    return (
      <InboxNotice
        title="Check your inbox"
        body="If an account exists for that email, a link to set a new password is on its way."
      />
    );

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@university.edu"
        required
        error={errors.email}
      />
      <SubmitButton>Send reset link</SubmitButton>
    </form>
  );
}

export function ResetPasswordForm() {
  const { errors, done, onSubmit } = useAuthForm((data) => {
    const found: Errors = {};
    const password = value(data, "password");
    if (password.length < MIN_PASSWORD_LENGTH)
      found.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
    else if (password !== value(data, "confirm")) found.confirm = "Passwords don't match.";
    return found;
  });

  if (done)
    return (
      <div role="status" className="space-y-4">
        <InboxNotice title="Password updated" body="You can now sign in with your new password." />
        <Link href="/login" className="block text-sm italic text-accent underline-offset-4 hover:underline">
          Back to sign in
        </Link>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <PasswordField
        label="New password"
        name="password"
        autoComplete="new-password"
        minLength={MIN_PASSWORD_LENGTH}
        placeholder="At least 8 characters"
        required
        error={errors.password}
      />
      <PasswordField
        label="Confirm new password"
        name="confirm"
        autoComplete="new-password"
        required
        error={errors.confirm}
      />
      <SubmitButton>Save new password</SubmitButton>
    </form>
  );
}

function InboxNotice({ title, body }: { title: string; body: string }) {
  return (
    <div role="status" className="rounded-xl border border-rule bg-mist p-6">
      <h2 className="text-xl font-light tracking-tight text-ink">{title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-graphite">{body}</p>
    </div>
  );
}
