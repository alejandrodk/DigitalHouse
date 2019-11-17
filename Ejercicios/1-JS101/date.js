// 1 - Ejercicio Date
/*
Vas a crear tu primera fecha con Date... ¡la que vos quieras!

Para empezar deberás crear la variable fecha y almacenar en ella una instancia de Date.

Luego tendrás que configurar la fecha utilizando los métodos setYear, setMonth y setDate, pasándoles los argumentos correspondientes a cada uno
*/

let fecha = new Date();
fecha.setYear(1994);
fecha.setMonth(4);
fecha.setDate(27);

let anioDeMiCumple = fecha.getFullYear();
let mesDeMiCumple = fecha.getMonth();
let diaDeMiCumple = fecha.getDate();

console.log(anioDeMiCumple);
console.log(mesDeMiCumple);
console.log(diaDeMiCumple);
