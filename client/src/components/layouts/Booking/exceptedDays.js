// if the user have covid symptoms, the reservation will be available after 14 days
const covidBlockedDays = 14;
const today = new Date();

export default {
  today: new Date(),
  blockedWeeks: new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + covidBlockedDays,
  ),

  // the max date that a user can make an appointment at
  maxDate: new Date(today.getFullYear(), today.getMonth() + 3, today.getDate()),

  publicHolidays: [
    new Date(2020, 8, 7),
    new Date(2020, 10, 11),
    new Date(2020, 10, 26),
    new Date(2020, 11, 25),
  ],
};
