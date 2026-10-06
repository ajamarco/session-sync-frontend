import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    tagline: "For solo professionals getting going",
    features: [
      "1 user / brand",
      "Up to 50 sessions per month",
      "Email notifications",
      "30-day recording retention",
      "Community support",
    ],
  },
  {
    name: "Professional",
    price: "$129",
    tagline: "For busy, established practices",
    popular: true,
    features: [
      "1 user / brand",
      "Unlimited sessions",
      "Email + SMS notifications",
      "6-month recording storage",
      "Custom domain",
      "Priority support",
    ],
  },
  {
    name: "Agency",
    price: "$349",
    tagline: "For academies and coaching businesses",
    features: [
      "Up to 10 sub-brands",
      "Unlimited sessions",
      "Full notification suite",
      "6-month recording storage",
      "API access",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-y border-border bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Pricing
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          One simple monthly subscription
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map(({ name, price, tagline, features, popular }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-2xl border bg-background p-8 ${
                popular
                  ? "border-primary shadow-xl shadow-primary/10"
                  : "border-border"
              }`}
            >
              {popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-muted">{tagline}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-muted">/mo</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={`mt-8 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                  popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-foreground/20 hover:bg-foreground/5"
                }`}
              >
                Choose {name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
