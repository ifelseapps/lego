import React, { useState } from 'react';
import { buildCalendarGrid } from 'src/utils/calendar';

const DAY_OF_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export type CalendarProps = {
  month: number;
  year: number;
};

export const Calendar = ({ month, year }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(() => month);
  const [currentYear, setCurrentYear] = useState(() => year);

  const calendarData = buildCalendarGrid(currentMonth, currentYear);

  const onNextYear = () => {
    setCurrentYear((y) => y + 1);
  };

  const onPrevYear = () => {
    setCurrentYear((y) => y - 1);
  };

  const onNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((y) => y + 1);
    }
    setCurrentMonth((m) => (m < 11 ? m + 1 : 0));
  };

  const onPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((y) => y - 1);
    }
    setCurrentMonth((m) => (m > 0 ? m - 1 : 11));
  };

  return (
    <>
      <div>{currentMonth + 1}</div>
      <div>{currentYear}</div>
      <hr />
      <button type="button" onClick={onPrevYear}>
        Prev year
      </button>
      <button type="button" onClick={onNextYear}>
        Next year
      </button>
      <button type="button" onClick={onPrevMonth}>
        Prev month
      </button>
      <button type="button" onClick={onNextMonth}>
        Next month
      </button>
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
    </>
  );
};
