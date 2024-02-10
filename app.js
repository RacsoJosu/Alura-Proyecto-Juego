let numerosSorteados = []
let numeroMaximoNumerosSorteados = 10;
let numeroMaximoIntentos = 5;
let numeroSecreto = 0
let intentos = 0;

function setEtiqueta(etiqueta, content){
    const element = document.querySelector(etiqueta)
    element.innerHTML = content
}

function deshabilitarBotones(id){
    document.getElementById(id).setAttribute("disabled", true)

}
function habilitarBotones(id){
    document.getElementById(id).removeAttribute("disabled")

}

function limpiarValor(){
    document.getElementById("numberUser").value = ""
     

}


function condicionesIniciales(){
    
    setEtiqueta('h1',"Juego del numero secreto")
    setEtiqueta('p',`Ingrese un numero del 1 al 10`)  
    limpiarValor() 
    intentos=0;
    numeroSecreto = generarNumeroSecreto()
   


}
function reiniciarJuego(){
    condicionesIniciales()
    habilitarBotones("intentar")
    habilitarBotones("numberUser")
    deshabilitarBotones("reiniciar")

}

function intentoUsuario(){
    
    const numberUser = parseInt(document.getElementById("numberUser").value);
    console.log(numberUser)
    console.log(numeroSecreto)
    
    if (intentos === numeroMaximoIntentos) {
        setEtiqueta('h1', "Ya haz realizado el numero maximo de intentos")
        setEtiqueta("p", "Comienza un nuevo Juego")
        deshabilitarBotones("intentar")
        deshabilitarBotones("numberUser")
        habilitarBotones("reiniciar")
        return;

        
    }
    if (numberUser === numeroSecreto) {
        
        setEtiqueta('p',`Acertaste el numero en ${intentos} ${intentos > 1 ? "intentos":"intento" }`)
        
        habilitarBotones("reiniciar")
    }
    if (numberUser > numeroSecreto){
        intentos++;
        setEtiqueta('p',"El numero secreto es menor" )
    }
    if(numberUser < numeroSecreto){
        intentos++;
        setEtiqueta('p', "El numero secreto es mayor")
       
    }
    


    return;


}

function generarNumeroSecreto(){
    const numeroSecreto = Math.floor(Math.random()*10) + 1;
    console.log(numerosSorteados)

    if (numerosSorteados.length == numeroMaximoNumerosSorteados) {
        setEtiqueta('h1', "Ya se sortearon la cantidad de numeros maximos")
        setEtiqueta("p", "Recarga la pagina")
        deshabilitarBotones("intentar")
        deshabilitarBotones("numberUser")
        numerosSorteados= []
        habilitarBotones("reiniciar")
        
        return;
    }
    if(numerosSorteados.includes(numeroSecreto))
    {
        return generarNumeroSecreto()

    }else {
        numerosSorteados.push(numeroSecreto)
        return numeroSecreto
    }
}

condicionesIniciales();