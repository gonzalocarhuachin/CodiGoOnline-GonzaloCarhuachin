import React, { useState, useEffect, useContext } from 'react';
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';
import ClienteContext from '../../../context/cliente/clienteContext';

const ClienteFila = ({cliente, numero, setObjCliente}) => {

    const clienteContextLocal = useContext(ClienteContext);
    const {objCliente, setObjCliente} = clienteContextLocal;

    const [checked, setChecked] = useState(false);

    const putCliente = () =>
    {
        let nuevoCliente = {...cliente}
        nuevoCliente.cli_est = !checked + ""; //Convertir en string
        const endpoint = `${URL_BACKEND}/cliente/${cliente.id}`;
        fetch(endpoint, 
            {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(nuevoCliente)
            }).then((response) =>
            {
                response.json().then((data) =>
                {
                    setChecked(!checked);
                })
            })
    }

    useEffect(() =>
    {
        if(cliente.cli_est === "true")
        {
            setChecked(true);
        }
    }, []);

    return (
        <tr>
            <td>{numero}</td>
            <td>{cliente.id}</td>
            <td>{cliente.cli_nom}</td>
            <td>{cliente.cli_ape}</td>
            <td>
                {
                    cliente.cli_est === "true" ?
                    <span className="badge badge-success">Activo</span> :
                    <span className="badge badge-danger">Inactivo</span>
                }
                <Switch checked={checked} onChange={putCliente} />
            </td>
            <td>{cliente.cli_dni}</td>
            <td><button className="btn btn-info" onClick={() => 
                {
                    setObjCliente({cliente});
                }}>Editar</button></td>
        </tr>
    );
}

export default ClienteFila;
