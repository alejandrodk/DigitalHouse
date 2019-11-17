const paginas = require('./src/index');

let rutas = {
    ruta: definirRuta = url =>{
        var ruta = url;
        switch (ruta) {
            case '/':
                return `${paginas.homePage.titulo} \n
Cantidad de películas: ${paginas.homePage.cantidadPeliculas} \n
${paginas.homePage.listadoPeliculas} \n
${paginas.homePage.pieDePagina} \n`
                break
            case '/en-cartelera':
                return `${paginas.enCartelera.titulo} \n
Total de películas: ${paginas.enCartelera.totalPeliculas}\n
${paginas.enCartelera.listadoPeliculas}`
                break
            case '/mas-votadas':
                return `${paginas.masVotadas.titulo} \n
Total de películas: ${paginas.masVotadas.totalPeliculas} \n
Rating promedio: ${paginas.masVotadas.ratingPromedio}\n
${paginas.masVotadas.listadoPeliculas}`
                break
            case '/sucursales':
                return `${paginas.sucursales.titulo}\n
Total de salas: ${paginas.sucursales.totalSalas}\n
${paginas.sucursales.listadoSalas}`
                break
            case '/contacto':
                return `${paginas.contacto.titulo}\n
${paginas.contacto.contenido}`
                break;
            case '/preguntas-frecuentes':
                return `${paginas.preguntasFrecuentes.titulo}\n
Total de preguntas: ${paginas.preguntasFrecuentes.totalPreguntas}\n
${paginas.preguntasFrecuentes.listadoPreguntas}`
                break
            default:
                return 'Pagina no encontrada'
                break;
        }
    }
}

module.exports = rutas;