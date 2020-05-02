let estadoCuenta = [["Enero", "pagado"],
                    ["Febrero", "pagado"],
                    ["Marzo", "pendiente"]
                    ["Abril", "pendiente"],
                    ["Mayo", "pendiente"],
                    ["Junio", "pagado"]
                    ["Julio", "pendiente"],
                    ["Agosto", "pendiente"],
                    ["Septiembre", "pagado"]
                    ["Octubre", "pendiente"],
                    ["Noviembre", "pagado"],
                    ["Diciembre", "pendiente"]];

let opcion = prompt("Ingrese 'pendiente' o 'pagado'");

for(let i = 0; i < estadoCuenta.length; i++)
{
    if(estadoCuenta[i][1] !== opcion)
    {
        continue;
    }
    console.log(`${estadoCuenta[i][0]} mes pagado`);
}

//------------------------------------------------------------

let notas = [20, 20, 19, 19, 18.5, 17, 16.14, 13, 11, 10, 9, 5, 3, 1, 1, 0];

for (let j = 0; j < notas.length; j++) 
{
    if(notas[j] < 12)
    {
        break;
    }    
    console.log(notas[j]);
}

//----------------------------------------------------------

for (let i = 0; i < 10; i++) 
{
    console.log(`---Tabla del ${i}---`);

    for (let j = 0; j < 10; j++) 
    {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//-------------------------------------------------------------

let matriz = [
    [13, 45, 53, 0],
    [55, 23, 11, -1],
    [90, 9, 33, 1, 0]
];

for (let i = 0; i < matriz.length; i++) 
{
    let fila = "";
    for (let j = 0; j < matriz[i].length; j++) 
    {
        fila = fila + " " + matriz[i][j];
    }
    console.log(fila);
}

//---------------------------------------------------------------

for (let i = 1; i < 10; i++) 
{
    for (let j = 0; j < i; j++) 
    {
        console.log("*");
    }
}