import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/home/Home';
import Nosotros from './components/pages/nosotros/Nosotros';
import Contacto from './components/pages/contacto/Contacto';
import Pokemones from './components/pages/pokemones/Pokemones';
import Agenda from './components/pages/agenda/Agenda';

function App() {
  let titulo = "Titulo de Global de la App";
  return (
    <Router>
      <Header/>
      {/* Switch de paginas */}
      <Switch>
        <Route path={'/home'}>
          <Home titulo={titulo}/>
        </Route>
        <Route path={'/nosotros'} render={() => 
        {
          return <Nosotros titulo={titulo}/>
        }}/>

        <Route path={'/contacto'} component={Contacto}/>

        <Route path={'/pokemones'}>
          <Pokemones/>
        </Route>
        <Route path={'/agenda'}>
          <Agenda/>
        </Route>
        {/* Pagina INICIAL */}
        <Route path={'/'}> 
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
