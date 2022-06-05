let cuatroLetras= ["casa","pato","gato","vaso","foca","jugo","mesa","masa","nuez","baño"];
let cincoLetras=["hacha","cacao","cajas","campo","joyas","leyes","monja","manos","niños","alura"];
let seisLetras=["cantar","cabeza","cursos","oracle","discos","diosas","doctor","hachas","iconos"];
let sieteLetras=["ciervos","experto","experta","idiomas","grafico","parques","plantas","siervos"];
let ochoLetras=["batallas","deportes","clientes","espacios","ejercito","juguetes","pajarito"];
let arrayPalabras=[cuatroLetras, cincoLetras, seisLetras, sieteLetras, ochoLetras];
let arrayLetrasErradas = [];

//eleccion de palabra----------------
let elegirLargoDePalabra = Math.round(Math.random()*(arrayPalabras.length-1));
let arrayElegido = arrayPalabras[elegirLargoDePalabra];
let elegirPalabra = Math.round(Math.random()*(arrayElegido.length-1));
let palabraElegida = arrayElegido[elegirPalabra];
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
    
    let letraPrecionada = event.key
    for (let i = 0; i < largoDeLaPalabra; i++) {
        
        if (letraPrecionada == palabraElegida[i]) {
            idCorrecto = "#"+palabraElegida[i]+[i] 
            let ids = document.querySelector(idCorrecto)
            ids.classList.add("visible")
            ids.classList.remove("invisible")
        }   
            
    }
    console.log(palabraElegida)
    let arrayDePalabra = palabraElegida.split("");

    function existira(letraPrecionada) {
        let existe = arrayDePalabra.indexOf(letraPrecionada);  
       
        if (existe == -1) {
            const letrasIncorrectas = document.querySelector("#letrasIncorrectas")
            const letraIncorrecta =  document.createDocumentFragment()
            const crearLi = document.createElement("LI")
            crearLi.innerHTML = "<p class='letraErrada'> " + letraPrecionada + "</p>"
            letraIncorrecta.appendChild(crearLi)
            letrasIncorrectas.appendChild(letraIncorrecta)
        } 
    }
    existira(letraPrecionada)
    grabarLetras(letraPrecionada)
})

for (let i = 0; i < largoDeLaPalabra; i++) {
    arrayLetrasErradas.push(palabraElegida[i])
}


function grabarLetras(letraPrecionada) {
    if (arrayLetrasErradas.indexOf(letraPrecionada) == -1) {
        arrayLetrasErradas.push(letraPrecionada)
        
    }
    
    console.log(arrayLetrasErradas)
    
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

//ubicacion de letras erroneas----------------------


// boton para volver a inicio------------------------
let botonDesistir = document.querySelector("#botonDesistir");

botonDesistir.addEventListener("click",function(event) {
    event.preventDefault();
    let index = document.location='index.html';
    document.querySelector("#botonDesistir") = index;
})