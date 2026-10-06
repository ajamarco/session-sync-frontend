export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-foreground/60 sm:flex-row sm:px-6">
        <span className="font-semibold text-foreground">my logo</span>
        <a href="mailto:contact@sessionsync.io" className="hover:text-foreground">
          contact@sessionsync.io
        </a>
        <span>&copy; 2026 SessionSync</span>
      </div>
    </footer>
  );
}
