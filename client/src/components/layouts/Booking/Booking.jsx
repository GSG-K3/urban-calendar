import React, { useState, useEffect } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { Box } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
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
  const [reservationDate, setReservationDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  let timeSlotsData = [];

  const {
    formField: { reservationTime },
    covidAnswer,
  } = props;
  useEffect(() => {
    if (reservationDate) {
      axios
        .post('/api/availabletime', { reservationDate })
        .then((result) => setTimeSlots(result.data))
        .catch((err) => err.response.data);
    }
  }, [reservationDate]);

  if (timeSlots) {
    timeSlotsData = timeSlots.map((time) => ({
      value: time.id + reservationDate,
      label: time.time_slot,
    }));
  }
  const setDate = (date) =>
    date && setReservationDate(moment(date).format('YYYY-MM-DD'));
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
        onSelect={setDate}
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
      {reservationDate && (
        <RadioButton
          name={reservationTime.name}
          label={reservationTime.label}
          data={timeSlotsData}
        />
      )}
    </Box>
  );
};
export default Booking;
