let palabra = prompt("Ingresa una palabra:");

function esPalindromo(str) {
    let palabraReversa = str.split('').reverse().join('');
    return str === palabraReversa;
}

if (esPalindromo(palabra)) {
    console.log("La palabra '" + palabra + "' es un palíndromo.");
} else {
    console.log("La palabra '" + palabra + "' no es un palíndromo.");
}