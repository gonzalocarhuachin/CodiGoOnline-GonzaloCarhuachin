import React, { Fragment, useState, useEffect } from 'react';
import Cargando from './../../Cargando';
import TablaPokemones from './componentes/TablaPokemones';

const Pokemones = () => {
    
    const [pokemones, setPokemones] = useState([]);
  const [siguiente, setSiguiente] = useState("");
  const [anterior, setAnterior] = useState("");
  const [endpoint, setEndpoint] = useState("https://pokeapi.co/api/v2/pokemon");
  const [cargando, setCargando] = useState(true);

  const traerPokemones = () =>
  {
    fetch(endpoint).then((response) =>
    {
      response.json().then((data) =>
      {
        setCargando(false);
        setSiguiente(data.next);
        setAnterior(data.previous);
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
  }, [endpoint]); //[] arreglo vacio = no tiene dependencia, una dependencia es una variable del state que lo que hace es indicarle al useEffect que se ejecute nuevamente cada vez que cualquier variable que este en el arreglo de dependencias sea modificada
  //Cuando esta vacio, se ejecuta una vez, pero si tiene un state, el useEffect se ejecutara una vez y las veces que dicho state se cambie

  return (
    <Fragment>
      {
        cargando ? <Cargando/> : 
        <main className="container-fluid mt-4">
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <button className="btn-block btn-danger" disabled={anterior === null? true : false} 
                onClick={() => {setEndpoint(anterior)}}>Anterior</button>
              </div>
              <div className="col-md-6">
              <button className="btn-block btn-danger" disabled={siguiente === null? true : false} 
              onClick={() => {setEndpoint(siguiente)}}>Siguiente</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <TablaPokemones pokemones={pokemones}/>
        </div>
      </main>
      }  
    </Fragment>
  );

}

export default Pokemones;
