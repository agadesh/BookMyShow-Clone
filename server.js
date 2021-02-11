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

  const screeningTable = [
    {
      id: 0,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: '9 Feb',
      timing: '3PM',
      seatprice: 100,
    },
    {
      id: 1,
      movieid: 0,
      theatreid: 0,
      screenid: 0,
      date: '10 Feb',
      timing: '3PM',
      seatprice: 100,
    },
    {
      id: 2,
      movieid: 0,
      theatreid: 1,
      screenid: 2,
      date: '9 Feb',
      timing: '7PM',
      seatprice: 150,
    },
    {
      id: 3,
      movieid: 0,
      theatreid: 1,
      screenid: 2,
      date: '10 Feb',
      timing: '11AM',
      seatprice: 120,
    },
    {
      id: 4,
      movieid: 1,
      theatreid: 0,
      screenid: 1,
      date: '10 Feb',
      timing: '11AM',
      seatprice: 100,
    },
    {
      id: 5,
      movieid: 1,
      theatreid: 0,
      screenid: 1,
      date: '12 Feb',
      timing: '7PM',
      seatprice: 150,
    },
    {
      id: 6,
      movieid: 1,
      theatreid: 1,
      screenid: 3,
      date: '10 Feb',
      timing: '9PM',
      seatprice: 150,
    },
    {
      id: 7,
      movieid: 1,
      theatreid: 1,
      screenid: 3,
      date: '12 Feb',
      timing: '4PM',
      seatprice: 120,
    },
  ];
  return {
    getMovies: function getMovies() {
      return movieTable;
    },
    getTheatres: function getTheatres() {
      return theatreTable;
    },
    getScreens: function getScreens() {
      return theatreScreenTable;
    },
    getScreenings: function getScreenings() {
      return screeningTable;
    },
  };
})();
