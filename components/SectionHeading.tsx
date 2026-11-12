import type { ReactNode } from "react";
import { Mark } from "@/components/icons";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  /** Optional note set beside the title on wide screens. */
  children?: ReactNode;
};

/**
 * Section title. When it scrolls into view the title rises from behind an
 * edge, the rule underneath draws across, and the label and note fade in.
 */
export function SectionHeading({
  index,
  label,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal="heading"
      className="relative flex flex-col gap-5 pb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
    >
      <div>
        <p className="heading-fade label flex items-center gap-2.5 text-muted">
          <Mark className="size-5" />
          {index} / {label}
        </p>
        <h2 className="display mt-4 text-[clamp(3.25rem,10vw,7rem)]">
          <span className="title-mask">
            <span className="title-inner">{title}</span>
          </span>
        </h2>
      </div>
      {children ? (
        <div className="heading-fade max-w-sm text-sm leading-relaxed text-muted lg:pb-2 lg:text-right">
          {children}
        </div>
      ) : null}
      <span
        aria-hidden="true"
        className="heading-rule absolute inset-x-0 bottom-0 h-px bg-foreground"
      />
    </div>
  );
}
