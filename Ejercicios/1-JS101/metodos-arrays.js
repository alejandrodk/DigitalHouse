// MÉTODOS ARRAYS I ----------------------------------------------------

// 1 - indexOf
/*
Para este ejercicio contamos con el array alumnos. 
Queremos saber dónde están guardados los nombres "Juan" y ""Francisco", 
y que utilices un método de array para averiguarlo.

Para eso te pedimos que declares las variables indiceJuan e indiceFrancisco 
y almacenes en ellas el indice correspondiente de cada uno.
*/

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]
let indiceJuan = alumnos.indexOf('Juan');
let indiceFrancisco = alumnos.indexOf('Francisco');

console.log(indiceJuan);
console.log(indiceFrancisco);


console.log('-'.repeat(20)); //divisor

// 2 - join
/*
Tenemos un array con palabras sueltas que, juntas, forman una gran frase.

Queremos que, utilizando un método de array sobre la arrayFrase , 
lo conviertas en una oración entera, y almacenes ese String en una variable 
llamada fraseNueva.
*/
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];

let fraseNueva = arrayFrase.join(' '); // separa cada palabra con un espacio, si no se especifica usa comas
console.log(fraseNueva);

console.log('-'.repeat(20)); //divisor

// 3 - pop
/*
Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, 
almacena un objeto con las propiedades nombre, promedio y curso.

Queremos sacar a Alexis, que acaba de egresar y sabemos que está último en ese array.

Para eso te pedimos que, utilizando un método de array, guardes los datos de Alexis 
en una variable nueva llamada alumnoEgresado.
*/
let estudiantesPop = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];

  let alumnoEgresado = estudiantesPop.pop();
  console.log(alumnoEgresado);
  
  console.log('-'.repeat(20)); //divisor

// 4 - push
/*
Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Tu trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:
nombre: Juan
promedio: 5
curso: iOS
------------------
nombre: Miguel
promedio: 2
curso: Android
*/

let estudiantesPush = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]

estudiantesPush.push({
    nombre : 'Juan',
    promedio : 5,
    curso: 'iOS',
});

estudiantesPush.push({
    nombre : 'Miguel',
    promedio : 2,
    curso: 'Android'  
});

console.log(estudiantesPush);


console.log('-'.repeat(20)); //divisor

// 5 - shift
/*
Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. 
Para eso te pedimos que crees una variable llamada alumnoDeBaja y que, utilizando un 
método de array, almacenes en ella a ese primer estudiante.
*/
let estudiantesShift = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
let alumnoDeBaja = estudiantesShift.shift();

console.log(estudiantesShift);


console.log('-'.repeat(20)); //divisor

// 6 - Unshift
/*
Tenés la tarea de reintegrar a dos estudiantes que se habían registrado al principio 
de todo, se dieron de baja, ¡pero volvieron! Y, para que no pierdan su lugar privilegiado, 
queremos que, utilizando un método de array, agregues al inicio del mismo a cada estudiante
(de a uno a la vez).

Los datos que tenés que agregar de cada uno son:

nombre: "Mariana",
promedio: 9,
curso: "Full Stack"
-------------------------
nombre: "Francisco",
promedio: 2,
curso: "Android"
*/

let estudiantesUnShift = [
    {
        nombre: 'Alvaro',
        promedio : 9,
        curso : 'Android',
    },
    {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
    },
    {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
    }
]
  
estudiantesUnShift.unshift({
    nombre : 'Mariana',
    promedio : 9,
    curso: 'Full Stack',
});

estudiantesUnShift.unshift({
    nombre : 'Francisco',
    promedio : 2,
    curso: 'Android'  
});

console.log(estudiantesUnShift);

console.log('-'.repeat(20)); //divisor


// MÉTODOS ARRAYS II ----------------------------------------------------

// 1 - Filter con números

/* Tenemos el array numeros definido y queremos filtrar aquellos que sean mayores a 18.

Tu trabajó será definir la variable mayores y almacenar en ella los números que cumplan 
con esa condición, utilizando el método filter. */

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let mayores = numeros.filter(function(numero){
  return numero > 18;
});

console.log(mayores);
