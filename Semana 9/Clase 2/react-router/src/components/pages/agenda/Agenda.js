import React, { Fragment, useState } from 'react';
import Formulario from './componentes/Formulario';
import Contactos from './componentes/Contactos';
import ContactoSeleccionado from './componentes/ContactoSeleccionado';

const Agenda = () => {
    //Traemos los contactos desde el local storage
  let contactosLS = JSON.parse(localStorage.getItem("contactos"));
  if(!contactosLS)
  {
    //Creando un arreglo vacio como para inicializar contactosLS
    contactosLS = [];
  }

  //Creando el state
  const [contactos, setContactos] = useState([]);
  const [contactoselec, setContactoSelec] = useState({});

  const agregarContacto = (objContacto) =>
  {
    let contactosAntiguos = [...contactos, objContacto];
    localStorage.setItem("contactos", JSON.stringify(contactosAntiguos));
    setContactos(contactosAntiguos);

    //Forma avanzada
    //setContactos([...contactos, objContacto]);
  }

  return (
    <Fragment>
      <main className="container-fluid">
        <h1 className="display-3 text-center">Agenda <span className="text-danger">APP</span></h1>
        <div className="row">
          <div className="col">
            <Formulario agregarContacto={agregarContacto}/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <Contactos contactos={contactos} setContactoSelec={setContactoSelec}/>
          </div>
          <div className="col-md-6">
            <ContactoSeleccionado contactoselec={contactoselec}/>
          </div>
        </div>  
      </main>
    </Fragment>
  );
}

export default Agenda;
