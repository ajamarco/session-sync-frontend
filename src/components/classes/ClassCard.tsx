import { User } from "lucide-react";

type ClassCardProps = {
  title: string;
  subtitle: string;
};

export default function ClassCard({ title, subtitle }: ClassCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 sm:flex-row sm:items-center">
      <span
        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-foreground/10"
        aria-hidden="true"
      >
        <User size={24} />
      </span>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="flex flex-col items-stretch gap-2 sm:w-1/5">
        <button
          type="button"
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Book
        </button>
        <button
          type="button"
          className="text-center text-sm text-muted transition hover:text-foreground"
        >
          + details
        </button>
      </div>
    </div>
  );
}
