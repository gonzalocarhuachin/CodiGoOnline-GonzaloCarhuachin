export class Cliente
{
    nombre;
    apellido;
    dni;
    id;
    nroCliente;
    //No se pueden hacer operaciones en las clases a no ser que sean dentro de una funcion

    //Constructor de una clase
    //Sirve para poder inicializar valores por defecto en los atributos de un objeto creado
    constructor(_nombre, _apellido, _dni, _id, _nroCliente)
    {
        //funcion reservada de la clase
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.dni = _dni;
        this.id = _id;
        this.nroCliente = _nroCliente;
    }
}