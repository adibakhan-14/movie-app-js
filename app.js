const apiKey = "00f4a14209183016861917783607d7ab"
const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=00f4a14209183016861917783607d7ab&page=10";

const imgReq = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"

const search = "https://api.themoviedb.org/3/search/movie?"


async function fetchData(endpoint, key) {
    const url = endpoint + '&api_key' + key;
    const res = await fetch(url);
    const data = await res.json();
    renderMovies(data.results);
}

fetchData(url, apiKey);

//rendering section
//caching the html elements
const main = document.querySelector('.main');
//render function
function renderMovies(movies) {
    main.innerHTML = "";
    movies.map((movie) => {
        const title = movie.original_title;
        const poster = imgReq + movie.poster_path;
        const rating = movie.vote_average;
        const desc = movie.overview;
        main.innerHTML += `
        <div class="movie">
        <img
            src="${poster}"
            alt="poster"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="green">${rating}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${desc}</p>
        </div>
    </div>
    `
    })

}

///search section
// caching the html elements

const form = document.querySelector('form');
const input = form.querySelector('.search');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const inputVal = input.value.trim();
    console.log(inputVal);
    const url = search + inputVal;
    console.log(url);

    fetchData(url, apiKey)
});