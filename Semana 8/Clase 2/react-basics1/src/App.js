import React from 'react';
import Header from './components/Header';//No es necesaria la extension
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Header titulo={"Mi Primera App"}/>
      <main>
        <h2>Tienda</h2>
        <hr/>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
