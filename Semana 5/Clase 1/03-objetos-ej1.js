let productos = 
[
    {
        id: 1,
        nombre: 'Laptop Gamer',
        foto: 'url',
        categoria: 'Laptop',
        precio: 7000.00
   }, 
   {
        id: 2,
        nombre: 'Mouse Razer',
        foto: 'url',
        categoria: 'Accesorios',
        precio: 200.00
   }, 
   {
        id: 3,
        nombre: 'Webcam Logitech',
        foto: 'url',
        categoria: 'Accesorios',
        precio: 120.00
   }, 
   {
        id: 4,
        nombre: 'Cooler para laptop',
        foto: 'url',
        categoria: 'Accesorios',
        precio: 100.00
   }
];

//Imprime los mayores
let imprimirPreciosMayores = (arreglo, precio) =>
{
    for (let i = 0; i < arreglo.length; i++) 
    {
        if(arreglo[i].precio > precio)
        {
            console.log(arreglo[i]);
        }
    }
}
imprimirPreciosMayores(productos, 500);