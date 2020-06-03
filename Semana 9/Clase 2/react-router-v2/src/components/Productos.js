import React from 'react';

const Productos = (props) => {

    console.log(props);
    //Redireccionar a otra ruta
    const verProducto = (idProducto) =>
    {
        props.history.push(`/producto/${idProducto}`);
    }

    return (
        <div>
            <ul>
                <li>Producto de id 789</li>
                <button onClick={() => {verProducto(789);}}>Ver Producto</button>
                <li>Producto de id 1000</li>
                <button onClick={() => {verProducto(1000);}}>Ver Producto</button>
            </ul>
        </div>
    );
}

export default Productos;
