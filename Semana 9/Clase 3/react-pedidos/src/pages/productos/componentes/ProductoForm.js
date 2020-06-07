import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { URL_BACKEND } from '../../../variables/variables';

const ProductoForm = ({getProductos, objProducto, setObjProducto}) => {

    let formVacio = 
    {
        pro_nom: '',
        pro_prec: '',
        pro_img: '',
        pro_est: ''
    };

    const [formulario, setFormulario] = useState({});

    useEffect(() =>
    {
        if(objProducto)
        {
            setFormulario(objProducto);
        }
        else
        {
            setFormulario(formVacio);
        }
    }, [objProducto])

    const handleChange = (e) =>
    {
        setFormulario(
            {
                ...formulario,
                [e.target.name]: e.target.value
            })
    }

    const postProducto = (nuevoProducto) =>
    {
        const endpoint = `${URL_BACKEND}/producto`;

        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(nuevoProducto),
            headers: {
              "Content-type": "application/json"
            }
          }).then((response) => {
            response.json().then((data) => {
              Swal.fire({
                title: 'Éxito!',
                icon: 'success',
                text: 'El Producto ha sido creado con éxito en la base de datos',
                timer: 2000,
              });
              getProductos();
            })
          })
    }

    const putProducto = (nuevoProducto) => {
        const endpoint = `${URL_BACKEND}/producto/${objProducto.id}`;
        fetch(endpoint, {
          method: 'PUT',
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(nuevoProducto)
        }).then((response) => {
          response.json().then((data) => {
            Swal.fire({
              title: "Actualizado!",
              text: "Registro actualizado correctamente",
              icon: "success",
              timer: 1500
            });
            getProductos();
            setObjProducto(null);
          })
        })
    }

    const enviarFormulario = (e) =>
    {
        e.preventDefault()
        if(formulario.pro_nom.trim() === "" ||formulario.pro_prec.trim() === "" ||formulario.pro_img.trim() === "" ||formulario.pro_est.trim() === "")
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
          if (objProducto) {
            Swal.fire({
              title: '¿Seguro que desea editar el registro?',
              icon: 'info',
              text: 'Los cambios harán efecto de inmediato en la base de datos',
              showCancelButton: true
            }).then((result) => {
              if (result.value) {
                console.log("OK PODEMOS EDITAR EL PRODUCTO");
                putProducto(formulario);
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
                console.log("OK PODEMOS CREAR EL PRODUCTO");
                postProducto(formulario);
              }
            })
          }
        }
    }

    return (
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Registrar Producto</h3>
          </div>
          <div className="card-body">
            <form className="row" onSubmit={enviarFormulario}>
              <div className="form-group col-md-3">
                <label htmlFor="">Nombre:</label>
                <input type="text" name="pro_nom"
                  className="form-control"
                  onChange={handleChange}
                  value={formulario.pro_nom} />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Precio:</label>
                <input type="text" name="pro_prec"
                  className="form-control" onChange={handleChange}
                  value={formulario.pro_prec} />
    
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">Estado:</label>
                <select className="form-control" name="pro_est"
                  onChange={handleChange}
                  value={formulario.pro_est}>
                  <option value="">-Seleccione-</option>
                  <option value="true">ConStock</option>
                  <option value="false">SinStock</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="">URL Imagen:</label>
                <input type="text" name="pro_img"
                  className="form-control"
                  value={formulario.pro_img}
                  onChange={handleChange} />
    
              </div>
              <div className="form-group col-md-6">
                {
                  objProducto ?
                    <button className="btn btn-success btn-block" type="submit">
                      Actualizar Producto
                    </button> :
                    <button className="btn btn-primary btn-block" type="submit">
                      Crear Producto
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
    );
}

export default ProductoForm;
