// 1- Repetir como loro

function loro(texto){
    for( let i = 1 ; i <=  5 ; i++ ){
        console.log(texto);
    };
}
loro('mi texto');

// 2- noParesDeContarImparesHasta

function noParesDeContarImparesHasta(numero){
    let impares = 0;
     for(var i = 0;i < numero; i++){
         if((i%2) == 1){
             impares++;
         }
     }
    return impares;
 }
 console.log(noParesDeContarImparesHasta(5));