//OBJETOS
let persona = 
{
    dni: "74163315",
    nombre: "Gonzalo",
    apellidos: "Carhuachin",
    estadoCivil: "soltero",
    edad: 21,
    censado: true,
    coloresFavoritos: ["Azul", "Rojo", "Blanco", "Negro"],
    ubicacion: {lat: -70.4342, lon: 16.23412}
};

//ACCEDIENDO A UN OBJETO
console.log(`${persona.nombre} ${persona.apellidos}`);
console.log(persona);

//MODIFICANDO LOS ATRIBUTOS DE UN OBJETO
persona.dni = "12345678";
persona.nombre = "Luis";

//ASIGNANDO UN NUEVO ATRIBUTO
persona.email = "lgonzalocarhuachin@gmail.com";
console.log(persona);

//RECORRIENDO UN ARREGLO INTERNO DE UN OBJETO
for(let i = 0; i > persona.coloresFavoritos.length; i++)
{
    console.log(persona.coloresFavoritos[i]);
}

//IMPRIMIENDO UN OBJETO INTERNO DEL OBJETO PERSONA
console.log(`Latitud ${persona.ubicacion.lat}`);
console.log(`Longitud ${persona.ubicacion.lon}`);