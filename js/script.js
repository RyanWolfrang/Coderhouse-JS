
var contadorID = 1;

class creadorMascotas{
    //Constructor con los arrays del gato
    constructor(nombreid, nombre, edad, descripcion, color, peso, imagen){
        this.id = contadorID++
        this.nombreid = nombreid
        this.nombre = nombre;
        this.edad = edad;
        this.descripcion = descripcion;
        this.color = color;
        this.peso = parseFloat(peso);
        this.imagen = imagen
    }
}

const mascotas = [];

mascotas.push(new creadorMascotas("LENA","Lena", 2,descLena, "Negro", "3.200", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("ROGER","Roger", 8,descRoger,"Negro", "7.800", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("KILLI","Killi", 2,descKilli,"Tricolor", "3.800", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("GANGA","Ganga", 2,descGanga,"Blanco y negro", "3.600", "img/lena-gata-de-color-negro.jpeg"));

//Meter gatos en el local storage directamente stringificados
localStorage.setItem("mascotas", JSON.stringify(mascotas));

//FILTROS WIP

// //Filtrar por color de gato
// const filtrarPorColorN = mascotas.filter((mascota) => mascota.color == "Negro");
// console.log(filtrarPorColorN);
// const filtrarPorColorT = mascotas.filter((mascota) => mascota.color == "Tricolor");
// console.log(filtrarPorColorT);
// const filtrarPorColorG = mascotas.filter((mascota) => mascota.color == "Gris");
// console.log(filtrarPorColorG);
// const filtrarPorColorBN = mascotas.filter((mascota) => mascota.color == "Blanco y negro");
// console.log(filtrarPorColorBN);

// //Más jovenes a más viejos
// mascotas.sort((a,b) => a.edad - b.edad);
// console.log(mascotas);

// //Más viejos a jovenes
// mascotas.sort((a,b) => b.edad - a.edad);
// console.log(mascotas);

// Parsear animales para poder usar en el código
var animalesLocales = JSON.parse(localStorage.getItem("mascotas"));

const mascotaSeleccionada = [];

let botonesGatos = document.getElementById("botongatos");

function detectarGato(){
    animalesLocales.forEach((mascota)=>{
        //Crear boton | Darle id al botón | Darle clase al botón | Darle el nombre de cada gato al botón.
        let botonNuevo = document.createElement("button")
        botonNuevo.id = `btn${mascota.id}`
        botonNuevo.className = "btn btn-primary"
        botonNuevo.innerText = `${mascota.nombreid}`

        botonNuevo.addEventListener("click",function(){
            //Dinamitar completamente el HTML donde se muestran los gatos para que no se amontonen.
            mostrarGatoSingular.innerHTML = ""
            //La función SIEMPRE va a tener que ir abajo por el efecto cascada.
            devolverGatoSeleccionado(mascota);
        })
        botonesGatos.append(botonNuevo)
    })
}

detectarGato();

let htmlDeGato = document.getElementById("mostrarGatoSingular")

function devolverGatoSeleccionado(mascotaAMostrar){

    //Agrega la mascota seleccionada a este array
    mascotaSeleccionada.push(mascotaAMostrar)
    
    //Crear un div | Darle id | Darle clase | HTML para mostrar al gato
    let claseMostrarGato = document.createElement("div")
    claseMostrarGato.id = `gatoMostrado`
    claseMostrarGato.className = "columnas"
    claseMostrarGato.innerHTML =
    `
    <div class="textoizq">
    <h3>${mascotaAMostrar.nombre}. EDAD: ${mascotaAMostrar.edad} años.</h3>
        <p>
            ${mascotaAMostrar.descripcion}
        </p>
    </div>
    <div class="imgdesktop">
        <img src="${mascotaAMostrar.imagen}" alt="Foto de Ganga, gato blanco y negro.">
    </div>
    `
    htmlDeGato.append(claseMostrarGato)
}