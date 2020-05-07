//DOCUMENT = OBJETO QUE SIRVE PARA MANIPULAR EL DOM
//document.getElementById obtiene la referencia a un elemento del DOM
let midiv = document.getElementById("midiv");
console.log(midiv);
let cuadrados = document.getElementsByClassName("cuadrado");
for (let i = 0; i < cuadrados.length; i++)
{
    console.log(cuadrados); 
}
//document.querySelector(), selector de tipo css
//devuelve SOLO UN ELEMENTO que coincida con el selector tipo CSS
let miBoton = document.querySelector("#miBoton");
console.log(miBoton);
//document.querySelectorAll selector tipo CSS
let cuadrado2 = document.querySelectorAll(".cuadrado");
console.log(cuadrado2);