let botonInicio = document.querySelector("#botonInicio");
let botonPalabraNueva = document.querySelector("#botonPalabraNueva");



botonInicio.addEventListener("click",function(event) {
    event.preventDefault();
    let ahorcado_play = document.location='ahorcado_play.html';
    document.querySelector("#botonInicio") = ahorcado_play;
})

botonPalabraNueva.addEventListener("click",function(event) {
    event.preventDefault();
    let palabra_nueva = document.location='palabra_nueva.html';
    document.querySelector("#botonPalabraNueva") = palabra_nueva;
})



