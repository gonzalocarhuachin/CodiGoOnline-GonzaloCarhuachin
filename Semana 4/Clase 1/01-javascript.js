//Variables
let a = 10;
let b = 90;
let c = 0;

c = a + b;
console.log(c);

//Asignacion de una misma variable con modificacion
c = c + 8;
console.log(c);

//Tipos de Datos
let nombre = "Gonzalo"; //String
let sueldo = 1000.00; //Number
let visto = true; //Booleano

//Operaciones aritmeticas

//suma, resta, multiplicacion, division
c = (sueldo * 2) + (sueldo * 10 / 100);
console.log(c);
//% modulo o residuo de una division entera
let numero1 = 20;
let numero2 = 3;
let modulo = numero1 % numero2;
console.log(modulo);

//Concatenar
let alfa = "Lorem ipsum";
let numerico = 123;
let alfanumerico = alfa + numerico;
console.log(alfanumerico);

let direccion = "Calle Blondell";
let numero_dir = 105;
let info = direccion + "" + numero_dir;
console.log(info);
console.log("Mi direccion es: " + info);

let resultado = 32 + "32"
console.log(resultado);