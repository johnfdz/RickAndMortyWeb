let url = 'https://jsonplaceholder.typicode.com/users/';
const urlRick = 'https://rickandmortyapi.com/api/character';
let id = document.getElementById('txtBuscar');
let btnBuscar = document.getElementById('btnBuscar');


btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(id.value);
    getDatos();
});


getDatos();

function getDatos() {
    document.getElementById('bodyEvento').innerHTML = "";
    if (id.value != "") {
        fetch(`${urlRick}/${id.value}`)
            .then(res => res.json())
            .then(datos => {
                addColumns(datos);
                document.getElementById('bodyEvento').innerHTML = rows;
            });
    } else {
        fetch(urlRick)
            .then(res => res.json())
            .then(data => {
                data.results.forEach(data => {
                    addColumns(data);
                    document.getElementById('bodyEvento').innerHTML += rows;
                });
            });
    }
};

function addColumns(datos) {
    if (datos.error == "Character not found") {
        rows =
            `<tr>
        <td colspan = "4">${datos.error}</td>
        </tr>`
    } else {
        rows =
            `<tr>
        <td>${datos.id}</td>
        <td>
        <img src="${datos.image}" alt="Personaje">
        </td>
        <td>${datos.name}</td>
        <td>${datos.status}</td>
        </tr>`
    }
    return rows;
}


