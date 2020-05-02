//continue

let numeros = [8,2,-2,3,1,-9,0,3,0,2,-3];
for (let i = 0; i < numeros.length; i++) 
{
    if(numeros[i] < 0)
    {
        continue;
    }
    console.log(`i = ${i}`);
    console.log(numeros[i]);
}

//break

let numeros = [8,2,-2,3,1,-9,0,3,0,2,-3];
for (let i = 0; i < numeros.length; i++) 
{
    if(numeros[i] < 0)
    {
        break;
    }
    console.log(`i = ${i}`);
    console.log(numeros[i]);
}