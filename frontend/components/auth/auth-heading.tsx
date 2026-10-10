export function AuthHeading({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="mb-5">
      <h1 className="text-[28px] font-light leading-[1.1] tracking-[-0.035em] text-ink">{title}</h1>
      <p className="mt-1.5 text-[14px] leading-relaxed text-graphite">{lead}</p>
    </div>
  );
}

export function OrDivider() {
  return (
    <div className="my-4 flex items-center gap-4 text-[12px] italic text-graphite">
      <span className="h-px flex-1 bg-rule" />
      or
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}
