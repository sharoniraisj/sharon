/*
    Este ejercicio debe correr en Node.
    Cada instrucción de este ejercicio puede (y debe) realizarse con sólo una función.
    Todo lo que necesitas está en la documentación.

    //A partir del mismo objeto que creaste en el ejercicio 1,
    //Imprime todo el objeto con for-in.
    //Elige una de sus propiedades y hazla no enumerable.
    //Imprime de nuevo el objeto con for-in.
    //Elige otra de sus propiedades y cambia su valor.
    //Impide que el valor de esa propiedad sea cambiado.
    //Trata de cambiar el valor de esa propiedad otra vez.
    //Intenta agregar alguna nueva propiedad al objeto.
   // Impide agregarle nuevas propiedades a todo el objeto.
    //Intenta agregar alguna nueva propiedad al objeto.
    Borra alguna propiedad del objeto.
    //Impide modificar el valor de todas las propiedades del objeto.
    Trata de realizar cualquier modificación al objeto.
*/

//tu código va aquí vvv
let song = { name: "Indiscipline", 
             artist:"King Crimson",
            album: "Discipline",
            año:"1981"
            };

//Imprime todo el objeto con for-in.
console.log("*\nImprime todo el objeto con for-in*\n");
for(let p in song)
{
console.log(p +": " + song[p]);
}

//Elige una de sus propiedades y hazla no enumerable.
Object.defineProperty(song, 'name', {enumerable:false})

//Imprime de nuevo el objeto con for-in.
console.log("\n*Objeto sin la propiedad que es no-enumerable (name)*");
for(let q in song)
{
console.log(q +": " + song[q]);
}

//Elige otra de sus propiedades y cambia su valor.
console.log("\n*Elige otra de sus propiedades y cambia su valor (año)*");
song.año = "1960";
console.log(song.año);

//Impide que el valor de esa propiedad sea cambiado.
Object.defineProperty(song, "año", {writable:false});

//Trata de cambiar el valor de esa propiedad otra vez.
console.log("\n*writable:false aplicado a año*");
song.año = "1970";
console.log(song.año);

//Intenta agregar alguna nueva propiedad al objeto.
console.log("\n*Nueva propiedad añadida al objeto*");
song.voice = "Adrian Belew";
for(let r in song)
{
console.log(r +": " + song[r]);
}

// Impide agregarle nuevas propiedades a todo el objeto.
Object.preventExtensions(song);

//Intenta agregar alguna nueva propiedad al objeto.
console.log("\n*Intentar agregar propiedad al objeto despues de preventExtensions*");
song.guitars = "Robert Fripp";

//Borra alguna propiedad del objeto.
console.log("\n*Borrar propiedad del objeto*");
delete song.artist;
console.log(JSON.stringify(song));

//Impide modificar el valor de todas las propiedades del objeto.
Object.freeze(song);

console.log("\n*Objeto despues de aplicarle freeze y tratar de modificar artist*")
//Trata de realizar cualquier modificación al objeto.
song.artist = "KC";
 console.log(JSON.stringify(song));
//tu código va aquí ^^^

//eof
