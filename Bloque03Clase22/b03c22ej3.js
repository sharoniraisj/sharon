/*
    Este ejercicio debe correr en Node.

    Realiza una función anónima que sume 2 números.
    Guarda una copia de esa función en una variable.
    Guarda otra copia dentro de un arreglo.
    Comprueba que ambas copias funcionen.
*/

//tu código va aquí vvv
let sumaAnonima = function(a,b){
    let sum = a + b;
    console.log(sum);
    return sum;
}

sumaAnonima(5,6);

let copiaEnArreglo = [sumaAnonima];

copiaEnArreglo[0](5,9);

//tu código va aquí ^^^

//eof
