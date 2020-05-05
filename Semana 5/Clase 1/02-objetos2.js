let vehiculo = 
{
    nroLlantas: 4,
    color: "Gris",
    marca: "Audi",
    placa: "ABC-123",
    imprimirDatos: () =>
    {
        console.log(`Color => ${vehiculo.color}`);
        console.log(`Llantas => ${vehiculo.nroLlantas}`);
        console.log(`Marca => ${vehiculo.marca}`);
        console.log(`Placa => ${vehiculo.placa}`);
    }
};
vehiculo.imprimirDatos();

//CONSTRUCTOR DE OBJETOS
let constructorVehiculos = () =>
{
    let vehiculo = 
    {
    nroLlantas: 4,
    color: "Gris",
    marca: "Audi",
    placa: "ABC-123",
    imprimirDatos: function()
        {
            console.log(`Color => ${this.color}`);
            console.log(`Llantas => ${this.nroLlantas}`);
            console.log(`Marca => ${this.marca}`);
            console.log(`Placa => ${this.placa}`);
        }
    };

    return vehiculo;
}

let camioneta = constructorVehiculos();
let moto = constructorVehiculos();
let bus = constructorVehiculos();

camioneta.marca = "Ford";
moto.marca = "Bajaj";
bus.marca = "Mercedes Benz";
imprimirDatos(camioneta);
imprimirDatos(moto);
imprimirDatos(bus);