import React, { useState ,useEffect} from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { Box } from '@material-ui/core';
import { axios } from 'axios';
import moment from 'moment';
import RadioButton from '../BeforeVisit/Radio';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

const Booking = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState([]);

  const {
    formField: { appointmentTime },
  } = props;

  // const timeSlots = [
  //   {
  //     value: `${selectedDate} 10:00`,
  //     label: '10:00 - 12:00',
  //   },
  //   {
  //     value: `${selectedDate} 12:00`,
  //     label: '12:00 - 14:00',
  //   },
  //   {
  //     value: `${selectedDate} 14:00`,
  //     label: '14:00 - 16:00',
  //   },
  //   {
  //     value: `${selectedDate} 16:00`,
  //     label: '16:00 - 18:00',
  //   },
  // ];

  // const availableTime = (date) => {
  //   // const ReservaDate = moment(selectedDate).format('YYYY-DD-MM');
  //   const reserveDate = setSelectedDate(
  //     `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  //   );
  //   console.log('hi:', reserveDate);
    // axios
    //   .get('/api/availabletime', {
    //     params: {
    //       ReservaDate,
    //     },
    //   })
    //   .then((res) =>
    //     this.setState({
    //       availableTime: res.data.rows,
    //       showAvailable: true,
    //     }),
    //   )
    //   .catch((err) => this.setState({ errFound: !this.state.errFound }));
  // };

 
  const displayTimeSlots = () => {  
     console.log(selectedDate);
   setSelectedDate(selectedDate)
  const reserveDate= moment(selectedDate).format('YYYY-MM-DD')
    console.log(reserveDate);

    axios
      .get('/api/availabletime', {
        params: {
          reserveDate,
        }
      })
      .then((res) =>
      setSelectedTime(res.data)
      )
      .catch((err) => console.log(err));
      
  }

  return (
    <Box display="flex" flexDirection="column">
      <InfiniteCalendar
        width={400}
        height={300}
        selected={selectedDate}
        disabledDays={[0, 6]}
        minDate={lastWeek}
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
      {/* {selectedDate && (
        <RadioButton
          name={appointmentTime.name}
          label={appointmentTime.label}
          data={timeSlots}
        />
      )} */}

    </Box>
  );
};
export default Booking;
