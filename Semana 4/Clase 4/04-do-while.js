let acumulador = 0;
let i = 0;
let semaforo = true;
do
{
    let = x = +prompt(`Ingrese la nota ${i+1} o -1 para salir`);
    if(x !== -1)
    {
        acumulador = acumulador + x;
        i++;
    }
    else
    {
        semaforo = false;
    }
}while(semaforo === true)
console.log(`Promedio ${acumulador / i}`);