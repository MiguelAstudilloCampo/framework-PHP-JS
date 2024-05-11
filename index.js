function cargarDatos() {
  fetch("./Controller/traerClasesController.php")
    .then((response) => response.json())
    .then((data) => {
      const tablaDatos = document.getElementById("tablaDatos");
      tablaDatos.innerHTML = "";
      data.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.nombre}</td>
                <td>${row.descripcion}</td>
                <td><button onclick='traerDatos(${row.id})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Actualizar</button></td>
                <td><button class="btn btn-danger" onClick='eliminarClase(${row.id})'>Eliminar</button></td>

            `;
        tablaDatos.appendChild(tr);
      });
    });
}

function limpiarFormulario(){
  var inputCodigo = document.getElementById("id");
  var inputNombre = document.getElementById("nombre");
  var inputDescripcion = document.getElementById("descripcion");
  inputCodigo.value = "";
  inputNombre.value = "";
  inputDescripcion.value = "";
}
function guardarClase(id, nombre, descripcion) {
  fetch(
    `./Controller/guardarClaseController.php?id=${id}&nombre=${nombre}&descripcion=${descripcion}`
  )
    .then((response) => response.text())
    .then((data) => {
      limpiarFormulario();
      cargarDatos();
    });
}

function eliminarClase(id) {
  fetch("./Controller/eliminarClaseController.php?id=" + id)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      cargarDatos();
    });
}

function agregarClase() {
  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;

  fetch(
    `./Controller/agregarClaseController.php?id=${id}&nombre=${nombre}&descripcion=${descripcion}`
  )
    .then((response) => {
      return response.text();

    })
    .then((data) => {
      console.log(data);
      document.getElementById("id").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("descripcion").value = "";
    });
}

function traerDatos(id) {
  fetch(`./Controller/traerClaseController.php?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      var inputCodigo = document.getElementById("id");
      var inputNombre = document.getElementById("nombre");
      var inputDescripcion = document.getElementById("descripcion");
      inputCodigo.value = data["id"];
      inputNombre.value = data["nombre"];
      inputDescripcion.value = data["descripcion"];
    });

  var boton = document.getElementById("Guardar");
  boton.onclick = function () {
    var inputCodigo = document.getElementById("id");
    var inputNombre = document.getElementById("nombre");
    var inputDescripcion = document.getElementById("descripcion");
    var valId = inputCodigo.value;
    var valNombre = inputNombre.value;
    var valDescripcion = inputDescripcion.value;
    limpiarFormulario();
    guardarClase(valId, valNombre, valDescripcion);
  };
}

cargarDatos();

//Para que sirve el fetch - Investigar
