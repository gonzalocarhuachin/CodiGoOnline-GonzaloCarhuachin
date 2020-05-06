//PROPIEDADES DE LOS STRINGS

let frase = "VIVA SATAN";
let tamanio = frase.length;
console.log(tamanio);

//string.toLowerCase

let minusculas = frase.toLowerCase();
console.log(minusculas);
console.log(frase);

//string.toUpperCase

let mayusculas = frase.toUpperCase();
console.log(mayusculas);

//string.substr(inicio,cantidad de caracteres)
//devuelve una subcadena dado el inicio inicial y la longitud de los caracteres

let primeraParte = frase.substr(0, 4);
console.log(primeraParte);

//string.substring(inicio,final)
//devuelve una subcadena dado el indice inicial y el final

let subCadena = frase.substring(5, 10);
console.log(subCadena);

//string.startWith("texto")
//compara los caracteres iniciales del string con el texto proporcionado
//si inicia con dicho texto, la funcion retorna TRUE
//caso contrario FALSE
//NO IMPORTA LA EXTENSION QUE SEA EL TEXTO

let iniciaConVIV = frase.startsWith("VIV");
console.log(iniciaConVIV);

//endsWith, analogo a la funcion anterior

//string.includes("texto")
//devuelve TRUE si la cadena contiene dicho texto como parte del contenido analizado, sino devuelve FALSE

let contieneMadruga = frase.includes("VIVA");
console.log(contieneMadruga);

//string.indexOf("texto",?_posicion)
//devuelve la posicion de una subcadena buscada dentro del string
//opcionalmente si se manda un valor a la variable posicion, el texto sera buscado a partir del indice de dicho valor
//de no ser encontrado mostrara -1

let buscarSatan = frase.indexOf("SATAN");
console.log(buscarSatan);

//string.trim()
//devuelve un string sin los espacios en blanco de los extremos del string original

let frase3 = " antes de partir  ";
let frase3Trim = frase3.trim();
console.log(frase3Trim);