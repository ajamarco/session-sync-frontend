import dayjs from "dayjs";

// Bookable range: today until 6 months ahead. Computed on call (not at module
// load) so a tab left open overnight does not keep yesterday as "today".
const getDateRange = () => ({
  today: dayjs().startOf("day").toDate(),
  maxDate: dayjs().add(6, "month").endOf("day").toDate(),
});

const isWeekend = (date: Date) => {
  const day = dayjs(date).day();
  return day === 0 || day === 6;
};

const getTimeSlots = (startHour: number, endHour: number, date: Date) => {
  const slots: string[] = [];
  let cursor = dayjs(date).hour(startHour).minute(0).second(0);
  const end = dayjs(date).hour(endHour).minute(0).second(0);

  while (cursor.isBefore(end)) {
    slots.push(cursor.format("h:mm A"));
    cursor = cursor.add(30, "minute");
  }

  return slots;
};

// Key used to group slots by day, e.g. "2026-08-31".
const getDateKey = (date: Date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export { getDateRange, isWeekend, getTimeSlots, getDateKey };
