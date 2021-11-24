const container = document.querySelector('.container');
const input = document.querySelector('.movie-input');
const btn = document.querySelector('.movie-btn');
const movieList = document.querySelector('.movie-list');

let page = 1;
btn.addEventListener('click', async () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }
    container.removeChild(container.lastChild);
    const keyword = input.value;
    let movies = await movieSearch(keyword, page);
    console.log(movies);
    if (movies) {
        displayMovies(movies);
        const moreBtn = document.createElement('button');
        moreBtn.classList.add('more-btn')
        moreBtn.innerText = 'Load more...'
        container.appendChild(moreBtn);
        moreBtn.addEventListener('click', async () => {
            page++;
            movies = await movieSearch(keyword, page);
            displayMovies(movies);
        })
        input.value = '';
        movies = [];
    } else {
        alert('keyword does not exist!')
    }
    console.log(movies);

})

const displayMovies = (movies) => {
    movies.map(movie => {
        const div = document.createElement('div');
        div.classList.add('movie-info')
        div.innerHTML = `
         <img class='movie-image' src=${movie.Poster} alt=${movie.Title}/>
         <p class='movie-title'>${movie.Title}</p>
         <p class='movie-year'>${movie.Year}</p>
        `;
        movieList.appendChild(div);
    });
}

const movieSearch = async (keyword, page) => {

    const res = await Promise.all([fetch(`https://www.omdbapi.com/?apikey=32daa8f4&s=${keyword}&page=${page}`),
    fetch(`https://www.omdbapi.com/?apikey=32daa8f4&s=${keyword}&page=${page + 1}`)]);

    const data = await Promise.all(res.map(res => res.json()));
    const movies = data[0].Search.concat(data[1].Search);
    return movies;
}