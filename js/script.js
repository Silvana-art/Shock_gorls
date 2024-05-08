
// const searchBocks = document.querySelector('#searchBocks');
// const app = document.querySelector('#app'); 
//  //Konstanten immer oben
// let url = 'https://api.themoviedb.org/3/person/popular?api_key=754711d5f2e577bae7dc53ecdd0d7105';

// init();
// async function init() {
//     let url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
//     let movies = await fetchData(url);
//     console.log(movies.results[0].known_for[0].title);
//     // console.log(movies.results[0].known_for[0].original_title);

//     // console.log(movies.results[0].original_title);

//     movies.results.forEach(movie => {
//         createItem(movie);});
// }

// function createIten(movie) {
//     app.innerHTML = `
//     <div class="movie">
//         <h2>${results.known_for.title}</h2>
//         <p>${results.known_for.name}</p>
//         <p>${results.known_for.original_title}</p>
//     </div>
//     `;

// }

// async function search() {
//     let searchValue = searchBocks.value;
//     let url = `https://api.themoviedb.org/3/person/popular?api_key=754711d5f2e577bae7dc53ecdd0d7105=${searchValue}`;
//     app.innerHTML = '';
//     let actors = await fetchData(url);
//     actors.results.forEach(actor => {
//         createItem(actor);
//     });
// }

// searchBocks.addEventListener('input', search);


// //Werkzeugkasten von Funktionen
// function createItem(people) {
//     let item = document.createElement('div');
//     item.classList.add('original_title', 'known_for', 'name');
//     item.innerHTML = `
//         <img src="${people.strInstructionsDE}" alt="${people.strknown_for}" class="bild">
//         <h2>${people.strknown_for}</h2>
//         <p>${people.strInstructionsDE}</p>`;
//     app.appendChild(item);
// }


// async function fetchData(url) {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         return data;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// fetchData(url);




// async function Init() {
//     let people = await fetchData(url);
//     console.log(people.known_for[0].strknown_for);

//     people.known_for.forEach(people => {
//         createItem(people);
//     });

// }

































// Bilder und Namen der Schauspieler
const actors = [
    {
        name: 'Anne Hathaway',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png',
    },
    {
        name: 'Jason Statham',
        image: '/Bilder/jason.png',
        hoverImage: '/Bilder/jason_hover.png',
    },
    {
        name: 'Scarlett Johansson',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png',
    },
    {
        name: 'Tom Hanks',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png',
    },
    {
        name: 'Morgan Freeman',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png',
    },
    {
        name: 'Mark Wahlberg',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png',
    },
    {
        name: 'Jackie Chan',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annehathaway_hover.png',
    },
    {
        name: 'Ryan Reynolds',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/ryanreynolds_hover.png',
    },
    {
        name: 'Keanu Reeves',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/keanureeves_hover.png',
    },
    {
        name: 'Clint Eastwood',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/clinteastwood_hover.png',
    },
    {
        name: 'Timothee Chalamet',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/timotheechalamet_hover.png',
    },
    {
        name: 'Arnold Schwarzenegger',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/arnoldschwarzenegger_hover.png',
    },
    {
        name: 'Halle Berry',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/halleberry_hover.png',
    },
    {
        name: 'Denzel Washington',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/denzelwashington_hover.png',
    },
    {
        name: 'Robert Downey Jr',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/robertdowneyjr_hover.png',
    },
    {
        name: 'Emily Blunt',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/emilyblunt_hover.png',
    },
    {
        name: 'Jake Gyllenhaal',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jakegyllenhaal_hover.png',
    },
    {
        name: 'Bruce Willis',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/brucewillis_hover.png',
    },
    {
        name: 'Nicole Kidman',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/nicolekidman_hover.png',
    },
    {
        name: 'Russell Crowe',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/russellcrowe_hover.png',
    },
    {
        name: 'Gina Gershon',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/ginagershon_hover.png',
    },
    {
        name: 'Robert De Niro',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/robertdeniro_hover.png',
    },
    {
        name: 'Ethan Hawke',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/ethanhawke_hover.png',
    },
    {
        name: 'Kristen Stewart',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/kristenstewart_hover.png',
    },
    {
        name: 'Rosamund Pike',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/rosamundpike_hover.png',
    },
    {
        name: 'Kevin Hart',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/kevinhart_hover.png',  
    },
    {
        name: 'Uma Thurman',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/umathurman_hover.png',
    },
    {
        name: 'John Goodman',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/johngoodman_hover.png',
    },
    {
        name: 'Jack Black',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jackblack_hover.png',
    },
    {
        name: 'Angelina Jolie',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/angelinajolie_hover.png',
    },
    {
        name: 'Bryan Cranston',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/bryancranston_hover.png',
    },
    {
        name: 'Sylvester Stallone',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/sylvesterstallone_hover.png', 
    },
    {
        name: 'Ana de Armas',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/anadearmas_hover.png',
    },
    {
        name: 'Alexandra Daddario',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/alexandradaddario_hover.png',
    },
    {
        name: 'Nicolas Cage',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/nicolascage_hover.png',
    },
    {
        name: 'Liam Neeson',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/liamneeson_hover.png',
    },
    {
        name: 'gal gadot',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/galgadot_hover.png',
    },
    {
        name: 'millie bobby brown',
        image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/milliebobbybrown_hover.png',
    },
    {
        name: 'jenna ortega',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jennaortega_hover.png',
    },
    {
        name: 'johnny depp',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/johnnydepp_hover.png',
    },
    {
        name: 'matt damon',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/mattdamon_hover.png',
    },
    {
        name: 'harrison ford',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/harrisonford_hover.png',
    },
    {
        name: 'florence pugh',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/florencepugh_hover.png',
    },
    {
        name: 'emma stone',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/emmastone_hover.png',
    },
    {
        name: 'jason momoa',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jasonmomoa_hover.png',
    },
    {
        name: 'anna sawai',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/annasawai_hover.png',
    },
    {
        name: 'nava mau',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/navamau_hover.png',
    },
    {
        name: 'ella purnell',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/ellapurnell_hover.png',
    },
    {
        name: 'jessica gunning',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/jessicagunning_hover.png',
    },
    {
        name: 'eva green',
        Image: '/Bilder/annehathaway.png',
        hoverImage: '/Bilder/evagreen_hover.png',
    },
    
];




