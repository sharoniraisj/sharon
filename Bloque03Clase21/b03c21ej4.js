/*
    Este ejercicio debe correr en Node.

    Realiza un arreglo de 4 elementos, donde en cada elemento guardes una función.
    Estas funciones serán suma, resta, multiplicación y división.
    Debe ser posible llamar a las funciones usando el índice del arreglo.
*/

//tu código va aquí vvv
function suma(a,b){
return a+b;
}

function resta (a,b)
{
    return a-b;
}

function mult (a,b){
    return a*b;
}

function div (a,b){
    return a/b;
}

operaciones = [suma,resta,mult,div];

let s = operaciones[0];
let r = operaciones[1];
let m = operaciones[2];
let d = operaciones[3];
d = d(100,10);
s = s(2,3);
r = r(9,3);
m = m(8,7);


console.log(s);
console.log(r);
console.log(m);
console.log(d);
//tu código va aquí ^^^

//eof
