/*
    Este ejercicio debe correr en Node.

    Crea dos clases con class.
    La segunda debe heredar a la primera con extends.
    Crea un objeto a partir de la segunda clase.
    Comprueba que las propiedades y métodos de ambas son accesibles desde el objeto.
*/

//tu código va aquí vvv

class Book {
    constructor (name){
        this.name = name;
        this.description = "Soy un libro padre"
    
    }

}

class ScienceBook extends Book {
    constructor (name) {
        super(name);
        this.genre = "Science";
        
    }

}

const lib = new ScienceBook("Electronics");
console.log(lib);

//tu código va aquí ^^^

//eof
