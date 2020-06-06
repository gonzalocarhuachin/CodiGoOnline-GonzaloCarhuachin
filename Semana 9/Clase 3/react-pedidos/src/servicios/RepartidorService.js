import { URL_BACKEND } from "../variables/variables";

export class RepartidorService
{
    //atributo de clase, no se declara como variable
    endpoint = "/repartidor";

    //Funcion que trae a todos los repartidores
    getAllRepartidores()
    {
        return new Promise((resolve, reject) => 
        {
            fetch(`${URL_BACKEND}${this.endpoint}`).then((response) =>
        {
            response.json().then((repartidores) =>
            {
                resolve(repartidores);
            })
        })
        })
    }
}