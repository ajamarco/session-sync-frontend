import { useState } from "react";
import { getTimeSlots } from "@/components/calendar/utils";

type UseCalendarOptions = {
  // Called when the user picks a slot. The booking flow will use it to save the
  // selection in Redux and move on to the payment step.
  onSelectTimeSlot?: (date: Date, slot: string) => void;
};

const useCalendar = ({ onSelectTimeSlot }: UseCalendarOptions = {}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);

  const timeSlots = selectedDate ? getTimeSlots(9, 17, selectedDate) : [];

  const handleSelectDate = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(undefined);
  };

  const handleSelectTimeSlot = (slot: string) => {
    if (!selectedDate) return;
    setSelectedTimeSlot(slot);
    onSelectTimeSlot?.(selectedDate, slot);
  };

  return {
    selectedDate,
    selectedTimeSlot,
    timeSlots,
    handleSelectDate,
    handleSelectTimeSlot,
  };
};

export default useCalendar;
