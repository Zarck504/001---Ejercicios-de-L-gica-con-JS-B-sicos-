function calcularTarifa(horas) {
    let tarifa = 0;

    if (horas <= 0.5) {
        tarifa = 0; 
    } else if (horas > 0.5 && horas < 2) {
        tarifa = 10; 
    } else if (horas >= 2 && horas <= 3) {
        tarifa = 25; 
    } else {
        tarifa = 30 + Math.ceil(horas - 3) * 10; 
        //30 pejecoins por las primeras 3 horas y 10 por cada una en adelante 
    }

    return tarifa;
}


let horasEstacionado = parseFloat(prompt("¿Introduzca la cantidad de horas que permanecio en el estacionamiento:"));
let total = calcularTarifa(horasEstacionado);
alert("El adeudo es de: " + total + " Pejecoins. ");

