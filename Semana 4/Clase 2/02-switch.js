//Switch case

let dia = +prompt("Ingrese N# dia");
let rpta = ""; 

switch (dia) {
    case 1:
        rpta = "Lunes";
        alert(`Dia ${rpta}`);
        break;
    case 2:
        rpta = "Martes";
        alert(`Dia ${rpta}`);
        break;
    case 3:
        rpta = "Miercoles";
        alert(`Dia ${rpta}`);
        break;
    case 4:
        rpta = "Jueves";
        alert(`Dia ${rpta}`);
        break;
    case 5:
        rpta = "Viernes";
        alert(`Dia ${rpta}`);
        break;
    case 6:
        rpta = "Sabado";
        alert(`Dia ${rpta}`);
        break;
    case 7:
        rpta = "Domingo";
        alert(`Dia ${rpta}`);
        break;

    default:
        alert(`ERROR!!!!!`);
}

//----------------------------------

let color = prompt("Ingrese color");
let rpta = ""; 

switch (color) {
    case "red":
        rpta = "#FF0000";
        alert(`Valor Hexadecimal : ${rpta}`);
        break;
    case "blue":
        rpta = "#0220FF";
        alert(`Valor Hexadecimal : ${rpta}`);
        break;
    case "white":
        rpta = "#ffffff";
        alert(`Valor Hexadecimal : ${rpta}`);
        break;
    case "black":
        rpta = "#000000";
        alert(`Valor Hexadecimal : ${rpta}`);
        break;
    case "green":
        rpta = "#0DFF06";
        alert(`Valor Hexadecimal : ${rpta}`);
        break;

    default:
        alert(`ERROR!!!!!`);
}