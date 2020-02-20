/*
    Este ejercicio debe correr en Node.

    Realiza dos copias del arreglo a.
    Una de ellas debe cambiar su contenido a la vez que el de a.
    La otra debe ser independiente de a.
*/

let a = ["aserejé", "ja", "dejé", "dejébetu", "dejébede", "sebinoua", "majabi", "andebugui", "andebuididipi"];
let b;
let c;

//tu código va aquí vvv
b = a;
c = a;
b[2] = "Change";
console.log("Arreglo inicial:"+a);
//console.log(b);


function copiar(copiaDelArregloA){
    for(let i=0; i<copiaDelArregloA.length; i++){
      
          copiaDelArregloA[i]+="HOLA";
      }
      console.log("Arreglo C modificado:"+copiaDelArregloA);
    }
    

copiar(c);

//tu código va aquí ^^^

//eof
