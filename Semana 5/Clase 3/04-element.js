//ELEMENT, REPRESENTA UN ELEMENTO DEL DOM
let titulo = document.querySelector("#titulo");
//propiedad STYLE de todos los elementos
//elemento.color setea el color de texto o contenido de un elemento
titulo.style.color = "#ff0000";
//todos los estilos en js son iguales que en CSS, excepto que los estilos que llevan con nombre de guion, ejemplo: border-radius
//font-size, en js se transforman en camalCase y los valores se representan como un string ejemplo: font-size = fontSize
titulo.style.fontSize = "16px";
let parrafo = document.querySelector("#parrafo");
//elemento.clientWidth = devuelve el ancho del elemento incluido el relleno(padding)
//elemento.clientHeight = devuelve el alto del elemento incluido el relleno(padding)
console.log("ancho: " + parrafo.clientWidth);
console.log("alto: " + parrafo.clientHeight);
//elemento.offsetTop = devuelve la cantidad de pixeles que el elemento se desplaza desde el techo del viewport
console.log(parrafo.offsetTop);
console.log(parrafo.offsetLeft);
//devuelve el ancho y alto del elemento incluido el borde y el relleno
console.log(parrafo.offsetWidth);
console.log(parrafo.offsetHeight);
//elemento.scrollTop = cantidad de pixeles en los que el contenido del elemento se ha desplazado en la parte superior
console.log(parrafo.scrollTop);
let html = document.querySelector("html");
console.log(html.scrollTop);

let btnRojo = document.getElementById("btnRojo");
let btnVerde = document.getElementById("btnVerde");
let btnToggle = document.getElementById("btnToggle");

btnRojo.onclick = () =>
{
    parrafo.classname = "danger";
}

btnVerde.onclick = () =>
{
    parrafo.className = "success";
}

btnToggle.onClick = () =>
{
    if(parrafo.className === "danger")
    {
        parrafo.className = "success";
    }
    else
    {
        parrafo.className = "danger";
    }
}

//elemento.classList devuelve un arreglo con todas las clases que tenga el elemento
let miSection = document.getElementById("miSection");
console.log(miSection.classList);
//elemento.classList.remove("nombre_de_clase_a_borrar")
miSection.classList.remove("fondo-naranja");
//elemento.classList.add
miSection.classList.add("success");
//elemento.innerHTML get y set del contenido del elemento, si dicho codigo tiene codigo html, este es renderizado como parte del DOM
miSection.innerHTML = `<a href="https://www.google.com">CLICK AQUI</a>`;
//elemento.innerText get y set del contenido del elemento, si tiene codigo el elemento, este NO es renderizado
miSection.innerText = `<a href="https://www.google.com">CLICK AQUI</a>`;