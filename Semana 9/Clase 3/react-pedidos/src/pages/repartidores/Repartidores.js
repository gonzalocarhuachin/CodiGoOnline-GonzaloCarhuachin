import React, { useState, useEffect, Fragment, useContext } from 'react';
import Cargando from '../../components/Cargando';
import RepartidoresTabla from './componentes/RepartidoresTabla';
// import RepartidorForm from './componentes/RepartidorForm';
import RepartidorFormV2 from './componentes/RepartidorFormV2';
import {withRouter} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Repartidores = () => {

    const authContextLocal = useContext(AuthContext);
    const {autenticarConStorage} = authContextLocal;

    const endpoint = "https://5ec8643e155c130016a909bf.mockapi.io/repartidor";
    const [cargando, setCargando] = useState(true);
    const [repartidores, setRepartidores] = useState([]);
    //esta variable va a contener un objeto de tipo repartidor, si o solo si, queremos editar a un repartidor, caso contrario sera nulo
    const [objRepartidor, setObjRepartidor] = useState(null);

    const getRepartidores = () =>
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
                setRepartidores(data);
            })
        })
    }
    useEffect(() => {
        //en caso la pagina recargue, el componente Repartidores tendra la obligacion de ejecutar solo una vez
        //la funcion autenticarConStorage para verificar si tenemos una sesion ya iniciada con el LS
        autenticarConStorage();
        getRepartidores();
       }, [])
    

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <RepartidorFormV2 getRepartidores={getRepartidores} objRepartidor={objRepartidor} setObjRepartidor={setObjRepartidor}/>
                </div>
            </div>
            <div className="row justify-content-center">
             <div className="col-md-8">
              {
                  cargando === true ? <Cargando tipo="info" texto="Cargando repartidores"/> : <RepartidoresTabla repartidores={repartidores} setObjRepartidor={setObjRepartidor}/>
              }
             </div>
            </div>
        </Fragment>
    )
}

//withRouter = funcion que sirve para renderizar el componente con los props del sistema de enrutamiento(history, match, etc)
export default withRouter (Repartidores);
