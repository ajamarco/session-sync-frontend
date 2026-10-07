import dayjs from "dayjs";

type CalendarSlotsProps = {
  selectedDate: Date;
  timeSlots: string[];
  selectedTimeSlot: string | undefined;
  bookedSlots?: string[];
  onSelectSlot: (slot: string) => void;
};

const CalendarSlots = ({ selectedDate, timeSlots, selectedTimeSlot, bookedSlots = [], onSelectSlot }: CalendarSlotsProps) => {
  // Safe to read here: the calendar only renders on the client.
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const groups = [
    { label: "Morning", slots: timeSlots.filter((slot) => slot.endsWith("AM")) },
    { label: "Afternoon", slots: timeSlots.filter((slot) => slot.endsWith("PM")) },
  ].filter((group) => group.slots.length > 0);

  return (
    <div>
      <h3 className="text-xl font-semibold">{dayjs(selectedDate).format("dddd, MMMM D")}</h3>
      <p className="mt-1 text-sm text-muted">Times are shown in your timezone ({timeZone}).</p>
      <div className="mt-6 flex flex-col gap-6">
        {groups.map(({ label, slots }) => (
          <div key={label}>
            <h4 className="mb-2 text-sm font-medium text-muted">{label}</h4>
            <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
              {slots.map((slot) => {
                const isActive = slot === selectedTimeSlot;
                const isBooked = bookedSlots.includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    aria-pressed={isActive}
                    onClick={() => onSelectSlot(slot)}
                    className={`rounded-lg border px-2 py-2.5 text-sm font-medium tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      isBooked
                        ? "cursor-not-allowed border-transparent bg-foreground/5 text-muted line-through"
                        : isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSlots;
