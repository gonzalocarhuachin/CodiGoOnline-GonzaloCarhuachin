let numeros = [2,4,6,8,10,12,14];
//arreglo.pop
//devuelve el ultimo elemento del arreglo y ademas modifica el arreglo original quitandole ese elemento
let ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
//arreglo.splice(valorInicial,#aBorrar,valorInicial)
//devuelve un nuevo arreglo
//dada la posicion inicial borra la cantidad de elementos otorgada como parametro y opcionalmente inserta
//los elementos que esten separados por comas, si no se quiere borrar, colocar 0
let numerosNuevos = numeros.splice(3,0,100,900);
console.log(numeros);
//arreglo.indexOf(elemento,?posicion)
//retorna la posicion de un elemento buscado a partir (opcionalmente) de la posicion indicada,
//sino se manda, sera 0
let buscar = numeros.indexOf(900);
console.log(buscar);
//arreglo.forEach(()=>{})
//el callback recibe hasta 3 parametros
numeros.forEach((nro)=>
{
    console.log(`Indice ${i}, Elemento ${nro}`);
});
//arreglo.filter(()=>{})
//tiene la capacidad de retornar un nuevo arreglo con los elementos que cumplan con cierta condicion
let mayoresQue100 = numeros.filter((elemento, i)=>
{
    if(elemento > 100)
    {
        return elemento;
    }
});
console.log(mayoresQue100);
//arreglo.map(()=>{})
//devuelve el arreglo con todos los elementos del arreglo original sin embargo todos ellos con alguna modificacion
let dobles = numeros.map((n,i)=>
{
    return n * 2;
});
console.log(dobles);
