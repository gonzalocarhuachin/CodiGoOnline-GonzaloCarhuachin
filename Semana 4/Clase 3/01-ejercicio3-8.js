//3-8---------------------------

let sueldo = +prompt("Ingrese su sueldo");
let aniosServicios = +prompt("Ingrese los años trabajados");
let bonoMensualSueldo = 0;
let bonoMensualAnios = 0;

if(aniosServicios > 2 && aniosServicios < 5)
{
    bonoMensualAnios = sueldo * 0.2;
}
else if(aniosServicios >= 5)
{
    bonoMensualAnios = sueldo * 0.3;
}

if(sueldo < 1000)
{
    bonoMensualSueldo = sueldo * 0.25;
}
else if(sueldo >= 1000 && sueldo <= 3500)
{
    bonoMensualSueldo = sueldo * 0.15;
}
else
{
    bonoMensualSueldo = sueldo * 0.1;
}

if(bonoMensualSueldo > bonoMensualAnios)
{
    alert(`Bono ganador: Sueldo => ${bonoMensualSueldo}`);
}
else
{
    alert(`Bono ganador con respecto a los años => ${bonoMensualAnios}`);
}