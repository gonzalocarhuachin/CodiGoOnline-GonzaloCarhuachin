//Condicionales

//Comparadores aritmeticos
// > mayor
// < menor
// == igual de comparacion (en valor)
// === igual de comparacion (en tipo de dato y en valor)
// != diferente
// >= mayor o igual
// <= menor o igual

//-----------------------------------------------

let valor = +prompt("Ingrese un numero");

if(valor % 2 == 0)
{
    alert(`El numero ${valor} es par`);
}
else
{
    alert(`El numero ${valor} es impar`);
}

//-----------------------------------------------

let precio = +prompt("Ingrese precio")

if(precio > 100)
{
    alert(`Total a pagar ${precio - (precio * 0.1)}`);
}
else
{
    alert(`Total a pagar ${precio}`);
}

alert(`Fin del progrma.`);

//----------------------------------------------

//Operadores logicos
// && = y
// || = o
// ! = negacion

//----------------------------------------------

let precioProducto = 1000;
let genero = "varon";

if((precioProducto > 500 ) && (genero === "varon"))
{
    alert(`Total ${precioProducto * 0.9}`);
}
else
{
    alert(`Total ${precioProducto}`);
}

//-----------------------------------------------

let anio =  +prompt("Ingrese un año");
if ((anio%4===0 && anio%100!=0) || (anio%400===0)){
    alert(`SI es año bisiesto`);
}
else{
    alert(`NO es año bisiesto`);
}

//-----------------------------------------------

let a = +prompt("Ingrese 1er numero");
let b = +prompt("Ingrese 2do numero");
let c = +prompt("Ingrese 3er numero");

if(a>b&&a>c)
{
    alert(`El numero mayor es ${a}`);
}
else if(b>a&&b>c)
{
    alert(`El numero mayor es ${b}`);
}
else if(c>a&&c>b)
{
    alert(`El numero mayor es ${c}`);
}