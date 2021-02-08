const dateprevBtn = document.querySelector('#dateprevBtn');
const datenextBtn = document.querySelector('#datenextBtn');
const dateList = document.querySelector('.date-selector');
const date = document.querySelectorAll('.date-item');
let pos = 0;
datenextBtn.addEventListener('click', () => {
  if (pos >= 7) return;
  pos++;
  dateList.style.transform = 'translateX(' + -47 * pos + 'px)';
});
dateprevBtn.addEventListener('click', () => {
  if (pos == 0) return;
  pos--;
  dateList.style.transform = 'translateX(' + -47 * pos + 'px)';
});

document.getElementsByName('dradio-btn').forEach((elem, i) => {
  elem.addEventListener('change', function (event) {
    pos = event.target.value - 1;
    dateList.style.transform = 'translateX(' + -47 * pos + 'px)';
    date[i].classList.add('di-active');
    for (let a = 0; a < 8; a++) {
      if (a != i) {
        date[a].classList.remove('di-active');
      }
    }
  });
});
const infoBanner = document.querySelector('.info-banner');
const closeBanner = document.querySelector('#closeBanner');

closeBanner.addEventListener('click', () => {
  infoBanner.style.display = 'none';
});
var movieIndex = window.location.search.substring(1);
console.log(movieIndex);

const movieName = document.querySelector('#dateprevBtn');
