const fs = require('fs');
let moviesHome = JSON.parse(fs.readFileSync('data/movies.json','utf8'));

let listadoMovies = moviesHome.movies.map(pelicula => pelicula.title + '\n');

let homePage = { 
    titulo: '​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, \nincluso mucho mejor que Netflix, Cuevana y PopCorn​.',
    cantidadPeliculas : moviesHome.total_movies,
    listadoPeliculas : listadoMovies.sort(),
    pieDePagina : ['​Recordá que podés visitar las secciones:','\nEn Cartelera','\nMás Votadas','\nSucursales','\nContacto','\nPreguntas Frecuentes']
};

module.exports = homePage;