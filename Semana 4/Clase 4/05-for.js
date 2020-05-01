let n = +prompt("Cuantos datos va a ingresar?");
let arreglo = [];

for(let i = 0; i < n; i++)
{
    let x = +prompt("Inserta el numero");
    arreglo.push(x*2);
}
console.log(arreglo);