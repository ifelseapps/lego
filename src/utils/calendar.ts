export type CellType =
  // Дата текущего месяца
  | 'current'
  // Дата предыдущего или следующего месяца, которыми мы "добиваем" нужное количество дней в неделе
  | 'other';

export type CalendarCellItem = {
  type: CellType;
  date: Date;
};

export type CalendarRow = Array<CalendarCellItem>;

export type CalendarGrid = Array<CalendarRow>;

const cloneDate = (src: Date): Date => new Date(src.getTime());

const isLeapYear = (year: number) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const getDaysInMonth = (month: number, year: number) =>
  [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
  month
  ];

const FIRST_DAY_OF_WEEK = 1;
const DAYS_OF_WEEK = 7;

export function buildCalendarGrid(month: number, year: number) {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDateOfMonth = new Date(year, month, 1);
  const grid: CalendarGrid =
    firstDateOfMonth.getDay() === FIRST_DAY_OF_WEEK ? [] : [[]];

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    if (date.getDay() === FIRST_DAY_OF_WEEK) {
      grid.push([]);
    }

    const week = grid[grid.length - 1];
    week.push({ type: 'current', date });
  }

  const [firstWeek] = grid;
  if (firstWeek.length < DAYS_OF_WEEK) {
    const count = DAYS_OF_WEEK - firstWeek.length - 1;
    for (let i = 0; i >= -count; i--) {
      const date = cloneDate(firstDateOfMonth);
      date.setDate(i);
      firstWeek.unshift({ type: 'other', date });
    }
  }

  const lastWeek = grid[grid.length - 1];
  if (lastWeek.length < DAYS_OF_WEEK) {
    const count = DAYS_OF_WEEK - lastWeek.length - 1;
    for (let i = 0; i <= count; i++) {
      const date = cloneDate(firstDateOfMonth);
      date.setMonth(month + 1);
      date.setDate(i + 1);
      lastWeek.push({ type: 'other', date });
    }
  }

  return grid;
}
