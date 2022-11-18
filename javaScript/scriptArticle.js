const urlRick = 'https://rickandmortyapi.com/api/character';


getEpisodes();

function getEpisodes() {
    fetch(urlRick)
        .then(res => res.json())
        .then(data => {
            data.results.forEach(data => {
                const article = `
                <article>
                    <div class= "container-img">
                    <img src="${data.image}" alt="Character">
                    </div>
                    <h2>${data.name}</h2>
                    <span>${data.status}</span>   
                </article>`
                document.getElementById('main-episodes').innerHTML += article;
            });
        });

};