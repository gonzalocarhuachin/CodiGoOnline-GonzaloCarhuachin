import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Clientes from './pages/clientes/Clientes';
import Pedidos from './pages/pedidos/Pedidos';
import Repartidores from './pages/repartidores/Repartidores';
import Productos from './pages/productos/Productos';
import Home from './pages/home/Home';
import Header from './components/Header';
import RepartidorState from './context/repartidor/repartidorState';
import ClienteState from './context/cliente/clienteState';
import Register from './pages/auth/Register';

function App() {
  const logeado = false;
  return (
    <ClienteState>
      <RepartidorState>
        <Router>
          <Header/>
          <main className="container-fluid pt-3">
            <Switch>
              <Route exact path={"/clientes"} component={Clientes}/>
              <Route exact path={"/pedidos"} component={Pedidos}/>
              <Route exact path={"/repartidores"} render={() =>
              {
                if(logeado)
                {
                  return <Repartidores />
                }
                else
                {
                  return <Redirect to={{pathname: '/'}}/>
                }
              }}/>
              <Route exact path={"/register"} component={Register}/>
              <Route exact path={"/productos"} component={Productos}/>
              <Route exact path={"/"} component={Home}/>
            </Switch>
          </main>
        </Router>
      </RepartidorState>
    </ClienteState>
  );
}

export default App;
