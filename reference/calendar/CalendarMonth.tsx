"use client";

import { DayPicker, type DayPickerProps } from "react-day-picker";

type CalendarMonthProps = {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  startMonth: Date;
  endMonth: Date;
  disabled: DayPickerProps["disabled"];
  classNames: DayPickerProps["classNames"];
};

export default function CalendarMonth({ selected, onSelect, startMonth, endMonth, disabled, classNames }: CalendarMonthProps) {
  return (
    <div className="w-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <DayPicker mode="single" selected={selected} onSelect={onSelect} startMonth={startMonth} endMonth={endMonth} navLayout="around" disabled={disabled} classNames={classNames} />
    </div>
  );
}
