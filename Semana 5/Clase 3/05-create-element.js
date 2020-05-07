//document.createElement("nombre_de_la_etiqueta") = crear elemento para ser colocado en el DOM
let parrafo = document.createElement("p");
parrafo.innerText = "TEXTO DEL PARRAFO";

let section1 = document.getElementById("section1");
//elemento.appendChild(elemento) = inyecta un elemento dado dentro del elemento de referencia
section1.appendChild(parrafo);