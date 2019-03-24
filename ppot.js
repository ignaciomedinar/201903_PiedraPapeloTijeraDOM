var piedra="piedra"
var papel="papel"
var tijera="tijera"
var scoreusuario=0
var scorecpu=0

console.clear()
var persona=prompt("¿Cómo te llamas?")

while ((scorecpu<2) && (scoreusuario<2)) {
  var usuario=prompt('Escoge y escribe piedra, papel o tijera')
  while ((usuario!="piedra") && (usuario!="papel") && (usuario!="tijera")){
    var usuario=prompt('Escribe bien!: piedra, papel o tijera')
  }
  var cpu= Math.floor(Math.random()*(3 - 1 +1) + 1);
  switch (cpu) {
    case 1:
    cpu="piedra";
    break;
    case 2:
    cpu="papel";
    break;
    case 3:
    cpu="tijera";
    break;
    default:
    cpu="Nel"
  }

  if (usuario==cpu){
    console.log("Jugador: ",persona," Escogió: ",usuario);
    console.log("Jugador: CPU Escogió: ",cpu);
    console.log("Empate");
    console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
  }else if ((usuario==piedra && cpu==papel) || (usuario==papel && cpu==tijera) || (usuario==tijera && cpu==piedra)){
    console.log("Jugador: ",persona," Escogió: ",usuario);
    console.log("Jugador: CPU Escogió: ",cpu);
    console.log("Punto para: CPU");
    scorecpu+=1
    console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
  }else {
    console.log("Jugador: ",persona," Escogió: ",usuario);
    console.log("Jugador: CPU Escogió: ",cpu);
    console.log("Punto para: ",persona);
    scoreusuario+=1
    console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
  }
}
if (scoreusuario>scorecpu){
  console.log("Ganó ",persona);
}else{
  console.log("Ganó CPU");
}