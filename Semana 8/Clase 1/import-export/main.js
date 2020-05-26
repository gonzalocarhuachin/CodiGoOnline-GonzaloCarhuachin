//Codigo principal
//1. Importar el contenido de otros archivos
//pueden ser funciones, variables, etc
import{sumar, API_KEY} from './funciones.js'
//Importando todas las funciones, variables, etc
//que han sido exportadas en rutas.js
//y lo guardamos en un objeto misRutas
import * as misRutas from './rutas.js'
//--------------------------
let btn1 = document.getElementById("btn1");
btn1.onclick = misRutas.clickBoton;

misRutas.function2();

sumar(60, 9);