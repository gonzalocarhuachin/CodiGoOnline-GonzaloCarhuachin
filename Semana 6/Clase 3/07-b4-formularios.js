let inputEmail = document.getElementById("inputEmail");
let helpEmail = document.getElementById("helpEmail");
let usuarios = 
[
    {nombre: 'Gonzalo', email: 'lgonzalocarhuachin@gmail.com'},
    {nombre: 'Camila', email: 'camila@gmail.com'},
    {nombre: 'Angelo', email: 'angelo@gmail.com'}
];

//Comprobar si el input ingrese un valor valido o invalido de acuerdo al arreglo de usuarios existentes

inputEmail.onkeyup = () =>
{
    //obteniendo el valor del input
    let texto = inputEmail.value;
    //filtrar todos los emails que coincidan con el email insertado
    let resultados = usuarios.filter((usuario) =>
    {
        if(usuario.email === texto)
        {
            return usuario;
        }
    });
    //evaluar si hay mas de 0 coincidencias comparando el email ingresado con el arreglo de resultados
    if(resultados.length > 0)
    {
        inputEmail.classList.remove("is-valid");
        inputEmail.classList.add("is-invalid");
        helpEmail.removeAttribute("hidden");
        helpEmail.innerText = "El email ya existe, ingrese otro.";
        helpEmail.classList.remove("text-success");
        helpEmail.classList.add("text-danger");
    }
    else
    {
        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.add("is-valid");
        helpEmail.removeAttribute("hidden");
        helpEmail.innerText = "Email válido";
        helpEmail.classList.remove("text-danger");
        helpEmail.classList.add("text-success");
    }
}