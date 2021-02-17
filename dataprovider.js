const dataProvider = (function () {
  function showscreeningsformovie(showDate, movieId) {
    const screeningsOnDate = dataServer.getScreeningsOnDate(movieId, showDate);

    console.log(screeningsOnDate, 'screenings'); // showing screenings for selected movie on particular date
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
    console.log(bookedSeatsIdList, 'seat ids of booked seats');

    // getting seat no of already booked seats from seat id
    const bookedSeatsNoList = [];

    bookedSeatsIdList.forEach(seatid => {
      const seat = dataServer.getSeat(seatid);
      bookedSeatsNoList.push(`${seat.row}${seat.column}`);
    });
    console.log(bookedSeatsNoList, 'seat nos of booked seats');

    return bookedSeatsNoList;
  }
  function bookTickets(screeningId, seatPrice, seatIdList) {
    const bookingtable = JSON.parse(sessionStorage.getItem('bookingsTable'));
    bookingtable.push({
      id: bookingtable.length,
      screeningid: screeningId,
      noOfSeats: seatIdList.length,
      totalprice: seatPrice * seatIdList.length,
    });
    sessionStorage.setItem('bookingsTable', JSON.stringify(bookingtable));
    console.log(JSON.parse(sessionStorage.getItem('bookingsTable')), 'booking added');
    const reservationTable = JSON.parse(sessionStorage.getItem('reservedSeatsTable'));
    seatIdList.forEach(seatid => {
      reservationTable.push({
        seatid: seatid,
        bookingid: JSON.parse(sessionStorage.getItem('bookingsTable')).length - 1,
      });
    });
    sessionStorage.setItem('reservedSeatsTable', JSON.stringify(reservationTable));
    console.log(JSON.parse(sessionStorage.getItem('reservedSeatsTable')), 'seat reservation added');
  }
  return {
    showscreeningsformovie,
    getbookedseatsforScreening,
    bookTickets,
  };
})();
