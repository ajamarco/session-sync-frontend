import Link from "next/link";
import { ArrowRight, Circle, Globe, Video } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            <Video size={14} /> White-label video sessions
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Run your sessions.{" "}
            <span className="text-accent">Under your brand.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            The all-in-one platform for teachers, consultants and coaches:
            booking, payments, video, recording and reminders in a single
            branded portal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Get started <ArrowRight size={16} />
            </Link>
            <a
              href="#features"
              className="rounded-lg border border-foreground/20 px-5 py-3 text-sm font-semibold transition hover:bg-foreground/5"
            >
              See features
            </a>
          </div>
          <p className="mt-8 text-sm text-foreground/50">
            Booking · Payments · Video · Recording · Notifications
          </p>
        </div>

        {/* Mock session card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-foreground/10 bg-background p-6 shadow-2xl shadow-accent/10">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground/60">
                Upcoming session
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-500">
                <Circle size={8} className="fill-current" /> Recording
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold">
              Spanish Conversation, 1 hour
            </h3>
            <p className="mt-1 text-sm text-foreground/60">with Maria Lopez</p>

            <div className="mt-6 aspect-video rounded-xl bg-gradient-to-br from-accent/30 to-accent-soft" />

            <div className="mt-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-lg bg-foreground/5 px-3 py-2 text-sm">
                <Globe size={16} className="text-accent" /> 4:00 PM · your time
              </span>
              <span className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                Join
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
