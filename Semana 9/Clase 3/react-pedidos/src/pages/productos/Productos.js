import React, { useEffect, useState, Fragment, useContext } from 'react';
import Cargando from '../../components/Cargando';
import ProductoForm from './componentes/ProductoForm';
import ProductosTabla from './componentes/ProductosTabla';

const Productos = () => {

    const endpoint = "https://5ec8643e155c130016a909bf.mockapi.io/producto";

    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState([]);
    const [objProducto, setObjProducto] = useState(null);
    const authContextLocal = useContext(AuthContext);
    const {autenticarConStorage} = authContextLocal;

    const getProductos = () =>
    {
        if(!cargando)
        {
            setCargando(true);
        }

        fetch(endpoint).then((response) =>
        {
            response.json().then((data) =>
            {
                setCargando(false);
                setProductos(data)
            })
        })
    }

    useEffect(() =>
    {
        getProductos();
        autenticarConStorage();
    }, [])

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <ProductoForm getProductos={getProductos} objProducto={objProducto} setObjProducto={setObjProducto}/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {
                        cargando === true ? <Cargando tipo="info" texto="Cargando productos"/> : <ProductosTabla productos={productos} setObjProducto={setObjProducto}/>
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Productos;
