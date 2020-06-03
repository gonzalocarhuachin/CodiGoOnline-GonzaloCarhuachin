import React from 'react';
import imgCarga from './../img/cargando.gif';
import './../css/cargando.css';

const Cargando = () => {
    return (
        <div className="cargando">
            <img src={imgCarga} alt=""/>
            <p>Iniciando PokeDex...</p>
        </div>
    );
}

export default Cargando;
