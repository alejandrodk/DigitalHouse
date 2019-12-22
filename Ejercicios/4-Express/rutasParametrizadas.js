// 1 - Buscar Series
/*
Tenemos una lista de muchas series almacenadas en la variable series. Tu trabajo será crear una ruta que apunte a "/series" y las devuelva a TODAS.
*/
let series = ['serie 1','serie 2','serie 3'];

const express = require('express');
const app = express();

app.listen(7000)
app.get('/series',(req,res) => {
res.send(series)
})

// 2 - Buscar una serie
/*
Queremos que crees una ruta que apunte a "/serie" y que la misma, a su vez, reciba un número. Ese número representará el id de la serie que estamos queriendo ver. Por lo tanto, la ruta deberá devolver únicamente la serie que coincida con el id que llegó por parámetro.

Un ejemplo de cómo se vería la ruta sería el siguiente: http://localhost/serie/3

Recordá que la variable series está declarada por detrás y podés disponer de ella con sólo nombrarla.
*/

app.listen(8000,() => console.log('Servidor corriendo'))
app.get('/serie/:id?',(req,res) => {
    res.send(series[req.params.id - 1])
})