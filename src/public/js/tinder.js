let imgCount = 0;
const frame = document.body.querySelector('.frame');
let current;


// Function to create card data from movie data
async function createCardData() {
    let movie = null;
    const movieGenre = localStorage.getItem("movieGenre");
    console.log(movieGenre);
    if (movieGenre === "all" || movieGenre === null) {
        movie = await fetchMovieData();
    } else
        movie = await fetchMovieDataByGenre(movieGenre);

    return {
        id: movie.id,
        img: movie.poster_path,
        title: movie.title,
    };
}


// Add initial cards
async function initializeCards() {

    const cardDataArray = await Promise.all([
        createCardData(),
        createCardData(),
        createCardData(),
        createCardData()
    ]);

    cardDataArray.forEach(data => appendCard(data));

    // Initialize the current card
    current = frame.querySelector('.card:last-child');
    likeText = current.children[0];
    initCard(current);
}


function appendCard(data) {
    const firstCard = frame.children[0];
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.style.backgroundImage = `url(${data.img})`;
    newCard.setAttribute('data-id', data.id);
    newCard.innerHTML = `
    <div class="is-like">LIKE</div>
    <div class="bottom">
        <div class="title">
            <span>${data.title}</span>
        </div>
    </div>
    `;
    if (firstCard) frame.insertBefore(newCard, firstCard);
    else frame.appendChild(newCard);
    imgCount++;
}

function initCard(card) {
    card.addEventListener('pointerdown', onPointerDown);
}

initializeCards();
