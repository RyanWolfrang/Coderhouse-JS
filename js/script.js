//Código el cual se usaría actualmente para realizar ARRAYS de cada gato.

var contadorID = 1;
var imagen = "src="

class creadorMascotas{
    constructor(nombreid, nombre, edad, color, peso, imagen){
        this.id = contadorID++
        this.nombreid = nombreid
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.color = color;
        this.peso = parseFloat(peso);
        this.imagen = imagen
    }
}

const mascotas = [];

mascotas.push(new creadorMascotas("lena","Lena", 2, "Negro", "3.200", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("roger","Roger", 8,"Negro", "7.800", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("killi","Killi", 2,"Tricolor", "3.800", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("ganga","Ganga", 2,"ByN", "3.600", "img/lena-gata-de-color-negro.jpeg"));

console.log(mascotas[0])
console.log(mascotas[1])
console.log(mascotas[2])
console.log(mascotas[3])

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

//Esta iteración es lo que se usaría con DOM para no tener un do while todo turbio.

// productos.forEach((producto)=>{
//     //evento para cada boton
//     document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
//         agregarAlCarrito(producto);
//     });
// });

var mostrarGatos = document.getElementById("gato");

const mascotaSeleccionada = [];

let botonesDeGatos = document.getElementById("botongatos");

function detectarGato(){
    for(const mascota of mascotas){
        botonesDeGatos.innerHTML += 
        `
        <button id="btn${mascota.id}" class="btn btn-primary">${mascota.id}</button>
        `;
        
        mascotas.forEach((mascota)=>{
            document.getElementById(`btn${mascota.id}`).addEventListener("click",function(){
                devolverGatoSeleccionado(mascota);
            })
        })
    }
}

detectarGato();

function devolverGatoSeleccionado(mascotaAMostrar){
    mascotaSeleccionada.push(mascotaAMostrar)
    console.table(mascotaSeleccionada);
    alert("Seleccionaste a "+mascotaAMostrar.nombre+"!")
}



//     for(const mascota of mascotas){
//     var gato = document.createElement("div");
//     gato.className="columnas";
//     gato.innerHTML=
//     `
//     <div id="lena">
//     <div>
//         <img src=${mascota.imagen} alt="Foto de Lena, gata negra">
//     </div>
//     <div class="textoder">
//         <h3>${mascota.nombre} | EDAD: ${mascota.edad} AÑOS</h3>
//         <p>
//         Lena fue una gata la cual estaba siendo dejada de lado por la madre apenas nacer. La gata terminó saliendo VILEF positivo y fue acobijada por nosotros
//         en lugar de su madre. Con los cuidados pertinentes, esta gata está en el peso de 3 KG, si bien le queda un largo camino por delante
//         está mostrando sintomas de mejora tanto en su peso, como en su ánimo y estado físico.
//         </p>
//     </div>
//     `;
//     mostrarGatos.append(gato);
// }

// let buscarGato = prompt("Ingrese el nombre del gato (Ingrese FIN para cerrar)");
// if((buscarGato == "LENA") || (buscarGato == "Lena" || (buscarGato == "lena"))){
//     alert("Elegiste a "+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" de edad.")
// } else if ((buscarGato == "ROGER") || (buscarGato == "Roger" || (buscarGato == "roger"))){
//     alert("Elegiste a "+mascotas[1].nombre+" Un gato de color "+mascotas[1].color+" con "+mascotas[1].edad+" de edad.")
// } else if ((buscarGato == "KILLI") || (buscarGato == "Killi" || (buscarGato == "killi"))){
//     alert("Elegiste a "+mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" de edad.")
// } else if ((buscarGato == "TODOS") || (buscarGato == "Todos" || (buscarGato == "todos"))){
//     alert("¡Elegiste a todos! ahí van: \n"+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" de edad.\n"+
//     mascotas[1].nombre+" Una gata de color "+mascotas[1].color+" con "+mascotas[1].edad+" de edad.\n"+
//     mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" de edad.")
// }
