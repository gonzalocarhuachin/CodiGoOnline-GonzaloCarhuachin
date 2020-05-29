import React, { useState } from 'react';

const Formulario = () => {

    const [contacto, setContacto] = useState(
        //valor inicial del state
        {
            nombres: '',
            apellidos: '',
            fechaNac: '',
            direccion: '',
            telCasa: '',
            telCelular: '',
            observaciones: ''
        });

    return (
        <form className="row">
            <div className="form-group col-md-3">
             <label htmlFor="inputNombres">Nombres:</label>
             <input type="text" id="inputNombres" className="form-control" 
             onChange={(e) => 
             {
                let contactoAntiguo = {...contacto};
                contactoAntiguo.nombres = e.target.value;
                setContacto(contactoAntiguo);
             }} value={contacto.nombres}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputApellidos">Apellidos:</label>
             <input type="text" id="inputApellidos" className="form-control" 
             onChange={(e) => 
             {
                let contactoAntiguo = {...contacto};
                contactoAntiguo.apellidos = e.target.value;
                setContacto(contactoAntiguo);
             }} value={contacto.apellidos}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputFechaNac">Fecha de Nacimiento:</label>
             <input type="text" id="inputFechaNac" className="form-control" onChange={(e) =>
            {
                
            }} value={contacto.fechaNac}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputDireccion">Dirección:</label>
             <input type="text" id="inputDireccion" className="form-control" onChange={(e) =>
            {
                
            }} value={contacto.direccion}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputTelCasa">Teléfono de Casa:</label>
             <input type="text" id="inputTelCasa" className="form-control" onChange={(e) =>
            {
                
            }} value={contacto.telCasa}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputTelCelular">Telefono Celular:</label>
             <input type="text" id="inputTelCelular" className="form-control" onChange={(e) =>
            {
                
            }} value={contacto.telCelular}/>
            </div>
            <div className="form-group col-md-6">
             <label htmlFor="inputObservaciones">Observaciones:</label>
             <textarea cols="30" rows="2" id="inputObservaciones" className="form-control" onChange={(e) =>
            {
                
            }} value={contacto.observaciones}></textarea>
            </div>
        </form>
    );
}

export default Formulario;
