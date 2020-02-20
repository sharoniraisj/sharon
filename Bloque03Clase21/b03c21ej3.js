/*
    Este ejercicio debe correr en Node.

    Realiza una función que reciba un string y un boolean.
    Si el boolean es true, la función debe devolver cuántas vocales hay en el string, asumiendo que solo tiene letras.
    Si el boolean es false, debe devolver cuántas consonantes hay.

	Al declarar la función, guárdala en una variable.
*/

//tu código va aquí vvv

const tipodeletra = function stringb (un_str,un_bool)
{
    let v = 0;
    if(un_bool)
    {
        
        for(let vocal of un_str)
        {
            
            if(vocal === "a" || vocal === "e"|| vocal === "i" || vocal === "o" || vocal === "u")
            {
             v++;
             
            }            
            
        }
        
    }
    
    else
    {
        
           for (let consonante of un_str)
           {
                if ((consonante!=="A")||(consonante!=="E")||(consonante!=="I")||(consonante!=="O")||(consonante!=="U"))
                {
                    v++;
                }
            }
        
     return v;
    }
    
console.log( v);
//tu código va aquí ^^^


}


tipodeletra("centraal", true);