// Get the container element where images will be appended
const container = document.getElementById('app');

actors.forEach(actor => {
    // Erstellen Sie ein div-Element für jedes Bild
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Erstellen Sie ein Bild-Element für das Hauptbild
    const image = document.createElement('img');
    image.src = actor.image;
    image.alt = actor.name;
    image.classList.add('image'); 

    // Erstellen Sie ein Bild-Element für das Hover-Bild
    const hoverImage = document.createElement('img');
    hoverImage.src = actor.hoverImage;
    hoverImage.alt = actor.name;
    hoverImage.classList.add('hoverimage');

    // Fügen Sie das Hauptbild und das Hover-Bild zum Bildcontainer hinzu
    imageContainer.appendChild(image);
    imageContainer.appendChild(hoverImage);

    // Fügen Sie den Bildcontainer zum Hauptcontainer hinzu
    container.appendChild(imageContainer);

    // Fügen Sie einen Eventlistener für den Hover-Effekt hinzu
    imageContainer.addEventListener('mouseover', function() {
        hoverImage.style.opacity = '1';
    });

    imageContainer.addEventListener('mouseout', function() {
        hoverImage.style.opacity = '0';
    });
});

// Eventlistener für den Hover-Effekt auf dem Container
container.addEventListener('mouseover', function(event) {
    // Überprüfen, ob das Mouseover-Ereignis durch das Hover-Bild ausgelöst wurde
    if (event.target.classList.contains('hoverimage')) {
        // Hover-Effekt anwenden, indem die Deckkraft geändert wird
        event.target.style.opacity = '1';
    }
});

// Eventlistener für das Mouseout-Ereignis auf dem Container, um den Hover-Effekt umzukehren
container.addEventListener('mouseout', function(event) {
    // Überprüfen, ob das Mouseout-Ereignis durch das Hover-Bild ausgelöst wurde
    if (event.target.classList.contains('hoverimage')) {
        // Hover-Effekt umkehren, indem die Deckkraft geändert wird
        event.target.style.opacity = '0';









































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
};


//nicht mehr anfassen!!;






    }});
