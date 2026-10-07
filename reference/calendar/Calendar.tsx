"use client";

import { TODAY, MAX_DATE, isWeekend } from "./utils";
import useCalendar from "./useCalendar";
import CalendarMonth from "./CalendarMonth";
import CalendarSlots from "./CalendarSlots";
import CalendarBook from "./CalendarBook";
import CalendarToast from "./CalendarToast";

const dayPickerClassNames = {
  root: "text-sm",
  months: "flex flex-col",
  month: "grid grid-cols-[auto_1fr_auto] items-center gap-y-3",
  month_caption: "col-start-2 flex justify-center py-1 items-center",
  caption_label: "text-base font-semibold text-gray-900",
  button_previous: "col-start-1 size-8 flex items-center justify-center rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent",
  button_next: "col-start-3 size-8 flex items-center justify-center rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent",
  chevron: "fill-gray-600",
  month_grid: "col-span-3 w-full border-collapse",
  weekdays: "flex",
  weekday: "w-10 h-9 flex items-center justify-center text-xs font-medium text-gray-500",
  weeks: "flex flex-col",
  week: "flex",
  day: "w-10 h-10 flex items-center justify-center p-0",
  day_button: "size-9 flex items-center justify-center rounded-full text-gray-800 hover:bg-blue-50 transition-colors",
  today: "font-semibold text-blue-600",
  selected: "[&>button]:bg-blue-600 [&>button]:text-white [&>button]:hover:bg-blue-600",
  disabled: "[&>button]:text-gray-300 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent",
  outside: "text-gray-300",
  hidden: "invisible",
};

export default function Calendar() {
  const { selectedDate, selectedTimeSlot, setSelectedTimeSlot, showToast, timeSlots, bookedSlots, handleSelectDate, handleBook } = useCalendar();

  return (
    <div className="flex flex-col items-center gap-6">
      <CalendarMonth
        selected={selectedDate}
        onSelect={handleSelectDate}
        startMonth={TODAY.toDate()}
        endMonth={MAX_DATE.toDate()}
        disabled={[{ before: TODAY.toDate() }, { after: MAX_DATE.toDate() }, isWeekend]}
        classNames={dayPickerClassNames}
      />

      {selectedDate && (
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <CalendarSlots selectedDate={selectedDate} timeSlots={timeSlots} selectedTimeSlot={selectedTimeSlot} bookedSlots={bookedSlots} onSelectSlot={setSelectedTimeSlot} />
          <CalendarBook disabled={!selectedTimeSlot} onClick={handleBook} />
        </div>
      )}

      <CalendarToast show={showToast} />
    </div>
  );
}
