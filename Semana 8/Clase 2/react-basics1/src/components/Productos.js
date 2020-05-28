import React from 'react';
import Producto from './Producto';

const Productos = (props) => 
{
    return (
        <section>
            {
                props.productos.map((prod) => 
                {
                    return(
                        //Cada elemento que es generado dinamicamente debe tener una propiedad key que es un id unico de cada
                        //elemento
                        <Producto producto={prod} key={prod.id} saludar={props.saludar} actualizarCarrito={props.actualizarCarrito}
                        carrito={props.carrito}/>
                    )
                })
            }
        </section>
    );
}

export default Productos;