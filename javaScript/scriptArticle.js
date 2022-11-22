var urlRick = 'https://rickandmortyapi.com/api/character?page=1';
var header = document.getElementById('Header');
var volver = document.getElementById('volver');
var siguiente = document.getElementById('siguiente');
var nextPage;
var lastPage;


getCharacters(urlRick);

siguiente.addEventListener('click', (e) => {  
    e.preventDefault();
    if(nextPage != null){
        document.getElementById('main-characters').innerHTML = '';
        getCharacters(nextPage);
    }
})

volver.addEventListener('click', (e) => {
    e.preventDefault();
    if(lastPage != null){
        document.getElementById('main-characters').innerHTML = '';
        getCharacters(lastPage);
    }        
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

async function getCharacters(url) {
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            nextPage = data.info.next;
            lastPage = data.info.prev;
            data.results.forEach(data => {
                const article = `
                <article>
                    <div class= "container-img">
                    <img src="${data.image}" alt="Character">
                    </div>
                    <h2 class= "datos-character">${data.name}</h2>
                    <span class= "datos-character">${data.status}</span>   
                </article>`;
                document.getElementById('main-characters').innerHTML += article;
            });
        });

};