const actors = [
    {
        name: 'Alexandra Daddario',
        image: '/Bilder/Mainpage/3D/alexandradaddario_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/alexandradaddario_raw.png'
    },
    {
        name: 'Angelina Jolie',
        image: '/Bilder/Mainpage/3D/angelinajolie_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/angelinajolie_raw.png'
    },
    {
        name: 'Anna Sawai',
        image: '/Bilder/Mainpage/3D/annasawai_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/annasawai_raw.png'
    },
    {
        name: 'Bryan Cranston',
        image: '/Bilder/Mainpage/3D/bryancranston_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/bryancranston_raw.png'
    },
    {
        name: 'Ella Purnell',
        image: '/Bilder/Mainpage/3D/ellapurnell_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/ellapurnell_raw.png'
    },
    {
        name: 'Emma Stone',
        image: '/Bilder/Mainpage/3D/emmastone_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/emmastone_raw.png'
    },
    {
        name: 'Ethan Hawke',
        image: '/Bilder/Mainpage/3D/ethanhawke_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/ethanhawke_raw.png'
    },
    {
        name: 'Eva Green',
        image: '/Bilder/Mainpage/3D/evagreen_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/evagreen_raw.png'
    },
    {
        name: 'Florence Pugh',
        image: '/Bilder/Mainpage/3D/florencepugh_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/florencepugh_raw.png'
    },
    {
        name: 'Gal Gadot',
        image: '/Bilder/Mainpage/3D/galgadot_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/galgadot_raw.png'
    },
    {
        name: 'Gina Gershon',
        image: '/Bilder/Mainpage/3D/ginagershon_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/ginagershon_raw.png'
    },
    {
        name: 'Harrison Ford',
        image: '/Bilder/Mainpage/3D/harrisonford_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/harrisonford_raw.png'
    },
    {
        name: 'Jack Black',
        image: '/Bilder/Mainpage/3D/jackblack_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/jackblack_raw.png'
    },
    {
        name: 'Jason Momoa',
        image: '/Bilder/Mainpage/3D/jasonmomoa_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/jasonmomoa_raw.png'
    },
    {
        name: 'Jenna Ortega',
        image: '/Bilder/Mainpage/3D/jennaortega_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/jennaortega_raw.png'
    },
    {
        name: 'John Goodman',
        image: '/Bilder/Mainpage/3D/johngoodman_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/johngoodman_raw.png'
    },
    {
        name: 'Johnny Depp',
        image: '/Bilder/Mainpage/3D/johnnydepp_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/johnnydepp_raw.png'
    },
    {
        name: 'Kevin Hart',
        image: '/Bilder/Mainpage/3D/kevinhart_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/kevinhart_raw.png'
    },
    {
        name: 'Kristen Stewart',
        image: '/Bilder/Mainpage/3D/kristenstewart_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/kristenstewart_raw.png'
    },
    {
        name: 'Liam Neeson',
        image: '/Bilder/Mainpage/3D/liamneeson_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/liamneeson_raw.png'
    },
    {
        name: 'Marry Shelley',
        image: '/Bilder/Mainpage/3D/maryshelley_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/maryshelley_raw.png'
    },
    {
        name: 'Matt Damon',
        image: '/Bilder/Mainpage/3D/mattdamon_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/mattdamon_raw.png'
    },
    {
        name: 'Millie Bobby Brown',
        image: '/Bilder/Mainpage/3D/milliebobbybrown_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/milliebobbybrown_raw.png'
    },
    {
        name: 'Nicolas Cage',
        image: '/Bilder/Mainpage/3D/nicolascage_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/nicolascage_raw.png'
    },
    {
        name: 'Nicole Kidman',
        image: '/Bilder/Mainpage/3D/nicolekidman_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/nicolekidman_raw.png'
    },
    {
        name: 'Robert De Niro',
        image: '/Bilder/Mainpage/3D/robertdeniro_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/robertdeniro_raw.png'
    },
    {
        name: 'Rosamund Pike',
        image: '/Bilder/Mainpage/3D/rosamundpike_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/rosamundpike_raw.png'
    },
    {
        name: 'Russell Crowe',
        image: '/Bilder/Mainpage/3D/russellcrowe_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/russellcrowe_raw.png'
    },
    {
        name: 'Sylvester Stallone',
        image: '/Bilder/Mainpage/3D/sylvesterstallone_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/sylvesterstallone_raw.png'
    },
    {
        name: 'Uma Thurman',
        image: '/Bilder/Mainpage/3D/umathurman_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/umathurman_raw.png'
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

document.body.style.backgroundColor = "blue";


