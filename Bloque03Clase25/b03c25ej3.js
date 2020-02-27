/*
    Este ejercicio debe correr en Node.

    Crea un objeto cualquiera y agrégale algunas propiedades, todas ellas privadas.
    Elige alguna de las propiedades y prográmale un setter y un getter.
    Procura que el setter controle o valide el valor que se ingresa.
*/

//tu código va aquí vvv


let user = {_name:"Elvia", _lastName:"Flores", _age:"34", 
           get fullName()
           {
               //console.log(this._name + this._lastName);
               return (this._name + this._lastName);
           },

           
           set setAge(value)
           {
               this._age = value;
           }
      }

user.fullName();
user.getAge();

//tu código va aquí ^^^

//eof
