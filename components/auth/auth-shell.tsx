"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/brand/wordmark";

const IMAGE =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1600&q=80";

/**
 * Two fixed halves that trade places per route: sign in and reset keep the
 * form on the left, sign up moves it to the right. The shell lives in the
 * layout, so it stays mounted and the swap animates.
 */
export function AuthShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const formRight = pathname.startsWith("/signup");
  const slide = "lg:transition-[left] lg:duration-700 lg:ease-[cubic-bezier(0.7,0,0.2,1)]";

  return (
    <div className="fixed inset-0 overflow-y-auto bg-paper lg:overflow-hidden">
      <section
        className={`flex min-h-full flex-col px-6 py-6 sm:px-10 lg:absolute lg:inset-y-0 lg:min-h-0 lg:w-1/2 ${slide} ${
          formRight ? "lg:left-1/2" : "lg:left-0"
        }`}
      >
        <header className="flex items-center justify-between">
          <Wordmark />
          <Link
            href="/"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-rule px-4 text-[14px] text-ink transition-colors hover:border-ink"
          >
            <svg aria-hidden viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current" strokeWidth="1.5">
              <path d="M13 8H3m4-4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </header>
        <main className="flex flex-1 items-center justify-center py-6">
          <div key={pathname} className="rise w-full max-w-[380px]" style={{ "--delay": "0.2s" } as React.CSSProperties}>
            {children}
          </div>
        </main>
        <footer className="text-center text-[13px] text-graphite">
          Built by AIML Team, Microsoft Innovation Club, VIT Chennai
        </footer>
      </section>

      <aside
        aria-label="About ASRA"
        className={`absolute hidden overflow-hidden bg-night lg:inset-y-0 lg:block lg:w-1/2 ${slide} ${
          formRight ? "lg:left-0" : "lg:left-1/2"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMAGE} alt="" className="absolute inset-0 size-full object-cover grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />
        <p className="absolute left-10 top-6 text-[12px] uppercase tracking-[0.2em] text-white/70">
          Autonomous Scientific Research Agent
        </p>
        <p className="absolute inset-x-10 bottom-12 max-w-[460px] text-[38px] font-light leading-[1.12] tracking-[-0.03em] text-white">
          Every claim points back to the <span className="italic">evidence</span> behind it.
        </p>
      </aside>
    </div>
  );
}
