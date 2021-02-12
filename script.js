// ************************************ RENDERING MOVIE LIST

const movieList = document.querySelector('.movie-list');

dataProvider.renderMovieList(movieList);

// ************************************ PASSING MOVIE ID IN URL

const movieListItems = document.querySelectorAll('.movie-list-item');

(function openMovieInfoPage() {
  movieListItems.forEach((movie, i) => {
    movie.addEventListener('click', () => {
      window.open('./movieinfo.html?movieid=' + dataServer.getMovies()[i].id, '_self');
    });
  });
})();

// ************************************ CAROUSAL SLIDER

function slideCarousal(carousalSlidePostion) {
  const carousalSlide = document.querySelector('.carousal-slide');
  const carousalImageWidth = 940;
  carousalSlide.style.transform = 'translateX(' + -((carousalImageWidth + 10) * carousalSlidePostion) + 'px)';
  document.getElementsByName('carousal-radio-btn')[carousalSlidePostion].checked = true;
}

let carousalSlideCounter = 0;
const time = 3000;
let repeat;

(function CarousalSlideSelector() {
  document.getElementsByName('carousal-radio-btn').forEach(elem => {
    elem.addEventListener('change', function (event) {
      clearTimeout(repeat);
      carousalSlideCounter = event.target.value - 1;
      slideCarousal(carousalSlideCounter);
      repeat = setTimeout('autoChangeCarousalSlide()', time);
    });
  });
})();

const carousalNoOfImages = document.querySelectorAll('.carousal-slide img').length;

function moveCarousalSlideNext() {
  if (carousalSlideCounter >= carousalNoOfImages - 3) {
    carousalSlideCounter = 0;
    slideCarousal(carousalSlideCounter);
  } else {
    carousalSlideCounter++;
    slideCarousal(carousalSlideCounter);
  }
}

const carousalNextBtn = document.querySelector('#nextBtn');

(function readCarousalClickNext() {
  carousalNextBtn.addEventListener('click', () => {
    moveCarousalSlideNext();
    clearTimeout(repeat);
    repeat = setTimeout('autoChangeCarousalSlide()', time);
  });
})();

function moveCarousalSlidePrev() {
  if (carousalSlideCounter <= 0) {
    carousalSlideCounter = carousalNoOfImages - 3;
    slideCarousal(carousalSlideCounter);
  } else {
    carousalSlideCounter--;
    slideCarousal(carousalSlideCounter);
  }
}

const carousalPrevBtn = document.querySelector('#prevBtn');

(function readCarousalClickPrev() {
  carousalPrevBtn.addEventListener('click', () => {
    moveCarousalSlidePrev();
    clearTimeout(repeat);
    repeat = setTimeout('autoChangeCarousalSlide()', time);
  });
})();

// ***************************** AUTO CAROUSAL SLIDER

function autoChangeCarousalSlide() {
  moveCarousalSlideNext();
  repeat = setTimeout('autoChangeCarousalSlide()', time);
}
//Initializing Auto Carousal Slider
repeat = setTimeout('autoChangeCarousalSlide()', time);

// ************************************ MOVIELIST SLIDER

const movieListItemWidth = movieListItems[0].clientWidth;

function slideMovieList(movieListSlidePostion) {
  movieList.style.transform = 'translateX(' + -movieListItemWidth * 5.55 * movieListSlidePostion + 'px)';
}

const viewAllBtn = document.querySelector('#viewAll');
const movieListNextBtn = document.querySelector('#mnextBtn');
const movieListPrevBtn = document.querySelector('#mprevBtn');

(function checkMovieNo() {
  if (movieListItems.length <= 5) {
    movieListNextBtn.classList.add('hide');
    viewAllBtn.classList.add('hide');
  }
})();

let movieListPage = 0;

(function readMovieListClickPrev() {
  movieListPrevBtn.addEventListener('click', () => {
    movieListPage--;
    slideMovieList(movieListPage);
    if ((movieListPage + 1) * 5 < movieListItems.length) {
      movieListNextBtn.classList.remove('hide');
    }
    if (movieListPage == 0) {
      movieListPrevBtn.classList.add('hide');
    }
  });
})();

(function readMovieListClickNext() {
  movieListNextBtn.addEventListener('click', () => {
    movieListPage++;
    slideMovieList(movieListPage);
    if (movieListPage != 0) {
      movieListPrevBtn.classList.remove('hide');
    }
    if ((movieListPage + 1) * 5 >= movieListItems.length) {
      movieListNextBtn.classList.add('hide');
    }
  });
})();

(function readViewAllBtnClick() {
  let viewAllFlag = false;
  viewAllBtn.addEventListener('click', () => {
    movieListPage = 0;
    viewAllFlag = !viewAllFlag;
    if (viewAllFlag == true) {
      movieList.style.transform = 'translateX(' + -movieListItemWidth * -0.5 + 'px)';
      movieListNextBtn.classList.add('hide');
      movieListPrevBtn.classList.add('hide');
    } else if (viewAllFlag == false) {
      movieList.style.transform = 'translateX(' + -movieListItemWidth * 0 + 'px)';
      movieListPrevBtn.classList.add('hide');
      movieListNextBtn.classList.remove('hide');
    }
    movieList.classList.toggle('wrap');
  });
})();
