let n = +prompt("Cuantas notas va a ingresar?");
let i = 0;
let acumulado = 0;
while(i<n)
{
    let x = +prompt(`Ingresa la nota ${i+1}`);
    acumulado = acumulado + x;
    i++
}

console.log(`Promedio de notas: ${acumulado/n}`);