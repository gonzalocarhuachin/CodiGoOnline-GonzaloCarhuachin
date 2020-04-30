//Arreglos------------------------------------

let marcas = ["Nissan", "Mazda", "Kia", "Audi", "Ferrari"];
let modelos = ["Picanto", "CX-3", "Compass", "A1", "Auris"];
let sinElementos = [];

//Propiedades---------------------------------

//length-------------------------------------
alert(modelos.length);
//push---------------------------------------
marcas.push("Toyota");
alert(marcas);

let arreglos = [90, 2, 30, 40, 49, 233, "Gonzalo", true, ["Azul", "Negro"]];
alert(arreglos[7][1]);
//imprimir el ultimo elemento de un arreglos sin usar un numero de posicion
alert(arreglos[arreglos.length-1]);