"use client";

import { CalendarDays } from "lucide-react";
import { getDateKey, getDateRange, isWeekend } from "@/components/calendar/utils";
import useCalendar from "@/components/calendar/useCalendar";
import CalendarMonth from "@/components/calendar/CalendarMonth";
import CalendarSlots from "@/components/calendar/CalendarSlots";

// react-day-picker ships unstyled here; every element is styled through this
// map. Day state comes from data attributes on the cell (data-selected,
// data-disabled, data-today) so the today ring never fights selection.
// Caption sits on the left with the month arrows grouped on the right.
const navButton =
  "flex size-9 items-center justify-center rounded-lg hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-30 aria-disabled:hover:bg-transparent";

const dayPickerClassNames = {
  root: "w-fit text-sm",
  months: "relative",
  nav: "absolute top-0 right-0 flex gap-1",
  button_previous: navButton,
  button_next: navButton,
  chevron: "size-4 fill-muted",
  month: "flex flex-col gap-4",
  month_caption: "flex h-9 items-center",
  caption_label: "text-base font-semibold",
  month_grid: "border-collapse",
  weekdays: "flex",
  weekday: "flex h-8 w-10 items-center justify-center text-xs font-medium text-muted sm:w-11",
  weeks: "flex flex-col",
  week: "flex",
  // 40px cells below `sm` keep the month inside a 375px screen.
  day: "flex size-10 items-center justify-center p-0 sm:size-11",
  day_button:
    "flex size-9 items-center justify-center rounded-full tabular-nums transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-10",
  today:
    "[&:not([data-selected]):not([data-disabled])>button]:font-semibold [&:not([data-selected]):not([data-disabled])>button]:text-primary [&:not([data-selected]):not([data-disabled])>button]:ring-1 [&:not([data-selected]):not([data-disabled])>button]:ring-primary/40",
  selected: "[&>button]:bg-primary [&>button]:font-semibold [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground",
  disabled: "[&>button]:cursor-not-allowed [&>button]:text-muted/40 [&>button]:hover:bg-transparent [&>button]:hover:text-muted/40",
  outside: "text-muted/40",
  hidden: "invisible",
};

type CalendarProps = {
  onSelectTimeSlot?: (date: Date, slot: string) => void;
};

const Calendar = ({ onSelectTimeSlot }: CalendarProps) => {
  const { selectedDate, selectedTimeSlot, timeSlots, handleSelectDate, handleSelectTimeSlot } = useCalendar({ onSelectTimeSlot });
  const { today, maxDate } = getDateRange();

  return (
    <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-0 md:divide-x md:divide-border">
      <div className="md:pr-8">
        <CalendarMonth
          selected={selectedDate}
          onSelect={handleSelectDate}
          startMonth={today}
          endMonth={maxDate}
          disabled={[{ before: today }, { after: maxDate }, isWeekend]}
          classNames={dayPickerClassNames}
        />
      </div>

      <div className="border-t border-border pt-8 md:border-t-0 md:pt-0 md:pl-8">
        {selectedDate ? (
          // Keyed by day so the panel fades in again on each new date.
          <div key={getDateKey(selectedDate)} className="motion-safe:transition-opacity motion-safe:duration-300 motion-safe:starting:opacity-0">
            <CalendarSlots
              selectedDate={selectedDate}
              timeSlots={timeSlots}
              selectedTimeSlot={selectedTimeSlot}
              onSelectSlot={handleSelectTimeSlot}
            />
          </div>
        ) : (
          <div className="flex h-full flex-col items-start justify-center gap-3 text-muted md:items-center md:text-center">
            <CalendarDays size={28} aria-hidden="true" />
            <p className="text-sm">Pick a day to see available times.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
