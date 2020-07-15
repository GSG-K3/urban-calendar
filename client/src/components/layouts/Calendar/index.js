import React, { useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarCom = () => {
  const allowedState = [
    { id: 1, value: '10:00am' },
    { id: 2, value: '12:00' },
  ];
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState(allowedState);

  const onChange = (date) => {
    setDate(date);
  };
  // const onClickDay = (slots) => {
  //   setSlots(slots);
  // };
  return (
    <div>
      <Calendar
        onClickDay={slots.map((localstate) => (
          <div> {localstate.value}</div>
        ))}
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default CalendarCom;
