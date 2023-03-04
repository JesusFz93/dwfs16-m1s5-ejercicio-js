// SECCION1: CREAR UN ARRAY
// const frutas = ["Platano", "Fresa", [[true, false], "Lechuga"], "Manzana"];
// console.log(frutas);
// console.log(frutas[2]);
// console.log(frutas[2][0]);
// console.log(frutas[2][0][1]);

// Agregar y eliminar datos a un arreglo
const frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana"];
console.log(frutas);
// Esto no es valido
// frutas = ["Platano", "Fresa", "Pera", "Uva", "Manzana", "Mango"];

// Agregar datos al final
frutas.push("Mango");
console.log(frutas);

// Elimiar datos al final
frutas.pop();
console.log(frutas);

// Agregar datos al inicio
frutas.unshift("Naranja");
console.log(frutas);

// Elimina datos al inicio
frutas.shift();
console.log(frutas);

// Reemplazar un elemento con splice
frutas.splice(2, 1, "Sandia");
// frutas.splice(2, 1, "Sandia", "Tortilla", "Sope", "Paleta");
frutas.splice(2, 1);
// frutas.splice(2, 3);
console.log(frutas);
