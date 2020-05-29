import React from 'react';

const Producto = ({producto, saludar, actualizarCarrito, carrito}) => {

    let agregarAlCarrito = () =>
    {
        //saludar() solo es prueba
        saludar(producto.nombre);
        //1. Creando una copia del state "carrito"
        let carritoTmp = [...carrito];
        //2. Validar si el producto que intento agregar al carrito no exista previamente en el carrito
        let arreglo = carritoTmp.filter((p) => (p.id === producto.id));//este ultimo parentesis seria un "if" que se espera un return
        if(arreglo.length > 0)
        {
            //significa que ya existe el producto
            console.log("El producto ya existe");
        }
        else
        {
            carritoTmp.push(producto);
            actualizarCarrito(carritoTmp);
        }   
    }

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
                    agregarAlCarrito();
                }}>Agregar al Carrito</button>
            </p>
        </div>
    );
}

export default Producto;
