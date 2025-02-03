document.getElementById("categoryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let movieGenre = document.getElementById("movieGenre").value;
    localStorage.setItem("movieGenre", movieGenre);
    window.location.reload();
})