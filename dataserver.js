const dataServer = (function () {
  const movieTable = [
    {
      id: 0,
      name: 'Tenet',
      release: 'Dec 04, 2020',
      duration: '2 hrs 31 mins',
      likes: 80,
      votes: 29222,
      tags: ['Action', 'Thriller'],
      movImgURL: './media/movies/mov1.jpg',
    },
    {
      id: 1,
      name: 'Monster Hunter',
      release: 'Feb 05, 2021',
      duration: '1 hrs 39 mins',
      likes: 69,
      votes: 290,
      tags: ['Action', 'Adventure', 'Fantasy'],
      movImgURL: './media/movies/mov2.jpg',
    },
    {
      id: 2,
      name: 'Vijay The Master',
      release: 'Jan 14, 2021',
      duration: '2 hrs 58 mins',
      likes: 89,
      votes: 6410,
      tags: ['Action', 'Thriller'],
      movImgURL: './media/movies/mov3.jpg',
    },
    {
      id: 3,
      name: 'Wonder Woman 1984',
      release: 'Dec 24, 2020',
      duration: '2hrs 31mins',
      likes: 70,
      votes: 25388,
      tags: ['Action', 'Adventure', 'Fantasy'],
      movImgURL: './media/movies/mov4.jpg',
    },
    {
      id: 4,
      name: 'Ramprasad Ki Tehrvi',
      release: 'Jan 01, 2021',
      duration: '1hrs 55mins',
      likes: 74,
      votes: 1479,
      tags: ['Comedy', 'Drama', 'Family'],
      movImgURL: './media/movies/mov5.jpg',
    },
    {
      id: 5,
      name: 'Madam Chief Minister',
      release: 'Jan 22, 2021',
      duration: '2hrs 04mins',
      likes: 69,
      votes: 688,
      tags: ['Drama', 'Political'],
      movImgURL: './media/movies/mov6.jpg',
    },
    {
      id: 6,
      name: 'Ford v Ferrari',
      release: 'Nov 15, 2019',
      duration: '2hrs 35mins',
      likes: 93,
      votes: 57558,
      tags: ['Action', 'Biography', 'Drama'],
      movImgURL: './media/movies/mov7.jpg',
    },
    {
      id: 7,
      name: 'Zombie Reddy',
      release: 'Feb 05, 2021',
      duration: '2hrs 05mins',
      likes: 89,
      votes: 2028,
      tags: ['Action', 'Comedy', 'Horror'],
      movImgURL: './media/movies/mov8.jpg',
    },
    {
      id: 8,
      name: 'Suraj Pe Mangal Bhari',
      release: 'Nov 15, 2020',
      duration: '2hrs 21mins',
      likes: 74,
      votes: 3774,
      tags: ['Comedy', 'Family'],
      movImgURL: './media/movies/mov9.jpg',
    },
    {
      id: 9,
      name: 'Trip',
      release: 'Feb 05, 2021',
      duration: '2hrs 01mins',
      likes: 67,
      votes: 467,
      tags: ['Comedy', 'Horror'],
      movImgURL: './media/movies/mov10.jpg',
    },
  ];
  const theatreTable = [
    {
      id: 0,
      name: 'Cinematic',
      address: 'Hyderabad',
    },
    {
      id: 1,
      name: 'Lime Cinema',
      address: 'GC Road, Hyderabad',
    },
  ];
  const theatreScreenTable = [
    {
      id: 0,
      screenno: 1,
      theatreid: 0,
    },
    {
      id: 1,
      screenno: 2,
      theatreid: 0,
    },
    {
      id: 2,
      screenno: 1,
      theatreid: 1,
    },
    {
      id: 3,
      screenno: 2,
      theatreid: 1,
    },
  ];
  // String(new Date({date-today}.getTime() + 86400000 * {no-of-days-later})).substring(4,10);
  const screeningTable = [
    {
      id: 0,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 100,
    },
    {
      id: 1,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 120,
    },
    {
      id: 2,
      movieid: 0,
      theatreid: 1,
      screenid: 2,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '07:00 PM',
      seatprice: 150,
    },
    {
      id: 3,
      movieid: 0,
      theatreid: 1,
      screenid: 2,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '11:00 AM',
      seatprice: 120,
    },
    {
      id: 4,
      movieid: 1,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '11:00 AM',
      seatprice: 100,
    },
    {
      id: 5,
      movieid: 1,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '07:00 PM',
      seatprice: 150,
    },
    {
      id: 6,
      movieid: 1,
      theatreid: 1,
      screenid: 3,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 150,
    },
    {
      id: 7,
      movieid: 1,
      theatreid: 1,
      screenid: 3,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '04:00 PM',
      seatprice: 120,
    },
  ];

  const allSeatsTable = [
    {
      id: 0,
      row: 'A',
      column: 1,
      screeningid: 0,
    },
    {
      id: 1,
      row: 'A',
      column: 2,
      screeningid: 0,
    },
    {
      id: 2,
      row: 'A',
      column: 3,
      screeningid: 0,
    },
    {
      id: 3,
      row: 'A',
      column: 4,
      screeningid: 0,
    },
    {
      id: 4,
      row: 'A',
      column: 5,
      screeningid: 0,
    },
    {
      id: 5,
      row: 'A',
      column: 6,
      screeningid: 0,
    },
    {
      id: 6,
      row: 'A',
      column: 7,
      screeningid: 0,
    },
    {
      id: 7,
      row: 'A',
      column: 8,
      screeningid: 0,
    },
    {
      id: 8,
      row: 'A',
      column: 9,
      screeningid: 0,
    },
    {
      id: 9,
      row: 'A',
      column: 10,
      screeningid: 0,
    },
    {
      id: 10,
      row: 'A',
      column: 1,
      screeningid: 1,
    },
    {
      id: 11,
      row: 'A',
      column: 2,
      screeningid: 1,
    },
    {
      id: 12,
      row: 'A',
      column: 3,
      screeningid: 1,
    },
    {
      id: 13,
      row: 'A',
      column: 4,
      screeningid: 1,
    },
    {
      id: 14,
      row: 'A',
      column: 5,
      screeningid: 1,
    },
    {
      id: 15,
      row: 'A',
      column: 6,
      screeningid: 1,
    },
    {
      id: 16,
      row: 'A',
      column: 7,
      screeningid: 1,
    },
    {
      id: 17,
      row: 'A',
      column: 8,
      screeningid: 1,
    },
    {
      id: 18,
      row: 'A',
      column: 9,
      screeningid: 1,
    },
    {
      id: 19,
      row: 'A',
      column: 10,
      screeningid: 1,
    },
    {
      id: 20,
      row: 'A',
      column: 1,
      screeningid: 2,
    },
    {
      id: 21,
      row: 'A',
      column: 2,
      screeningid: 2,
    },
    {
      id: 22,
      row: 'A',
      column: 3,
      screeningid: 2,
    },
    {
      id: 23,
      row: 'A',
      column: 4,
      screeningid: 2,
    },
    {
      id: 24,
      row: 'A',
      column: 5,
      screeningid: 2,
    },
    {
      id: 25,
      row: 'A',
      column: 6,
      screeningid: 2,
    },
    {
      id: 26,
      row: 'A',
      column: 7,
      screeningid: 2,
    },
    {
      id: 27,
      row: 'A',
      column: 8,
      screeningid: 2,
    },
    {
      id: 29,
      row: 'A',
      column: 9,
      screeningid: 2,
    },
    {
      id: 29,
      row: 'A',
      column: 10,
      screeningid: 2,
    },
    {
      id: 30,
      row: 'A',
      column: 1,
      screeningid: 3,
    },
    {
      id: 31,
      row: 'A',
      column: 2,
      screeningid: 3,
    },
    {
      id: 32,
      row: 'A',
      column: 3,
      screeningid: 3,
    },
    {
      id: 33,
      row: 'A',
      column: 4,
      screeningid: 3,
    },
    {
      id: 34,
      row: 'A',
      column: 5,
      screeningid: 3,
    },
    {
      id: 35,
      row: 'A',
      column: 6,
      screeningid: 3,
    },
    {
      id: 36,
      row: 'A',
      column: 7,
      screeningid: 3,
    },
    {
      id: 37,
      row: 'A',
      column: 8,
      screeningid: 3,
    },
    {
      id: 38,
      row: 'A',
      column: 9,
      screeningid: 3,
    },
    {
      id: 39,
      row: 'A',
      column: 10,
      screeningid: 3,
    },
  ];
  const reservedSeatsTable = [
    {
      seatid: 0,
      bookingid: 0,
    },
    {
      seatid: 1,
      bookingid: 0,
    },
  ];
  sessionStorage.setItem('reservedSeatsTable', JSON.stringify(reservedSeatsTable));
  const bookingsTable = [
    {
      id: 0,
      screeningid: 0,
      noOfSeats: 2,
      totalprice: 200,
    },
  ];
  sessionStorage.setItem('bookingsTable', JSON.stringify(bookingsTable));

  return {
    getMovies: function () {
      return movieTable;
    },
    getMovie: function (movieId) {
      return movieTable.find(function (movie) {
        return movie.id == movieId;
      });
    },
    getTheatres: function () {
      return theatreTable;
    },
    getTheatre: function (theatreId) {
      return theatreTable.find(function (theatre) {
        return theatre.id == theatreId;
      });
    },
    getScreens: function () {
      return theatreScreenTable;
    },
    getAllScreenings: function () {
      return screeningTable;
    },
    getScreening: function (screeningId) {
      return screeningTable.find(function (screening) {
        return screening.id == screeningId;
      });
    },
    getScreeningsOnDate: function (movieId, showDate) {
      return screeningTable.filter(function (screening) {
        return screening.movieid == movieId && screening.date == showDate;
      });
    },
    getAllSeatsByScreening: function (screeningId) {
      return allSeatsTable.filter(function (seat) {
        return seat.screeningid == screeningId;
      });
    },
    getSeat: function (seatId) {
      return allSeatsTable.find(function (seat) {
        return seat.id == seatId;
      });
    },
    getAllSeats: function () {
      return allSeatsTable;
    },
    getReservedSeatsByBooking: function (bookingId) {
      return JSON.parse(sessionStorage.getItem('reservedSeatsTable')).filter(function (seat) {
        return seat.bookingid == bookingId;
      });
    },
    getReservedSeats: function () {
      return JSON.parse(sessionStorage.getItem('reservedSeatsTable'));
    },
    getBookingsByScreening: function (screeningId) {
      return JSON.parse(sessionStorage.getItem('bookingsTable')).filter(function (booking) {
        return booking.screeningid == screeningId;
      });
    },
    getAllBookings: function () {
      return JSON.parse(sessionStorage.getItem('bookingsTable'));
    },
  };
})();
