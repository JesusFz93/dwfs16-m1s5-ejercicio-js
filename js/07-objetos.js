const persona = {
  nombre: "Jesus",
  apellido: "Fernandez",
  edad: 30,
  estaActivo: true,
};

console.log(persona);

// Imprimir propiedades
console.log(persona.nombre);
console.log(persona["nombre"]);

// Cambiar un valor
persona.edad = 31;
persona.nombre = "Juan";
console.log(persona);

// Agregar atributo o propiedad
persona.profesion = "Ingeniero";
console.log(persona);

// Eliminar atributos
console.log(persona);
delete persona.nombre;
console.log(persona);
