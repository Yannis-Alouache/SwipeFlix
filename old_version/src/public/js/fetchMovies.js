async function fetchMovieData() {
    const response = await fetch("/movie/random");
    const result = await response.json();
    return result;
}

async function fetchMovieDataByGenre(genre) {
    const response = await fetch(`/movie/genre/${genre}`);
    const result = await response.json();
    return result;
}