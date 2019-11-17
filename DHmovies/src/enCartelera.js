const fs = require('fs');
let moviesEnCartelera = JSON.parse(fs.readFileSync('data/movies.json','utf8'));
// le decimos al metodo map que devuelva un array con todos los objetos del array: .map(pelicula => return pelicula)
// donde pelicula simboliza cada objeto del array y le decimos que solo lo retorne (no lleva return si es lineal)
let listadoMovies = moviesEnCartelera.movies.map(pelicula => {
    return `titulo:  ${pelicula.title}
Reseña: ${pelicula.overview} \n\n`;
})

let enCartelera = {
    titulo: 'En Cartelera.',
    totalPeliculas: moviesEnCartelera.total_movies,
    listadoPeliculas: listadoMovies,
};

module.exports = enCartelera;