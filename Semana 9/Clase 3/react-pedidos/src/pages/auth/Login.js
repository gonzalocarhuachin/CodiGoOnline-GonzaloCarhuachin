import React, { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    const authContextLocal = useContext(AuthContext);
    const {iniciarSesion, autenticado, mensaje} = authContextLocal;

    const [formulario, setFormulario] = useState({
            usu_pass: "",
            usu_email: ""
        });

    const { usu_email, usu_pass } = formulario;

    useEffect(()=>
    {
        if(autenticado)
        {
            //redireccionar a un area privada
            props.history.push("/repartidores")
        }
    }, [autenticado])

    const onSubmit = (e) =>
    {
        e.preventDefault();
        if(usu_email.trim() === "" || usu_pass.trim() === "")
        {
            //generar el error
        }
        else
        {
            //iniciar sesion
            iniciarSesion(usu_email, usu_pass)
        }
    }

    const handleChange = (e) =>
    {
        setFormulario(
            {
                ...formulario,
                [e.target.name]:e.target.value
            })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
             <div className="card shadow">
              <div className="card-header">
               <h2 className="card-title">Iniciar Sesion</h2>
              </div>
              <div className="card-body">
               <form className="row" onSubmit={onSubmit}>
                   {
                       mensaje ? 
                       <div class="alert alert-danger col-12" role="alert">
                           <strong>Ups!</strong> El servidor dice {mensaje}
                       </div>
                       :
                       null
                   }
                <div className="form-group col-12">
                 <label htmlFor="">Ingrese Correo</label>
                 <input type="email" className="form-control" value={formulario.usu_email} name="usu_email" onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                 <label htmlFor="">Ingrese Password</label>
                 <input type="password" className="form-control" value={formulario.usu_pass} name="usu_pass" onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                 <button type="submit" className="btn btn-block btn-primary">Ingresar</button>
                </div>
               </form>
              </div>
             </div>
            </div>
        </div>
    );
}

export default Login;
