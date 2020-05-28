import React from 'react';
//Importando una hoja de estilos exclusiva para carrito.js
//el nombre del archivo no tiene nada que ver
import './../estilos/carrito.css';

const Carrito = (carrito) => {
    return (
        <div className="carrito">
            {
                carrito.map((producto) =>
                {
                    return(
                        <div>
                            <p>
                                <strong>Nombre: </strong> {producto.nombre}
                            </p>
                            <p>
                                <strong>Descripcion: </strong> {producto.descripcion}
                            </p>
                            <p>
                                <strong>Precio: </strong>S/. {producto.precio}
                            </p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Carrito;
