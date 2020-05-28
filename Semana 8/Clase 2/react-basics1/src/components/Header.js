import React from 'react';

//Como si fueran parametros de la funcion, se recibe el objeto Props, que es un objeto con las propiedades que se envian al Header
//obviamente desde otro lugar
const Header = (props) =>
{
    console.log(props.links);
    //Todo componente debe retornar como maximo una etiqueta
    return(
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
}

export default Header;