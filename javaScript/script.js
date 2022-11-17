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
    if (id.value != "") {
        fetch(`${urlRick}/${id.value}`)
            .then(res => res.json())
            .then(datos => {
                rows =
                    `<tr>
                <td>${datos.id}</td>
                <td>
                <img src="${datos.image}" alt="Personaje">
                </td>
                <td>${datos.name}</td>
                <td>${datos.status}</td>
                </tr>`

                document.getElementById('bodyEvento').innerHTML = rows;

            });
    } else {
        fetch(urlRick)
            .then(res => res.json())
            .then(data => {
                buildData(data);
            });
    }


};

function buildData(data) {
    document.getElementById('bodyEvento').innerHTML = ""
    let rows = ''
    console.log(data);
    data.results.forEach(datos => {
        rows =
            `<tr>
            <td>${datos.id}</td>
            <td>
            <img src="${datos.image}" alt="Personaje">
            </td>
            <td>${datos.name}</td>
            <td>${datos.status}</td>
            </tr>`
        document.getElementById('bodyEvento').innerHTML += rows;
        //body.append(rows);
    });

};
