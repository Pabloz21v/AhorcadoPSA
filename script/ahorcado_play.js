const cuatroLetras= ["casa","pato","gato","vaso","foca","jugo","mesa","masa","nuez","baño"];
const cincoLetras=["hacha","cacao","cajas","campo","joyas","leyes","monja","manos","niños","alura"];
const seisLetras=["cantar","cabeza","cursos","oracle","discos","diosas","doctor","hachas","iconos"];
const sieteLetras=["ciervos","experto","experta","idiomas","grafico","parques","plantas","siervos"];
const ochoLetras=["batallas","deportes","clientes","espacios","ejercito","juguetes","pajarito"];
const arrayPalabras=[cuatroLetras, cincoLetras, seisLetras, sieteLetras, ochoLetras];
let arrayLetrasErradas = [];
let palabraCorrecta = [];
let vidas = 0;
let palabraEscrita ="";
palabraEscrita = localStorage.getItem("palabraSecreta")

//eleccion de palabra----------------
let elegirLargoDePalabra = Math.round(Math.random()*(arrayPalabras.length-1));
let arrayElegido = arrayPalabras[elegirLargoDePalabra];
let elegirPalabra = Math.round(Math.random()*(arrayElegido.length-1));
let palabraElegida =  arrayElegido[elegirPalabra].toUpperCase();

if (palabraEscrita != null && palabraEscrita.length >= 1) {
    palabraElegida = palabraEscrita.toUpperCase();
}
localStorage.removeItem("palabraSecreta")
let largoDeLaPalabra = palabraElegida.length;

//creacion de palabra invisible en pantalla---------------
const letrasCorrectas = document.querySelector("#letrasCorrectas")
const letra =  document.createDocumentFragment()
for (let i = 0; i < largoDeLaPalabra; i++) {
    const item = document.createElement("LI")
    item.innerHTML =  "<p class='invisible' id='" + palabraElegida[i]+[i] + "' > " + palabraElegida[i] + "</p>"
    item.classList.add("letraInvididual")
    letra.appendChild(item)
}
letrasCorrectas.appendChild(letra)

//al precionar una tecla ---------------------------------
const body = document.querySelector("body")

body.addEventListener("keydown",function(event) {
    event.preventDefault();
    let letraPrecionadaInicial = event.key
    let letraPrecionada = letraPrecionadaInicial.toUpperCase()

    let expReg = /[A-Z]/;

    let largoLetraPrecionada = letraPrecionada.length;
    if (letraPrecionada != letraPrecionada.toLowerCase() && largoLetraPrecionada == 1 && letraPrecionada.search(expReg) == 0 ) {
        coincidencias(letraPrecionada)
        grabarLetras(letraPrecionada)
        victoria(letraPrecionada)
        
    }
    animacionDeAhorcado(vidas)
})

//busca coincidencias
function coincidencias(letraPrecionada) {
    for (let i = 0; i < largoDeLaPalabra; i++) {
        if (letraPrecionada == palabraElegida[i] && vidas < 10 ) {
            idCorrecto = "#"+palabraElegida[i]+[i] 
            let ids = document.querySelector(idCorrecto)
            ids.classList.add("visible")
            ids.classList.remove("invisible")
        }   
    } 
}
//registra los aciertos y anunca cuando ganaste
function victoria(letraPrecionada) {
    for (let i = 0; i < largoDeLaPalabra; i++) {
        if (letraPrecionada == palabraElegida[i]) {
            palabraCorrecta[i] = letraPrecionada
        }  
    }
    if (palabraCorrecta.join("") == palabraElegida &&  vidas < 10) {
        let victoria = document.querySelector("#victoria")
        victoria.classList.add("visible")
        victoria.classList.remove("invisible")
    } 
}


for (let i = 0; i < largoDeLaPalabra; i++) {
    arrayLetrasErradas.push(palabraElegida[i])
}

//cuenta las vidas gastadas y anunca si perdiste
function grabarLetras(letraPrecionada) {
    if (arrayLetrasErradas.indexOf(letraPrecionada) == -1 && vidas < 10) {
        arrayLetrasErradas.push(letraPrecionada)
        const letrasIncorrectas = document.querySelector("#letrasIncorrectas")
        const letraIncorrecta =  document.createDocumentFragment()
        const crearLi = document.createElement("LI")
        crearLi.innerHTML = "<p class='letraErrada'> " + letraPrecionada + "</p>"
        letraIncorrecta.appendChild(crearLi)
        letrasIncorrectas.appendChild(letraIncorrecta)
        vidas = vidas + 1
    } 
    if (vidas == 10 && palabraCorrecta.join("") != palabraElegida){
        let derrota = document.querySelector("#derrota")
        derrota.innerHTML = "FIN DEL JUEGO >>> (" + palabraElegida + ")";
        derrota.classList.add("visible")
        derrota.classList.remove("invisible")
    }

}

//aparecen las figuras del ahorcado 
function animacionDeAhorcado(vidas) {
    for (let i = 1; i <= vidas; i++) {
        let imagenVisible = document.querySelector("#img"+[i])
        imagenVisible.classList.add("visible")
        imagenVisible.classList.remove("invisible")
    } 
    
}

//creacion de renglones acorde a la palabra--------------------
const renglones = document.querySelector("#renglones")
const renglon =  document.createDocumentFragment()
for (let i = 0; i < largoDeLaPalabra; i++) {
    const item = document.createElement("LI")
    item.innerHTML =  "<img id='imagenRenglon' src='img/renglon.png'>"
    item.classList.add("renglonInvididual")
    renglon.appendChild(item)
}
renglones.appendChild(renglon)

// boton nuevo juego------------------------
let botonNuevoJuego = document.querySelector("#botonNuevoJuego");

botonNuevoJuego.addEventListener("click",function(event) {
    event.preventDefault();
    location.reload();
})

// boton para volver a inicio------------------------
let botonDesistir = document.querySelector("#botonDesistir");

botonDesistir.addEventListener("click",function(event) {
    event.preventDefault();
    let index = document.location='index.html';
    document.querySelector("#botonDesistir") = index;
})


