import type { ReactNode } from "react";

type BookingStepProps = {
  step: number;
  title: string;
  isOpen?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
};

// One accordion section of the booking flow. The header is not clickable yet;
// it becomes a <button aria-expanded> once step progression is implemented.
const BookingStep = ({ step, title, isOpen = false, isDisabled = false, children }: BookingStepProps) => {
  return (
    <section
      className={`rounded-2xl border border-border bg-background ${isDisabled ? "opacity-50" : ""}`}
    >
      <div className="flex items-center gap-3 p-4 sm:p-6">
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
            isOpen ? "bg-primary text-primary-foreground" : "bg-foreground/10"
          }`}
        >
          {step}
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {isOpen && <div className="border-t border-border p-4 sm:p-6">{children}</div>}
    </section>
  );
};

export default BookingStep;
