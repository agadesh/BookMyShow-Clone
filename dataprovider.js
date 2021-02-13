const dataProvider = (function () {
  function renderMovieList(movieList) {
    dataServer.getMovies().forEach(movie => {
      let tagList = '';
      movie.tags.forEach(tag => {
        tagList += tag + '/';
      });
      tagList = tagList.slice(0, -1); // removing last '/'

      movieList.innerHTML += `<div class="movie-list-item">
      <img src=${movie.movImgURL} alt="movie-poster" />
      <h4>${movie.name}</h4>
      <p>${tagList}</p>
    </div>`;
    });
  }
  function renderMovieDetails(movieId) {
    const movieInfoBar = document.querySelector('.movie-infobar-wrapper');
    const thisMovie = dataServer.getMovies().find(function (movie) {
      return movie.id == movieId;
    });

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

    sessionStorage.setItem('movieName', thisMovie.name);
  }

  return {
    renderMovieList: renderMovieList,
    renderMovieDetails: renderMovieDetails,
  };
})();
