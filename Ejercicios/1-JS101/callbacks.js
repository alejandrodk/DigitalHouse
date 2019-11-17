// 1 - Pasando un callback
/*
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble la cual recibirá un número y retornará el doble.

La segunda función se llamará triple la cual recibirá un número y retornará el triple.

La tercera función se llamará apply y recibirá por parámetro un valor y una función. 
La misma retornará el valor de aplicar dicha función al valor que recibió.

Ejemplo: 
apply(2, doble); // 4
apply(4, triple); // 12
*/
function doble(numero){
    return numero * 2;
}
function triple(numero){
    return numero * 3;
}
function apply(valor,func){
    return func(valor);
}

console.log(apply(45,triple));

console.log('-'.repeat(20)); //divisor

// 2 - Hagamos una calculadora
/*
Creemos cuatro funciones que realicen las operaciones principales de
una calculadora.Tu trabajo será definir la función suma, resta, 
multiplicacion y division. Cada una de ellas recibirá dos parámetros y 
deberá realizar la operación matemática según corresponda. Por ejemplo, 
la función suma deberá retornar la suma de ambos parámetros, la función 
resta la resta de ambos parámetros, y así sucesivamente.

Ahora sí, con esas funciones ya definidas, creemos la función calculadora. 
Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
*/

function suma(numero1,numero2){
    return numero1 + numero2;
}

function resta(numero1,numero2){
    return numero1 - numero2;
}

function multiplicacion(numero1,numero2){
    return numero1 * numero2;
}

function division(numero1,numero2){
    return numero1 / numero2;
}

function calculadora(numero1,numero2,callback){
    return callback(numero1,numero2);
}

console.log(calculadora(4,5,suma));


console.log('-'.repeat(20)); //divisor

// 3 - Pasando un callback reloaded
/*
Tu tarea ahora es crear dos funciones.

La primera función debe llamarse agregarHttp . 
La misma recibe por parámetro una URL a la cual le concatena el String 
"http://" al comienzo de esa URL y luego retorna ese valor. 

La segunda función se llama procesar  y recibe una lista de sitios web 
y una función. La función procesar  devuelve un array conteniendo todos 
los resultados de aplicar a cada elemento la función pasada.
*/

function agregarHttp(url){
    return 'https://'+url;
}
function procesar(sitiosWeb,agregarHttp){
    let resultado = [];
    for(let i=0;i < sitiosWeb.length;i++){
        resultado.push(agregarHttp(sitiosWeb[i]));
    }
    return resultado;
}
let webs = ['www.altamira.com','www.otto.com','www.google.com'];

console.log(procesar(webs,agregarHttp));

