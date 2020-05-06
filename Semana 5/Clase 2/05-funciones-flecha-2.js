let cuadrado = (numero) =>
{
    return numero * numero;
}

//otra manera
//cuando una funcion de flecha recibe un parametro solamente se pueden obviar los parentesis
//cuando la operacion de retorno es de una sola linea se pueden obviar las llaves y la palabra reservada return, pero se colocan
//parentesis

let cuadrado2 = n => (n * n)
console.log(cuadrado2(25));

//OPERADOR TERNARIO
//manera sencilla de expresar un if-else si y solo si tenemos una linea en cada SCOPE

let soltero = true;
let resultado = "";
if(soltero === true)
{
    resultado = "El usuario esta soltero"
}
else
{
    resultado = "El usuario no esta soltero"
}
//--------------------

let resultado2 = soltero === true ? "El usuario esta soltero" : "El usuario no esta soltero";
console.log(resultado2);
