import { Check, X } from "lucide-react";

type Cell = "yes" | "no" | "partial";

const competitors = ["SessionSync", "Calendly + Zoom", "Acuity + Teams", "Tutorbird"];

const rows: { feature: string; values: Cell[] }[] = [
  { feature: "White-label branding", values: ["yes", "no", "partial", "no"] },
  { feature: "Built-in video", values: ["yes", "no", "no", "no"] },
  { feature: "Auto session recording", values: ["yes", "no", "no", "no"] },
  { feature: "Time zone-smart calendar", values: ["yes", "yes", "partial", "yes"] },
  { feature: "Advance payment", values: ["yes", "yes", "yes", "yes"] },
  { feature: "Email + SMS notifications", values: ["yes", "partial", "partial", "yes"] },
  { feature: "6-month recording storage", values: ["yes", "no", "no", "no"] },
  { feature: "Single monthly subscription", values: ["yes", "no", "no", "yes"] },
];

function CellIcon({ value }: { value: Cell }) {
  if (value === "yes") {
    return <Check size={18} className="mx-auto text-accent" aria-label="Yes" />;
  }
  if (value === "no") {
    return <X size={18} className="mx-auto text-foreground/30" aria-label="No" />;
  }
  return <span className="text-xs text-foreground/60">Partial</span>;
}

export default function Comparison() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        Why SessionSync
      </p>
      <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Replace a stack of tools with one
      </h2>
      <div className="mt-12 overflow-x-auto rounded-2xl border border-foreground/10">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="p-4 text-left font-medium text-foreground/60">
                Feature
              </th>
              {competitors.map((name, i) => (
                <th
                  key={name}
                  className={`p-4 text-center font-semibold ${
                    i === 0 ? "bg-accent-soft text-accent" : ""
                  }`}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ feature, values }) => (
              <tr
                key={feature}
                className="border-b border-foreground/10 last:border-0"
              >
                <td className="p-4">{feature}</td>
                {values.map((value, i) => (
                  <td
                    key={competitors[i]}
                    className={`p-4 text-center ${i === 0 ? "bg-accent-soft/60" : ""}`}
                  >
                    <CellIcon value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
