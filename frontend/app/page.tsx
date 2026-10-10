import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-1 flex-col px-6 py-6 sm:px-10">
      <header className="flex items-center justify-between">
        <Wordmark />
        <Link
          href="/login"
          className="text-[15px] text-graphite underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Sign in
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center py-16 text-center">
        <p className="rise text-[13px] uppercase tracking-[0.2em] text-graphite">
          Autonomous Scientific Research Agent
        </p>
        <h1
          className="rise mt-6 text-[clamp(3.5rem,13vw,10rem)] font-light leading-[0.95] tracking-[-0.045em] text-ink"
          style={{ "--delay": "0.1s" } as React.CSSProperties}
        >
          Coming <span className="italic font-normal">soon</span>
        </h1>
        <p
          className="rise mt-8 max-w-md text-[17px] leading-relaxed text-graphite"
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          From research question to cited result. We&apos;re putting the finishing touches on it.
        </p>
      </main>

      <footer className="text-center text-[13px] text-graphite">
        Built by AIML Team, Microsoft Innovation Club, VIT Chennai
      </footer>
    </div>
  );
}
