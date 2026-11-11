const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
const nuevoM = document.getElementById("nuevoM");
const nombre = document.getElementById("nombre");
const formulario = document.getElementById("formulario");
const tarjeta = document.getElementById("tarjeta");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");
const restablecer = document.getElementById("restablecer");

boton.addEventListener("click", function () {
  document.getElementById("titulo").textContent = "Clic";
  mensaje.textContent = "CAMBIO";
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const valor = nombre.value.trim();
  if (valor === "") {
    return;
  }
  nuevoM.textContent = "Bienvenido " + valor;
});


azul.addEventListener("click", function () {
  tarjeta.style.backgroundColor = "blue";
});

verde.addEventListener("click", function () {
  tarjeta.style.backgroundColor = "green";
});

rojo.addEventListener("click", function () {
  tarjeta.style.backgroundColor = "red";
});

restablecer.addEventListener("click", function () {
  tarjeta.style.backgroundColor = "";
});