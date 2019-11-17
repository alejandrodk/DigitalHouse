// 1- Completar la URL
/*
Crea una función llamada dominio que recibirá un String como 
"digitalhouse.com.ar" y su función será devolver
"http://digitalhouse.com.ar".
*/
console.log('-'.repeat(20)); // divisor

function dominio(url){
    let urlFinal;
    str = url.indexOf('http://');
    str == -1 ? urlFinal = 'http://www.' + url : urlFinal = url;
    return urlFinal;
}
dominio('digitalhouse.com');
dominio('http://digitalhouse.com');

console.log('-'.repeat(20)); //divisor

// 2- Contar los caracteres
/*
Lo primero que necesitas es declarar una variable llamada "texto"
asignándole como valor un texto, el que vos quieras. Luego, utilizando
la propiedad length tendrás que imprimir en consola el total de
caracteres que contiene la frase.
*/
let texto = 'digital house rulea';
console.log(texto.length);

console.log('-'.repeat(20)); //divisor

// 3- ReemplazoFastFast
/*
Tu misión ahora es crear una funcion llamada "reemplazoFastFast"
que reciba un texto, una palabra a buscar y la palabra que va a
reemplazar a la buscada. La función deberá devolver el texto con
la palabra reemplazada.
*/

function reemplazoFastFast(texto,buscar,reemplazar){
    let str = texto.replace(buscar,reemplazar)
    return str;
}
reemplazoFastFast('hay que reemplazar la palabra','hay que reemplazar','ya reemplacé');

console.log('-'.repeat(20)); //divisor

// 4- Están hablando de mi?
/*
Para el siguiente ejercicio vamos a suponer que tenemos un texto
que copiamos y queremos saber si el texto menciona una palabra en particular

Para lograrlo tendrás que crear una función llamada menciona la cual recibirá
dos parámetros: un texto que es donde vamos a buscar, y una palabra que es la 
que vamos a averiguar si se menciona en el texto . La misma función devuelve true 
en el caso de encontrar la palabra.
*/

function menciona(texto,palabra){
    return (texto.indexOf(palabra)) >= 0;
}
console.log(menciona('hola mundo','hola'))

console.log('-'.repeat(20)); //divisor

// 5- Solo el nombre
/*
Teniendo como punto de partida la cadena de texto "¡Hola!, soy Carli" deberás recortar 
la misma para poder obtener el nombre "Carli" en una nueva variable llamada licenciada.

IMPORTANTE: Para la resolución tendrás que usar la función slice()
*/

let cadena = '¡Hola!, soy Carli';
let licenciada = cadena.slice(-5);

console.log(licenciada);