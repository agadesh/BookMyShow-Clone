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
      seatsAvailable: true,
    },
    {
      id: 1,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '03:00 PM',
      seatprice: 120,
      seatsAvailable: true,
    },
    {
      id: 2,
      movieid: 0,
      theatreid: 1,
      screenid: 2,
      date: String(new Date(new Date().getTime() + 86400000 * 0)).substring(4, 10),
      timing: '07:00 PM',
      seatprice: 150,
      seatsAvailable: true,
    },
    {
      id: 3,
      movieid: 0,
      theatreid: 1,
      screenid: 2,
      date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
      timing: '11:00 AM',
      seatprice: 120,
      seatsAvailable: true,
    },
    // {
    //   id: 4,
    //   movieid: 1,
    //   theatreid: 0,
    //   screenid: 1,
    //   date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
    //   timing: '11:00 AM',
    //   seatprice: 100,
    //   seatsAvailable: true,
    // },
    // {
    //   id: 5,
    //   movieid: 1,
    //   theatreid: 0,
    //   screenid: 1,
    //   date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
    //   timing: '07:00 PM',
    //   seatprice: 150,
    //   seatsAvailable: true,
    // },
    // {
    //   id: 6,
    //   movieid: 1,
    //   theatreid: 1,
    //   screenid: 3,
    //   date: String(new Date(new Date().getTime() + 86400000 * 1)).substring(4, 10),
    //   timing: '09:00 PM',
    //   seatprice: 150,
    //   seatsAvailable: true,
    // },
    // {
    //   id: 7,
    //   movieid: 1,
    //   theatreid: 1,
    //   screenid: 3,
    //   date: String(new Date(new Date().getTime() + 86400000 * 3)).substring(4, 10),
    //   timing: '04:00 PM',
    //   seatprice: 120,
    //   seatsAvailable: true,
    // },
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
    {
      seatid: 0,
      bookingid: 0,
    },
    {
      seatid: 1,
      bookingid: 0,
    },
  ];
  const bookingsTable = [
    {
      id: 0,
      screeningid: 0,
      noOfSeats: 2,
      totalprice: 200,
    },
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
      console.log('init AllSeatsTable');
      let AllSeats = [];
      const screenings = dataServer.getAllScreenings();
      screenings.forEach((screening, sindex) => {
        for (let i = 1; i <= 10; i++) {
          AllSeats.push({
            id: sindex * 10 + (i - 1),
            row: 'A',
            column: i,
            screeningid: screening.id,
          });
        }
      });
      allSeatsTable.push(...AllSeats);
      console.log(allSeatsTable);
    },
  };
})();
