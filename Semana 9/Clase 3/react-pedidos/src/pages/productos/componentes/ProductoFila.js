import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { URL_BACKEND } from '../../../variables/variables';

const ProductoFila = ({producto, numero, setObjProducto}) => {

    const [checked, setChecked] = useState(false);

    const putProducto = () =>
    {
        let nuevoProducto = {...producto}
        nuevoProducto.pro_est = !checked + ""; //Convertir en string
        const endpoint = `${URL_BACKEND}/producto/${producto.id}`;
        fetch(endpoint, 
            {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(nuevoProducto)
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
        if(producto.pro_est === "true")
        {
            setChecked(true);
        }
    }, [])

    return (
        <tr>
            <td>{numero}</td>
            <td>{producto.id}</td>
            <td>{producto.pro_nom}</td>
            <td>{producto.pro_prec}</td>
            <td>
                {
                    producto.pro_est === "true" ? <span className="badge badge-success">ConStock</span> : <span badge badge-danger>SinStock</span>
                }
                <Switch checked={checked} onChange={putProducto} />    
            </td>
            <td>{producto.pro_img}</td>
            <td><button className="btn btn-info" onClick={() =>
            {
                setObjProducto({producto});
            }}>Editar</button></td>  
        </tr>
    );
}

export default ProductoFila;
