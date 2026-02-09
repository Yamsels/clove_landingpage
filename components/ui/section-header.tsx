import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col space-y-4",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      {badge && (
        <span className="rounded-full bg-brand-purple/10 px-4 py-1.5 text-sm font-semibold text-brand-purple uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
