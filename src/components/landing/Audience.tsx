import { Briefcase, GraduationCap, Heart, Languages } from "lucide-react";

const personas = [
  {
    icon: Languages,
    title: "Language tutors",
    text: "ESL, Spanish, French, Mandarin and more.",
  },
  {
    icon: Briefcase,
    title: "Business consultants",
    text: "Strategy, finance and marketing advisors.",
  },
  {
    icon: Heart,
    title: "Life & career coaches",
    text: "Personal development, CV and interview prep.",
  },
  {
    icon: GraduationCap,
    title: "Academic tutors",
    text: "GCSE, A-Level and university exam support.",
  },
];

export default function Audience() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        Who it&apos;s for
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Built for professionals who sell their time
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {personas.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl bg-accent-soft p-6 transition hover:-translate-y-1"
          >
            <Icon size={26} className="text-accent" />
            <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-foreground/65">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
