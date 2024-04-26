const app = document.querySelector('#app'); //Konstanten immer oben

init();
async function init() {
    let url = 'https://api.themoviedb.org/3/discover/movie';
    let movies = await fetchData(url);

    // console.log(movies.results[0].original_title);

    movies.results.forEach(movie => {
        createMovies(movie);});
}

function createMovies(movie) {
    app.innerHTML += `
    <div class="movie">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title}">
        <h2>${movie.original_title}</h2>
        <p>${movie.overview}</p>
    </div>
    `;

}









































































//nicht mehr anfassen!!
async function fetchData(url) {
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTQ3MTFkNWYyZTU3N2JhZTdkYzUzZWNkZDBkNzEwNSIsInN1YiI6IjY2MmI2N2I5YjU0MDAyMDExYzA0M2Q4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XrVEvmgEJaMlfQoxXhBpQVHtwei0VF9ErpyJ4QmoeO0'
            }
          };
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
//nicht mehr anfassen!!



