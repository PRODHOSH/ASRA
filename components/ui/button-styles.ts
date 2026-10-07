type Variant = "primary" | "dark" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-normal transition duration-300 ease-in-out active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-strong",
  dark: "bg-night text-white hover:bg-ink/85",
  secondary: "border border-rule bg-surface text-ink shadow-sm hover:border-faint",
  ghost: "text-body hover:bg-ink/5 hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-[15px]",
  lg: "h-12 px-6 text-base",
};

export function buttonStyles(variant: Variant = "primary", size: Size = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}
