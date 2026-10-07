"use client";

import dynamic from "next/dynamic";

// Client-only: "today" depends on the user's timezone, so prerendering on the
// server (UTC) could disagree with the browser and cause a hydration mismatch.
const Calendar = dynamic(() => import("@/components/calendar/Calendar"), {
  ssr: false,
  loading: () => <div className="h-80 w-full max-w-xs animate-pulse rounded-2xl bg-foreground/5" />,
});

const ChooseDateTime = () => {
  return <Calendar />;
};

export default ChooseDateTime;
