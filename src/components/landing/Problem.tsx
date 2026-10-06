import { FileVideo, Globe, Layers, Palette } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "No unified platform",
    text: "Separate tools for booking, video, payments and reminders: costly to stitch together and prone to failure.",
  },
  {
    icon: Globe,
    title: "Time zone confusion",
    text: "Clients book across time zones and show up at the wrong time, causing missed sessions and refund disputes.",
  },
  {
    icon: Palette,
    title: "Brand inconsistency",
    text: "Relying on Zoom or Teams means your client sees someone else's brand, not yours.",
  },
  {
    icon: FileVideo,
    title: "No recording",
    text: "Without automatic recordings, disputes go unresolved and valuable session content is lost forever.",
  },
];

export default function Problem() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          The problem
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Paid video sessions shouldn&apos;t need a DIY toolkit
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <Icon size={22} className="text-muted" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
