/*
    Este ejercicio debe correr en Node.

    Cambiando sólo una palabra en el código, haz que el ciclo for imprima el contenido del arreglo palabra por palabra.
    ¿Puedes explicar por qué sucede esto?
*/

//tu código va aquí vvv

function printArray() {
//Al usar "var", c fue declarado al inicio de su scope
    if(true) {
        var c = ["hola", "soy", "un", "ejercicio", "sobre", "hoisting"];
    }

    for(let i of c) {
        console.log(i);
    }
}

printArray();

//tu código va aquí ^^^

//eof
