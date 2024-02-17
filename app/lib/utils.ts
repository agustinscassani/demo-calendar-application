/**
 * Get new navigation URL based on the clicked arrow
 * @param direction Direction of clicked arrow
 * @param day Selected day in yyyy-mm-dd format
 * @returns New day in yyyy-mm-dd format
 */
export function getNavigationURL(direction: 'left' | 'right', day: string): string {
  const [yyyy, mm] = day.split('-');

  if (direction === 'left') {
    if (mm === '01') {
      return `$/{Number(yyyy) - 1}-12-01`;
    }

    const newMonth = Number(mm) - 1;

    return `/${yyyy}-${newMonth < 10 ? `0${newMonth}` : newMonth}-01`;
  }

  if (mm === '12') {
    return `/${Number(yyyy) + 1}-01-01`;
  }

  const newMonth = Number(mm) + 1;

  return `/${yyyy}-${newMonth < 10 ? `0${newMonth}` : newMonth}-01`;
}

/**
 * Get calendar items based on given day
 * @param day Selected day in yyyy-mm-dd format
 * @returns Array with days, null for empty cells and numbers with dates
 */
export function getCalendarItems(day: string): (string | null | number)[] {
  const days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date: Date = new Date(`${day}T00:00:00`);
  const currentMonth: number = date.getMonth();
  const currentYear: number = date.getFullYear();
  const numOfDays: number = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth: number = new Date(currentYear, currentMonth, 1).getDay();
  const dates: number[] = Array.from({ length: numOfDays }, (_, i) => i + 1);
  const letfPadding: null[] = Array(firstDayOfMonth).fill(null);

  return [...days, ...letfPadding, ...dates];
}

/**
 * Get day based on given ISO date
 * @param value Selected day in ISO format
 * @returns Day in yyyy-mm-dd format
 */
export function getDate(value: string) {
  return value.split('T')[0];
}

/**
 * Get time based on given day
 * @param value Selected day in ISO format
 * @returns Time in hh:mm format
 */
export function getTime(value: string) {
  return value.split('T')[1].substring(0, 5);
}