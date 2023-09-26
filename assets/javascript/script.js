function searchMovies() {
  $(".container").empty();

  function gerarNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numeroAleatorio = gerarNumeroInteiroAleatorio(1, 100);

  $.ajax({
    url:
      "https://api.themoviedb.org/3/movie/" +
      numeroAleatorio +
      "?api_key=9ab6c07ab0aab370a9aea47a98dbed7a&language=pt-BR",
    method: "GET",
    success: function (data) {
      if (!data.overview || !data.original_title || !data.poster_path) {
        searchMovies();
      } else {
        $(".container").append(`<div class="movie-info">
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" width="171" height="243.77" alt="" class="movie-poster" />
      </div>
      <div>
        <h2 class="movie-title">
          ${data.original_title}
        </h2>
        <p class="movie-description">
          ${data.overview}
        </p>
      </div>`);
      }
    },
    error: function (xhr, status, error) {
      console.error("Ocorreu um erro: " + error);
      searchMovies();
    },
  });
}

$("#describe-movies").click(function () {
  searchMovies();
});
