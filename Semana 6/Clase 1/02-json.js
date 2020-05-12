let formDatos = document.getElementById("formDatos");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
//////////TRABAJANDO CON JSON/////////////////
let persona = 
{
    nombre: 'Gonzalo',
    apellido: 'Carhuachin'
}
console.log(persona);
//CONVERTIR JSON A FORMATO STRING
//JSON.stringify(objeto) = transforma el objeto a string
let personaString = JSON.stringify(persona);
console.log(personaString);
//CONVERTIR UN STRING A FORMATO JSON
//JSON.parse("objeto en formato STRING") = devuelve el string en formato JSON
let personaJSON = JSON.parse(personaString);
//////////////////////////////////////////////////
formDatos.onsubmit = () =>
{
    let objPersona =
    {
        nombre: inputNombre.value,
        apellido: inputApellido.value
    }
    let objPersonaString = JSON.stringify(objPersona);
    localStorage.setItem("persona", objPersonaString);
}