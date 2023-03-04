// SECCION1: CREAR UN ARRAY
// const frutas = ["Platano", "Fresa", [[true, false], "Lechuga"], "Manzana"];
// console.log(frutas);
// console.log(frutas[2]);
// console.log(frutas[2][0]);
// console.log(frutas[2][0][1]);

// // Agregar y eliminar datos a un arreglo
// const frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana"];
// console.log(frutas);
// // Esto no es valido
// // frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana", "Mango"];

// // Agregar datos al final
// frutas.push("Mango");
// console.log(frutas);

// // Elimiar datos al final
// frutas.pop();
// console.log(frutas);

// // Agregar datos al inicio
// frutas.unshift("Naranja");
// console.log(frutas);

// // Elimina datos al inicio
// frutas.shift();
// console.log(frutas);

// // Reemplazar un elemento con splice
// frutas.splice(2, 1, "Sandia");
// // frutas.splice(2, 1, "Sandia", "Tortilla", "Sope", "Paleta");
// frutas.splice(2, 1);
// // frutas.splice(2, 3);
// console.log(frutas);

// SECCION2: RECORRER UN ARRAY
// Con for
// const frutas = ["Mango", "Platano", "Fresa", "Pera", "Uva", "Manzana"];
// console.log(frutas);

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// function saludar() {
//   console.log("Saludos");
// }

// const saludar = () => {
//   console.log("Saludos");
// };

// saludar();

// con el foreach
// frutas.forEach(function (fruta) {
//   console.log(fruta);
// });

// map
// const frutas2 = frutas.map(function (fruta) {
//   return fruta.toUpperCase();
// });

// console.log(frutas2);

// filter - filtrar informacion
// const frutasFiltradas = frutas.filter(function (fruta) {
//   if (fruta.startsWith("Man")) {
//     return fruta;
//   }
// });

// console.log(frutasFiltradas);

// find
// const frutaEncontrada = frutas.find(function (fruta) {
//   if (fruta.startsWith("Man")) {
//     return fruta;
//   }
// });

// console.log(frutaEncontrada);

// reduce
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);

// const valor = numeros.reduce(function (acumulado, numero) {
//   return acumulado + numero;
// }, 0);

// console.log(valor);

// Ejercicio 1
// let numero = 9;
// for (let i = 1; i <= 10; i++) {
//   //   console.log(numero + " x " + i + " = " + numero * i);
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }
// Cocatenar texto
// let nombre = "Jesus";
// let apellido = "Fernadnez";

// console.log(nombre + " " + apellido);
// console.log(`${nombre} ${apellido}`);

// const nombres = [
//   "alberto",
//   "paty",
//   "Jose",
//   "daniel",
//   "luis",
//   "antonio",
//   "Luis",
//   "paty",
//   "luis",
// ];

// const nombreMayusculas = [];

// nombres.forEach(function (nombre) {
//   nombreMayusculas.push(nombre.toUpperCase());
// });

// console.log(nombres);
// console.log(nombreMayusculas);

// SECCION 3: EJERCICIOS
// Ejercicio guiado

/*
Crear un método que reciba un array de calificaciones y obtenga 
el promedio con el uso de los métodos de arrays. 
Si el promedio es mayor a 70 imprima que aprobó / 
si es menor, que no aprobó.

promedio([70, 80, 80, 90, 60]) // Aprobado: 76.
promedio([70, 50, 75, 70, 60]) // No Aprobado: 65.
*/

// function promedio(calificaciones) {
//   const sum = calificaciones.reduce(function (acumulado, calificacion) {
//     return acumulado + calificacion;
//   }, 0);

//   const promedio = sum / calificaciones.length;

//   if (promedio >= 70) {
//     console.log(`Aprobado: ${promedio}`);
//   } else {
//     console.log(`No Aprobado: ${promedio}`);
//   }
// }

// promedio([70, 50, 75, 70, 60]);

// Ejercicio 2
/*
Método que reciba un array e imprima en la consola cada uno de sus elementos.
imprimeArray([‘uno’, 2, null, 0]);
*/

// function imprimeArray(valores) {
//   valores.forEach(function (valor) {
//     console.log(valor);
//   });
// }

// imprimeArray(["uno", 2, null, 0]);
