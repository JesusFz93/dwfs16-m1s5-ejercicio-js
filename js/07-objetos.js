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
const persona = {
  nombre: "Fernando",
  apellido: "Hernandez",
  edad: 28,
  deporte: "Futbol",
};

for (let propiedad in persona) {
  console.log(persona[propiedad]);
}
