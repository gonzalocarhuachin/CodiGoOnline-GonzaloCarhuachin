import {Persona} from "./Persona.js";

//Aplicando herencia
export class Repartidor extends Persona
{
    nroMoto;
    constructor(_nombre, _apellido, _dni, _id)
    {
        super(_nombre, _apellido, _dni, _id);
        this.nroMoto = _nroMoto;
    }
}