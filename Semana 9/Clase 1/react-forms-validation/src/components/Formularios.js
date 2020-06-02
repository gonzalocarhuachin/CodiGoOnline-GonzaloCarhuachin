import React from 'react';
import './../css/Formularios.css';
import {useForm} from 'react-hook-form';

const Formularios = () => {

    //1. usar los hooks de useForm
    //register = funcion que se va a vincular con todos los controles que querramos validar a traves de un ref
    //handleSubmit = funcion que controla el submit del formulario a validar
    //errors = objeto que contiene la informacion de los errores en los controles del formulario
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        //La data solo va a llegar si y solo si todos los campos del form han sido validados correctamente
        console.log(JSON.stringify(data));
      };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <label>First Name:</label>
          <input name="firstName" ref={register({required: true})}/>
          {errors.firstName ? <p>Hay errores aqui.</p> : null}
    
          <label>Last Name:</label>
          <input name="lastName" ref={register({required: true})}/>
          {errors.lastName ? <p>Hay errores aqui.</p> : null}
    
          <label>Gender</label>
          <select name="gender" ref={register({required: true})}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender ? <p>Hay errores aqui.</p> : null}
    
          <label>Username</label>
          <input name="username" ref={register({required: true})}/>
          {errors.username ? <p>Hay errores aqui.</p> : null}
    
          <label>Email</label>
          <input name="email" ref={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
          {errors.email && errors.email.type === "pattern" ? <p>Ingresa un correo real</p> : null}
          {errors.email && errors.email.type === "required" ? <p>Este campo es obligatorio</p> : null}
    
          <label>About you</label>
          <textarea name="aboutyou" ref={register({required: true})}/>
          {errors.aboutyou ? <p>Hay errores aqui.</p> : null}
    
          <input type="submit" />
        </form>
      );
}

export default Formularios;
