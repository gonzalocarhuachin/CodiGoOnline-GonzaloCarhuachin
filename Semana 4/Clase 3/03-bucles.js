//BUCLES O ESTRUCTURAS REPETITIVAS

//WHILE - MIENTRAS

let i = 0;
while(i < 10)
{
    console.log("OLA K ASE");
    i = i + 1;
}

//-------------------------
let notas = [4,3,6,7,8,5,7,11,20];
let sumatoria = 0;
let c = 0;
while(c < notas.length)
{
    sumatoria = sumatoria + notas[c];
    c++;
}
console.log(`Promedio = ${(sumatoria / notas.length).toFixed(2)}`);

//EJERCICIOS
