// 1 - Ejercicio: Requerir Express
/*
Queremos que el archivo series.js administre TODOS los request del recurso. Te pedimos que, como primer paso, crees la variable express y almacenes en ella el módulo express.

Luego, deberás crear la variable router y almacenar en ella la ejecución del método que nos permite manejar un sistema de rutas.
*/

const express = require('express'); // llamamos al paquete Express (ya instalado con npm)
const app = express(); // alojamos las funciones en la variable app

const router = express.Router(); // guardamos la ejecucion de la funcion Router en una variable

// 2 - Instanciar Servidor
/*
Tu trabajo será instanciar un servidor en el puerto 8000. A su vez, queremos que se muestre por consola la frase "Levantando un servidor con Express" una vez que el servidor esté corriendo, para verificar que el mismo se levantó correctamente.
*/

app.listen(8000,()=>console.log('Levantando un servidor con Express')); // definimos el puerto y el mensaje.

// 3 - Ejercicio: Ruta get home
/*
Tu trabajo será, utilizando el método get, crear una ruta hacia "/home" que devuelva la frase "Hola, estamos en el home". 
*/
app.get('/home', (req, res) => {
  res.send('Hola, estamos en el home')
})

// 4 - Ejercicio: Ruta get perfil
/*
Queremos que crees una ruta que use el método get y que apunte a "/perfil". La misma deberá devolver la variable saludo que te damos ya declarada.
*/
let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get('/perfil', (req, res) => {
  res.send(saludo)
})

// 5 - Ejercicio: Ruta get agregar producto
/*
Para empezar, queremos que crees la variable producto. La misma deberá almacenar un objeto con las siguientes propiedades: tipoProducto, precio y cantidad, en donde, cada una de ellas deberá tener como valor null, ya que, de momento no tenemos ningún dato.

Por último, queremos que crees una ruta que use el método get y que apunte a "/producto/agregar". La misma deberá devolver la variable producto que creaste.
*/

let producto = {
    tipoProducto: 'living',
    precio: 1245,
    cantidad: 300,
}

app.get('/producto/agregar', (req, res) => {
  res.send(producto)
})

// 6 - Ejercicio: Ruta post agregar producto
/*
Para este ejercicio contamos con la variable producto ya declarada. Queremos que: a la propiedad tipoProducto le asignes el string "living", a la propiedad precio le asignes el número 1245 y a la propiedad cantidad le asignes el número 300.

Por último, te pedimos que crees una ruta que apunte a "/producto/crear". La misma deberá enviar la variable producto que almacena el nuevo producto que creaste.
*/

app.post('/producto/crear', function (req, res) {
  res.send(producto)
})