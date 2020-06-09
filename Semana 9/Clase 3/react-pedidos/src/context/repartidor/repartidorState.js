import React, { useReducer } from 'react';
import RepartidorReducer from './repartidorReducer';
import RepartidorContext from './repartidorContext';

const RepartidorState = (props) =>
{
    //Creamos un objeto inicial como state inicial de repartidor
    const initialState = 
    {
        objRepartidor: null
    }
    //Crear un state y el (setState) que se llamara dispatch
    const [state, dispatch] = useReducer(RepartidorReducer, initialState);
    //Lista de Funciones que van a trabajar e intentar modificar el STATE
    const setObjRepartidor = (nuevoValor) =>
    {
        //Funcion que intenta y consulta al reducer para hacer cambios
        dispatch(
            {
                type: "SET_OBJREPARTIDOR",
                payload: nuevoValor
            })
    }

    return(
        <RepartidorContext.Provider value={
            {
                objRepartidor: state.objRepartidor,
                setObjRepartidor: setObjRepartidor
            }}>

            {props.children}

        </RepartidorContext.Provider>
    )
}

export default RepartidorState;