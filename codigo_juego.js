let palabraEnJuego = '';
let num_errores = 0; //letra erronea    
let num_aciertos = 0; //letra adivinada
const PalabrasParaAdivinar = ['PANQUEQUES', 'COSQUILLAS', 'CICATRIZ', 'BIZCOCHUELO', 'ZAPATILLAS', 'PRIMAVERA', 'PIANO', 'PALTA','TEMPORADA', 'ATAQUE'];

const botonNuevoJuego = document.getElementById ("jugar");
const imagen = document.getElementById ( 'imagen');
botonNuevoJuego.addEventListener("click", iniciarJuego);

/* let palabraNueva = document.querySelector(".input-texto");
PalabrasParaAdivinar.push(palabraNueva);
alert("Palabra agregada");
console.log(palabraNueva); */

function iniciarJuego(event){
    id('resultadoJuego').innerHTML = '';
    imagen.src = 'img/img0.png';
    botonNuevoJuego.disabled = true; // para estar activo
    num_errores = 0; //letra erronea    
    num_aciertos = 0; //letra adivinada
    const parrafo = id('palabraParaAdivinar'); // genera span
    parrafo.innerHTML = ''; // desocupa de spans

    const cantPalabras = PalabrasParaAdivinar.length; //saca valor al azar
    const palabraRandom = obtenerPalabraRandom( 0, cantPalabras );
   
    palabraEnJuego = PalabrasParaAdivinar[palabraRandom]; //busca palabra al azar
    console.log(palabraEnJuego);
    const cantLetras = palabraEnJuego.length;

    for (let i=0;  i < btnLetras.length; i++){
        btnLetras[i].disabled = false;
    }


    for (let i = 0; i < cantLetras; i++){ // agrega span 
        const span = document.createElement ('span');
        parrafo.appendChild(span);

    }
}

const btnLetras = document.querySelectorAll(" #abecedario button"); //devuelve 26 letras
for (let i=0;  i < btnLetras.length; i++){
    btnLetras[i].addEventListener('click', apretarLetras);
}

function apretarLetras (event) {
    const guionLetra = document.querySelectorAll('#palabraParaAdivinar span ');
    const boton = event.target; //que letra llamo a la func 
    boton.disabled = true; //bloquea letra que ya se toco

    const letra  = boton.innerHTML.toUpperCase();
    const palabra = palabraEnJuego.toUpperCase();

    let acierta = false;
    //para saber si la letra existe en la palabra: 
    for(let i=0; i < palabra.length; i++){
        if (letra == palabra[i]){

            //i = ubicacion de letra en la palabra. coincide con span donde se muestra letra
            guionLetra[i].innerHTML = letra; //letra clickeada aparace en span 
            acierta = true; 
            num_aciertos++;
        }
    }

    if (acierta == false ){
        num_errores++;
        const fuenteImagen = `img/img${num_errores}.png`;
        imagen.src = fuenteImagen;
    }

    if (num_errores == 7){
        id('resultadoJuego').innerHTML = "Perdiste. Fin del Juego";
        finDelJuego();
    }else if (num_aciertos == palabraEnJuego.length){
        id('resultadoJuego').innerHTML = "Ganaste. ¡Felicidades!";
        finDelJuego();
    }

    console.log ("la letra " + letra + " en la palabra " + palabra + " existe? " + acierta); 

}

function finDelJuego (){
    for (let i=0;  i < btnLetras.length; i++){
        btnLetras[i].disabled = true;
    }
    botonNuevoJuego.disabled = false; 

}

finDelJuego();

