"use client";

import { useId, useState, type InputHTMLAttributes } from "react";
import { buttonStyles } from "@/components/ui/button-styles";

const inputStyles =
  "h-11 w-full rounded-lg border border-rule bg-mist px-4 text-[15px] text-ink placeholder:text-graphite/70 transition-colors hover:border-faint focus:border-ink focus:bg-surface focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-ink/5 aria-invalid:border-danger";

type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  /** Rendered on the label row, right-aligned (e.g. "Forgot password?"). */
  aside?: React.ReactNode;
};

export function Field({ label, error, hint, aside, ...input }: FieldProps) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-normal text-ink">
          {label}
        </label>
        {aside}
      </div>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={inputStyles}
        {...input}
      />
      <FieldNote id={id} error={error} hint={hint} />
    </div>
  );
}

export function PasswordField({
  label,
  error,
  hint,
  aside,
  ...input
}: Omit<FieldProps, "type">) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-normal text-ink">
          {label}
        </label>
        {aside}
      </div>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`${inputStyles} pr-16`}
          {...input}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-pressed={visible}
          aria-controls={id}
          className="absolute inset-y-1.5 right-1.5 rounded-md px-3 text-[13px] text-graphite hover:text-ink"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      <FieldNote id={id} error={error} hint={hint} />
    </div>
  );
}

function FieldNote({ id, error, hint }: { id: string; error?: string; hint?: string }) {
  if (error)
    return (
      <p id={`${id}-error`} className="text-[13px] text-danger">
        {error}
      </p>
    );
  if (hint)
    return (
      <p id={`${id}-hint`} className="text-[13px] text-graphite">
        {hint}
      </p>
    );
  return null;
}

export function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="submit" className={`${buttonStyles("primary")} h-11 w-full`}>
      {children}
    </button>
  );
}
