// 1 - Ejercicio For In

/*
Para este ejercicio te damos la variable bart, que almacena un objeto literal con diferentes propiedades y valores. Queremos que, utilizando un for in, muestres por consola los valores de cada propiedad de ese objeto.

let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}
*/

let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}

for (var prop in bart) {
    console.log(bart[prop]);
    
}

// Ejercicio for Of

/*
Tenemos declarada una frase y queremos jugar un poco.
Queremos que imprimas por consola cada letra para que la frase se lea en vertical.
¿Ya sabés qué sentencia vas a usar esta vez?

let frase = "Nos encanta hacer la vertical";

*/
let frase = "Nos encanta hacer la vertical";

for (const iterador of frase) {
    console.log(iterador);
}