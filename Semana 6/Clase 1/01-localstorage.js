let inputColor = document.getElementById("inputColor");
let formColor = document.getElementById("formColor");
let body = document.querySelector("body");

formColor.onsubmit = (e) =>
{
    //impedir que la pagina se recargue o envie datos
    e.preventDefault()
    let color = inputColor.value;
    //guardar un elemento en el localStorage
    //localStorage.setItem("clave",valor)
    localStorage.setItem("color",color);
    body.style.backgroundColor = color;
}

const verificarStorage = () =>
{
    //obtener un valor del localStorage
    //localStorage.getItem("clave") retorna el valor de dicha clave en el localStorage
    //OJO, si el localStorage no existe, retorna null
    let colorGuardado = localStorage.getItem("color");
    //si el color guardado existe
    if(colorGuardado)
    {
        body.style.backgroundColor = colorGuardado;
    }
}
verificarStorage();