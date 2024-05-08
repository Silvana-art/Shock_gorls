
const searchBocks = document.querySelector('#searchBocks');
const app = document.querySelector('#app'); 
 //Konstanten immer oben
let url = 'https://api.themoviedb.org/3/person/popular?api_key=754711d5f2e577bae7dc53ecdd0d7105';

init();
async function init() {
    let url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1'
    let movies = await fetchData(url);
    console.log(movies.results[0].known_for[0].title);
    // console.log(movies.results[0].known_for[0].original_title);

    // console.log(movies.results[0].original_title);

    movies.results.forEach(movie => {
        createItem(movie);});
}

function createIten(movie) {
    app.innerHTML = `
    <div class="movie">
        <h2>${results.known_for.title}</h2>
        <p>${results.known_for.name}</p>
        <p>${results.known_for.original_title}</p>
    </div>
    `;

}

async function search() {
    let searchValue = searchBocks.value;
    let url = `https://api.themoviedb.org/3/person/popular?api_key=754711d5f2e577bae7dc53ecdd0d7105=${searchValue}`;
    app.innerHTML = '';
    let actors = await fetchData(url);
    actors.results.forEach(actor => {
        createItem(actor);
    });
}

searchBocks.addEventListener('input', search);


//Werkzeugkasten von Funktionen
function createItem(people) {
    let item = document.createElement('div');
    item.classList.add('original_title', 'known_for', 'name');
    item.innerHTML = `
        <img src="${people.strInstructionsDE}" alt="${people.strknown_for}" class="bild">
        <h2>${people.strknown_for}</h2>
        <p>${people.strInstructionsDE}</p>`;
    app.appendChild(item);
}


async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

fetchData(url);




// async function Init() {
//     let people = await fetchData(url);
//     console.log(people.known_for[0].strknown_for);

//     people.known_for.forEach(people => {
//         createItem(people);
//     });

// }


































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
        image: '/Bilder/scarlettjohansson.png',
        hoverImage: '/Bilder/scarlettjohansson_hover.png',
    }
    {
        name: 'Tom Hanks',
        image: '/Bilder/tomhanks.png',
        hoverImage: '/Bilder/tomhanks_hover.png',
    }
    {
        name: 'Morgan Freeman',
        image: '/Bilder/morganfreeman.png',
        hoverImage: '/Bilder/morganfreeman_hover.png',
    }
    {
        name: 'Mark Wahlberg',
        image: '/Bilder/markwahlberg.png',
        hoverImage: '/Bilder/markwahlberg_hover.png',
    }
    {
        name: 'Jackie Chan',
        image: '/Bilder/jackiechan.png',
        hoverImage: '/Bilder/jackiechan_hover.png',
    }
    {
        name: 'Ryan Reynolds',
        image: '/Bilder/ryanreynolds.png',
        hoverImage: '/Bilder/ryanreynolds_hover.png',
    }
    
    
];

1. Anne Hathaway
2. jason statham
3. scarlett johansson
4. tom hanks
5. morgan freeman
6. mark wahlberg
7. jackie chan
8. ryan reynolds
9. keanu reeves
10. clint eastwood
11. timothee chalamet
12. arnold schwarzenegger
13. halle berry
14. denzel washington
15. robert downey jr
16. emily blunt
17. jake gyllenhaal
18. bruce willis
19. nicole kidman
20. russell crowe
21. gina gershon
22. robert de niro
23. ethan hawke
24. kristen stewart
25. rosamund pike
26. kevin hart
27. uma thurman
28. john goodman
29. jack black
30. angelina jolie
31. bryan cranston
32. sylvester stallone
33. ana de armas
34. alexandra daddario
35. nicolas cage
36. liam neeson
37. gal gadot
38. millie bobby brown
39. jenna ortega
40. johnny depp
41. matt damon
42. harrison ford
43. florence pugh
44. emma stone
45. jason momoa
46. anna sawai
47. nava mau
48. ella purnell
49. jessica gunning
50. eva green




// Array of image paths
const imagePaths = [
    '/Bilder/jason.png',
    '/Bilder/bildeins.jpg.webp',
    '/Bilder/annehathaway.png',
];

const hoverImagePaths = [
    '/Bilder/jason_hover.png',
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

    imageContainer.addEventListener('mouseover', function(event) {
        // Check if the mouseover event is triggered by the hover image
        console.log('hover on image')
    });
    
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



