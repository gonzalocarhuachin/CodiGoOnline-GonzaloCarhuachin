import {Repartidor} from "./Repartidor.js";
import {Cliente} from "./Cliente.js";

//Creando una instancia de la clase Repartidor
let objRepartidor = new Repartidor("Gonzalo", "Carhuachin", "74163315", 012);

console.log(objRepartidor);
//Creando una instancia de la clase Cliente
//significa que estan llamando al metodo constructor del objeto
let objCliente = new Cliente('Camila', 'Chimpen', '73676263', '234567899', '11');
console.log(objCliente);