const seatLayout = (function () {
  const seatNoModalElement = document.querySelector('.seat-modal');

  //display seat no modal on load
  window.onload = seatNoModalElement.style.display = 'block';

  //display seat no modal on clicking seats in bar
  document.querySelector('.no-of-tickets').onclick = function () {
    seatNoModalElement.style.display = 'block';
  };

  // start with 2 no of seats
  window.onload = sessionStorage.setItem('seats', 2);

  // update no. of seats in bar
  function UpdateSeatNoInBar() {
    document.querySelector('.no-of-tickets span').innerHTML = sessionStorage.getItem('seats');
  }
  UpdateSeatNoInBar();

  // hide modal on clicking select seat button
  document.querySelector('.select-seat-btn').onclick = function () {
    seatNoModalElement.style.display = 'none';
  };

  const seatListItemElements = document.querySelectorAll('.seat-no-list-item');
  const seatConfirmBar = document.querySelector('.seat-confirm');
  const seatElements = document.querySelectorAll('.seat-column-list .seat-column');

  const thisScreening = dataServer.getScreening(location.search.substring(13));

  // ********************* disable occupied Seats

  // getting seat no list of already booked seats
  const bookedSeatsNoList = dataProvider.getbookedseatsforScreening(thisScreening);

  // disabling already booked seats in seat grid by seat no
  seatElements.forEach(seat => {
    const seatNo = seat.getAttribute('data-seat');
    bookedSeatsNoList.forEach(bookedSeatNo => {
      if (bookedSeatNo == seatNo) {
        seat.classList.add('seat-disabled');
      }
    });
  });

  // ****************************** NO OF SEATS SELECTOR (RADIO BTNS)

  let noOfDisabledSeats = 0;
  seatElements.forEach(seatElement => {
    if (seatElement.classList.contains('seat-disabled')) {
      noOfDisabledSeats++;
    }
  });
  const noOfAvailableSeats = seatElements.length - noOfDisabledSeats;

  document.getElementsByName('sradio-btn').forEach((elem, i) => {
    if (elem.value > noOfAvailableSeats) {
      elem.disabled = true;
      seatListItemElements[elem.value - 1].classList.add('sn-disabled');
    }
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
  const thisMovie = dataServer.getMovie(thisScreening.movieid);
  const thisTheatre = dataServer.getTheatre(thisScreening.theatreid);

  const seatCostElement = document.querySelector('.seat-cost span');
  seatCostElement.innerHTML = thisScreening.seatprice + '.00';

  const seatClassElement = document.querySelector('.seat-class-head span');
  seatClassElement.innerHTML = thisScreening.seatprice + '.00';

  const movieNameElement = document.querySelector('.ticket-movie-name span');
  movieNameElement.innerHTML = thisMovie.name;

  const theatreNameElement = document.querySelector('.ticket-theatre-name');
  theatreNameElement.innerHTML = thisTheatre.name + ': ' + thisTheatre.address;

  const screeningTimingElement = document.querySelector('.ticket-timings');
  screeningTimingElement.innerHTML = getDay(thisScreening.date) + ', ' + thisScreening.date + ', ' + thisScreening.timing;
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

  function updateTotalPrice() {
    const totalPrice = document.querySelector('.seat-confirm-btn span');
    totalPrice.innerHTML = Number(sessionStorage.getItem('seats')) * thisScreening.seatprice + '.00';
  }
  updateTotalPrice();

  // get seats currently selected
  function getSelectedSeats() {
    return document.querySelectorAll('.seat-selected');
  }

  // clear selected seats
  function clearSeatSelection() {
    seatElements.forEach(seat => {
      seat.classList.remove('seat-selected');
    });
  }

  // seat selection system
  seatElements.forEach((seatElement, seatElementIndex) => {
    seatElement.addEventListener('click', () => {
      // no events for disabled seats
      if (seatElement.classList.contains('seat-disabled')) return;

      // clear seat selection if selecting more than no of seats
      if (getSelectedSeats().length == sessionStorage.getItem('seats')) {
        clearSeatSelection();
      }

      let skipDisabledSeat = 0;

      // select required no of seats automatically
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

  // ********************************* select seats
  const seatConfirmBtn = document.querySelector('.seat-confirm-btn');

  seatConfirmBtn.addEventListener('click', () => {
    // geting seat no of currently selected seats
    const selectedSeatNoList = [];
    getSelectedSeats().forEach(selectedSeat => {
      selectedSeatNoList.push(selectedSeat.getAttribute('data-seat'));
    });
    // console.log(selectedSeatNoList, 'seat nos currently selected');

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
    // console.log(selectedSeatIdList, 'seat ids of currently selected seats');

    const thisBookingId = dataProvider.bookTickets(thisScreening.id, thisScreening.seatprice, selectedSeatIdList);

    // checking if seats available after booking
    let noOfSeatsBooked = 0;
    seatElements.forEach(seatElement => {
      if (seatElement.classList.contains('seat-disabled') || seatElement.classList.contains('seat-selected')) {
        noOfSeatsBooked++;
      }
    });
    // turning seat availibility false in screening table
    if (dataServer.getAllSeatsByScreening(thisScreening.id).length == noOfSeatsBooked) {
      // console.log('Housefull');
      dataProvider.screeningHousefull(thisScreening.id);
    }

    window.open('./ticket.html?bookingid=' + thisBookingId, '_self');
  });
  return {
    backToMoviePage: function () {
      window.open('./movieinfo.html?movieid=' + thisMovie.id, '_self');
    },
  };
})();
