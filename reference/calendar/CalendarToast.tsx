type CalendarToastProps = {
  show: boolean;
  message?: string;
};

export default function CalendarToast({ show, message = "You've got it!" }: CalendarToastProps) {
  if (!show) return null;

  return <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg">{message}</div>;
}
