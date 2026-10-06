"use client";

import { useRef } from "react";
import { X } from "lucide-react";

type ClassDetailsButtonProps = {
  title: string;
  subtitle: string;
};

// "+ details" trigger plus its dialog. Native <dialog> gives us the backdrop,
// focus trapping and Esc-to-close. Below `sm` it is a drawer sliding in from the
// right; from `sm` up it is a centred modal.
export default function ClassDetailsButton({
  title,
  subtitle,
}: ClassDetailsButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="text-center text-sm text-muted transition hover:text-foreground"
      >
        + details
      </button>
      <dialog
        ref={dialogRef}
        aria-label={`${title} details`}
        onClick={(e) => {
          // A click on the backdrop targets the dialog element itself.
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        className="fixed inset-y-0 right-0 left-auto m-0 h-full max-h-none w-[85vw] max-w-sm border-l border-border bg-background p-6 text-foreground backdrop:bg-foreground/40 sm:inset-0 sm:m-auto sm:h-fit sm:max-h-[85vh] sm:max-w-lg sm:rounded-2xl sm:border"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="rounded-full p-1 text-muted transition hover:bg-foreground/10 hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>
        <p className="mt-6 text-sm text-muted">
          More details about this class will go here.
        </p>
      </dialog>
    </>
  );
}
