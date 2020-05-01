let numeros = [1,2,54,25,0,34,2,0,-67,-76,44,-1];
let i = 0;
let positivos = 0;
let negativos = 0;
let ceros = 0;

while(i < numeros.length)
{
    if(numeros[i] > 0)
    {
        positivos++;
    }
    else if(numeros[i] === 0)
    {
        ceros++;
    }
    else
    {
        negativos++;
    }
    i++;
}

console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Ceros: ${ceros}`);