import React, {Fragment, useState} from 'react';
import Header from './components/Header';//No es necesaria la extension
import Footer from './components/Footer';
import Productos from './components/Productos';
import Carrito from './components/Carrito';

function App() {

  let miTitulo = "Tiendita.com";
  let enlaces = ["Home", "Nosotros", "Proyectos"];
  let productos = [{
    nombre: "Producto 1", descripcion: "Descripcion del Producto 1",
    precio: 123.00,
    id: 1
  }, {
    nombre: "Producto 2",
    descripcion: "Descripcion del Producto 2",
    precio: 100.00,
    id: 2
  }, {
    nombre: "Producto 3",
    descripcion: "Descripcion del Producto 3",
    precio: 200.00,
    id: 3
  }, {
    nombre: "Producto 4",
    descripcion: "Descripcion del Producto 4",
    precio: 300.00,
    id: 4
  }];

  //Creando una variable de estado
  //y su actualizador de estado
  //const [variable, actualizadorDeVariable] = useState(valor inicial de la variable);
  const [carrito, actualizarCarrito] = useState([]);

  const saludar = (nombre) =>
  {
    console.log(`Saludando ${nombre}`);
  }

  return (
    <Fragment>
      <Header titulo={miTitulo} links={enlaces}/>
      <main>
        <h2>Tienda</h2>
        <h3>Carrito({carrito.length})</h3>
        <hr/>
        <Productos productos={productos} saludar={saludar} actualizarCarrito={actualizarCarrito} carrito={carrito}/>
      </main>
      <Footer/>
      <Carrito carrito={carrito} actualizarCarrito={actualizarCarrito}/>
    </Fragment>
  );
}

export default App;
