const steps = [
  {
    title: "Brand your portal",
    text: "Add your logo, colours and custom domain. Publish a landing page with your rates and intro offer.",
  },
  {
    title: "Clients book in their time zone",
    text: "They pick a slot, pay securely in advance and get instant email and SMS confirmations.",
  },
  {
    title: "Meet, record, get paid",
    text: "Run the session in the built-in HD video room. It's recorded automatically and stored for 6 months.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          From setup to session in three steps
        </h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(({ title, text }, i) => (
            <li key={title} className="relative">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
