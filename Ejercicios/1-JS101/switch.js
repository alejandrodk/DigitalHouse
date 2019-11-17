// practica switch
let dia = 'viernes';
switch (dia){
    case 'viernes':
    console.log('buen finde')
    break;
    case 'lunes':
    console.log('buena semana')
    break;
    default:
    console.log('buen dia')
    break;
};

// tengo clases
function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
        console.log('tenés clases')
        break;
        case 'miércoles':
        console.log('tenés clases')
        break;
        case 'viernes':
        console.log('tenés clases')
        break;
        default:
        console.log('no tenés clases')
        break;
	}
}
console.log(tengoClases('viernes'))

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
        case 'miércoles':
        case 'viernes':
        console.log('tenés clases')
        break;
        default:
        console.log('no tenés clases')
        break;
	}
}
tengoClases('jueves')
