var urlRick = 'https://rickandmortyapi.com/api/character?page=';
var header = document.getElementById('Header');
var volver = document.getElementById('volver');
var siguiente = document.getElementById('siguiente');
var newUrl;
var pagesCharacters;
var contador;


getCharacters(1);

siguiente.addEventListener('click', () => {
    document.getElementById('main-characters').innerHTML = '';
    getCharacters(contador + 1)

    console.log(url);
})

volver.addEventListener('click', () => {
    document.getElementById('main-characters').innerHTML = '';
    getCharacters(contador - 1)

    console.log(url);
})

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    if (scroll > 10) {
        header.style.backgroundColor = '#121212';
        header.style.color = 'white';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.color = 'black'
    }
})

function getCharacters(num) {
    contador = num;
    newUrl = `${urlRick}${num}`;
    console.log(newUrl);
    fetch(newUrl)
        .then(res => res.json())
        .then(data => {
            pagesCharacters = data.info.pages;
            data.results.forEach(data => {
                const article = `
                <article>
                    <div class= "container-img">
                    <img src="${data.image}" alt="Character">
                    </div>
                    <h2>${data.name}</h2>
                    <span>${data.status}</span>   
                </article>`
                document.getElementById('main-characters').innerHTML += article;
            });
        });

};