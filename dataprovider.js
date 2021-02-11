const dataProvider = (function () {
  function renderMovieList(movieList) {
    dataServer.getMovies().forEach(movie => {
      let tagList = '';
      movie.tags.forEach(tag => {
        tagList += tag + '/';
      });
      tagList = tagList.slice(0, -1); //removing last '/'
      movieList.innerHTML += `<div class="movie-list-item">
    <img src=${movie.movImgURL} alt="movie-poster" />
    <h4>${movie.name}</h4>
    <p>${tagList}</p>
    </div>`;
    });
  }

  return {
    renderMovieList: renderMovieList,
  };
})();
