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


// Array of image paths
const imagePaths = [
    '/Bilder/bildeins.jpg.webp',
    '/Bilder/bildeins.jpg.webp',
    '/Bilder/annehathaway.png',
];

const hoverImagePaths = [
    '/Bilder/bildzwei.jpg',
    '/Bilder/bildzwei.jpg',
    '/Bilder/annehathaway_hover.png', // Hier muss für jedes Bild der entsprechende Pfad eingetragen werden
];

// Get the container element where images will be appended
const container = document.getElementById('image-container');

// Loop through the imagePaths array
imagePaths.forEach((path, index) => {
    // Create image container div
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container-links', 'bild-container');

    // Create image element
    const image = document.createElement('img');
    image.src = path;
    image.alt = `Image ${index + 1}`;
    image.classList.add('bild'); 

    const hoverImage = document.createElement('img');
    hoverImage.src = hoverImagePaths[index]; // Der entsprechende Hover-Bildpfad wird zugewiesen
    hoverImage.alt = `Hover-Bild ${index + 1}`;
    hoverImage.classList.add('hoverimagelinks');



    
    // Append images to container
    imageContainer.appendChild(image);
    imageContainer.appendChild(hoverImage);
    
    // Append container to main container
    container.appendChild(imageContainer);
});

// Add event listener to container for hover effect using event delegation
container.addEventListener('mouseover', function(event) {
    // Check if the mouseover event is triggered by the hover image
    if (event.target.classList.contains('hoverimagelinks')) {
        // Apply hover effect by changing opacity
        event.target.style.opacity = '1';
    }
});

// Add event listener to container for mouseout event to revert hover effect
container.addEventListener('mouseout', function(event) {
    // Check if the mouseout event is triggered by the hover image
    if (event.target.classList.contains('hoverimagelinks')) {
        // Revert hover effect by changing opacity
        event.target.style.opacity = '0';
    }
});












































































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



