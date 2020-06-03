import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Producto from './components/Producto';

function App() {
  return (
    <Router>
      {/* Links */}
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/productos"}>Productos</Link></li>
          <li><Link to={"/contacto"}>Contacto</Link></li>
        </ul>
      </nav>
      {/* Switch de paginas */}
      <Switch>
        <Route path={"/contacto"} component={Contacto}/>
        <Route path={"/productos"} component={Productos}/>
        <Route path={"/producto/buscar/:nombre"} component={Producto}/>
        <Route path={"/producto/:id"} component={Producto}/>
        <Route path={"/"} component={Home}/>
        {/* Cuando una ruta no tiene path, significa que corresponde a un path que no existe en la coleccion de rutas, esta debe ser la ultima y por lo general, el 404 */}
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
