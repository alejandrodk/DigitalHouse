const inquirer = require('inquirer'); 
const fs = require('fs');

//clase 1 -----------------------------------------------------------------

// Preguntas
let preguntasDelivery = [
    {
        type:'input',
        name:'nombreCliente',
        message:'Ingresa tu nombre',
        validate: valNombre => {
            if(valNombre.trim() == '' || valNombre.length < 8){
                return 'Ingresa tu nombre';
            }
            return true;
        }
    },
    {
        type:'confirm',
        name:'entrega',
        message:'Te lo llevamos?'
    },
    {
        type:'input',
        name:'direccionCliente',
        message:'Cuál es tu dirección',
        when: respuestas => respuestas.entrega, //si la respuesta es true, directamente retorna true sin hacer la comparación
        
        validate: valDireccion => {
            if(valDireccion.trim() == '' || valDireccion.length < 8){ // el metodo trim quita los espacios de las puntas del string
                return 'Ingresa tu direccion';
            }
            return true;
        }
    },
    {
        type:'input',
        name:'telefonoCliente',
        message:'Cuál es tu teléfono',
        validate: valTelefono => {

            if(valTelefono.trim() == ''){
                return 'Ingresa un número válido';
            } else if(valTelefono.length < 8 || isNaN(valTelefono)){
                return 'Ingresa un número válido'
            } else {
                return true;
            }
        }
    },
    {
        type:'rawlist',
        name:'orden',
        message:'Qué tamaño de pizza te gustaría ordenar?',
        choices:['Pequena','Mediana','Grande']
    },
    {
        type:'rawlist',
        name:'saborPizza',
        message:'Qué sabor te gusta?',
        choices:['Muzza','Napolitana','Fugazzeta']
    },
    {
        type:'confirm',
        name:'bebida',
        message:'Quieres bebida?'
    },
    {
        type:'rawlist',
        name:'saborBebida',
        message:'Qué sabor de bebida?',
        choices:['Coca-Cola','Pepsi','Fanta','Sprite'],
        when: function(respuestas){
            return respuestas.cantidadBebidas;
        }
    },
    {
        type:'confirm',
        name:'consultaEmpanadas',
        message:'Quieres aprovechar la oferta de 3 x 2 en empanadas?'
    },
    {
        type:'checkbox',
        name:'saboresEmpanadas',
        message:'Que sabores te gustarían?',
        choices:['Carne picante','Pollo','Salteña','Tucumana'],
        when: respuestas => respuestas.consultaEmpanadas, // directamente retorna true
        
    }    
];

let infoDelThen = respuestas => {
    // punto 2C de la guía de ejercitación
    console.log('=== Resumen de pedido ===');
    console.log('    ');
    console.log('---- Datos del Cliente----');
    console.log('Nombre: ' + respuestas.nombreCliente);
    console.log('Teléfono: ' + respuestas.telefonoCliente);

    // punto 2D de la guía - Datos de entrega
    console.log('---- Datos de entrega ----');
    if(respuestas.entrega){
        console.log('Pedido para entregar en el domicilio del cliente');
        console.log('Dirección: ' + respuestas.direccionCliente);
    } else {
        console.log('El cliente retira el pedido :)');
    }
    // punto 2F de la guía - Detalle de pedido
    console.log('---- Detalle de pedido ----');
    console.log('Orden Principal: ' + respuestas.orden);
    console.log('Sabor: ' + respuestas.saborPizza);
    // punto 2G de la guía - Bebidas?
    if(respuestas.bebida){
        console.log('Bebida: ' + respuestas.saborBebida);
    } else {
        console.log('El cliente no ordenó bebidas');
    }
    // punto 2H de la guía - Oferta empanadas
    console.log('Oferta en empanadas');
    if(respuestas.consultaEmpanadas){
        console.log('SI');
        console.log('Sabores: ');
    } else {
        console.log('NO');
    }
    // 2I de la guía - Calcular precios
    var precioBebida = 60;
    var precioDelivery = 20;
    var precioEmpanada = 30;
    var precioPizza;
    var descuento;
    console.log('---- Detalle de pago ----');
    switch(respuestas.orden){
        case 'Pequeña':
            precioPizza = 130;
            descuento = 3;
            console.log('Pizza: $130');
            break;
        case 'Mediana':
            precioPizza = 160;
            descuento = 5;
            console.log('Pizza: $160');
            break;  
        case 'Grande':
            precioPizza = 250;
            descuento = 8;
            console.log('Pizza: $250');
            break; 
    }
            if(respuestas.bebida){
                console.log('Bebida: $' + precioBebida);
            }
            if(respuestas.entrega){
                console.log('Delivery: $' + precioDelivery);
            }
            if(respuestas.consultaEmpanadas){
                console.log('Empanadas: $' + (precioEmpanada * 3));
            }
            let subtotalOrden = precioPizza + precioBebida + precioDelivery + (precioEmpanada * 3);
            console.log('SUBTOTAL: $' + subtotalOrden);
            console.log('---- Descuentos----');
            if(respuestas.consultaEmpanadas){
                console.log('Descuento Empanadas: $ -' + precioEmpanada);
            }
            let descuentoCombo = (subtotalOrden * descuento) / 100;
            if(respuestas.bebida){
                console.log('Descuento por combo: $ -' + descuentoCombo);
            }
            let totalOrden = subtotalOrden - descuentoCombo - precioEmpanada;
            console.log('TOTAL: $'+ totalOrden);

            let totalDescuentos = descuentoCombo + precioEmpanada;

    // clase 3 -----------------------------------------------------------------
    
    let fecha = new Date();
    let fechaPedido  = fecha.toLocaleDateString();
    let horaPedido = fecha.toLocaleTimeString();

    let datosAdicionales = {
        fecha: fechaPedido,
        hora: horaPedido,
        totalProductos: totalOrden,
        descuento: totalDescuentos,
    };

    // concatenar el pedido con la información de fecha y hora usando spread operator
    respuestas = {
        ...respuestas,
        ...datosAdicionales,
    };

    // guardar ruta del archivo en una variable
    const rutaDelArchivo = __dirname + '/pedidos.json';

    // Leer el archivo para saber si tiene algo
    let infoArchivo = fs.readFileSync(rutaDelArchivo, 'utf8');
    
    // comprobar si ya ha sido creado el primer elemento del array, si no es así, crear el array.
    // preguntar en clase: si el archivo json ya tien elementos, lo que hace es traer todo el contenido del archivo?
    let contenidoPedidos = infoArchivo.length == 0 ? [] : JSON.parse(infoArchivo);

    // armar un objeto con los datos finales del pedido, agregando el ID del pedido.

    let pedidoFinal = {
        id: contenidoPedidos.length + 1, // autoincrementamos el numero de ID según la cantidad de pedidos guardados en el archivo JSON
        ...respuestas, // traemos las respuestas con el spread operator
    };
    // agregar el contenido del pedido al array
    contenidoPedidos.push(pedidoFinal);

    // enviar datos al archivo .JSON
	fs.writeFileSync(rutaDelArchivo, JSON.stringify(contenidoPedidos, null, ' '));
} 

inquirer
    .prompt(preguntasDelivery)
    .then(infoDelThen);
