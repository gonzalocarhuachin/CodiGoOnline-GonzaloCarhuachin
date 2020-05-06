//TIPO DE DATO DATE
let hoy = new Date();
console.log(hoy);
let anioActual = hoy.getFullYear();
console.log(anioActual);
let mesActual = hoy.getMonth();
console.log(mesActual);
let diaCalendario = hoy.getDate();
console.log(diaCalendario);
let horas = hoy.getHours();
console.log(horas);
let minutos = hoy.getMinutes();
console.log(minutos);
let segundos = hoy.getSeconds();
console.log(segundos);
let milisegundos = hoy.getMilliseconds();
console.log(milisegundos);

//Crear una fecha con datos distintos a hoy
//Colocar los numeros en el siguiente orden
//let fecha = new Date(anio,mes,dia,hora,minutos,segundos)
//Se puede obviar a partir de las horas
let navidad = new Date(2020, 12, 25);
//El resultado de restar dos fechas se obtiene en milisegundos
console.log(navidad - hoy);