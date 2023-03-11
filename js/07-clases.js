class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

const persona1 = new Persona("Juan", "Perez", 67);
const persona2 = new Persona("Jimena", "Martinez", 45);
// console.log(persona1.nombreCompleto());
// console.log(persona2.nombreCompleto());

// Crear una clase llamdaa Animal
// ojos, orejas, patas, color
// comer(), tomar()

class Animal {
  constructor(ojos, orejas, patas, color) {
    this.ojos = ojos;
    this.orejas = orejas;
    this.patas = patas;
    this.color = color;
  }

  comer() {
    console.log("Comiendo");
  }

  tomar() {
    console.log(`El animal de ojos ${this.ojos} esta tomando agua`);
  }
}

class Perro extends Animal {
  constructor(cola, orejas) {
    super();
    this.cola = cola;
    this.orejas = orejas;
  }

  ladrar() {
    console.log(`Ladrando ${this.ojos} ${this.cola} ${this.orejas}`);
  }
}

const perro1 = new Perro(1, 5);
perro1.ojos = "negros";
perro1.ladrar();

// const animal1 = new Animal("negros", 2, 4, "cafe");
// const animal2 = new Animal("rojos", 4, 2, "amarillo");
// animal1.tomar();
