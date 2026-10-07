import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BookingStep from "@/components/booking/BookingStep";
import ChooseDateTime from "@/components/booking/ChooseDateTime";

const steps = ["Choose date & time", "Payment", "Confirmation"];

const Booking = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <Link
        href="/classes"
        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to classes
      </Link>
      <h1 className="mt-6 text-2xl font-semibold">Booking</h1>
      <div className="mt-8 flex flex-col gap-4">
        {/* Step progression (open/enable the next step) is not implemented yet:
            only the first step is open, the others are disabled. */}
        {steps.map((title, index) => (
          <BookingStep key={title} step={index + 1} title={title} isOpen={index === 0} isDisabled={index > 0}>
            {index === 0 && <ChooseDateTime />}
          </BookingStep>
        ))}
      </div>
    </div>
  );
};

export default Booking;
