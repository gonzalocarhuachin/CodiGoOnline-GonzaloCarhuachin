export class Persona
{
    id;
    nombre;
    apellido;
    dni;
}

constructor(_nombre, _apellido, _dni, _id)
{
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.dni = _dni;
    this.id = _id;
}