//variables.

var a; //declarando.
var b ='b'; //declaramos y asignamos.
b = 'bb'; // reasignacion de variable.
var a = 'aa'; //redeclaracion.


//Global Scope. => cualquier variable que se encuentre en el documento
// pasan a ser varibles globales y se estancian dentro del objeto windows
// y se puede accedee desde cualquier parte del proyect.

var fruit ='Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();



////////////////

function countries(){
    country = 'Colombia';//global
   // var country = 'Colombia';//no es global solo para este bloque
    console.log(country);
}
countries();
console.log(country);
