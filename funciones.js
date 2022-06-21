function id(str) { 
    return document.getElementById(str);
}

function obtenerPalabraRandom (valorMin, valorMax){
    const losValores = valorMax - valorMin; //(10-0)
    const palabraRandom = Math.floor(Math.random() * losValores ) + valorMin;
    return palabraRandom;
}