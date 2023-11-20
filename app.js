import { Auto } from "./entities";

const  modelo = document.getElementById('modelo');
const  marca = document.getElementById('marca');
if (!isNaN(modelo) && !isNaN(marca)) {
  var modeloReal = modelo;
  var marcaReal = marca;
}else {
  document.getElementById('resultado').innerHTML = "Ingrese los campos para crear un carro";
}

function crearCarro() {
  const modelo = modeloInput.value;
  const marca = marcaInput.value;

  if (modelo && marca) {
    miAuto = new Auto(modelo, marca);
    mostrarResultado(`Carro creado: ${miAuto.modelo} ${miAuto.marca}`);
  } else {
    mostrarResultado("Ingrese los campos para crear un carro");
  }
}