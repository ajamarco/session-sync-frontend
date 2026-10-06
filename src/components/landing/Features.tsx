import {
  Bell,
  CalendarClock,
  CreditCard,
  HardDrive,
  Palette,
  Video,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "White-label portal",
    wide: true,
    points: [
      "Custom domain and branding",
      "Your colours, logo and typography",
      "Looks 100% like your own product",
    ],
  },
  {
    icon: CalendarClock,
    title: "Smart booking calendar",
    points: [
      "Real-time time zone conversion",
      "Blackout and recurring busy-time rules",
      "Instant calendar sync",
    ],
  },
  {
    icon: Video,
    title: "Native video engine",
    points: [
      "No third-party app required",
      "HD video with screen share",
      "Fully browser-based for clients",
    ],
  },
  {
    icon: HardDrive,
    title: "Recording and storage",
    points: [
      "Every session auto-recorded",
      "Secure cloud storage for 6 months",
      "Downloadable by you",
    ],
  },
  {
    icon: CreditCard,
    title: "Secure payments",
    points: [
      "Debit and credit cards",
      "Hourly, 30-minute or bundles",
      "Free intro session handled for you",
    ],
  },
  {
    icon: Bell,
    title: "Notifications hub",
    wide: true,
    points: [
      "Email and SMS confirmations",
      "Automated 24h and 1h reminders",
      "No-show and rescheduling alerts",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        Platform features
      </p>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        One platform. Every feature. Your brand.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, points, wide }) => (
          <div
            key={title}
            className={`group rounded-2xl border border-foreground/10 p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 ${
              wide ? "md:col-span-2" : ""
            }`}
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Icon size={22} />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/65">
              {points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
