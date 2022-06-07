let palabraEscrita = "";

let ingresarPalabraNueva = document.querySelector("#ingresarPalabraNueva");

ingresarPalabraNueva.addEventListener("keydown",function(event) {
    event.preventDefault();
    let letraPrecionadaInicial = event.key
    let letraPrecionada = letraPrecionadaInicial.toUpperCase()

    let largoLetraPrecionada = letraPrecionada.length;
    let code = letraPrecionadaInicial.charCodeAt();
    let borrarUltimoCaracter = ingresarPalabraNueva.value

    if (letraPrecionada != letraPrecionada.toLowerCase() && largoLetraPrecionada == 1) {
        if (ingresarPalabraNueva.value.length < 8) {
            ingresarPalabraNueva.value = ingresarPalabraNueva.value + letraPrecionada;
            
        }
        
    } else if (code == 66) {
        ingresarPalabraNueva.value = borrarUltimoCaracter.slice(0,-1) 
        
        
    }

    
   
})




let botonGuardarPalabraNueva = document.querySelector("#botonGuardarPalabraNueva");
botonGuardarPalabraNueva.addEventListener("click",function(event) {
    event.preventDefault();

    palabraEscrita = ingresarPalabraNueva.value
    
    localStorage.setItem("palabraSecreta",palabraEscrita)
    

    let ahorcado_play = document.location='ahorcado_play.html';
    document.querySelector("#botonGuardarPalabraNueva") = ahorcado_play;
})