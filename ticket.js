const ticket = (function () {
  const thisBooking = dataServer.getBooking(location.search.substring(11));
  const thisScreening = dataServer.getScreening(thisBooking.screeningid);
  const thisMovie = dataServer.getMovie(thisScreening.movieid);
  const thisTheatre = dataServer.getTheatre(thisScreening.theatreid);

  const movieNameBarElement = document.querySelector('.ticket-movie-name span');
  movieNameBarElement.innerHTML = thisMovie.name;

  const theatreNameBarElement = document.querySelector('.ticket-theatre-name');
  theatreNameBarElement.innerHTML = thisTheatre.name + ': ' + thisTheatre.address;

  const seatsListElement = document.querySelector('.seats-list span');
  // get seat ids by booking id
  let seatIdList = [];
  dataServer.getReservedSeatsByBooking(thisBooking.id).forEach(reservedSeat => {
    seatIdList.push(reservedSeat.seatid);
  });
  // get seat nos by seat id
  let seatList = '';
  seatIdList.forEach(seatid => {
    const thisSeat = dataServer.getSeat(seatid);
    seatList += thisSeat.row + thisSeat.column + ', ';
  });
  seatList = seatList.slice(0, -2);
  seatsListElement.innerHTML = seatList + ' ( ' + seatIdList.length + ' Tickets )';

  const screenNoElement = document.querySelector('.screen-details span');
  screenNoElement.innerHTML = '0' + dataServer.getScreen(thisScreening.screenid).screenno;

  const seatPriceElement = document.querySelector('.seat-price span');
  seatPriceElement.innerHTML = thisScreening.seatprice + '.00';

  const totalAmountElement = document.querySelector('.total-amount span');
  totalAmountElement.innerHTML = thisScreening.seatprice * thisBooking.noOfSeats;

  const movieNameElement = document.querySelector('.moviename span');
  movieNameElement.innerHTML = thisMovie.name;

  const theatreNameElement = document.querySelector('.theatrename span');
  theatreNameElement.innerHTML = thisTheatre.name + ': ' + thisTheatre.address;

  const showTimeElement = document.querySelector('.showtime span');
  showTimeElement.innerHTML = thisScreening.date + ', ' + thisScreening.timing;

  return {
    backToMoviePage: function () {
      window.open('./movieinfo.html?movieid=' + thisMovie.id, '_self');
    },
  };
})();
