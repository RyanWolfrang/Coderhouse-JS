//Código el cual se usaría actualmente para realizar ARRAYS de cada gato.

var contadorID = 1;
var imagen = "src="

class creadorMascotas{
    constructor(nombre, edad, color, peso, imagen){
        this.id = contadorID++
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.color = color;
        this.peso = parseFloat(peso);
        this.imagen = imagen
    }
}

const mascotas = [];

mascotas.push(new creadorMascotas("Lena", 2, "Negro", "3.200", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("Roger", 8,"Negro", "7.800", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("Killi", 2,"Tricolor", "3.800", "img/lena-gata-de-color-negro.jpeg"));
mascotas.push(new creadorMascotas("Ganga", 2,"ByN", "3.600", "img/lena-gata-de-color-negro.jpeg"));

console.log(mascotas[0])
console.log(mascotas[1])
console.log(mascotas[2])
console.log(mascotas[3])

// do{
//     var buscarGato = prompt("Ingrese el nombre del gato (Ingrese FIN para cerrar)");
// if((buscarGato == "LENA") || (buscarGato == "Lena" || (buscarGato == "lena"))){
//     alert("Elegiste a "+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" años de edad.")
// } else if ((buscarGato == "ROGER") || (buscarGato == "Roger" || (buscarGato == "roger"))){
//     alert("Elegiste a "+mascotas[1].nombre+" Un gato de color "+mascotas[1].color+" con "+mascotas[1].edad+" años de edad.")
// } else if ((buscarGato == "KILLI") || (buscarGato == "Killi" || (buscarGato == "killi"))){
//     alert("Elegiste a "+mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" años de edad.")
// } else if ((buscarGato == "TODOS") || (buscarGato == "Todos" || (buscarGato == "todos"))){
//     alert("¡Elegiste a todos! ahí van: \n"+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" años de edad.\n"+
//     mascotas[1].nombre+" Una gata de color "+mascotas[1].color+" con "+mascotas[1].edad+" años de edad.\n"+
//     mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" años de edad.")
// }}while (buscarGato != "FIN")

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

// let articuloCartas = document.getElementById("cartas");

// for(const producto of productos){
//     let carta = document.createElement("div");
//     carta.className="card col-md-3";
//     carta.innerHTML=`
//         <div class="card-body">
//             <h5 class="card-title">${producto.nombre}</h5>
//             <p class="card-text">${producto.precio}</p>
//             <a href="#" class="btn btn-primary">Comprar</a>
//         </div>
//     `;
//     articuloCartas.append(carta);
// }

var mostrarGatos = document.getElementById("gato");

    for(const mascota of mascotas){
    var gato = document.createElement("div");
    gato.className="columnas";
    gato.innerHTML=
    `
    <div id="lena">
    <div>
        <img src=${mascota.imagen} alt="Foto de Lena, gata negra">
    </div>
    <div class="textoder">
        <h3>${mascota.nombre} | EDAD: ${mascota.edad} AÑOS</h3>
        <p>
        Lena fue una gata la cual estaba siendo dejada de lado por la madre apenas nacer. La gata terminó saliendo VILEF positivo y fue acobijada por nosotros
        en lugar de su madre. Con los cuidados pertinentes, esta gata está en el peso de 3 KG, si bien le queda un largo camino por delante
        está mostrando sintomas de mejora tanto en su peso, como en su ánimo y estado físico.
        </p>
    </div>
    `;
    mostrarGatos.append(gato);
}

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
// } else {
//     alert("Input inválido. Intentá de nuevo")
// }