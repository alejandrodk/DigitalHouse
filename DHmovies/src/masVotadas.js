const fs = require('fs');
let moviesMasVot = JSON.parse(fs.readFileSync('data/movies.json','utf8'));

let moviesMasVotadas = moviesMasVot.movies.filter(pelicula => pelicula.vote_average >= 7);
let peliculas = moviesMasVotadas.map(pelicula => {
    return `Título: ${pelicula.title}
Rating: ${pelicula.vote_average}
Reseña:  ${pelicula.overview} \n\n`
})
// primero mapeamos el array moviesMasVotadas y devolvemos el average de cada objeto que contiene
// luego al resultado de eso, le hacemos un reduce para sumar todos los averages
// al resultado de esa operación lo dividimos entre la cantidad de películas que contiene el array original
let averageProm = moviesMasVotadas.map(average => average.vote_average).reduce((acum,num) => acum + num)/moviesMasVotadas.length;

let masVotadas = {
    titulo: 'Más votadas',
    totalPeliculas: moviesMasVotadas.length,
    ratingPromedio: averageProm,
    listadoPeliculas: peliculas,
}

module.exports = masVotadas;
