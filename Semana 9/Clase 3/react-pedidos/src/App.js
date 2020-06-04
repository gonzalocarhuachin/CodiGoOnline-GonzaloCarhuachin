import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Clientes from './pages/clientes/Clientes';
import Pedidos from './pages/pedidos/Pedidos';
import Repartidores from './pages/repartidores/Repartidores';
import Productos from './pages/productos/Productos';
import Home from './pages/home/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <main className="container-fluid pt-3">
        <Switch>
          <Route path={"/clientes"} component={Clientes}/>
          <Route path={"/pedidos"} component={Pedidos}/>
          <Route path={"/repartidores"} component={Repartidores}/>
          <Route path={"/productos"} component={Productos}/>
          <Route path={"/"} component={Home}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
