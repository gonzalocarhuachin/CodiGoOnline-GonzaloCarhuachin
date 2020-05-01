let i = 0;
let acumulado = 0;
let ingresar = true;
while(ingresar === true)
{
    let x = +prompt(`Ingresa la nota ${i+1}`);
    if(x === -1)
    {
        ingresar = false
    }
    else
    {
        acumulado = acumulado + x;
    }
    i++
}
console.log(`Promedio de notas: ${acumulado/(i-1)}`);