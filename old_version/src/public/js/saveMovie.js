async function saveMovie(movieId) {
    let formData = new FormData();
    formData.append("id", movieId);

    const response = await fetch("/movie/save", {
        method: "POST",
        body: formData
    });

    const data = await response.json();
    console.log(data);
}