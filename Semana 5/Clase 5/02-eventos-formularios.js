let formulario = document.getElementById("formulario");
let nombreInput = document.getElementById("nombreInput");
let selectDistrito = document.getElementById("selectDistrito");
let menu = document.getElementById("menu");
let enviarGatos = document.getElementById("enviarGatos");
let opcion1 = document.getElementById("opcion1");
let opcion2 = document.getElementById("opcion2");
let opcion3 = document.getElementById("opcion3");
//elemento.onchange = cuando sucede un cambio en el contenido del elemento y el focus sale del elemento
nombreInput.onchange = (e) =>
{
    console.log("onchange");
    console.log(e);
}
//elemento.onfocus = sucede cuando el cursor hace "click" en un elemento
nombreInput.onfocus = (e) =>
{
    console.log("onfocus");
    nombreInput.style.borderRadius = "5px";
    console.log(e);
}
//elemento.onblur = lo opuesto al onfocus
nombreInput.onblur = (e) =>
{
    console.log("onblur");
    nombreInput.style.borderRadius = "0px";
    console.log(e);
}

selectDistrito.onchange = (e) =>
{
    //select.selectedIndex = es el numero o posicion del conjunto de options que tiene el select
    let posicion = selectDistrito.selectedIndex;
    console.log(posicion);
    //select.options = devuelve el arreglo de options que tiene un elemento select
    console.log(selectDistrito.options[posicion].innerText);
    console.log(e.target.value);
}

//form.onsubmit = evento que se dispara cuando se presiona click en un boton de tipo submit dentro del formulario o cuando se
//presione la tecla ENTER en cualquiera de los inputs de un formulario
formulario.onsubmit = () =>
{
    //e.preventDefault() = cancela todas las acciones que iban a suceder tras desencadenarze el evento si o solo si tenian
    //acciones por defecto
    // EJM, el click de una etiqueta <a> redirecciona a una pagina
    //EJM, el submit de un formulario envia los datos a un servidor
    //EJM, el click derecho abre un menu contextual en el navegador
    e.preventDefault();
    let info = 
    {
        nombre: nombreInput.value,
        distrito: selectDistrito.value
    }
    console.log("ENVIANDO GATOS");
    console.log(info);
}

//elemento.oncontextmenu = evento que se dispara cuando se hace un click derecho sobre el elemento
window.oncontextmenu = (e) =>
{
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
    //remove.Attribute = elimina el atributo del elemento
    menu.removeAttribute("hidden");
}
window.onclick = () =>
{
    menu.setAttribute("hidden","hidden");
}

const clickOpcion = (e) =>
{
    let id = e.target.getAttribute("id");
    switch (id) {
        case "opcion1":
            console.log("click en la opcion 1");
            break;
        case "opcion2":
            window.print();
            break;
        case "opcion3":
            console.log("click en la opcion 3");
            break;
        default:
            break;
    }
}

opcion1.onclick = clickOpcion;
opcion2.onclick = clickOpcion;
opcion3.onclick = clickOpcion;