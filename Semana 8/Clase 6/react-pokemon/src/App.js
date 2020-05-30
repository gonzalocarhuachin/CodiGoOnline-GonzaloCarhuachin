import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import TablaPokemones from './components/TablaPokemones';

function App() {

  const [pokemones, setPokemones] = useState([]);
  const [siguiente, setSiguiente] = useState("");

  const traerPokemones = () =>
  {
    let endpoint = "https://pokeapi.co/api/v2/pokemon";
    fetch(endpoint).then((response) =>
    {
      response.json().then((data) =>
      {
        setPokemones(data.results);
      })
    })
  }
  //La finalidad de useEffect, es que contenga codigo que no necesariamente se ejecute cada vez que una variable de estado cambie
  //cada vez que se ejecuta un actualizador de estado, el componente app se vuelve a ejecutar
  useEffect(() => 
  {
    //Es una funcion que se ejecuta cuando la pagina carga por primera vez, se ejecuta automaticamente
    traerPokemones();
  }, []);

  return (
    <Fragment>
      <Header/>
      <main className="container-fluid">
        <div className="row">
          <TablaPokemones pokemones={pokemones}/>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
