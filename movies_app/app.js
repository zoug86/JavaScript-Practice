const input = document.querySelector('.movie-input');
const searchBtn = document.querySelector('.movie-btn');
const movieContainer = document.querySelector('.movie-list');
const loadBtn = document.querySelector('.load-btn');

let keyword = '';
let page = 1;

searchBtn.addEventListener('click', async () => {
    movieContainer.innerHTML = ''
    keyword = input.value;
    let movies = searchMovies(keyword, page);
    if (movies.length > 0) {
        loadBtn.classList.remove('load-btn-hide')
        loadBtn.classList.add('load-btn-show')
    }
    input.value = '';
})

loadBtn.addEventListener('click', () => {
    page++;
    searchMovies(keyword, page);
})

const searchMovies = async (keyword, page) => {
    const reponse = await fetch(`https://www.omdbapi.com/?apikey=32daa8f4&s=${keyword}&page=${page}`);
    const data = await reponse.json();
    let movies = data.Search;
    movies?.map(movie => {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `
           <img class='movie-img' src=${movie.Poster} alt=${movie.Title}/>
           <span class='movie-title'>${movie.Title}</span>
           <span class='movie-year'>${movie.Year}</span>
        `
        movieContainer.appendChild(div)
    })
    return movies;
}