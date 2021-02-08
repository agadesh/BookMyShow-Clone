var modal = document.querySelector('.seat-modal');
var seatList = document.querySelectorAll('.seat-no-list-item');
var vehicleImage = document.querySelector('.seat-image img');

window.onload = modal.style.display = 'block';
window.onload = sessionStorage.setItem('seats', 2);
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };

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
