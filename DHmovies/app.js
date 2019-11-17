const fs = require('fs');
const http = require('http');
const router = require('./router');
//const paginas = require('./src/index');


 http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	
	urlGet = router.ruta(req.url);
	res.end(urlGet);
	
	

 }).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
