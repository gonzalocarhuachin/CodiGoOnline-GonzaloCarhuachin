import React, { useRef } from 'react';

const Refs = () => {
    
    const titulo = useRef();
    const inputNombre = useRef();
    
    return (
        <div>
            <h1 ref={titulo}>Titulo de la App</h1>
            <form>
                <p>
                    <label htmlFor="">Nombres</label>
                    <input type="text" ref={inputNombre} placeholder="Nombres..."/>
                </p>
            </form>
            <button onClick={() => 
                {
                    console.log(titulo);
                    titulo.current.innerText = "Nuevo Titulo";
                    inputNombre.current.focus();
                }}>Imprimir titulo</button>
            <br/>
            <button onClick={() =>
            {
                console.log(inputNombre.current.value);
            }}>Imprimir Input</button>
        </div>
    );
}

export default Refs;
