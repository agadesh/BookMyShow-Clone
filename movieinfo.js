const movieInfo = (function () {
  // ************************************** INFO BANNER CLOSE BUTTON

  const infoBanner = document.querySelector('.info-banner');
  const closeBannerBtn = document.querySelector('#closeBanner');
  closeBannerBtn.addEventListener('click', () => {
    infoBanner.style.display = 'none';
  });

  // ************************************** RENDERING MOVIE DATA

  const movieId = location.search.substring(9);
  const thisMovie = dataServer.getMovie(movieId);
  const movieInfoBar = document.querySelector('.movie-infobar-wrapper');
  let movieTagList = '';
  thisMovie.tags.forEach(tag => {
    movieTagList += `<div class="keyword">${tag}</div>`;
  });

  movieInfoBar.innerHTML = `<div class="movie-infobar">
  <p class="movie-name"><span>${thisMovie.name}</span></p>
  <div class="movie-info">
  <span class="ua-cert">UA</span>
  <div class="review">
  <div class="rating">
          <i class="ms-Icon ms-Icon--HeartFill heart-review"></i>
          <span class="likes">${thisMovie.likes + ' %'}</span>
          </div>
          <span class="votes">${thisMovie.votes + ' VOTES'}</span>
          </div>
          <div class="tags">${movieTagList}</div>
          <p class="release-date">${thisMovie.release}</p>
          <p class="duration"><i class="ms-Icon ms-Icon--Timer"></i><span>${thisMovie.duration}</span></p>
          </div>
          </div>`;

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

  // ******************************************************* DATE SELECTOR
  let showDate = String(new Date()).substring(4, 10);
  const dateItem = document.querySelectorAll('.date-item');

  document.getElementsByName('dradio-btn').forEach((elem, i) => {
    elem.addEventListener('change', function (event) {
      dateListPosition = event.target.value - 1;
      DateSlide(dateListPosition);
      dateItem[i].classList.add('di-active');
      showDate = String(new Date(currentDate.getTime() + 86400000 * dateListPosition)).substring(4, 10);
      console.log(showDate, 'date'); //Showing date
      renderTheatres();

      for (let a = 0; a < 8; a++) {
        if (a != i) {
          dateItem[a].classList.remove('di-active');
        }
      }
    });
  });

  // ********************************** RENDER THEATRE SCREENINGS

  function renderTheatres() {
    const theatreListElement = document.querySelector('.theatre-list');
    theatreListElement.innerHTML = '';

    const screeningsformovie = dataProvider.showscreeningsformovie(showDate, movieId);

    if (screeningsformovie.screeningsOnDate.length == 0) {
      theatreListElement.innerHTML = '<div class="no-shows">No Shows on Date. Please select another date.</div>';
      return;
    }
    screeningsformovie.theatresOnDate.forEach(theatreId => {
      const thisTheatre = dataServer.getTheatre(theatreId);
      let screeningsList = '';
      // get screenings for theatre
      screeningsformovie.screeningsOnDate.forEach(screening => {
        if (screening.theatreid == theatreId) {
          screeningsList += `<div class="theatre-timing" onclick="movieInfo.selectTimeslot(${screening.id})">${screening.timing}</div>`;
        }
      });

      //  render theatre
      theatreListElement.innerHTML += `<div class="theatre">
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
        <div class="theatre-timings-list">${screeningsList}
        </div>
        </div>
        </div>`;
    });
  }
  renderTheatres();

  function selectTimeslot(screeningid) {
    window.open(`./seatlayout.html?screeningid=${screeningid}`, '_self');
  }
  return {
    selectTimeslot: selectTimeslot,
  };
})();
