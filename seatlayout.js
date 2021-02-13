var modal = document.querySelector('.seat-modal');
var seatList = document.querySelectorAll('.seat-no-list-item');
var vehicleImage = document.querySelector('.seat-image img');
var selectSeats = document.querySelector('.select-seat-btn');

window.onload = modal.style.display = 'block'; //display modal
window.onload = sessionStorage.setItem('seats', 2);

selectSeats.onclick = function () {
  modal.style.display = 'none';
};
// ****************************** NO OF SEATS SELECTOR

document.getElementsByName('sradio-btn').forEach((elem, i) => {
  elem.addEventListener('change', function (event) {
    seatList[i].classList.add('sn-active');
    sessionStorage.setItem('seats', document.getElementsByName('sradio-btn')[i].value);
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

let thisScreening = dataServer.getScreenings().find(screening => {
  return (screening.id = location.search.substring(13));
});

seatCostElement.innerHTML = thisScreening.seatprice;
