//window.location = (GET y SET)
// obtiene o configura la informacion de la pagina actual del navegador
console.log(window.location);
//window.history, sirve para manipular el historial del navegador
console.log(window.history);
//window.document, objeto que nos da acceso a la obtencion y manipulacion del DOM
console.log(window.document);
//window.innerWidth, devuelve el ancho de la ventana en pixeles
console.log(`Ancho de la ventana ${window.innerWidth}`);
//window.innerHeight, devuelve el alto de la ventana en pixeles
console.log(`Alto de la ventana ${window.innerHeight}`);
//window.scrollY, devuelve la cantidad de pixeles en los que se ha desplazado el scroll en el eje Y
console.log(`Desplazado en Y ${window.scrollY}`);
//ES POSIBLE OMITIR LA VARIABLE WINDOW Y EN SU LUGAR COLOCAR DIRECTAMENTE LA PROPIEDAD O FUNCION
console.log(document);

//ejemplo de como modificar o redireccionar programaticamente a otra pagina
window.location.href = "https://www.google.com";

//window.location.reload() funcion que sirve para recargar la pagina