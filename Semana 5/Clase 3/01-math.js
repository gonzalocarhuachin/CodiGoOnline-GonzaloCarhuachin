//CLASE MATH

//Math.sqrt(numero) obtiene la raiz cuadrada de un numero
let raiz4 = Math.sqrt(4);
//Math.floor(numero) obtiene la parte entera de un numero
console.log(Math.floor(4.99));
//Math.ceil(numero) analogo a floor, redondea un numero al proximo entero
console.log(Math.ceil(5.9));
//Math.round(numero) este SI redondea el numero de acuerdo al estandar
console.log(Math.round(8.3));
//Math.random() nos devuelve un numero aleatorio entre 0 y 1 por defecto
console.log(Math.random());
//artificio para hallar un numero random entre 2 numeros dados
//Math.random() * (max-min) + min;
let random2050 = Math.random() * (50-20) + 20;
console.log(random2050.toFixed(0));