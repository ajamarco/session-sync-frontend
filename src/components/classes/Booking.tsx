import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    </div>
  );
};

export default Booking;
