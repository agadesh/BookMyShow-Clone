const index = (function () {
  function init() {
    dataServer.loadTablesintoLocalStorage();
  }
  window.onload = init();
  // ************************************ RENDERING MOVIE LIST

  const movieList = document.querySelector('.movie-list');

  dataServer.getMovies().forEach(movie => {
    let tagList = '';
    movie.tags.forEach(tag => {
      tagList += tag + '/';
    });
    tagList = tagList.slice(0, -1); // removing last '/'

    movieList.innerHTML += `<div class="movie-list-item" data-movieid=${movie.id}>
    <img src=${movie.movImgURL} alt="movie-poster" />
    <h4>${movie.name}</h4>
    <p>${tagList}</p>
    </div>`;
  });

  // ************************************ OPENING MOVIE INFO PAGE

  function openMovieInfo(movieslist) {
    movieslist.forEach(movie => {
      movie.addEventListener('click', () => {
        window.open('./movieinfo.html?movieid=' + movie.getAttribute('data-movieid'), '_self');
      });
    });
  }

  const carousalImages = document.querySelectorAll('.carousal-slide img');
  openMovieInfo(carousalImages);

  const movieListItems = document.querySelectorAll('.movie-list-item');
  openMovieInfo(movieListItems);

  // ************************************ MOVIE LIST SLIDER

  const movieListItemWidth = movieListItems[0].clientWidth;

  function slideMovieList(movieListSlidePostion) {
    movieList.style.transform = 'translateX(' + -movieListItemWidth * 5.55 * movieListSlidePostion + 'px)';
  }

  const viewAllBtn = document.querySelector('#viewAll');
  const movieListNextBtn = document.querySelector('#mnextBtn');
  const movieListPrevBtn = document.querySelector('#mprevBtn');

  //  checkMoviePages
  if (movieListItems.length <= 5) {
    movieListNextBtn.classList.add('hide');
    viewAllBtn.classList.add('hide');
  }

  let movieListPage = 0;

  //  readMovieListClickPrev
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

  //  readMovieListClickNext
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

  //  readViewAllBtnClick
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
