//1- Contemos con un While

function count(desde, hasta) {
    while(desde < hasta){
        console.log('El número actual es ' + desde + ' y es menor a ' + hasta)
    desde++   
    }
}
count(5,20)

//2- Encontrando el 5

function encontrarUn5(numeros){
    let i = 0;
    let numero = numeros[i];
    do{
        numero = numeros[i]
        console.log(numero)
        i++
    } while (numero < 5)
    console.log('Se encontró un 5!');
}

//3- tabla de multiplicar

function tablaDeMultiplicar(numero) {
    let i = 1;

    while (i < 11) {
        console.log(numero + ' * ' + i + ' = ' + numero * i);
        i++;
    }
}