import React from 'react';

const Producto = ({producto, saludar, actualizarCarrito, carrito}) => {
    return (
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
            <p>
                <button onClick={() => 
                {
                    saludar(producto.nombre);
                    //Creando una copia del state "carrito"
                    let carritoTmp = [...carrito];
                    carritoTmp.push(producto);
                    actualizarCarrito(carritoTmp);
                }}>Agregar al Carrito</button>
            </p>
        </div>
    );
}

export default Producto;
