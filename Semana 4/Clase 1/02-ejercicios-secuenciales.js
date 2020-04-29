// 2.3

let anioNacimiento = +prompt("Ingrese el anio de nacimiento");
let edad = 2020 - anioNacimiento;
console.log("El trabajador tiene: " + edad + " años");

//2.4

let costoPorHora = 4;
let horas = +prompt("Ingrese las horas consumidas");
let cobro = horas * costoPorHora;
console.log("Usted debe pagar: S/. " + cobro);

//2.12

let producto = prompt("Ingrese el nombre del producto");
let precio = +prompt("Ingrese el precio del producto");
let precioDescontado = precio * 0.8;
let totalPagar = precioDescontado * 1.15;
console.log("Boleta: Producto: " + producto + ". Precio: " + precio + " soles. Total a pagar: " + totalPagar + " soles.");

//2.20

let nota1 = +prompt("Ingrese primera nota");
let nota2 = +prompt("Ingrese segunda nota");
let nota3 = +prompt("Ingrese tercera nota");

let promedio = nota1 * 0.25 + nota2 * 0.25 + nota3 * 0.50;
console.log("Promedio: " + promedio);