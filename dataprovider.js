const dataProvider = (function () {
  function showscreeningsformovie(showDate, movieId) {
    const screeningsOnDate = dataServer.getScreeningsOnDate(movieId, showDate);

    // showing screenings for selected movie on particular date
    // console.log(screeningsOnDate, 'screenings');
    let theatresOnDate = [];
    screeningsOnDate.forEach(screening => {
      theatresOnDate.push(screening.theatreid);
    });
    theatresOnDate = [...new Set(theatresOnDate)];
    return { theatresOnDate, screeningsOnDate };
  }
  function getbookedseatsforScreening(screening) {
    const allBookingsforScreening = dataServer.getBookingsByScreening(screening.id);

    // getting seat ids of already booked seats from bookings
    const bookedSeatsIdList = [];

    allBookingsforScreening.forEach(booking => {
      const reservedSeats = dataServer.getReservedSeatsByBooking(booking.id);
      reservedSeats.forEach(reservedSeat => {
        bookedSeatsIdList.push(reservedSeat.seatid);
      });
    });
    // console.log(bookedSeatsIdList, 'seat ids of booked seats');

    // getting seat no of already booked seats from seat id
    const bookedSeatsNoList = [];

    bookedSeatsIdList.forEach(seatid => {
      const seat = dataServer.getSeat(seatid);
      bookedSeatsNoList.push(`${seat.row}${seat.column}`);
    });
    // console.log(bookedSeatsNoList, 'seat nos of booked seats');

    return bookedSeatsNoList;
  }
  function bookTickets(screeningId, seatPrice, seatIdList) {
    const bookingtable = JSON.parse(localStorage.getItem('bookingsTable'));
    bookingtable.push({
      id: bookingtable.length,
      screeningid: screeningId,
      noOfSeats: seatIdList.length,
      totalprice: seatPrice * seatIdList.length,
    });
    localStorage.setItem('bookingsTable', JSON.stringify(bookingtable));
    // console.log(JSON.parse(localStorage.getItem('bookingsTable')), 'booking added');

    const reservationTable = JSON.parse(localStorage.getItem('reservedSeatsTable'));
    seatIdList.forEach(seatid => {
      reservationTable.push({
        seatid: seatid,
        bookingid: JSON.parse(localStorage.getItem('bookingsTable')).length - 1,
      });
    });
    localStorage.setItem('reservedSeatsTable', JSON.stringify(reservationTable));
    // console.log(JSON.parse(localStorage.getItem('reservedSeatsTable')), 'seat reservation added');
    return bookingtable.length - 1;
  }

  function screeningHousefull(screeningId) {
    const screenings = JSON.parse(localStorage.getItem('screeningTable'));
    screenings.forEach(screening => {
      if (screening.id == screeningId) {
        screening.seatsAvailable = false;
      }
    });
    localStorage.setItem('screeningTable', JSON.stringify(screenings));
  }
  return {
    showscreeningsformovie,
    getbookedseatsforScreening,
    bookTickets,
    screeningHousefull,
  };
})();
