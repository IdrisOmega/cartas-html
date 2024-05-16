let clientes = [
  {
    "imagen": "Eder.jpg",
    "nombre": "Eder",
    "descripcion": "Famoso racista veterano con Sida",
  },
  {
    "imagen": "descarga.jpg",
    "nombre": "Javier",
    "descripcion": "Presidente de Argentina PAPA",
  },
  {
    "imagen": "Adriano.jpg",
    "nombre": "Adriano",
    "descripcion": "Con la inteligencia de L y la masa de un palo",
  },
  {
    "imagen": "Rober.jpg",
    "nombre": "Rober",
    "descripcion": "Gran profe que me dara un 10 por crak",
  },
  {
    "imagen": "Idris.jpg",
    "nombre": "Idris",
    "descripcion": "Es un papucho",
  },
  {
    "imagen": "Santiago.jpg",
    "nombre": "Santiago",
    "descripcion": "Don John Santiago Wii",
  },
  {
    "imagen": "Ivan.jpg",
    "nombre": "Ivan",
    "descripcion": "Ex convicto asaltacunas",
  },
  {
    "imagen": "Birham.jpg",
    "nombre": "Birham",
    "descripcion": "Sucesor del salvador de la humanidad",
  },
];

$(function () {
  for (let cliente of clientes) {
    $("#cartas").append(
      `<div class="carta">
        <div class="imagen">
          <img src="${cliente.imagen}" alt="${cliente.nombre}">
        </div>
        <div class="nombre">${cliente.nombre}</div>
        <div class="descripcion">${cliente.descripcion}</div>
      </div>`
    );
  }

  $("#busqueda button").click(function () {
    let elemento = $("#busqueda input").val().toLowerCase();

    $(".carta").each(function () {
      let nombre = $(this).find(".nombre").text().toLowerCase();
      if (nombre.includes(elemento)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});