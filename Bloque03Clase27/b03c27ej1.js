/*
    Este ejercicio debe correr en Node.

    Crea cualquier objeto genérico, agrégale algunas propiedades.
    Herédalo una vez. Al objeto heredado agrégale otras propiedades. Trabajaremos con este objeto básico.
    Recorre su cadena de prototipos usando getPrototypeOf() y a cada prototipo agrégale una propiedad.
    Finalmente, llama todas las propiedades desde el objeto básico y comprueba que sean accesibles.
    Imprime toda su cadena de prototipos usando la función printProtoChain que está en las diapositivas.
*/

//tu código va aquí vvv
class Libro {
    constructor(paginas){
        this.paginas = paginas;
    }
}

class LibroTecnico extends Libro {
    
    constructor(paginas){
        super (paginas);
        this.genero = "Ciencia";
    }
}

const librito= new Libro("520");


Object.getPrototypeOf(librito).name = "JS";

function printProtoChain(obj, ind="") {
    ind2 = ind+"    ";
    if(obj==null) {

        console.log("\n"+ind+"null");
        return;
    }

    console.log("\n"+ind+obj.constructor.name+" : {\n");
    for(let p in obj) {
        console.log(`${ind2}"${p}" : "${obj[p]}",`);
    }
    printProtoChain(Object.getPrototypeOf(obj), ind2);
    console.log(ind+"}"); //cerrar bloque de objeto
}
printProtoChain(librito);


//tu código va aquí ^^^

//eof
