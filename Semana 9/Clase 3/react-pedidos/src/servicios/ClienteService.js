import { URL_BACKEND } from "../variables/variables";

export class ClienteService
{
    endpoint = '/cliente';
    async getAllClientes()
    {
        //los await funcionan en una funcion que lleva el prefijo async
        //la funcion async no retorna la lista, retorna una promesa
        let response = await fetch(`${URL_BACKEND}${this.endpoint}`);
        let clientes = await response.json();
        return clientes;

        // .then((response) =>
        // {
        //     response.json().then((clientes) =>
        //     {
        //         resolve(clientes);
        //     })
        // })
    }
}