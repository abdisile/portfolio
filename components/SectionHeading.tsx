type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  summary?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  summary,
}: SectionHeadingProps) {
  return (
    <div className="relative grid gap-2 border-b border-line pb-6 sm:grid-cols-[6.5rem_1fr] sm:items-end sm:gap-8">
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
        {index} {label}
      </p>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-0 font-serif text-6xl leading-none text-foreground/8 select-none sm:text-7xl"
      >
        {index}
      </span>
      <div className="relative">
        <h2 className="font-serif text-3xl tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {summary ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {summary}
          </p>
        ) : null}
      </div>
    </div>
  );
}
