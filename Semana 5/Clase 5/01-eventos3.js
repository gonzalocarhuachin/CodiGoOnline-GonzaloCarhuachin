//elemento.onLoad = evento que se dispara luego de que un elemento haya termiando de cargar todos los recursos
window.onload = () =>
{
    let section1 = document.getElementById("section1");
    section1.innerText = "TODO EL DOM HA CARGADO";
}
//elemento.onscrool = se dispara cada vez que el scroll del mouse reubica nuestra pagina, solo funciona si la altura 
//de la pagina es mayor que el 100vh
window.onscroll = (e) =>
{
    console.log(e);
}