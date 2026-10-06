import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="rounded-3xl bg-linear-to-br from-brand-from to-brand-to px-6 py-16 text-center text-on-brand sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to bring professional video sessions into a single branded
          platform?
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-on-brand px-6 py-3 text-sm font-semibold text-brand-from transition hover:bg-on-brand/90"
          >
            Get started
          </Link>
          <a
            href="mailto:contact@sessionsync.io"
            className="text-sm font-medium text-on-brand/90 underline underline-offset-4"
          >
            contact@sessionsync.io
          </a>
        </div>
      </div>
    </section>
  );
}
