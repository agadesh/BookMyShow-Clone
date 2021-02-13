// ************************************** INFO BANNER CLOSE BUTTON

const infoBanner = document.querySelector('.info-banner');
const closeBannerBtn = document.querySelector('#closeBanner');
closeBannerBtn.addEventListener('click', () => {
  infoBanner.style.display = 'none';
});

// ************************************** RENDERING MOVIE DATA

const movieId = location.search.substring(9);
dataProvider.renderMovieDetails(movieId);

// ************************DATE SLIDER

let dateListPosition = 0;
const dateList = document.querySelector('.date-selector');
const dateprevBtn = document.querySelector('#dateprevBtn');
const datenextBtn = document.querySelector('#datenextBtn');

function DateSlide(dateSlidePosition) {
  dateList.style.transform = 'translateX(' + -47 * dateSlidePosition + 'px)';
}
datenextBtn.addEventListener('click', () => {
  if (dateListPosition >= 7) return;
  dateListPosition++;
  DateSlide(dateListPosition);
});
dateprevBtn.addEventListener('click', () => {
  if (dateListPosition == 0) return;
  dateListPosition--;
  DateSlide(dateListPosition);
});

// ************************ DISPLAY DATES FOR A WEEK

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
dayArray[1] = 'TOM';

const dates = document.querySelectorAll('.date-selector .date');
const days = document.querySelectorAll('.date-selector .day');

dates.forEach((date, i) => {
  date.innerHTML = dateArray[i];
});
days.forEach((day, i) => {
  day.innerHTML = dayArray[i];
});

// ********************************************************

let showDate = String(new Date()).substring(4, 10);
const theatreList = document.querySelector('.theatre-list');

function showscreeningsformovie(showDate) {
  let screeningsnow = dataServer.getScreenings().filter(function (screening) {
    return screening.movieid == movieId && screening.date == showDate;
  });
  if (screeningsnow.length == 0) {
    theatreList.innerHTML = '<div class="no-shows">No Shows on Date. Please select another date.</div>';
    return;
  }
  console.log(screeningsnow, 'screenings'); // showing screenings for selected movie on particular date
  let theatres = [];
  screeningsnow.forEach(screening => {
    theatres.push(screening.theatreid);
  });
  theatres = [...new Set(theatres)];
  theatreList.innerHTML = '';
  theatres.forEach(theatreid => {
    const thisTheatre = dataServer.getTheatres().find(theatre => {
      return theatre.id == theatreid;
    });
    let theatreTimingsList = '';
    screeningsnow.forEach(screening => {
      if (screening.theatreid == theatreid) {
        theatreTimingsList += `<div class="theatre-timing" onclick="selectTimeslot(${screening.id})">${screening.timing}</div>`;
      }
    });

    (function renderTheatre() {
      theatreList.innerHTML += `<div class="theatre">
      <i class="ms-Icon ms-Icon--HeartFill"></i>
      <div class="theatre-name-div">
      <p>${thisTheatre.name + ': ' + thisTheatre.address}</p>
      <div class="theatre-icons">
      <div class="theatre-icon-item m-ticket">
      <i class="ms-Icon ms-Icon--CellPhone"></i>
      <p>M-Ticket</p>
      </div>
      <div class="theatre-icon-item food">
      <i class="ms-Icon ms-Icon--EatDrink"></i>
      <p>F&B</p>
      </div>
      </div>
      </div>
        <div class="thinfo-icon">
        <i class="ms-Icon ms-Icon--ShieldSolid"></i>
        <p>INFO</p>
        </div>
        <div class="theatre-timings-div">
        <div class="thinfo-icon">
        <i class="ms-Icon ms-Icon--ShieldSolid"></i>
        <p>My Safety First</p>
        </div>
        <div class="theatre-timings-list">${theatreTimingsList}
        </div>
        </div>
        </div>`;
    })();
  });
}
showscreeningsformovie(showDate);
// ******************************************************* DATE SELECTOR
const dateItem = document.querySelectorAll('.date-item');

document.getElementsByName('dradio-btn').forEach((elem, i) => {
  elem.addEventListener('change', function (event) {
    dateListPosition = event.target.value - 1;
    DateSlide(dateListPosition);
    dateItem[i].classList.add('di-active');
    showDate = String(new Date(currentDate.getTime() + 86400000 * dateListPosition)).substring(4, 10);
    console.log(showDate, 'date'); //Showing date
    showscreeningsformovie(showDate);
    sessionStorage.setItem('movieDate', showDate);
    for (let a = 0; a < 8; a++) {
      if (a != i) {
        dateItem[a].classList.remove('di-active');
      }
    }
  });
});

function selectTimeslot(screeningid) {
  // const currentScreening = dataServer.getScreenings().find(function (screening) {
  //   return screening.id == screeningid;
  // });
  // sessionStorage.setItem('movieTheatreid', currentScreening.theatreid);
  // sessionStorage.setItem('movieTime', currentScreening.timing);
  // console.log(screeningid, currentScreening.theatreid, currentScreening.timing);
  window.open(`./seatlayout.html?screeningid=${screeningid}`, '_self');
}
