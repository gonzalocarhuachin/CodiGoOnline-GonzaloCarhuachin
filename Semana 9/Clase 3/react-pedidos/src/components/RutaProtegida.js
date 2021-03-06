import React, { useContext, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const RutaProtegida = ({exact, Component, path}) => {

    const authContextLocal = useContext(AuthContext);
    const {autenticado, autenticarConStorage} = authContextLocal;

    useEffect(() =>
    {
        autenticarConStorage();
    }, [])

    return (
        <Route path={path} exact={exact} render={() =>
        {
            if(autenticado)
            {
                return <Component />
            }
            else
            {
                return <Redirect to={"/login"}/>
            }
        }}/> 
    );
}

export default RutaProtegida;
