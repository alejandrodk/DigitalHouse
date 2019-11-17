const fs = require('fs');
const rutaDelArchivo = __dirname + '/pedidos.json';
const contenidoPedidos = fs.readFileSync(rutaDelArchivo, 'utf8');
let pedidos = contenidoPedidos.length > 0 ? JSON.parse(contenidoPedidos) : null;

if (pedidos == null) {   
	console.log(`No se han recibido pedidos :(`);
} else {
    // funcion para crear lineas vacías
    let espacio = obj => console.log(obj);
    console.log(`====== Resumen de pedidos ====== \n`);
    console.log(`Cantidad total de pedidos: ${pedidos.length}`);

    let filtrarDelivery = entrega => pedidos.filter(pedidos => pedidos.entrega == entrega).length

    let delivery = filtrarDelivery(true);

    console.log(`Pedidos enviados por delivery: $${delivery} \n`);
	console.log('----------- PIZZAS -------------\n');
    
    // Filtro sabores de pizza
    let filtrarPizzasPorSabor = sabor => pedidos.filter(pedidos => pedidos.saborPizza == sabor).length;
    
	let Muzza = filtrarPizzasPorSabor('Muzza');
	let Napolitana = filtrarPizzasPorSabor('Napolitana');
    let Fugazzeta = filtrarPizzasPorSabor('Fugazzeta');
    
    console.log(`Pizzas de Muzza pedidas:  ${Muzza}`);
    console.log(`Pizzas Napolitanas pedidas:  ${Napolitana}`);
    console.log(`Pizzas Fugazzeta pedidas:  ${Fugazzeta} \n`);
    
    // Filtro tamaños de pizza
    let filtrarPizzasPortamano = tamano => pedidos.filter(pedidos => pedidos.orden == tamano).length;

    let pequenas = filtrarPizzasPortamano('Pequena');
    let medianas = filtrarPizzasPortamano('Mediana');
    let grandes = filtrarPizzasPortamano('Grande');

    console.log(`Pizzas pequeñas vendidas: ${pequenas}`);
    console.log(`Pizzas medianas vendidas: ${medianas}`);
    console.log(`Pizzas grandes vendidas:  ${grandes} \n`);
    console.log(`Totales vendidas: ${(Muzza + Napolitana + Fugazzeta)} \n`);
    // Filtro Bebidas
    let filtrarBebidas = sabor => pedidos.filter(pedidos => pedidos.saborBebida == sabor).length;

    let bebidaCoca = filtrarBebidas('Coca-Cola');
    let bebidaPepsi = filtrarBebidas('Pepsi');
    let bebidaFanta = filtrarBebidas('Fanta');
    let bebidaSprite = filtrarBebidas('Sprite');
    console.log(`----------- BEBIDAS -------------\n`);

    console.log(`Coca-Colas pedidas: ${bebidaCoca}`);
    console.log(`Pepsis pedidas: ${bebidaPepsi}`);
    console.log(`Fantas pedidas: ${bebidaFanta}`);
    console.log(`Sprites pedidas: ${bebidaSprite} \n`);

    let totalBebidas = bebidaCoca + bebidaFanta + bebidaPepsi + bebidaSprite;
    console.log(`Total de bebidas vendidas: ${totalBebidas} \n`);
    
    // Filtro Empanadas
    let filtrarEmpanadas = sabor => pedidos.filter(pedidos => pedidos.saboresEmpanadas == sabor).length;

    let empanadaCarne = filtrarEmpanadas('Carne picante');
    let empanadaPollo = filtrarEmpanadas('Pollo');
    let empanadaSaltena = filtrarEmpanadas('Salteña');
    let empanadaTucumana = filtrarEmpanadas('Tucumana');

    console.log(`----------- EMPANADAS -----------\n`);

    console.log(`Empanadas de carne vendidas:  ${empanadaCarne}`);
    console.log(`Empanadas de pollo vendidas:  ${empanadaPollo}`);
    console.log(`Empanadas Salteñas vendidas:  ${empanadaSaltena}`);
    console.log(`Empanadas tucumanas vendidas:  ${empanadaTucumana} \n`);
    let totalEmpanadas = empanadaCarne + empanadaPollo + empanadaSaltena + empanadaTucumana;

    console.log(`Total Empanadas vendidas: ${totalEmpanadas} \n`);

    console.log(`----------- FACTURACIÓN --------\n`);

    let totalFactPizzas = (pequenas * 130) + (medianas * 160) + (grandes * 250);
    let totalFactBebidas = totalBebidas * 60;
    let totalFactEmpanadas = totalEmpanadas * 30;
    let totalFactDelivery = delivery * 20;
    console.log(`Total facturado por pizzas: $${totalFactPizzas}`);
    console.log(`Total facturado por bebidas: $${totalFactBebidas}`);
    console.log(`Total facturado por Empanadas: $${totalFactEmpanadas}`);
    console.log(`Total facturado por Delivery: $${totalFactDelivery} \n`);

    let totalDesc = ((totalEmpanadas * 30) * 3) + (pequenas * 3) + (medianas * 5) + (grandes * 8);
    console.log(`Total descontado por Promociones: $${totalDesc} \n`);   

    let gananciaNeta = (totalFactPizzas + totalFactBebidas + totalFactEmpanadas + totalFactDelivery) - totalDesc;
    console.log(`Ganancia neta: $${gananciaNeta} \n`);
    let fecha = new Date();
    let diaFecha = fecha.getDate();
    let mesFecha = fecha.getMonth();
    let anioFecha = fecha.getFullYear();
    let fechaAct = `${diaFecha}/${mesFecha + 1}/${anioFecha}`;
    console.log('****************************************');
    console.log('****************************************');
    console.log('**                                    **');
    console.log(`**   RESUMEN DEL DÍA: ${fechaAct}      **`);
    console.log('**                                    **');
    console.log('****************************************');
    console.log('****************************************');
    
	let contenidoAGuardar = `
		Cantidad total de pedidos: ${pedidos.length}
        Total facturado por pizzas: ${totalFactPizzas}
        Total facturado por bebidas: ${totalFactBebidas}
        Total facturado por Empanadas: ${totalFactEmpanadas}
        Total facturado por Delivery: ${totalFactDelivery}
        Total descontado por Promociones: ${totalDesc}
        Ganancia neta: ${gananciaNeta}
        
        **************************************************

        RESUMEN DEL DÍA: ${fechaAct}
	`;

	fs.writeFileSync(`${__dirname}/reporte.txt`, contenidoAGuardar);
} 