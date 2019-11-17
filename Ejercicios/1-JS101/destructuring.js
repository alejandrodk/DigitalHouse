// 1 - Ejercicio: Destructuring []
/*

Para este ejercicio contamos con un array de destinos del mundo ya definido.

Queremos que, usando destructuramiento, definas las variables bariloche y china y extraigas del array únicamente los destinos "Bariloche" y "China".

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

*/
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ ,bariloche, ,china,] = destinosDelMundo;
console.log(bariloche , china);
