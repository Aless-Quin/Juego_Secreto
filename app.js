let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
        console.log(numeroSecreto)
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    //so ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si el numero generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }
    }  
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${ (intentos === 1)  ? 'intento' : 'intentos'} ` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    //el usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento ('p', 'El número Secreto es menor');
    } else {
        asignarTextoElemento ('p', 'El número Secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
   return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = ''; //el mismo id de html
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
//limpiar la caja
//indicar msj de intervalos de numeros
//generar num aleatorio
//deshabilitar el boton nuevo juego
//inicializar el numero de intentos

