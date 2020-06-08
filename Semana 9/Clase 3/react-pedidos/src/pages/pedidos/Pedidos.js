import React, { Fragment, useState,useEffect } from 'react';
import PedidoForm from './componentes/PedidoForm';
import Cargando from '../../components/Cargando';
import PedidosTabla from './componentes/PedidosTabla';

const Pedidos = () => {

    const endpoint = "https://5ec8643e155c130016a909bf.mockapi.io/pedido";
    const [cargando, setCargando] = useState(true);
    const [pedidos, setPedidos] = useState([]);
    const [objPedido, setObjPedido] = useState(null);

    const getPedidos = () =>
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
                setPedidos(data);
            })
        })
    }

    useEffect(() =>
    {
        getPedidos();
    }, [])

    return (
        <Fragment>
            <PedidoForm getPedidos={getPedidos} objPedido={objPedido} setObjPedido={setObjPedido}/>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {
                        cargando === true ? <Cargando tipo="info" texto="Cargando Pedidos"/> : <PedidosTabla pedidos={pedidos} setObjPedido={setObjPedido}/>
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Pedidos;
