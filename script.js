// Funciones principales del Juego 猜猜这位中国男子的年龄

// Escucha del ENTER input NOMBRE JUGADOR
document.querySelector("#nJugador").onkeydown = tecladoN;
function tecladoN(e) {
  let codigo_tecla=e.keyCode;
  if (codigo_tecla==13){  //13-Enter 32-Pause
    juego02();
  }
}
// Escuchar del ENTER input EDAD JUGADOR
document.querySelector("#eJugador").onkeydown = tecladoE;
function tecladoE(e) {
  let codigo_tecla=e.keyCode;
  if (codigo_tecla==13){ 
    juego03();
  }
} 
// Escuchar del ENTER input EDAD CHINO
document.querySelector("#adivinarEdad").onkeydown = tecladoA;
function tecladoA(e) {
  let codigo_tecla=e.keyCode;
  if (codigo_tecla==13){ 
    juego04();
  }
} 
// Pantalla introducir NOMBRE del Jugador
function juego01() {
    document.getElementById("sectionBienvenida").style.display = "none";
    document.getElementById("sectionFinal").style.display = "none";
    document.getElementById("sectionJuego01").style.display = "block";
    document.querySelector("#nJugador").value = ""; /* Borrar el input */
    nJugador.focus(); /* Situa el cursor en el input */
}

  
// Pantalla introducir EDAD del Jugador
function juego02() {
    const nombreJugador = document.querySelector("#nJugador").value;
      /* En caso de NO introducir nombre */
      if (nombreJugador === '') {  
            alert("Debe introducir un nombre válido");
            nJugador.focus();
            return;
          }  
    document.getElementById("sectionFinal").style.display = "none";
    document.getElementById("sectionJuego01").style.display = "none";
    document.getElementById("sectionJuego02").style.display = "block";
    document.querySelector("#nombreJugador01").textContent = "Tienes un bonito nombre " + nombreJugador;
    document.querySelector("#eJugador").value = "";
    eJugador.focus();
}

let edadChino = Math.floor(Math.random() * (101 - 25) + 25); 


// Pantalla introducir PROPUESTA edad del CHINO
function juego03() {
    const edadJugador = Number(document.querySelector("#eJugador").value);
      /* En caso de NO introducir edad o no válida */
      if (edadJugador === '') {  
            alert("Debe introducir una edad válida");
            eJugador.focus();
            return;
          } 
      if (edadJugador < 5 || edadJugador > 100) {  
            alert("Debe introducir una edad válida: entre 5 y 100");
            document.querySelector("#eJugador").value = "";
            eJugador.focus();
            return;
          }   

    document.getElementById("sectionJuego02").style.display = "none";
    document.getElementById("sectionJuego03").style.display = "block";
    document.querySelector("#adivinarEdad").value = "";
    adivinarEdad.focus();


    // alert("Edad del Jugador: " + edadJugador + ",  Edad del Chino: " + edadChino); 

    if (edadJugador > edadChino) {
       document.querySelector("#mensajeMM").textContent = "Eres mayor que yo";         
    }
    if (edadJugador < edadChino) {
       document.querySelector("#mensajeMM").textContent = "Eres menor que yo";
    }
    if (edadJugador == edadChino) {
       gameOver();
       document.querySelector("#mensajeFJ").textContent = "¡Felicidades! Tienes la misma EDAD que yo";
    }
  }
    

// Pantalla comprobar integridad intento del Jugador    
    function juego04() {
      let adivinarEdadChino = Number(document.querySelector("#adivinarEdad").value);
      
      /* En caso de NO introducir edad o no válida */
      if (adivinarEdadChino === '') {  
            alert("Debe introducir una edad válida");
            adivinarEdad.focus();
            return;
          } else if (adivinarEdadChino < 25 || adivinarEdadChino > 100) {  
            alert("Debe introducir una edad válida: entre 25 y 100");
            document.querySelector("#adivinarEdad").value = "";
            adivinarEdad.focus();
            return;
          } /* else {
            alert("Intento: " + adivinarEdadChino);
          } */
      
      if (adivinarEdadChino > edadChino) { 
            document.querySelector("#mensajeME").textContent = "¡Lo siento, NO acertaste mi edad, sígue intentando!";
            document.querySelector("#mensajeMM").textContent = "Tengo menos edad";
            document.querySelector("#adivinarEdad").value = "";
            adivinarEdad.focus();
            return;
          } else if (adivinarEdadChino < edadChino) {
            document.querySelector("#mensajeME").textContent = "¡Lo siento, NO acertaste mi edad, sígue intentando!";
            document.querySelector("#mensajeMM").textContent = "Tengo más edad";
            document.querySelector("#adivinarEdad").value = "";
            adivinarEdad.focus();
            return;
          } else if (adivinarEdadChino == edadChino) {
            gameOver();
          } 
      }

  
// Pantalla Gamer Over
function gameOver() {
    document.querySelector("#sectionJuego03").style.display = "none";
    document.querySelector("#sectionFinal").style.display = "block";
    
    confetti({  
            particleCount: 100, 
            spread: 70, 
            origin: { y: 0.6 }, 
            });
     }

// Borrar los input's antes de volver a jugar
function limpiarInputN() {
  document.querySelector("#nJugador").value = ""; 
  document.querySelector("#eJugador").value = "";
  document.querySelector("#adivinarEdad").value = "";
  edadChino = Math.floor(Math.random() * (101 - 25) + 25);
  juego01();
}
function limpiarInputE() {
  document.querySelector("#eJugador").value = "";
  document.querySelector("#adivinarEdad").value = "";
  edadChino = Math.floor(Math.random() * (101 - 25) + 25);
  juego02();
}

 







