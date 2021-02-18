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
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 1,
      movieid: 1,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 2,
      movieid: 2,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 3,
      movieid: 3,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 4,
      movieid: 4,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 5,
      movieid: 5,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 6,
      movieid: 6,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 7,
      movieid: 7,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 8,
      movieid: 8,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 9,
      movieid: 9,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 10,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 11,
      movieid: 1,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 12,
      movieid: 2,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 13,
      movieid: 3,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 14,
      movieid: 4,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 15,
      movieid: 5,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 16,
      movieid: 6,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 17,
      movieid: 7,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 18,
      movieid: 8,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 19,
      movieid: 9,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 210,
      seatsAvailable: true,
    },
    {
      id: 20,
      movieid: 0,
      theatreid: 1,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 21,
      movieid: 1,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 22,
      movieid: 2,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 23,
      movieid: 3,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 24,
      movieid: 4,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 25,
      movieid: 5,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 26,
      movieid: 6,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 27,
      movieid: 7,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 28,
      movieid: 8,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 29,
      movieid: 9,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 220,
      seatsAvailable: true,
    },
    {
      id: 30,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 31,
      movieid: 1,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 32,
      movieid: 2,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 33,
      movieid: 3,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 34,
      movieid: 4,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 35,
      movieid: 5,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 36,
      movieid: 6,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 37,
      movieid: 7,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 38,
      movieid: 8,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 39,
      movieid: 9,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 200,
      seatsAvailable: true,
    },
    {
      id: 40,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 41,
      movieid: 1,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 42,
      movieid: 2,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 43,
      movieid: 3,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 44,
      movieid: 4,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 45,
      movieid: 5,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 46,
      movieid: 6,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 47,
      movieid: 7,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 48,
      movieid: 8,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 49,
      movieid: 9,
      theatreid: 0,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 2)).substring(4, 10),
      timing: '09:00 PM',
      seatprice: 250,
      seatsAvailable: true,
    },
    {
      id: 50,
      movieid: 0,
      theatreid: 1,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 51,
      movieid: 1,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 52,
      movieid: 2,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 53,
      movieid: 3,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 54,
      movieid: 4,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 55,
      movieid: 5,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 56,
      movieid: 6,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 57,
      movieid: 7,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 58,
      movieid: 8,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
    {
      id: 59,
      movieid: 9,
      theatreid: 1,
      screenid: 1,
      date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
      timing: '06:00 PM',
      seatprice: 190,
      seatsAvailable: true,
    },
  ];

  const allSeatsTable = [
    // {
    //   id: 0,
    //   row: 'A',
    //   column: 1,
    //   screeningid: 0,
    // },
  ];
  const reservedSeatsTable = [
    // {
    //   seatid: 0,
    //   bookingid: 0,
    // },
    // {
    //   seatid: 1,
    //   bookingid: 0,
    // },
  ];
  const bookingsTable = [
    // {
    //   id: 0,
    //   screeningid: 0,
    //   noOfSeats: 2,
    //   totalprice: 200,
    // },
  ];
  return {
    loadTablesintoLocalStorage: function () {
      if (localStorage.getItem('bookingsTable') == null && localStorage.getItem('reservedSeatsTable') == null && localStorage.getItem('screeningTable') == null && localStorage.getItem('allSeatsTable') == null) {
        console.log('Loading tables into LocalStorage');
        localStorage.setItem('reservedSeatsTable', JSON.stringify(reservedSeatsTable));
        localStorage.setItem('bookingsTable', JSON.stringify(bookingsTable));
        localStorage.setItem('screeningTable', JSON.stringify(screeningTable));
        dataServer.initAllSeatsTable();
        localStorage.setItem('allSeatsTable', JSON.stringify(allSeatsTable));
      }
    },
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
    getScreen: function (screenId) {
      return theatreScreenTable.find(function (screen) {
        return screen.id == screenId;
      });
    },
    getAllScreenings: function () {
      return JSON.parse(localStorage.getItem('screeningTable'));
    },
    getScreening: function (screeningId) {
      return JSON.parse(localStorage.getItem('screeningTable')).find(function (screening) {
        return screening.id == screeningId;
      });
    },
    getScreeningsOnDate: function (movieId, showDate) {
      return JSON.parse(localStorage.getItem('screeningTable')).filter(function (screening) {
        return screening.movieid == movieId && screening.date == showDate;
      });
    },
    getAllSeatsByScreening: function (screeningId) {
      return JSON.parse(localStorage.getItem('allSeatsTable')).filter(function (seat) {
        return seat.screeningid == screeningId;
      });
    },
    getSeat: function (seatId) {
      return JSON.parse(localStorage.getItem('allSeatsTable')).find(function (seat) {
        return seat.id == seatId;
      });
    },
    getAllSeats: function () {
      return JSON.parse(localStorage.getItem('allSeatsTable'));
    },
    getReservedSeatsByBooking: function (bookingId) {
      return JSON.parse(localStorage.getItem('reservedSeatsTable')).filter(function (seat) {
        return seat.bookingid == bookingId;
      });
    },
    getReservedSeats: function () {
      return JSON.parse(localStorage.getItem('reservedSeatsTable'));
    },
    getBookingsByScreening: function (screeningId) {
      return JSON.parse(localStorage.getItem('bookingsTable')).filter(function (booking) {
        return booking.screeningid == screeningId;
      });
    },
    getAllBookings: function () {
      return JSON.parse(localStorage.getItem('bookingsTable'));
    },
    getBooking: function (bookingId) {
      return JSON.parse(localStorage.getItem('bookingsTable')).find(function (booking) {
        return booking.id == bookingId;
      });
    },
    initAllSeatsTable: function () {
      // console.log('init AllSeatsTable');
      let AllSeats = [];
      let idshift = allSeatsTable.length;
      const screenings = dataServer.getAllScreenings();
      screenings.forEach((screening, sindex) => {
        for (let i = 1; i <= 10; i++) {
          AllSeats.push({
            id: AllSeats.length + idshift,
            row: 'A',
            column: i,
            screeningid: screening.id,
          });
        }
        for (let i = 1; i <= 10; i++) {
          AllSeats.push({
            id: AllSeats.length + idshift,
            row: 'B',
            column: i,
            screeningid: screening.id,
          });
        }
        for (let i = 1; i <= 10; i++) {
          AllSeats.push({
            id: AllSeats.length + idshift,
            row: 'C',
            column: i,
            screeningid: screening.id,
          });
        }
        for (let i = 1; i <= 10; i++) {
          AllSeats.push({
            id: AllSeats.length + idshift,
            row: 'D',
            column: i,
            screeningid: screening.id,
          });
        }
      });
      allSeatsTable.push(...AllSeats);
    },
  };
})();
