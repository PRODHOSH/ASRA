import Image from "next/image";
import Link from "next/link";

/**
 * Uses public/asra-logo-transparent.png untouched. The file carries empty
 * transparent margins, so the box is sized to the artwork (1574x361 inside
 * the 2172x724 canvas) and the image is offset to line up with it.
 */
export function Wordmark({ href = "/", inverted = false }: { href?: string; inverted?: boolean }) {
  return (
    <Link
      href={href}
      aria-label="ASRA home"
      className="relative block h-6 overflow-hidden"
      style={{ aspectRatio: "1574 / 361" }}
    >
      <Image
        src="/asra-logo-transparent.png"
        alt="ASRA"
        width={2172}
        height={724}
        priority
        className={`absolute max-w-none ${inverted ? "invert" : ""}`}
        style={{ width: "138%", left: "-19%", top: "-46.8%" }}
      />
    </Link>
  );
}
