// Ejercicio: Requerir Módulo
/*
Vamos a instanciar un servidor, para eso lo primero que tenemos que hacer es requerir algún que otro módulo.

Te pedimos, como primer paso, que crees la variable http y almacenes en ella el módulo http.
*/
const http = require('http'); // definimos la variable donde guardamos el objeto http
http.createServer((req,res)=>{ // definimos los parametros del metodo createServer con una arrow func (request,response)
    res.writeHead(200,{"content-Type":"texto/plain"}); // creamos la cabecera de nuestro servidor
    if(res.url = '/'){
        res.end('Bienvenido al home'); // definimos un endpoint para el home
    }

}).listen(3030,'localhost'); // asignamos el puerto del servidor y el nombre del dominio