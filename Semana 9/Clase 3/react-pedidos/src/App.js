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
import Login from './pages/auth/Login';
import AuthState from './context/auth/authState';

function App() {
  const logeado = false;
  return (
    <AuthState>
      <ClienteState>
        <RepartidorState>
          <Router>
            <Header/>
            <main className="container-fluid pt-3">
              <Switch>
                <Route exact path={"/clientes"} component={Clientes}/>
                <Route exact path={"/pedidos"} component={Pedidos}/>
                <Route exact path={"/repartidores"} component={Repartidores}/>
                <Route exact path={"/register"} component={Register}/>
                <Route exact path={"/login"} component={Login}/>
                <Route exact path={"/productos"} component={Productos}/>
                <Route exact path={"/"} component={Home}/>
              </Switch>
            </main>
          </Router>
        </RepartidorState>
      </ClienteState>
    </AuthState>
  );
}

export default App;
