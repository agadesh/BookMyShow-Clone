const dataService = (function () {
  function openMovieInfoPage(movieListItems) {
    movieListItems.forEach((movie, i) => {
      movie.addEventListener('click', () => {
        window.open('./movieinfo.html?movieid=' + dataServer.getMovies()[i].id, '_self');
      });
    });
  }
  return {
    openMovieInfoPage: openMovieInfoPage,
  };
})();
