var modal = document.querySelector('.seat-modal');
var seatList = document.querySelectorAll('.seat-no-list-item');
var vehicleImage = document.querySelector('.seat-image img');
var selectSeats = document.querySelector('.select-seat-btn');
var noOfSeatsChanger = document.querySelector('.no-of-tickets');
var noOfSeats = document.querySelector('.no-of-tickets span');
//display modal
// window.onload = modal.style.display = 'block';

noOfSeatsChanger.onclick = function () {
  modal.style.display = 'block';
};
window.onload = sessionStorage.setItem('seats', 2);
function seatChangeInBar() {
  noOfSeats.innerHTML = sessionStorage.getItem('seats');
}
seatChangeInBar();
selectSeats.onclick = function () {
  modal.style.display = 'none';
};
// ****************************** NO OF SEATS SELECTOR

document.getElementsByName('sradio-btn').forEach((elem, i) => {
  elem.addEventListener('change', function (event) {
    seatList[i].classList.add('sn-active');
    sessionStorage.setItem('seats', document.getElementsByName('sradio-btn')[i].value);
    seatChangeInBar();
    for (let a = 0; a < 10; a++) {
      if (a != i) {
        seatList[a].classList.remove('sn-active');
      }
    }
  });
});
//  ******************************** NO OF SEATS MODAL IMAGE ANIMATION

seatList.forEach((seatno, i) => {
  seatno.addEventListener('mouseover', () => {
    vehicleImage.src = './media/seatno/seat' + (i + 1) + '.png';
  });
});
seatList.forEach(seatno => {
  seatno.addEventListener('mouseout', () => {
    let noOfSeats = sessionStorage.getItem('seats');
    vehicleImage.src = `./media/seatno/seat${noOfSeats}.png`;
  });
});

// ******************************************************

const seatCostElement = document.querySelector('.seat-cost');
const movieName = document.querySelector('.ticket-movie-name span');
const theatreName = document.querySelector('.ticket-theatre-name');
const ticketTimings = document.querySelector('.ticket-timings');
let thisScreening = dataServer.getScreenings().find(screening => {
  return screening.id == location.search.substring(13);
});
let thisMovie = dataServer.getMovies().find(movie => {
  return movie.id == thisScreening.movieid;
});
let thisTheatre = dataServer.getTheatres().find(theatre => {
  return theatre.id == thisScreening.theatreid;
});
seatCostElement.innerHTML = 'Rs. ' + thisScreening.seatprice + '.00';
movieName.innerHTML = thisMovie.name;
theatreName.innerHTML = thisTheatre.name + ': ' + thisTheatre.address;
ticketTimings.innerHTML = getDay(thisScreening.date) + ', ' + thisScreening.date + ', ' + thisScreening.timing;

function getDay(date) {
  let todayDate = Number(String(new Date()).substring(8, 10));
  let diff = date.substring(4, 6) - todayDate;
  if (diff == 0) {
    return 'Today';
  } else if (diff == 1) {
    return 'Tomorrow';
  } else {
    return String(new Date(new Date().getTime() + 86400000 * diff)).substring(0, 3);
  }
}

const seats = document.querySelectorAll('.seat-column-list .seat-column');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    if (seat.classList.contains('seat-disabled')) return;
    seat.classList.toggle('seat-selected');
  });
});
