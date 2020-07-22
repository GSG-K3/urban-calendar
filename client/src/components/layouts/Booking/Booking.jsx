import React, { useState, useEffect } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import moment from 'moment';
import axios from 'axios';
import RadioButton from '../../commonComponents/TabsCheckout/FormFields/Radio';
import exceptions from './exceptedDays';

const { today, blockedWeeks, maxDate, publicHolidays } = exceptions;
const Booking = (props) => {
  const [allReservations, setAllReservations] = useState(null);
  const [timeSlots, setTimeSlots] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fullReservedDays = [];
  const storeTimeIds = {};
  const storeAvailableTimeSlots = {};

  const {
    formField: { reservationTime },
    covidAnswer,
  } = props;

  const startDate = moment(today).format('YYYY-MM-DD');
  const endDate = moment(maxDate).format('YYYY-MM-DD');
  // get reservations and time slots data when the app mount
  useEffect(() => {
    // request to get all Reservations Data among 3 months
    const reservationRequest = axios.get(
      `/api/reservations?startDate=${startDate}&endDate=${endDate}`,
    );
    // request to get all Time Slots
    const timeslotRequest = axios.get('/api/timeslots');

    axios
      .all([reservationRequest, timeslotRequest])
      .then(
        axios.spread((...responses) => {
          setAllReservations(responses[0].data);
          setTimeSlots(responses[1].data);
          setIsLoading(false);
        }),
      )
      .catch((err) => err.response.data);
  }, [startDate, endDate]);

  // store the fully reserved dates
  if (allReservations && timeSlots) {
    // store each reservation date with it's reserved time id.
    for (let i = 0; i < allReservations.length; i++) {
      // change date format
      const appointmentDate = moment(
        allReservations[i].reservation_date,
      ).format('YYYY-MM-DD');

      // check if the date already stored then add all the reservations time ids for that day
      if (storeTimeIds[appointmentDate]) {
        storeTimeIds[appointmentDate].timeId = [
          ...storeTimeIds[appointmentDate].timeId,
          allReservations[i].time_id,
        ];
      }
      // if the date doesn't exist in the store, store it with it's first reservation time id
      else {
        storeTimeIds[appointmentDate] = {
          timeId: [allReservations[i].time_id],
        };
      }
    }
    // find the fully reserved date and the available time slots for the other days
    const reservedDates = Object.keys(storeTimeIds); // get the reservation days from the store keys

    // the fixed time slots ids that we get from DB
    const timeSlotsIds = timeSlots.map((timeSlot) => timeSlot.id);

    for (let j = 0; j < reservedDates.length; j++) {
      // check if one of the reservation dates is fully reserved to disable it later in the calender
      if (
        storeTimeIds[reservedDates[j]].timeId.length === timeSlotsIds.length
      ) {
        fullReservedDays.push(new Date(reservedDates[j]));
      }
      // compare reservation time ids with fixed time slots ids to get the available time slots ids
      else {
        const reservedIds = new Set(storeTimeIds[reservedDates[j]].timeId);
        const difference = [...timeSlotsIds].filter(
          (timeSlotId) => !reservedIds.has(timeSlotId),
        );
        storeAvailableTimeSlots[reservedDates[j]] = { difference };
      }
    }
  }
  // specify the time slot labels and values when shown on radio buttons
  const TimeSlotData = (timeSlot, reservationDate) =>
    timeSlot.map((time) => ({
      value: time.id +'@' + reservationDate + '@' + time.time_slot,
      label: time.time_slot,
    }));

  // get the available time slots for a specific date
  const getAvailableTimeSlots = (date) => {
    const reservationDate = moment(date).format('YYYY-MM-DD');

    if (storeAvailableTimeSlots[reservationDate]) {
      const reservedIds = new Set(
        storeAvailableTimeSlots[reservationDate].difference,
      );
      // compare the ids for the time slots of a specific date with the fixed timeSlot to return all the time slot data and send it to radio buttons.
      const availableTime = timeSlots.filter((timeSlot) =>
        reservedIds.has(timeSlot.id),
      );
      setAvailableTimeSlots(TimeSlotData(availableTime, reservationDate));
    } else {
      setAvailableTimeSlots(TimeSlotData(timeSlots, reservationDate));
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">Please Select a date: </Typography>
          <InfiniteCalendar
            width={400}
            height={300}
            shouldHeaderAnimate={true}
            disabledDays={[0, 2]}
            disabledDates={[...publicHolidays, ...fullReservedDays]}
            minDate={covidAnswer === 'yes' ? blockedWeeks : today}
            min={today} // Minimum rendered month
            max={maxDate} // Maximum rendered month
            selected={covidAnswer === 'yes' ? blockedWeeks : today}
            onSelect={getAvailableTimeSlots}
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
          {availableTimeSlots && (
            <Box>
              <Typography variant="h6">Please Select a Time Slot: </Typography>
              <RadioButton
                name={reservationTime.name}
                label={reservationTime.label}
                data={availableTimeSlots}
              />
            </Box>
          )}
        </Box>
      )}
    </React.Fragment>
  );
};
export default Booking;
