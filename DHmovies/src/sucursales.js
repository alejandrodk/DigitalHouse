const fs = require('fs');
let theaters = JSON.parse(fs.readFileSync('data/theaters.json','utf8'));

let salas = theaters.theaters.map(sala => {
    return `Nombre: ${sala.name}
Dirección: ${sala.address}
Descripción: ${sala.description}\n\n`
});
let sucursales = {
    titulo : 'Nuestras Salas',
    totalSalas : theaters.total_theaters,
    listadoSalas : salas,
}

module.exports = sucursales;
