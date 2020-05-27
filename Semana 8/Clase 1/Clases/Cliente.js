import {Persona} from "./Persona.js";

export class Cliente extends Persona
{
    nroCliente;
    //No se pueden hacer operaciones en las clases a no ser que sean dentro de una funcion

    //Constructor de una clase
    //Sirve para poder inicializar valores por defecto en los atributos de un objeto creado
    constructor(_nombre, _apellido, _dni, _id, _nroCliente)
    {
        //super() seria como colocar constructorDelPadre
        super(_nombre, _apellido, _dni, _id);
        //funcion reservada de la clase
        this.nroCliente = _nroCliente;
    }
}