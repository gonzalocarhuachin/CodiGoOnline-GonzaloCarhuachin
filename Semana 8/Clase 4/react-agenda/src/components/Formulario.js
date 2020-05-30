import React, { useState, Fragment } from 'react';

const Formulario = ({agregarContacto}) => {

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

    const [error, setError] = useState(false);
    
    //Funcion que modifica el state de acuerdo a los inputs del formulario
    const handleChange = (e) =>
    {
        let copiaContacto = {...contacto};
        copiaContacto[e.target.name] = e.target.value;
        setContacto(copiaContacto);
    }

    const enviarFormulario = (e) =>
    {
        //Prevenir que la pagina se recargue
        e.preventDefault();
        //Validar que todos los campos esten llenos
        let {nombres,apellidos,fechaNac,direccion,telCasa,telCelular,observaciones} = contacto;
        if (nombres.trim() === "" || apellidos.trim() === "" ||
            fechaNac.trim() === "" || telCelular.trim() === "" ||
            direccion.trim() === "" || observaciones.trim() === "" ||
            telCasa.trim() === "") 
        {
            //Error y todos los campos deben ser llenados
            setError(true);//Variable reactiva
            return; //este return obliga a la funcion a terminar si es verdadera
        }
        else
        {
            //Crear el contacto en la agenda sin errores en el formulario y cambiamos el error a false sin importar su valor anterior
            setError(false);
            agregarContacto(contacto);
            //Reiniciar el formulario
            setContacto(
                {
                    nombres: '',
                    apellidos: '',
                    fechaNac: '',
                    direccion: '',
                    telCasa: '',
                    telCelular: '',
                    observaciones: ''
                }
            );
        }
    }

    return (
        <Fragment>
        <form className="row" onSubmit={enviarFormulario}>
            {
                error ?
                <div className="col-12">
                    <div className="alert alert-danger" role="alert">
                        <strong>Error!</strong> Todos los campos deben estar llenados
                    </div>
                </div> : null
            }
            
            <div className="form-group col-md-3">
             <label htmlFor="inputNombres">Nombres:</label>
             <input type="text" id="inputNombres" className="form-control" 
             name="nombres" onChange={handleChange} value={contacto.nombres}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputApellidos">Apellidos:</label>
             <input type="text" id="inputApellidos" className="form-control" 
             name="apellidos" onChange={handleChange} value={contacto.apellidos}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputFechaNac">Fecha de Nacimiento:</label>
             <input type="date" id="inputFechaNac" className="form-control" onChange={handleChange} name="fechaNac" value={contacto.fechaNac}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputDireccion">Dirección:</label>
             <input type="text" id="inputDireccion" className="form-control" onChange={handleChange} name="direccion" value={contacto.direccion}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputTelCasa">Teléfono de Casa:</label>
             <input type="text" id="inputTelCasa" className="form-control" onChange={handleChange} name="telCasa" value={contacto.telCasa}/>
            </div>
            <div className="form-group col-md-3">
             <label htmlFor="inputTelCelular">Telefono Celular:</label>
             <input type="text" id="inputTelCelular" className="form-control" onChange={handleChange} name="telCelular" value={contacto.telCelular}/>
            </div>
            <div className="form-group col-md-6">
             <label htmlFor="inputObservaciones">Observaciones:</label>
             <textarea cols="30" rows="2" id="inputObservaciones" className="form-control" onChange={handleChange} name="observaciones" value={contacto.observaciones}></textarea>
            </div>
            <div className="form-group col-12">
                <button type="submit" className="btn btn-block btn-outline-primary">Agregar Contacto</button>
            </div>
        </form>
        </Fragment>
    );
}

export default Formulario;
