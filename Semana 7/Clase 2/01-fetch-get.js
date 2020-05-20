let endpoint = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
fetch(endpoint, 
    {
        method: 'GET',
        body: null
    }).then((rpta) => 
    {
        //rpta = un objeto de tipo Response, que contiene la info de la respuesta del servidor, sin embargo,
        //no tiene directamente el json que devuelve la API(no es un tema exclusivo con la API del COVID)
        //ENCADENAMIENTO DE PROMESAS
        return rpta.json();
    }).then((data) => 
    {
        console.log(data);
    }).catch((error) => 
    {
        console.log(error);
    })