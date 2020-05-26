const URL_BACKEND = "https://5ec8643e155c130016a909bf.mockapi.io";
let selectRepartidor = document.getElementById("selectRepartidor");
let selectCliente = document.getElementById("selectCliente");
let selectProducto = document.getElementById("selectProducto");
let formPedido = document.getElementById("formPedido");
let inputOrigen = document.getElementById("inputOrigen");
let inputDestino = document.getElementById("inputDestino");

//Creando variable mapa
var mymap = L.map('mapa').setView([-12.132065, -76.994511], 13);
//Configurando la clave del mapa
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ29uemFsb2Nhcmh1YWNoaW4iLCJhIjoiY2thbjVkY3RoMW0wMDJ3bXM4NWlhNTd2ayJ9.JDJKTYuWMapWJ7EvRDRZqQ'
}).addTo(mymap);
//Creando los 2 marcadores (inicio - fin)
var iconoIni = L.icon(
    {
        iconUrl: './marker_ini.png',
        iconSize: [32, 32],
        iconAnchor: [32, 32],
    }
);
let marcadorIni = L.marker([-12.132065, -76.994511], {icon: iconoIni, draggable: true}).addTo(mymap);
marcadorIni.on("dragend", (e) => 
{
    inputOrigen.value = JSON.stringify({lat: e.target._latlng.lat, lng: e.target._latlng.lng});
})
//----------
var iconoFin = L.icon(
    {
        iconUrl: './marker_fin.png',
        iconSize: [32, 32],
        iconAnchor: [32, 32],
    }
);
let marcadorFin = L.marker([-12.135065, -76.994511], {icon: iconoFin, draggable: true}).addTo(mymap);
marcadorFin.on("dragend", (e) => 
{
    inputDestino.value = JSON.stringify({lat: e.target._latlng.lat, lng: e.target._latlng.lng});
})


//Traer los repartidores
//Funcion que trae a los repartidores de la BD y los dibuja en el select
const getRepartidores = () =>
{
    const dibujar = (repartidores) =>
    {
        repartidores.forEach(repartidor => 
        {
            let option = document.createElement("option");
            option.innerText = `${repartidor.rep_nom} ${repartidor.rep_ape}`;
            option.value = repartidor.id;
            selectRepartidor.appendChild(option);
        });
    }
    let endpoint = `${URL_BACKEND}/repartidor`;
    fetch(endpoint).then((response) => 
    {
        response.json().then((data) => 
        {
            console.log(data);
            dibujar(data);
        });
    });
}

//Traer los clientes
//Funcion que trae a los clientes de la BD y los dibuja en el select
const getClientes = () =>
{
    const dibujar = (clientes) =>
    {
        clientes.forEach(cliente => 
        {
            let option = document.createElement("option");
            option.innerText = `${cliente.cli_nom} ${cliente.cli_ape}`;
            option.value = cliente.id;
            selectCliente.appendChild(option);
        });
    }
    let endpoint = `${URL_BACKEND}/cliente`;
    fetch(endpoint).then((response) => 
    {
        response.json().then((data) => 
        {
            console.log(data);
            dibujar(data);
        });
    });
}

//Traer los productos
//Funcion que trae a los productos de la BD y los dibuja en el select
const getProductos = () =>
{
    const dibujar = (productos) =>
    {
        productos.forEach(producto => 
        {
            let option = document.createElement("option");
            option.innerText = `${producto.pro_nom} | S/ ${producto.pro_prec}`;
            option.value = producto.id;
            selectProducto.appendChild(option);
        });
    }
    let endpoint = `${URL_BACKEND}/producto`;
    fetch(endpoint).then((response) => 
    {
        response.json().then((data) => 
        {
            console.log(data);
            dibujar(data);
        });
    });
}

formPedido.onsubmit = (e) =>
{
    e.preventDefault();
    let fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
    let objPedido = 
    {
        id_pro: selectProducto.value,
        id_rep: selectRepartidor.value,
        id_cli: selectCliente.value,
        ped_ini: inputOrigen.value,
        ped_fin: inputDestino.value,
        ped_est: 'Solicitado',
        ped_fech: fecha
    }
    fetch(`${URL_BACKEND}/pedido`, 
    {
        method: 'POST',
        body: JSON.stringify(objPedido),
        headers: 
        {
            "Content-type":"application/json"
        }
    }).then((response) => 
    {
        response.json().then((data) => 
        {
            console.log(data);           
        });
    });
}

getRepartidores();
getClientes();
getProductos();