// ************************************** INFO BANNER CLOSE BUTTON

(function readInfoBannerCloseBtn() {
  const infoBanner = document.querySelector('.info-banner');
  const closeBannerBtn = document.querySelector('#closeBanner');
  closeBannerBtn.addEventListener('click', () => {
    infoBanner.style.display = 'none';
  });
})();

// **************************************MOVIE DATA

const movieId = location.search.substring(9);
dataProvider.renderMovieDetails(movieId);

// ************************DATE SLIDER

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
    sessionStorage.setItem('movieDate', String(new Date(currentDate.getTime() + 86400000 * pos)).substring(0, 15));
    for (let a = 0; a < 8; a++) {
      if (a != i) {
        date[a].classList.remove('di-active');
      }
    }
  });
});

// *************DATE ARRAY

var currentDate = new Date();
sessionStorage.setItem('movieDate', String(currentDate).substring(0, 15));
let dateArray = [0, 1, 2, 3, 4, 5, 6, 7];
let dayArray = [0, 1, 2, 3, 4, 5, 6, 7];

dateArray.forEach((date, i) => {
  dateArray[i] = String(new Date(currentDate.getTime() + 86400000 * i));
  dayArray[i] = dateArray[i].substring(0, 3);
  dateArray[i] = dateArray[i].substring(8, 10);
});
dayArray[0] = 'Today';

const dates = document.querySelectorAll('.date-selector .date');
const days = document.querySelectorAll('.date-selector .day');

dates.forEach((date, i) => {
  date.innerHTML = dateArray[i];
});
days.forEach((day, i) => {
  day.innerHTML = dayArray[i];
});

// ***************************THEATRE SELECT

const theatre1Timings = document.querySelectorAll('.theatre1-timing');

theatre1Timings.forEach(timing => {
  timing.addEventListener('click', () => {
    window.open('./seatlayout.html', '_self');
    sessionStorage.setItem('movieTheatre', movieTheatres[0]);
    sessionStorage.setItem('movieTime', timing.innerHTML);
  });
});
const theatre2Timings = document.querySelectorAll('.theatre2-timing');

theatre2Timings.forEach(timing => {
  timing.addEventListener('click', () => {
    window.open('./seatlayout.html', '_self');
    sessionStorage.setItem('movieTheatre', movieTheatres[1]);
    sessionStorage.setItem('movieTime', timing.innerHTML);
  });
});
const theatre3Timings = document.querySelectorAll('.theatre3-timing');

theatre3Timings.forEach(timing => {
  timing.addEventListener('click', () => {
    window.open('./seatlayout.html', '_self');
    sessionStorage.setItem('movieTheatre', movieTheatres[2]);
    sessionStorage.setItem('movieTime', timing.innerHTML);
  });
});
