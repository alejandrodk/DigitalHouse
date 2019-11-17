const fs = require('fs');
let faqs = JSON.parse(fs.readFileSync('data/faqs.json','utf8'));

let listPreg = faqs.faqs.map(pregunta => {
    return `Pregunta: ${pregunta.faq_title}
Respuesta: ${pregunta.faq_answer}\n\n`
})

let preguntasFrecuentes = {
    titulo : 'Preguntas Frecuentas',
    totalPreguntas : faqs.total_faqs,
    listadoPreguntas : listPreg,
}

module.exports = preguntasFrecuentes;
