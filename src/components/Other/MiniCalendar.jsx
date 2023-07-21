import { useState } from "react";
import { Calendar, CalendarProvider } from "zaman";
const MiniCalendar = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <CalendarProvider locale="fa" round="x2" accentColor="#c32c7f">
      <Calendar
        round="x2"
        defaultValue={calendarValue}
        onChange={(day) => setCalendarValue(new Date(day))}
      />
    </CalendarProvider>
  );
};

export default MiniCalendar;
