// 1 - Primer controller
/*
Comenzás un nuevo día y un nuevo requerimiento llega.
Estas trabajando en el controlador de un carrito de Ecommerce y te piden ahora que al agregar un item el controlador debe devolver el mensaje 'Item Agregado'.

El líder técnico de tu área te indica que para cumplir con este requerimiento debes modificar la función de agregarItem para que reciba los parámetros req y res. Dicho esto el líder técnico se aleja silenciosamente diciendo que debes analizar como utilizando alguno de los dos parámetros lograr enviar como respuesta el mensaje 'Item Agregado'.

- Debe declarar la variable carritoController
- La variable carritoController debe tener asignado un objeto literal
- Debe carrito tener el atributo agregarItem
- El atributo agregarItem del carritoController debe ser una función
- Debe hacer uso de "module.exports"
- Debes exportar el carritoController
- La función AgregarItem debe recibir como primer parámetro req
- La función AgregarItem debe recibir segundo parámetro res
*/

const carritoController = {
    agregarItem : (req,res) => {
        res.send('Item Agregado');
    }
};

module.exports = carritoController;

const carrito = require('./carritoController');


