class Auto {
  constructor(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
    this.encendido = false;
    this.velocidad = 0;
  }
  encender() {
    this.encendido = true;
    return `el carro ${this.modelo} de marca ${this.marca} esta ${this.encendido} `;
  }
  apagar() {
    this.encendido = false;
    this.velocidad = 0;
    return `${this.modelo} ${this.marca} está apagado.`;
  }
  acelerar(velocidad) {
    if (this.encendido) {
      this.velocidad += velocidad;
      console.log(
        `${this.modelo} ${this.marca} acelerando a ${this.velocidad} km/h.`
      );
    } else {
      console.log(
        `${this.modelo} ${this.marca} no puede acelerar. Está apagado.`
      );
    }
  }
}
export { Auto };
