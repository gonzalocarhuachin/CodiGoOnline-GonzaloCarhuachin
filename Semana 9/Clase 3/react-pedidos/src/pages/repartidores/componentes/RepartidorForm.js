import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';

const formVacio = 
{
    rep_nom: '',
    rep_ape: '',
    rep_est: '',
    rep_dni: ''
}

const RepartidorForm = ({getRepartidores, objRepartidor, setObjRepartidor}) => {

    const modoEditar = false;

    //evaluar si objRepartidor es nulo
    if(objRepartidor)
    {
        modoEditar = true;
    }

    const {register, handleSubmit, errors, reset} = useForm();
    const errorObligatorio = <small className="text-danger">Este campo es obligatorio *</small>
    const errorDNI = <small className="text-danger">Coloque un dni de 8 digitos *</small>

    const postRepartidor = (nuevoRepartidor) =>
    {
        const endpoint = `${URL_BACKEND}/repartidor`;
        fetch(endpoint, 
            {
                method: 'POST',
                body: JSON.stringify(nuevoRepartidor),
                headers: 
                {
                    "Content-type": "application/json"
                }
            }).then((response) =>
            {
                response.json().then((data) =>
                {
                    //reset(), funcion que sirve para reiniciar los campos del formulario
                    reset(formVacio);
                    //data, resultado de la creacion del repartidor
                    Swal.fire(
                        {
                            title: 'EXITO!',
                            icon: 'success',
                            text: 'El registro ha sido creado con exito en la Base de Datos',
                            timer: 2000,
                            // showConfirmButton: false
                        });
                    getRepartidores();
                    console.log(data);
                })
            })
    }

    const putRepartidor = (nuevoRepartidor) =>
    {
        const endpoint = `${URL_BACKEND}/repartidor/${objRepartidor.id}`;
        fetch(endpoint, 
            {
                method: 'PUT',
                headers: 
                {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(nuevoRepartidor)
            }).then((response) => 
            {
                response.json().then((data) =>
                {
                    Swal.fire(
                        {
                            title: "Actualizado!",
                            text: "Repartidor actualizado correctamente",
                            icon: "success",
                            timer: 1500
                        });
                    //limiar el form
                    reset(formVacio);
                    getRepartidores();
                    setObjRepartidor(null);
                })
            })
    }

    const enviarFormulario = (data) => 
    {
        console.log(data);
        if(modoEditar)
        {
            //llamada a la api con el verbo PUT
            Swal.fire(
                {
                    title: '¿Seguro que desea modificar el registro?',
                    icon: 'info',
                    text: 'Los cambios harán efecto de inmediato en la base de datos',
                    showCancelButton: true
                }).then((result) =>
                {
                    if(result.value)
                    {
                        console.log("OK PODEMOS MODIFICAR EL REPARTIDOR");
                        putRepartidor(data);
                    }
                })
        }
        else
        {
            Swal.fire(
                {
                    title: '¿Seguro que desea crear el registro?',
                    icon: 'info',
                    text: 'Los cambios harán efecto de inmediato en la base de datos',
                    showCancelButton: true
                }).then((result) =>
                {
                    if(result.value)
                    {
                        console.log("OK PODEMOS CREAR EL REPARTIDOR");
                        postRepartidor(data);
                    }
                })
        }
        
    };

    return (
        <div className="card">
            <div className="card-header">
             <h3 className="card-title">Registrar Repartidor</h3>
            </div>
            <div className="card-body">
             <form className="row" onSubmit={handleSubmit(enviarFormulario)}>
              <div className="form-group col-md-3">
               <label htmlFor="">Nombre:</label>
               <input type="text" name="rep_nom" className="form-control" ref={register({required: true})} defaultValue={modoEditar ? objRepartidor.rep_nom : ""}/>
               {errors.rep_nom && errors.rep_nom.type === "required" ? errorObligatorio : null}
              </div>
              <div className="form-group col-md-3">
               <label htmlFor="">Apellido:</label>
               <input type="text" name="rep_ape" className="form-control" ref={register({required: true})} defaultValue={modoEditar ? objRepartidor.rep_ape : ""}/>
               {errors.rep_ape && errors.rep_ape.type === "required" ? errorObligatorio : null}
              </div>
              <div className="form-group col-md-3">
               <label htmlFor="">Estado:</label>
               <select className="form-control" name="rep_est" ref={register({required: true})} defaultValue={modoEditar ? objRepartidor.rep_est : ""}>
                <option value="">Seleccione...</option>
                <option value="true">Habilitado</option>
                <option value="false">Inhabilitado</option>
               </select>
               {errors.rep_est && errors.rep_est.type === "required" ? errorObligatorio : null}
              </div>
              <div className="form-group col-md-3">
               <label htmlFor="">Dni:</label>
               <input type="text" name="rep_dni" className="form-control" ref={register({required: true, pattern: /^[0-9]{8,8}$/})} defaultValue={modoEditar ? objRepartidor.rep_dni : ""}/>
               {errors.rep_dni && errors.rep_dni.type === "required" ? errorObligatorio : null}
               {errors.rep_dni && errors.rep_dni.type === "pattern" ? errorDNI : null}
              </div>
              <div className="form-group col-md-6">
                  {
                      modoEditar ?
                      <button className="btn btn-success btn-block" type="submit">
                        Actualizar Repartidor
                      </button> :
                        <button className="btn btn-primary btn-block" type="submit">
                        Crear Repartidor
                         </button>
                  }
                </div>
                <div className="form-group col-md-6">
                <button className="btn btn-danger btn-block" type="reset">
                    Cancelar
                </button>
                </div>
             </form>
            </div>
        </div>
    );
}

export default RepartidorForm;
