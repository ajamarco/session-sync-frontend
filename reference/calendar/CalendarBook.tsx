type CalendarBookProps = {
  disabled: boolean;
  onClick: () => void;
};

export default function CalendarBook({ disabled, onClick }: CalendarBookProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      Book
    </button>
  );
}
