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

// **************************************

var movieIndex = location.search.substring(7);
const movieName = document.querySelector('.movie-name span');
const moviepercentage = document.querySelector('.percentage');
const movievotes = document.querySelector('.votes');
const movietags = document.querySelector('.tags');
const movieduration = document.querySelector('.duration span');
const movierelease = document.querySelector('.release-date');
const movierating = document.querySelector('.rating');

let thisMovie = movieInfoList[movieIndex];
movieName.innerHTML = thisMovie.name;
moviepercentage.innerHTML = thisMovie.percentage + ' %';
movievotes.innerHTML = thisMovie.votes + ' VOTES';
movierelease.innerHTML = thisMovie.release;
movieduration.innerHTML = thisMovie.duration;
thisMovie.tags.forEach(tag => {
  movietags.innerHTML += `<div class="keyword">${tag}</div>`;
});

// *************DATE ARRAY

var currentDate = new Date();
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
