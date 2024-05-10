function cargarDatos(){
    fetch('./Controller/traerClasesController.php')
    .then(response => response.json())
    .then(data => {
        const tablaDatos = document.getElementById('tablaDatos')
        tablaDatos.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.nombre}</td>
                <td>${row.descripcion}</td>
                <td><button><ion-icon class="" name="build-outline"></ion-icon></button></td>
                <td><button onClick='eliminarClase(${row.id})'><ion-icon class="" name="close-circle-outline"></ion-icon></button></td>

            `;
            tablaDatos.appendChild(tr);
        });
    })
}

function eliminarClase (id){

    fetch('./Controller/eliminarClaseController.php?id='+id)
    .then((response) => response.text())
    .then((data) => {
        console.log (data)
        
    })

}


cargarDatos()


//Para que sirve el fetch - Investigar