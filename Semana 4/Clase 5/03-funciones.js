//FUNCIONES

// 1. Funciones que no devuelven valor
//Declaracion de una funcion
function imprimirTriangulo()
{
    for (let i = 0; i < 5; i++) {
        let fila="";
        for (let j = 0; j <= i; j++) {
            fila= fila + "*";
        }
        console.log(fila);
    }
}
//Llamando a la funcion
imprimirTriangulo();

//2.Funciones que no devuelven valor pero si reciben paramatros
function imprimirTriangulo2(cantidad)
{
    console.log(`Cantidad : ${cantidad}`);
    for (let i = 0; i < 5; i++) {
        let fila="";
        for (let j = 0; j <= i; j++) {
            fila= fila + "*";
        }
        console.log(fila);
    }
}
imprimirTriangulo2(8);
imprimirTriangulo2(3);
imprimirTriangulo2(15);

//3.Funciones que retornan valor
function indiceMasaCorporal(peso, talla) 
{
    let imc = peso/(talla*talla);
    return imc;
}
let indice = indiceMasaCorporal(80, 1.70);
console.log(indice);

//4. Dada la siguiente funcion 
function sumar(a, b)
{
    return (a+b);
}
//Hacer suma de cuatro parametros en una linea sin en el +
console.log(sumar(sumar(10,20),sumar(30,40)));