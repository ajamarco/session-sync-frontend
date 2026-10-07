import { useState } from "react";
import { getTimeSlots, getDateKey } from "./utils";

const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);
  const [showToast, setShowToast] = useState(false);
  const [bookedSlotsByDate, setBookedSlotsByDate] = useState<Record<string, string[]>>({});

  const timeSlots = selectedDate ? getTimeSlots(9, 17, selectedDate) : [];
  const bookedSlots = selectedDate ? (bookedSlotsByDate[getDateKey(selectedDate)] ?? []) : [];

  const handleSelectDate = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(undefined);
  };

  const handleBook = () => {
    if (!selectedDate || !selectedTimeSlot) return;

    const dateKey = getDateKey(selectedDate);
    setBookedSlotsByDate((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] ?? []), selectedTimeSlot],
    }));

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    setSelectedDate(undefined);
    setSelectedTimeSlot(undefined);
  };

  return {
    selectedDate,
    selectedTimeSlot,
    setSelectedTimeSlot,
    showToast,
    timeSlots,
    bookedSlots,
    handleSelectDate,
    handleBook,
  };
};

export default useCalendar;
