import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import InvitadoHeader from './components/InvitadoHeader';
import InvitadoContacto from './pages/contacto/InvitadoContacto';
import InvitadoNosotros from './pages/nosotros/InvitadoNosotros';
import InvitadoHome from './pages/home/InvitadoHome';
import 'bootstrap/dist/css/bootstrap.min.css';

const Invitado = () => {
    return (
        <Fragment>
            <InvitadoHeader/>
            <Switch>
                <Route path={"/contacto"} component={InvitadoContacto}/>
                <Route path={"/nosotros"} component={InvitadoNosotros}/>
                <Route component={InvitadoHome}/>
            </Switch>
        </Fragment>
    );
}

export default Invitado;
