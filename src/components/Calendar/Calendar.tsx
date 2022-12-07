import React from 'react';

const DAY_OF_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

type CellType =
  // Дата текущего месяца
  | 'current'
  // Дата предыдущего или следующего месяца, которыми мы "добиваем" нужное количество дней в неделе
  | 'other';

type CalendarCellItem = {
  type: CellType;
  date: Date;
};

type CalendarRow = Array<CalendarCellItem>;

const calendarData: CalendarRow[] = [
  [
    {
      type: 'other',
      date: new Date(2022, 10, 28),
    },
    {
      type: 'other',
      date: new Date(2022, 10, 29),
    },
    {
      type: 'other',
      date: new Date(2022, 10, 30),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 1),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 2),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 3),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 4),
    },
  ],
  [
    {
      type: 'current',
      date: new Date(2022, 11, 5),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 6),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 7),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 8),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 9),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 10),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 11),
    },
  ],
  [
    {
      type: 'current',
      date: new Date(2022, 11, 12),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 13),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 14),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 15),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 16),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 17),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 18),
    },
  ],
  [
    {
      type: 'current',
      date: new Date(2022, 11, 19),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 20),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 21),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 22),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 23),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 24),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 25),
    },
  ],
  [
    {
      type: 'current',
      date: new Date(2022, 11, 26),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 27),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 28),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 29),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 30),
    },
    {
      type: 'current',
      date: new Date(2022, 11, 31),
    },
    {
      type: 'current',
      date: new Date(2023, 0, 1),
    },
  ],
];

export const Calendar = () => (
  <table>
    <thead>
      <tr>
        {DAY_OF_WEEK.map((day) => (
          <th key={day}>{day}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {/* TODO: подумать над index */}
      {calendarData.map((row, index) => (
        <tr key={index}>
          {row.map((cell) => (
            <td key={String(cell.date)}>{cell.date.getDate()}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
