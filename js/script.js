const actors = [
    {
        name: 'Anne Hathaway',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png'
    },
    {
        name: 'Jason Statham',
        image: '/Bilder/jason.png',
        hoverImage: '/Bilder/jason_hover.png'
    },
    {
        name: 'Johnny Depp',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png'
    },
    {
        name: 'Matt Damon',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/mattdamon_hover.png'
    },
    {
        name: 'Harrison Ford',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/harrisonford_hover.png'
    },
    {
        name: 'Florence Pugh',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/florencepugh_hover.png'
    },
    {
        name: 'Emma Stone',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/emmastone_hover.png'
    },
    {
        name: 'Jason Momoa',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jasonmomoa_hover.png'
    },
    {
        name: 'Anna Sawai',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annasawai_hover.png'
    },
    {
        name: 'Nava Mau',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/navamau_hover.png'
    },
    {
        name: 'Ella Purnell',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/ellapurnell_hover.png'
    },
    {
        name: 'Jessica Gunning',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jessicagunning_hover.png'
    },
    {
        name: 'Eva Green',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/evagreen_hover.png'
    },
];

// Get the search input element
const searchBox = document.getElementById('searchBocks');

// Get the container element where images will be appended
const container = document.getElementById('app');

// Function to display actors
function displayActors(actors) {
    // Clear the container first
    container.innerHTML = '';

    actors.forEach(actor => {
        // Create a div element for each image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Create an img element for the main image
        const image = document.createElement('img');
        image.src = actor.image;
        image.alt = actor.name;
        image.classList.add('image');

        // Create an img element for the hover image
        const hoverImage = document.createElement('img');
        hoverImage.src = actor.hoverImage;
        hoverImage.alt = actor.name;
        hoverImage.classList.add('hoverimage');

        // Create a div element for the actor's name
        const nameOverlay = document.createElement('div');
        nameOverlay.classList.add('name-overlay');
        nameOverlay.innerText = actor.name;

        // Add the main image, hover image, and name overlay to the image container
        imageContainer.appendChild(image);
        imageContainer.appendChild(hoverImage);
        imageContainer.appendChild(nameOverlay);

        // Add the image container to the main container
        container.appendChild(imageContainer);

        // Add an event listener for the hover effect
        imageContainer.addEventListener('mouseover', function() {
            hoverImage.style.opacity = '1';
            nameOverlay.style.opacity = '1';
        });

        imageContainer.addEventListener('mouseout', function() {
            hoverImage.style.opacity = '0';
            nameOverlay.style.opacity = '0';
        });

        // Add an event listener for the click event to open the modal
        imageContainer.addEventListener('click', function() {
            showMovies(actor);
        });
    });
}

// Initial display of actors
displayActors(actors);

// Event listener for search input
searchBox.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredActors = actors.filter(actor => actor.name.toLowerCase().includes(searchTerm));
    displayActors(filteredActors);
});

// Function to fetch data from API
async function fetchData(actorName) {
    const apiKey = '754711d5f2e577bae7dc53ecdd0d7105';  // Replace with your actual API key
    try {
        // Search for the actor by name
        let response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(actorName)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        if (data.results.length === 0) {
            return [];
        }

        // Get the actor's ID
        const actorId = data.results[0].id;

        // Fetch the movie credits using the actor's ID
        response = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        data = await response.json();
        return data.cast.map(movie => movie.title);  // Extract and return movie titles
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Function to show movies in a modal
async function showMovies(actor) {
    // Get the modal elements
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const movieList = document.getElementById('movieList');
    const closeModal = document.querySelector('.close');
    const actorImage = document.getElementById('actorImage'); // New line to get the image element

    // Set the modal title
    modalTitle.innerText = `Movies of ${actor.name}`;
    movieList.innerHTML = 'Loading...';

    // Set the actor image source
    actorImage.src = actor.image; // Assuming the image path is stored in the actor object
    actorImage.alt = actor.name;

    // Fetch the movies for the actor
    const movies = await fetchData(actor.name);

    // Clear the loading text
    movieList.innerHTML = '';

    // Display the movies in the list
    if (movies.length === 0) {
        movieList.innerText = 'No movies found.';
    } else {
        movies.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.classList.add('movie-item');
            listItem.innerText = movie;
            movieList.appendChild(listItem);
        });
    }

    // Display the modal
    modal.style.display = 'block';

    // Close the modal when the user clicks the close button
    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    // Close the modal when the user clicks outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
