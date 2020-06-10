import React, { useReducer } from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';
import { AuthService } from '../../servicios/AuthService';

const authState = (props) =>
{
    const objAuthService = new AuthService();

    const initialState = 
    {
        autenticado: null,
        token: "",
        usuario: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const iniciarSesion = (email, password) =>
    {
        objAuthService.postLoggin(email, password).then(data =>
            {
                //usar el dispatch
                if(data.message === "ok")
                {
                    dispatch({
                        type: "INICIO_EXITOSO",
                        payload: data.token
                    })
                }
                else
                {
                    //generar un error
                }
            })
    }

    const cerrarSesion = () =>
    {
        dispatch({
            type: "CERRAR_SESION"
        })
    }

    //autenticar a un usuario cuando la pagina se recargue y aun tenga un token valido en el LS
    const autenticarConStorage = () =>
    {
        const token = localStorage.getItem("token");
        if(token)
        {
            //validar el tiempo de vida del token
            let rpta = objAuthService.validarToken(token);
            if(rpta === true)
            {
                dispatch({
                    type: "AUTENTICAR_LS_EXITOSO",
                    payload: token
                })
            }
        }
    }

    return(
        <AuthContext.Provider value={
            {
                autenticado: state.autenticado,
                usuario: state.usuario,
                iniciarSesion: iniciarSesion,
                cerrarSesion: cerrarSesion,
                autenticarConStorage: autenticarConStorage
            }}>

            {props.children}

        </AuthContext.Provider>
    )
}

export default authState;