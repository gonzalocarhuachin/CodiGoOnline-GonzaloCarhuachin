import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';
import ClienteContext from '../../../context/cliente/clienteContext';

const ClienteForm = ({getClientes, objCliente, setObjCliente}) => {

  const clienteContextLocal = useContext(ClienteContext);
  const {objCliente, setObjCliente} = clienteContextLocal;

    let formVacio = {
        cli_nom: '',
        cli_ape: '',
        cli_est: '',
        cli_dni: ''
      };

    const [formulario, setFormulario] = useState({});
    
    useEffect(() =>
    {
        if(objCliente)
        {
            setFormulario(objCliente);
        }
        else
        {
            setFormulario(formVacio);
        }
    }, [objCliente])

    const handleChange = (e) =>
    {
        setFormulario(
            {
                ...formulario,
                [e.target.name]: e.target.value
            })
    }

    const postCliente = (nuevoCliente) =>
    {
        const endpoint = `${URL_BACKEND}/cliente`;

        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(nuevoCliente),
            headers: {
              "Content-type": "application/json"
            }
          }).then((response) => {
            response.json().then((data) => {
              Swal.fire({
                title: 'Éxito!',
                icon: 'success',
                text: 'El Cliente ha sido creado con éxito en la base de datos',
                timer: 2000,
              });
              getClientes();
            })
          })
    }

    const putCliente = (nuevoCliente) => {
        const endpoint = `${URL_BACKEND}/cliente/${objCliente.id}`;
        fetch(endpoint, {
          method: 'PUT',
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(nuevoCliente)
        }).then((response) => {
          response.json().then((data) => {
            Swal.fire({
              title: "Actualizado!",
              text: "Registro actualizado correctamente",
              icon: "success",
              timer: 1500
            });
            getClientes();
            setObjCliente(null);
          })
        })
    }
    
    const enviarFormulario = (e) => {
        e.preventDefault()
        if(formulario.cli_nom.trim() === "" ||formulario.cli_ape.trim() === "" ||formulario.cli_dni.trim() === "" ||formulario.cli_est.trim() === "")
        {
          Swal.fire(
            {
              icon: "error",
              title: "Oe!",
              text: "Todos los campos deben estar llenos"
            }
          )
        }
        else
        {
          if (objCliente) {
            Swal.fire({
              title: '¿Seguro que desea editar el registro?',
              icon: 'info',
              text: 'Los cambios harán efecto de inmediato en la base de datos',
              showCancelButton: true
            }).then((result) => {
              if (result.value) {
                console.log("OK PODEMOS EDITAR AL CLIENTE");
                putCliente(formulario);
              }
            })
          } else {
            Swal.fire({
              title: '¿Seguro que desea crear el registro?',
              icon: 'info',
              text: 'Los cambios harán efecto de inmediato en la base de datos',
              showCancelButton: true
            }).then((result) => {
              if (result.value) {
                console.log("OK PODEMOS CREAR AL USUARIO");
                postCliente(formulario);
              }
            })
          }
        }
    }

    return (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Registrar Cliente</h3>
          </div>
          <div className="card-body">
            <form className="row" onSubmit={enviarFormulario}>
              <div className="form-group col-md-3">
                <label htmlFor="">Nombre:</label>
                <input type="text" name="cli_nom"
                  className="form-control"
                  onChange={handleChange}
                  value={formulario.cli_nom} />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Apellido:</label>
                <input type="text" name="cli_ape"
                  className="form-control" onChange={handleChange}
                  value={formulario.cli_ape} />
    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Estado:</label>
                <select className="form-control" name="cli_est"
                  onChange={handleChange}
                  value={formulario.cli_est}>
                  <option value="">-Seleccione-</option>
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Dni:</label>
                <input type="text" name="cli_dni"
                  className="form-control"
                  value={formulario.cli_dni}
                  onChange={handleChange} />
    
              </div>
              <div className="form-group col-md-6">
                {
                  objCliente ?
                    <button className="btn btn-success btn-block" type="submit">
                      Actualizar Cliente
                    </button> :
                    <button className="btn btn-primary btn-block" type="submit">
                      Crear Cliente
                    </button>
                }
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-danger btn-block" type="button">
                  Cancelar
          </button>
              </div>
            </form>
          </div>
        </div>
      )
}

export default ClienteForm
