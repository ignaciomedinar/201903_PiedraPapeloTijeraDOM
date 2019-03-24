var piedra1=document.getElementById("piedrahtml");
var papel1=document.getElementById("papelhtml");
var tijera1=document.getElementById("tijerashtml");
var nombre1=document.getElementById('nombrehtml');
var piedra2=document.getElementById("piedra2html");
var papel2=document.getElementById("papel2html");
var tijera2=document.getElementById("tijeras2html");
var nombre1=document.getElementById('nombrehtml');
var scorecpu=0;
var scoreusuario=0;
var piedra="piedra";
var papel="papel";
var tijera="tijera";
var persona='';

piedra1.addEventListener("click",juegaPiedra);
papel1.addEventListener("click",juegaPapel);
tijera1.addEventListener("click",juegaTijera);
nombre1.addEventListener("click",boton)

function juegaPiedra(){
  usuario="piedra";
  console.log(usuario);
  if (!!persona){
    size("piedra");
    jugar();
  }
}
function juegaPapel(){
  usuario="papel";
  console.log(usuario);
  if (!!persona){
    size("papel");
    jugar();
  }
}
function juegaTijera(){
  usuario="tijera";
  console.log(usuario);
  if (!!persona){
    size("tijera");
    jugar();
  }
}

function boton(){
  persona=nombre1.value;
  if (!!persona){
    document.getElementsByClassName("nombreusuario")[0].innerHTML = persona;
    document.getElementsByClassName("nombreusuario")[1].innerHTML = "Score " + persona;
    empezarJuego();
  }
}

function empezarJuego(){
  alert('Escoge elemento, el juego es 2 de 3')
  // document.getElementById("usuariohtml").style.backgroundColor = "green";
  scorecpu=0;
  scoreusuario=0;
  document.getElementById("scoreusuario").innerHTML = scoreusuario;
  document.getElementById("scorecpu").innerHTML = scorecpu;
  document.getElementById("ganador").innerHTML = "Juega";
}

function jugar(){
  if (scoreusuario<2 && scorecpu<2){
    var cpu= Math.floor(Math.random()*(3 - 1 +1) + 1);
      switch (cpu) {
        case 1:
        cpu="piedra";
        size2("piedra");
        break;
        case 2:
        cpu="papel";
        size2("papel");
        break;
        case 3:
        cpu="tijera";
        size2("tijera");
        break;
        default:
        cpu="Nel"
      }
      
      if (usuario==cpu){
        console.log("Jugador: ",persona," Escogió: ",usuario);
        console.log("Jugador: CPU Escogió: ",cpu);
        console.log("Empate");
        // document.setTimeout(punto(),1000);
        document.getElementById("scoreusuario").innerHTML = scoreusuario;
        document.getElementById("scorecpu").innerHTML = scorecpu;
        document.getElementById("ganador").innerHTML = "Empate";
        console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
      }else if ((usuario==piedra && cpu==papel) || (usuario==papel && cpu==tijera) || (usuario==tijera && cpu==piedra)){
        console.log("Jugador: ",persona," Escogió: ",usuario);
        console.log("Jugador: CPU Escogió: ",cpu);
        console.log("Punto para: CPU");
        scorecpu+=1
        document.getElementById("scoreusuario").innerHTML = scoreusuario;
        document.getElementById("scorecpu").innerHTML = scorecpu;
        document.getElementById("ganador").innerHTML = "Punto para CPU";
        console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
      }else {
        console.log("Jugador: ",persona," Escogió: ",usuario);
        console.log("Jugador: CPU Escogió: ",cpu);
        console.log("Punto para: ",persona);
        scoreusuario+=1
        document.getElementById("scoreusuario").innerHTML = scoreusuario;
        document.getElementById("scorecpu").innerHTML = scorecpu;
        document.getElementById("ganador").innerHTML = "Punto para " + persona;
        console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
      }
  
      if (scorecpu==2){
        setTimeout(score,2000);
      } else if (scoreusuario==2){
        setTimeout(score,2000);
      }
    }
  }

  function score(){
    if (scoreusuario>scorecpu){
      console.log("Ganó ",persona);
      document.getElementById("ganador").innerHTML = "Ganaste " + persona;
      document.getElementById("nombrehtml").value = null;
      alert("Ganaste " + persona + "!!!")
      // boton();
    }else{
      console.log("Ganó CPU");
      document.getElementById("ganador").innerHTML = "Ganó CPU";
      document.getElementById("nombrehtml").value = null;
      alert("Perdiste " + persona + "!!!")
      // boton();
    }
  }

  function size(opcion){
    switch (opcion) {
      case "piedra":
        piedra1.style.transform="scale(1.5)";
        papel1.style.transform="scale(0.2)";
        tijera1.style.transform="scale(0.2)";
        a="piedra";
        setTimeout(normal,2000);
        break;
      case "papel":
        piedra1.style.transform="scale(0.2)";
        papel1.style.transform="scale(1.5)";
        tijera1.style.transform="scale(0.2)";
        a="papel";
        setTimeout(normal,2000);
        break;
      case "tijera":
        piedra1.style.transform="scale(0.2)";
        papel1.style.transform="scale(0.2)";
        tijera1.style.transform="scale(1.5)";
        a="tijera";
        setTimeout(normal,2000);
        break;
    
      default:
        piedra1.style.transform="scale(1)";
        papel1.style.transform="scale(1)";
        tijera1.style.transform="scale(1)";
        break;
    }
  }

function size2(opcion){
  switch (opcion) {
    case "piedra":
      piedra2.style.transform="scale(1.5)";
      papel2.style.transform="scale(0.2)";
      tijera2.style.transform="scale(0.2)";
      a="piedra";
      setTimeout(normal,2000);
      break;
    case "papel":
      piedra2.style.transform="scale(0.2)";
      papel2.style.transform="scale(1.5)";
      tijera2.style.transform="scale(0.2)";
      a="papel";
      setTimeout(normal,2000);
      break;
    case "tijera":
      piedra2.style.transform="scale(0.2)";
      papel2.style.transform="scale(0.2)";
      tijera2.style.transform="scale(1.5)";
      a="tijera";
      setTimeout(normal,2000);
      break;
  
    default:
      piedra2.style.transform="scale(1)";
      papel2.style.transform="scale(1)";
      tijera2.style.transform="scale(1)";
      break;
  }
}

  function normal(){
    piedra1.style.transform="scale(1)";
    papel1.style.transform="scale(1)";
    tijera1.style.transform="scale(1)";
    piedra2.style.transform="scale(1)";
    papel2.style.transform="scale(1)";
    tijera2.style.transform="scale(1)";
    console.log(a);
    
  }