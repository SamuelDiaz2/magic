const cartas = [
  { nombre: "El Mago", significado: "Poder y acción" },
  { nombre: "La Sacerdotisa", significado: "Intuición y misterio" },
  { nombre: "La Emperatriz", significado: "Creatividad y abundancia" },
  { nombre: "El Sol", significado: "Éxito y alegría" },
  { nombre: "La Luna", significado: "Ilusión e intuición" }
];

let mazo = [...cartas];

// 👇 Ahora todas las funciones están en window
window.barajar = function() {
  mazo = [...cartas].sort(() => Math.random() - 0.5);
  document.getElementById("tablero").innerHTML = "";
};

window.mostrarCartas = function(cartasSeleccionadas) {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = "";
  cartasSeleccionadas.forEach(carta => {
    const div = document.createElement("div");
    div.className = "carta";
    div.textContent = carta.nombre;
    div.title = carta.significado; // tooltip al pasar el mouse
    tablero.appendChild(div);
  });
};

window.tiradaTres = function() {
  window.mostrarCartas(mazo.slice(0, 3));
};

window.tiradaUna = function() {
  window.mostrarCartas([mazo[Math.floor(Math.random() * mazo.length)]]);
};
