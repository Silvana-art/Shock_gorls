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
        name: 'Ana de Armas',
        image: '/Bilder/Mainpage/3D/anadearmas_3D.png',
        hoverImage: '/Bilder/Mainpage/raw/anadearmas_raw.png'
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

const searchBox = document.getElementById('searchBocks');

const container = document.getElementById('app');

function displayActors(actors) {

    container.innerHTML = '';

    actors.forEach(actor => {

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.src = actor.image;
        image.alt = actor.name;
        image.classList.add('image');

        const hoverImage = document.createElement('img');
        hoverImage.src = actor.hoverImage;
        hoverImage.alt = actor.name;
        hoverImage.classList.add('hoverimage');

        const nameOverlay = document.createElement('div');
        nameOverlay.classList.add('name-overlay');
        nameOverlay.innerText = actor.name;

        imageContainer.appendChild(image);
        imageContainer.appendChild(hoverImage);
        imageContainer.appendChild(nameOverlay);

        container.appendChild(imageContainer);

        imageContainer.addEventListener('mouseover', function() {
            hoverImage.style.opacity = '1';
            nameOverlay.style.opacity = '1';
        });

        imageContainer.addEventListener('mouseout', function() {
            hoverImage.style.opacity = '0';
            nameOverlay.style.opacity = '0';
        });

        imageContainer.addEventListener('click', function() {
            showMovies(actor);
        });
    });
}

displayActors(actors);

searchBox.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredActors = actors.filter(actor => actor.name.toLowerCase().includes(searchTerm));
    displayActors(filteredActors);
});

async function fetchData(actorName) {
    const apiKey = '754711d5f2e577bae7dc53ecdd0d7105'; 
    try {

        let response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(actorName)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        if (data.results.length === 0) {
            return [];
        }

        const actorId = data.results[0].id;

        response = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        data = await response.json();
        return data.cast.map(movie => movie.title);  
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function showMovies(actor) {

    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const movieList = document.getElementById('movieList');
    const closeModal = document.querySelector('.close');
    const actorImage = document.getElementById('actorImage'); 

    modalTitle.innerText = `Movies of ${actor.name}`;
    movieList.innerHTML = 'Loading...';

    actorImage.src = actor.image; 
    actorImage.alt = actor.name;

    const movies = await fetchData(actor.name);

    movieList.innerHTML = '';

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

    modal.style.display = 'block';

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

document.body.style.backgroundColor = "blue";

document.addEventListener('DOMContentLoaded', function() {
    var burgerButton = document.getElementById('burgerbutton');
    var menu = document.getElementById('menu');

    burgerButton.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.toggle('show-menu');  
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && menu.classList.contains('show-menu')) {
            menu.classList.remove('show-menu');
        }
    });
});



