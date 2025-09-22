const cartas = [
  { nombre: "El Mago", significado: "Poder, acción, confianza en uno mismo" },
  { nombre: "La Sacerdotisa", significado: "Intuición, misterio, sabiduría oculta" },
  { nombre: "La Emperatriz", significado: "Fertilidad, creatividad, abundancia" },
  { nombre: "El Emperador", significado: "Autoridad, estructura, control" },
  { nombre: "El Papa", significado: "Sabiduría espiritual, guía, enseñanza" },
  { nombre: "Los Enamorados", significado: "Decisiones, amor, dualidad" },
  { nombre: "El Carro", significado: "Victoria, avance, determinación" },
  { nombre: "La Fuerza", significado: "Valor, paciencia, autocontrol" },
  { nombre: "El Ermitaño", significado: "Búsqueda interior, reflexión, soledad" },
  { nombre: "La Rueda de la Fortuna", significado: "Cambio, ciclos, destino" },
  { nombre: "La Muerte", significado: "Transformación, fin de ciclo, renacimiento" },
  { nombre: "La Estrella", significado: "Esperanza, inspiración, fe" },
  { nombre: "La Luna", significado: "Ilusiones, confusión, intuición" },
  { nombre: "El Sol", significado: "Éxito, felicidad, energía" },
  { nombre: "El Juicio", significado: "Renacimiento, claridad, destino" },
  { nombre: "El Mundo", significado: "Logro, plenitud, realización" }
];

let mazo = [...cartas];
let lecturaActual = [];

// 👇 ahora todas las funciones quedan accesibles desde el HTML
window.barajar = function () {
  mazo = [...cartas].sort(() => Math.random() - 0.5);
  document.getElementById("tablero").innerHTML = "";
  lecturaActual = [];
};

window.mostrarCartas = function (cartasSeleccionadas) {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = "";
  lecturaActual = cartasSeleccionadas;

  cartasSeleccionadas.forEach(carta => {
    const cartaDiv = document.createElement("div");
    cartaDiv.className = "carta";
    cartaDiv.innerHTML = `
      <div class="carta-inner">
        <div class="carta-front">🔮</div>
        <div class="carta-back">
          <h3>${carta.nombre}</h3>
          <p>${carta.significado}</p>
        </div>
      </div>
    `;
    cartaDiv.addEventListener("click", () => {
      cartaDiv.classList.toggle("volteada");
    });
    tablero.appendChild(cartaDiv);
  });
};

window.tiradaTres = function () {
  const seleccionadas = mazo.slice(0, 3);
  window.mostrarCartas(seleccionadas);
};

window.tiradaUna = function () {
  const seleccionada = mazo[Math.floor(Math.random() * mazo.length)];
  window.mostrarCartas([seleccionada]);
};

window.guardarLectura = function () {
  if (lecturaActual.length === 0) return;

  const lista = document.getElementById("listaLecturas");
  const li = document.createElement("li");
  li.textContent = lecturaActual.map(c => c.nombre).join(" | ");
  lista.appendChild(li);
};
