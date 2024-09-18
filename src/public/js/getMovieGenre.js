window.addEventListener("load", () => {
    async function fetchMovieGenre() {
        const response = await fetch("/movie/all-genres");
        return response.json();
    }

    async function fillMovieGenreSelect() {
        const result = await fetchMovieGenre();
        const select = document.getElementById("movieGenre");
        let option = "";

        select.innerHTML += `<option value="all">Peu importe</option>`;

        for (let i = 0; i < result.length; i++) {
            const movieGenre = result[i];
            option = `<option value="${movieGenre._id}">${movieGenre.name}</option>`;
            select.innerHTML += option;
        }

        setDefaultSelectedOption(select);
    }

    async function setDefaultSelectedOption(select) {
        const movieGenre = localStorage.getItem("movieGenre");
        if (movieGenre) {
            select.value = movieGenre;
        }
    }

    fillMovieGenreSelect();
})