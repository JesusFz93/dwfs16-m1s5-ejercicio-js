// const persona = {
//   nombre: "Jesus",
//   apellido: "Fernandez",
//   edad: 30,
//   estaActivo: true,
// };

// console.log(persona);

// // Imprimir propiedades
// console.log(persona.nombre);
// console.log(persona["nombre"]);

// // Cambiar un valor
// persona.edad = 31;
// persona.nombre = "Juan";
// console.log(persona);

// // Agregar atributo o propiedad
// persona.profesion = "Ingeniero";
// console.log(persona);

// // Eliminar atributos
// console.log(persona);
// delete persona.nombre;
// console.log(persona);

// Ejercicio 1
// let objeto = {};
// console.log(objeto);

// function agregarValor(propiedad, valor) {
//   objeto[propiedad] = valor;
//   console.log(objeto);
// }

// agregarValor("nombre", "Jesus");
// agregarValor("edad", 30);

// SECCION 2: RECORRER UN OBJETO
// Object.keys
// const persona = {
//   nombre: "Fernando",
//   apellido: "Hernandez",
//   edad: 28,
//   deporte: "Futbol",
// };

// const propiedades = Object.keys(persona);

// propiedades.forEach(function (propiedad) {
//   console.log(persona[propiedad]);
// });

// for in
// const persona = {
//   nombre: "Fernando",
//   apellido: "Hernandez",
//   edad: 28,
//   deporte: "Futbol",
// };

// for (let propiedad in persona) {
//   console.log(persona[propiedad]);
// }

// Desestructuracion de objetos
// const persona = {
//   nombre: "Fernando",
//   apellido: "Hernandez",
//   edad: 28,
//   deporte: "Futbol",
// };

// const perro = {
//   nombre: "Max",
//   edad: 3,
// };

// const { nombre: nombrePersona, apellido } = persona;
// const { nombre: nombrePerro, edad } = perro;

// const nombrePersona = "Fernando"
// const nombrePerro = "Max"

// console.log(persona);
// let firstName = persona.nombre;
// let lastName = persona["apellido"];

// console.log(`${nombrePersona} ${apellido}`);

// Desestructuracion de arreglos
// const arreglo = ["Naranja", "Melon", 45, true];

// const [fruta1, fruta2, fruta3] = arreglo;

// let fruta1 = arreglo[0];
// let fruta2 = arreglo[1];

// console.log(fruta1);
// console.log(fruta3);
// console.log(arreglo[3]);

// const usuarios = [
//   {
//     nombre: "Juan",
//     edad: 34,
//     activo: true,
//     actividades: ["Futbol", "Programar"],
//   },
//   {
//     nombre: "Abril",
//     edad: 19,
//     activo: false,
//     actividades: ["Natacion"],
//   },
// ];

// console.log(usuarios[1].actividades[0]);
// const myObj = { name: "Juan", age: 25 };

// console.log(myObj.name);
// console.log(Object.keys(myObj));
