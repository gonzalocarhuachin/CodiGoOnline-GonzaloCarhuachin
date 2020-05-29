import React from 'react';
//Importando una hoja de estilos exclusiva para carrito.js
//el nombre del archivo no tiene nada que ver
import './../estilos/carrito.css';

const Carrito = ({carrito, actualizarCarrito}) => {

    const eliminarProductoDeCarrito = (id) =>
    {
        //1. Obtener una copia del state carrito
        let copiaCarrito = [...carrito];
        //2. Filtrar todos los productos del carrito y solo quedarnos con los que no tengas el ID recibido por parametros
        let productosFiltrados = copiaCarrito.filter((producto) => (producto.id === id));
        //3. Actualizar el state carrito, es decir usar la funcion actualizarCarrito() para modificar el carrito
        actualizarCarrito(productosFiltrados);
    }

    return (
        <div className="carrito">
            {
                //Alternativa a if(), si el carrito no tiene elementos muestra el mensaje, sino muestra el carrito con los elementos
                //seleccionados
                //if
                carrito.length === 0 ?
                <p>No hay elementos en el carrito</p> :
                //else
                carrito.map((producto) =>
                {
                    return(
                        <div key={producto.id}>
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
                                <button type="button" onClick={() =>
                                {
                                    eliminarProductoDeCarrito(producto.id);
                                }}>Eliminar</button>
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
