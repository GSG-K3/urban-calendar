import React, { useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { Box } from '@material-ui/core';
import moment from 'moment';
import RadioButton from '../BeforeVisit/Radio';

const covidBlockedDays = 14;
const today = new Date();
const blockedWeeks = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + covidBlockedDays,
);
const publicHolidays = [
  new Date(2020, 8, 7),
  new Date(2020, 10, 11),
  new Date(2020, 10, 26),
  new Date(2020, 11, 25),
];
const Booking = (props) => {
  const [selectedDate, setSelectedDate] = useState('');
  const {
    formField: { appointmentTime },
    covidAnswer,
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

  const displayTimeSlots = (date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD'));
  };
  return (
    <Box display="flex" flexDirection="column">
      <InfiniteCalendar
        width={400}
        height={300}
        shouldHeaderAnimate={true}
        disabledDays={[0, 2]}
        disabledDates={publicHolidays}
        minDate={covidAnswer === 'yes' ? blockedWeeks : today}
        selected={covidAnswer === 'yes' ? blockedWeeks : today}
        onSelect={displayTimeSlots}
        theme={{
          selectionColor: '#90B27A',
          textColor: {
            default: '#333',
            active: '#FFF',
          },
          weekdayColor: '#90B27A',
          headerColor: '#90B27A',
          floatingNav: {
            background: '#90B27A',
            color: '#FFF',
            chevron: '#FFA726',
          },
        }}
      />
      {selectedDate && (
        <RadioButton
          name={appointmentTime.name}
          label={appointmentTime.label}
          data={timeSlots}
        />
      )}
    </Box>
  );
};
export default Booking;
