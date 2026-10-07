import { DayPicker, type DayPickerProps } from "react-day-picker";

type CalendarMonthProps = {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  startMonth: Date;
  endMonth: Date;
  disabled: DayPickerProps["disabled"];
  classNames: DayPickerProps["classNames"];
};

const CalendarMonth = ({ selected, onSelect, startMonth, endMonth, disabled, classNames }: CalendarMonthProps) => {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      startMonth={startMonth}
      endMonth={endMonth}
      disabled={disabled}
      classNames={classNames}
    />
  );
};

export default CalendarMonth;
