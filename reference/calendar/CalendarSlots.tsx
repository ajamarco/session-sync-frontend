import dayjs from "dayjs";

type CalendarSlotsProps = {
  selectedDate: Date;
  timeSlots: string[];
  selectedTimeSlot: string | undefined;
  bookedSlots: string[];
  onSelectSlot: (slot: string) => void;
};

export default function CalendarSlots({ selectedDate, timeSlots, selectedTimeSlot, bookedSlots, onSelectSlot }: CalendarSlotsProps) {
  return (
    <>
      <h2 className="mb-3 text-sm font-semibold text-gray-900">Available times for {dayjs(selectedDate).format("dddd, MMMM D")}</h2>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot) => {
          const isActive = slot === selectedTimeSlot;
          const isBooked = bookedSlots.includes(slot);
          return (
            <button
              key={slot}
              type="button"
              disabled={isBooked}
              onClick={() => onSelectSlot(slot)}
              className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                isBooked
                  ? "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-300"
                  : isActive
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50"
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </>
  );
}
