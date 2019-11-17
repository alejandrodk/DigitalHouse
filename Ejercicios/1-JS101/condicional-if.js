let lenguaje = 'javascript'

if (lenguaje === "javascript") {
    console.log('Estoy aprendiendo')
} else {
    console.log('Lo aprendere mas adelante')
}

function puedePasar(nombre) {
    let resultado = '';
    if (nombre == 'Cosme Fulanito') {
        resultado = false
    } else {
        resultado = true
    }
    return resultado;
}