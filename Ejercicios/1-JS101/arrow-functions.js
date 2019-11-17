// 1 - Convertir a arrow function

/*
Para este ejercicio te vamos a dar tres funciones ya definidas.
Tu trabajo será cambiarle la sintaxis y volver a escribirlas para
que sean funciones de tipo arrow.

function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
*/
let dameCinco = () => [1,2,3,4,5];
console.log(dameCinco());

let multiplicarPorDos = () => 123 * 2;
console.log(multiplicarPorDos(123));

let mostrarNombre = () => 'Mi nombre es Hernán';
console.log(mostrarNombre());

console.log('-'.repeat(20)); //divisor

// 2 - Arrow function con un parámetro
/*
Ahora tu trabajo será refactorizar la función saludar()
que recibe un parámetro, es decir, escribirla con la sintaxis
necesaria para convertirla en una arrow function.

function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}
*/

let saludar = nombre => 'Hola, ' + nombre + '!';
console.log(saludar('alejandro'));

console.log('-'.repeat(20)); //divisor

// 3 - Ahora probemos con más de uno
/*
Y sí, sólo nos falta practicar la sintaxis de una arrow function
que reciba más de un parámetro.Te dejamos la función saludar(),
que esta vez recibe un nombre y un apellido, para que la conviertas
en una función de tipo flecha.

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}
*/

let saludar2 = (nombre,apellido) => 'Hola, ' + nombre + ' ' + apellido + '!';

console.log(saludar2('otto','barrios'));



