const seatLayout = (function () {
  const seatNoModalElement = document.querySelector('.seat-modal');

  //display seat no modal on load
  window.onload = seatNoModalElement.style.display = 'block';

  //display seat no modal on clicking seats in bar
  const noOfSeatsElement = document.querySelector('.no-of-tickets');

  noOfSeatsElement.onclick = function () {
    seatNoModalElement.style.display = 'block';
  };

  // start with 2 no of seats
  window.onload = sessionStorage.setItem('seats', 2);

  // update no. of seats in bar
  function UpdateSeatNoInBar() {
    const noOfSeatsData = document.querySelector('.no-of-tickets span');
    noOfSeatsData.innerHTML = sessionStorage.getItem('seats');
  }
  UpdateSeatNoInBar();

  // hide modal on clicking select seat button
  const selectNoOfSeatsBtn = document.querySelector('.select-seat-btn');

  selectNoOfSeatsBtn.onclick = function () {
    seatNoModalElement.style.display = 'none';
  };

  const seatListItemElements = document.querySelectorAll('.seat-no-list-item');
  // ****************************** NO OF SEATS SELECTOR (RADIO BTNS)

  document.getElementsByName('sradio-btn').forEach((elem, i) => {
    elem.addEventListener('change', () => {
      seatListItemElements[i].classList.add('sn-active');
      //  update no of seats in session storage
      sessionStorage.setItem('seats', document.getElementsByName('sradio-btn')[i].value);
      UpdateSeatNoInBar();
      clearSeatSelection();
      updateTotalPrice();
      seatConfirmBar.style.display = 'none';
      for (let a = 0; a < 10; a++) {
        if (a != i) {
          seatListItemElements[a].classList.remove('sn-active');
        }
      }
    });
  });

  //  ********************************* NO OF SEATS MODAL IMAGE ANIMATION

  const vehicleImageElement = document.querySelector('.seat-image img');

  seatListItemElements.forEach((seatno, i) => {
    seatno.addEventListener('mouseover', () => {
      vehicleImageElement.src = './media/seatno/seat' + (i + 1) + '.png';
    });
  });
  seatListItemElements.forEach(seatno => {
    seatno.addEventListener('mouseout', () => {
      const noOfSeats = sessionStorage.getItem('seats');
      vehicleImageElement.src = `./media/seatno/seat${noOfSeats}.png`;
    });
  });

  // ******************************************************

  const seatCostElement = document.querySelector('.seat-cost span');
  const movieNameElement = document.querySelector('.ticket-movie-name span');
  const theatreNameElement = document.querySelector('.ticket-theatre-name');
  const ticketTimingsElement = document.querySelector('.ticket-timings');
  const thisScreening = dataServer.getScreening(location.search.substring(13));
  const thisMovie = dataServer.getMovie(thisScreening.movieid);
  const thisTheatre = dataServer.getTheatre(thisScreening.theatreid);

  function updateTotalPrice() {
    const totalPrice = document.querySelector('.seat-confirm-btn span');
    totalPrice.innerHTML = Number(sessionStorage.getItem('seats')) * thisScreening.seatprice;
  }
  updateTotalPrice();

  seatCostElement.innerHTML = thisScreening.seatprice + '.00';
  movieNameElement.innerHTML = thisMovie.name;
  theatreNameElement.innerHTML = thisTheatre.name + ': ' + thisTheatre.address;
  ticketTimingsElement.innerHTML = getDay(thisScreening.date) + ', ' + thisScreening.date + ', ' + thisScreening.timing;

  function getDay(date) {
    const todayDate = Number(String(new Date()).substring(8, 10));
    const dayDiff = date.substring(4, 6) - todayDate;
    if (dayDiff == 0) {
      return 'Today';
    } else if (dayDiff == 1) {
      return 'Tomorrow';
    } else {
      return String(new Date(new Date().getTime() + 86400000 * dayDiff)).substring(0, 3);
    }
  }

  const seatElements = document.querySelectorAll('.seat-column-list .seat-column');
  const seatConfirmBar = document.querySelector('.seat-confirm');

  function getSelectedSeats() {
    return document.querySelectorAll('.seat-selected');
  }

  seatElements.forEach((seatElement, seatElementIndex) => {
    seatElement.addEventListener('click', () => {
      if (seatElement.classList.contains('seat-disabled')) return;
      if (getSelectedSeats().length == sessionStorage.getItem('seats')) {
        clearSeatSelection();
      }
      let skipDisabledSeat = 0;
      // select seats automatically
      let noOfSeatsSelected = getSelectedSeats().length;
      for (let a = seatElementIndex; a < sessionStorage.getItem('seats') - noOfSeatsSelected + seatElementIndex + skipDisabledSeat; a++) {
        // prevent moving out of seat grid
        if (a >= seatElements.length) break;
        // skip disabled seats
        if (seatElements[a].classList.contains('seat-disabled')) {
          skipDisabledSeat++;
          continue;
        }
        seatElements[a].classList.add('seat-selected');
      }
      // show pay button if particular no of seats are selected
      if (sessionStorage.getItem('seats') == getSelectedSeats().length) {
        seatConfirmBar.style.display = 'block';
      } else {
        seatConfirmBar.style.display = 'none';
      }
    });
  });

  function clearSeatSelection() {
    seatElements.forEach(seat => {
      seat.classList.remove('seat-selected');
    });
  }

  // ********************* disable occupied Seats

  const allBookingsforScreening = dataServer.getBookingsByScreening(thisScreening.id);

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

  // disabling already booked seats in seat grid by seat no
  seatElements.forEach(seat => {
    const seatNo = seat.getAttribute('data-seat');
    bookedSeatsNoList.forEach(bookedSeatNo => {
      if (bookedSeatNo == seatNo) {
        seat.classList.add('seat-disabled');
      }
    });
  });

  // ********************************* select seats
  const seatConfirmBtn = document.querySelector('.seat-confirm-btn');

  seatConfirmBtn.addEventListener('click', () => {
    // geting seat no of currently selected seats
    const selectedSeatNoList = [];

    getSelectedSeats().forEach(selectedSeat => {
      selectedSeatNoList.push(selectedSeat.getAttribute('data-seat'));
    });
    console.log(selectedSeatNoList, 'seat nos currently selected');

    // getting seat ids of currently selected seats from seat no
    const allSeatsforScreening = dataServer.getAllSeatsByScreening(thisScreening.id);
    const selectedSeatIdList = [];

    allSeatsforScreening.forEach(seat => {
      const seatno = seat.row + seat.column;
      selectedSeatNoList.forEach(selectedSeatNo => {
        if (selectedSeatNo == seatno) {
          selectedSeatIdList.push(seat.id);
        }
      });
    });
    console.log(selectedSeatIdList, 'seat ids of currently selected seats');

    dataServer.booktickets(thisScreening.id, Number(sessionStorage.getItem('seats')), thisScreening.seatprice, selectedSeatIdList);
  });
})();
