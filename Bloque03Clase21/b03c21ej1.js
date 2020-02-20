/*
    Este ejercicio debe correr en Node.

    En ejercicios anteriores realizaste la tabla de multiplicar de un número.
    Esta vez, envuelve ese código en una función que pida un número como argumento.
    No es necesario que la función devuelva nada.
    Finalmente debe ser posible llamar la función con cualquier valor y obtener su tabla de multiplicar.
*/

//tu código va aquí vvv

 function tablademultiplicar(num){
     for (i=0; i<=10; i++)
     {
         result = num * i;
         console.log("La multiplicacion de ", num, "x", i, "es", result);
     }
 }
 //tablademultiplicar("abd");
 tablademultiplicar(6);
//tu código va aquí ^^^

//eof
