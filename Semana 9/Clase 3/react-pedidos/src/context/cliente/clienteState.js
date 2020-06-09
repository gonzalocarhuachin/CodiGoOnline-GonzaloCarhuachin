import React, { useReducer } from 'react';
import ClienteReducer from './clienteReducer';
import ClienteContext from './clienteContext';

const ClienteState = (props) =>
{
    //Creamos un objeto inicial como state inicial de repartidor
    const initialState = 
    {
        objCliente: null
    }
    //Crear un state y el (setState) que se llamara dispatch
    const [state, dispatch] = useReducer(ClienteReducer, initialState);
    //Lista de Funciones que van a trabajar e intentar modificar el STATE
    const setObjCliente = (nuevoValor) =>
    {
        //Funcion que intenta y consulta al reducer para hacer cambios
        dispatch(
            {
                type: "SET_OBJCLIENTE",
                payload: nuevoValor
            })
    }

    return(
        <ClienteContext.Provider value={
            {
                objCliente: state.objCliente,
                setObjCliente: setObjCliente
            }}>

            {props.children}

        </ClienteContext.Provider>
    )
}

export default ClienteState;