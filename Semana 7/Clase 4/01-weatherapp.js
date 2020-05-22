let busqueda__input = document.getElementById("busqueda__input");
let busquedaForm = document.getElementById("busqueda__form");
let cargando = document.getElementById("cargando");
let clima = document.getElementById("clima");

let iconDOM = document.getElementById("icon");
let tempDOM = document.getElementById("temp");
let nameDOM = document.getElementById("name");
let countryDOM = document.getElementById("country");
let mainDOM = document.getElementById("main");
let fechaDOM = document.getElementById("fecha");

const dibujarClima = (data) =>
{
    let icon = data.weather[0].icon;
    let temp = data.main.temp.toFixed(0);
    let name = data.name;
    let country = data.sys.country;
    let fecha = (new Date()).getDate() + "/" + ((new Date()).getMonth() + 1);
    let main = data.weather[0].main;

    iconDOM.setAttribute("src", `http://openweathermap.org/img/wn/${icon}@4x.png`);
    tempDOM.innerHTML = `${temp}&#8451`;
    nameDOM.innerText = name;
    countryDOM.innerText = country;
    mainDOM.innerText = main;
    fechaDOM.innerText = fecha;
    //Mostrar el card informativo
    clima.removeAttribute("hidden");
    cargando.setAttribute("hidden","hidden");
}

const buscarCiudad = (ciudad) =>
{
    cargando.removeAttribute("hidden");
    clima.setAttribute("hidden","hidden");
    busqueda__input.value = "";
    busqueda__input.focus();
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=518e4c225ae6a762947997a29edb8d8b&units=metric`
    fetch(endpoint).then((response) =>
    {
        response.json().then((data) =>
        {
            if(data.cod === 200)
            {
                dibujarClima(data);
            }
            else
            {
                cargando.setAttribute("hidden","hidden");
                //Disparar in sweetalert
                //se borra a los dos segundos luego de aparecer
            }
        });
    });
}

busquedaForm.onsubmit = (e) =>
{
    e.preventDefault();
    buscarCiudad(busqueda__input.value.trim());
}