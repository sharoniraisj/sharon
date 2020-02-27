/*
    Convierte el arreglo del ejercicio 1 a JSON.
    Copia y pega el JSON generado en Slack
    Toma alguno de los JSON de tus compañeros y conviértelo a objeto.
    Imprime el objeto que recibiste.
*/

//tu código va aquí vvv

name = {firstname: "Sharon", lastname:"Jimenez"};
address = {street: "Goya", number:"143", postalcode:"45020", colonia:"Real Vallarta"};
career= {school:"UV", city:"Xalapa", prof:"Electronica", graduate_date:"2018"};

yo = {nombre:name, direccion:address, carrera:career};

jason = JSON.stringify(yo);
console.log(jason);
//tu código va aquí ^^^

//eof
