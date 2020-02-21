/*
    Este ejercicio debe correr en Node.

    Realiza dos copias del arreglo a.
    Una de ellas debe cambiar su contenido a la vez que el de a.
    La otra debe ser independiente de a.
*/

let a = ["aserejé", "ja", "dejé", "dejébetu", "dejébede", "sebinoua", "majabi", "andebugui", "andebuididipi"];
let b;
let c = [];

//tu código va aquí vvv
b = a; //b va a cambiar a la vez que a
b[2] = "Change"; //--> Aquí si modifico b[2], a[2] tambien va a cambiar

console.log("Arreglo original: "+a);
console.log("Copia del Arreglo guardado en b: "+b);

function copiar(copiaDelArregloA) {
    for(let i=0; i<copiaDelArregloA.length; i++) {
        c.push(copiaDelArregloA[i]);
    }//Modifico c[0] pero a[0] no cambia
    c[0]="HOLA";
    console.log("Copia de arreglo independiente de a: "+c);
    console.log("Arreglo original", copiaDelArregloA);
}

copiar(a);

//tu código va aquí ^^^

//eof
//Hacer mas logs y mas modificaciones para ver como funciona