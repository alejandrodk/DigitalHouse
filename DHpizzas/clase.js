// leer tipo de archivo y guardarlo en viariable
let archivoPedidos = fs.readFileSync(rutaDelArchivo,'utf8');
let contenidoPedidos = archivoPedidos.length == 0 ? [] : JSON.parse(archivoPedidos);
contenidoPedidos.push({contenidoPedidos})
console.log(typeof contenidoPedidos);
// calcular numero de pedido
let numeroPedido = {
    id:contenidoPedidos.length == 0 ? 1 : archivoPedidos.length + 1
}
fs.writeFileSync(rutaDelArchivo,JSON.stringify(contenidoPedidos));