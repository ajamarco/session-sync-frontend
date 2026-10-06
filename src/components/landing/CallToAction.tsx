import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-6 py-16 text-center text-white sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to bring professional video sessions into a single branded
          platform?
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-white/90"
          >
            Get started
          </Link>
          <a
            href="mailto:contact@sessionsync.io"
            className="text-sm font-medium text-white/90 underline underline-offset-4"
          >
            contact@sessionsync.io
          </a>
        </div>
      </div>
    </section>
  );
}
