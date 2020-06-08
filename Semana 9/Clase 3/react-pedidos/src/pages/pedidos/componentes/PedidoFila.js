import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';

const PedidoFila = ({pedido, numero, setObjPedido}) => {

    const [checked, setChecked] = useState(false);

    const putPedido = () =>
    {
        let nuevoPedido = {...pedido}
        nuevoPedido.ped_est = !checked + "";
        const endpoint = `${URL_BACKEND}/pedido/${pedido.id}`;

        fetch(endpoint, 
            {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(nuevoPedido)
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
        if(pedido.ped_est === "true")
        {
            setChecked(true);
        }
    }, [])

    return (
        <tr>
            <td>{numero}</td>
            <td>{pedido.id}</td>
            <td>{pedido.id_pro}</td>
            <td>{pedido.id_rep}</td>
            <td>{pedido.id_cli}</td>
            <td>{pedido.ped_ini}</td>
            <td>{pedido.ped_fin}</td>
            <td>
                {
                    pedido.ped_est === "true" ?
                    <span className="badge badge-success">Entregado</span> :
                    <span className="badge badge-danger">Pendiente</span>
                }
                <Switch checked={checked} onChange={putPedido} />
            </td>
            <td>{pedido.ped_fech}</td>
            <td><button className="btn btn-info" onClick={() => 
                {
                    setObjPedido({pedido});
                }
            }>Editar</button>
            </td>
        </tr>
    );
}

export default PedidoFila;
