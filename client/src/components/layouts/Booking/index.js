import React, { useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import RadioButton from './RadioButton';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

const Booking = (props) => {
  const [selectedDate, setSelectedDate] = useState('');

  const {
    formField: { appointmentTime },
  } = props;

  const timeSlots = [
    {
      value: `${selectedDate} 10:00`,
      label: '10:00 - 12:00',
    },
    {
      value: `${selectedDate} 12:00`,
      label: '12:00 - 14:00',
    },
    {
      value: `${selectedDate} 14:00`,
      label: '14:00 - 16:00',
    },
    {
      value: `${selectedDate} 16:00`,
      label: '16:00 - 18:00',
    },
  ];

  const [displayTime, setDisplayTime] = useState(false);
  const displayTimeSlots = (date) => {
    setDisplayTime(true);
    // Timestamp '2020-06-25 10:00:00'
    setSelectedDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    );
  };
  return (
    <div>
      <InfiniteCalendar
        width={400}
        height={100}
        selected={today}
        disabledDays={[0, 6]}
        minDate={lastWeek}
        onSelect={displayTimeSlots}
      />
      {displayTime && (
        <RadioButton
          name={appointmentTime.name}
          label={appointmentTime.label}
          data={timeSlots}
        />
      )}
    </div>
  );
};
export default Booking;
