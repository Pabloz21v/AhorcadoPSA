let botonInicio = document.querySelector("#botonInicio");

botonInicio.addEventListener("click",function(event) {
    event.preventDefault();
    
    redireccion = document.location='ahorcado_play.html'

    document.querySelector("#botonInicio") = redireccion
})

