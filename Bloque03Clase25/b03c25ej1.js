/*
    Este ejercicio debe correr en Node.

    Crea cualquier objeto.
    Agrégale algunas propiedades (con cualquier contenido).
    Imprime el descriptor de cada una de sus propiedades.
*/

//tu código va aquí vvv

let song = { name: "Indiscipline", 
             artist:"King Crimson",
            album: "Discipline",
            año:"1981"
            };


let p= Object.getOwnPropertyDescriptor(song, 'name');
let q=Object.getOwnPropertyDescriptor(song, 'artist');
let r=Object.getOwnPropertyDescriptor(song, 'album');
let s=Object.getOwnPropertyDescriptor(song, '1981');

console.log(p);
console.log(q);
console.log(r);
console.log(s);
//tu código va aquí ^^^

//eof
