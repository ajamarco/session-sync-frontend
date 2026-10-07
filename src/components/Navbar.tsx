"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loggedOut, selectIsLoggedIn } from "@/lib/features/auth/authSlice";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/classes", label: "Classes" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md p-2 hover:bg-foreground/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="text-lg font-semibold">
            Session Sync
          </Link>
        </div>

        {/* Center */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden" />

        {/* Right */}
        <div className="flex items-center justify-end gap-3">
          <span
            className="flex size-9 items-center justify-center rounded-full bg-foreground/10"
            aria-hidden="true"
          >
            <User size={18} />
          </span>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={() => dispatch(loggedOut())}
              className="rounded-md border border-foreground/20 px-3 py-1.5 text-sm font-medium hover:bg-foreground/10"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Login / Register
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="border-t border-border px-4 py-2 md:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-md px-2 py-2 text-sm font-medium hover:bg-foreground/10"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
