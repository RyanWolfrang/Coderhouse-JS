//Login temporalmente inhabilitado

// for (i=1;i<=3;i++){
//     var user = prompt("Ingrese su nombre de usuario.");
//     var pass = prompt("Ingrese su contraseña.");
//     if ((user=="admin")&&(pass=="admin") || (user=="persona")&&(pass=="random")){
//         alert("Bienvenido " + user);
//         break;
//     }else{
//         alert("Usuario o contraseña equivocados. Te quedan "+(3-i)+" intentos");
//     }
// }

//Con el uso de objetos se implementaría otro tipo de función para construir un objeto llamado Gato
//y cuando se mueta meter HTML en el JS, esto devolvería una imagen del gato que se elija
//Sin una constante do while o while, sino con un botón.

//Código el cual se usaría actualmente para realizar ARRAYS de cada gato.

let contadorID = 1;

class creadorMascotas{
    constructor(nombre, edad, color, peso){
        this.id = contadorID++
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.peso = parseFloat(peso);
    }
}
const mascotas = [];

mascotas.push(new creadorMascotas("Lena", 2, "Negro", "3.200"));
mascotas.push(new creadorMascotas("Roger", 8, "Negro", "7.800"));
mascotas.push(new creadorMascotas("Killi", 2, "Tricolor", "3.800"));

console.log(mascotas[0].nombre)
console.log(mascotas[1].nombre)
console.log(mascotas[2].nombre)

do{
    var buscarGato = prompt("Ingrese el nombre del gato (Ingrese FIN para cerrar)");
if((buscarGato == "LENA") || (buscarGato == "Lena" || (buscarGato == "lena"))){
    alert("Elegiste a "+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" años de edad.")
} else if ((buscarGato == "ROGER") || (buscarGato == "Roger" || (buscarGato == "roger"))){
    alert("Elegiste a "+mascotas[1].nombre+" Un gato de color "+mascotas[1].color+" con "+mascotas[1].edad+" años de edad.")
} else if ((buscarGato == "KILLI") || (buscarGato == "Killi" || (buscarGato == "killi"))){
    alert("Elegiste a "+mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" años de edad.")
} else if ((buscarGato == "TODOS") || (buscarGato == "Todos" || (buscarGato == "todos"))){
    alert("¡Elegiste a todos! ahí van: \n"+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" años de edad.\n"+
    mascotas[1].nombre+" Una gata de color "+mascotas[1].color+" con "+mascotas[1].edad+" años de edad.\n"+
    mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" años de edad.")
}}while (buscarGato != "FIN")


//Filtrar por color de gat
//Gatos negros
const filtrarPorColorN = mascotas.filter((mascota) => mascota.color == "Negro");
console.log(filtrarPorColorN);

//Gatos tricolor
const filtrarPorColorT = mascotas.filter((mascota) => mascota.color == "Tricolor");
console.log(filtrarPorColorT);

//Gatos grises
const filtrarPorColorG = mascotas.filter((mascota) => mascota.color == "Gris");
console.log(filtrarPorColorG);

//Gatos blancos y negros
const filtrarPorColorBN = mascotas.filter((mascota) => mascota.color == "Blanco y negro");
console.log(filtrarPorColorBN);

//Más jovenes a más viejos
mascotas.sort((a,b) => a.edad - b.edad);
console.log(mascotas);

//Más viejos a jovenes
mascotas.sort((a,b) => b.edad - a.edad);
console.log(mascotas);

//Esta iteración es lo que se usaría con DOM para no tener un do while todo turbio.
/*
let buscarGato = prompt("Ingrese el nombre del gato (Ingrese FIN para cerrar)");
if((buscarGato == "LENA") || (buscarGato == "Lena" || (buscarGato == "lena"))){
    alert("Elegiste a "+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" de edad.")
} else if ((buscarGato == "ROGER") || (buscarGato == "Roger" || (buscarGato == "roger"))){
    alert("Elegiste a "+mascotas[1].nombre+" Un gato de color "+mascotas[1].color+" con "+mascotas[1].edad+" de edad.")
} else if ((buscarGato == "KILLI") || (buscarGato == "Killi" || (buscarGato == "killi"))){
    alert("Elegiste a "+mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" de edad.")
} else if ((buscarGato == "TODOS") || (buscarGato == "Todos" || (buscarGato == "todos"))){
    alert("¡Elegiste a todos! ahí van: \n"+mascotas[0].nombre+" Una gata de color "+mascotas[0].color+" con "+mascotas[0].edad+" de edad.\n"+
    mascotas[1].nombre+" Una gata de color "+mascotas[1].color+" con "+mascotas[1].edad+" de edad.\n"+
    mascotas[2].nombre+" Una gata de color "+mascotas[2].color+" con "+mascotas[2].edad+" de edad.")
} else {
    alert("Input inválido. Intentá de nuevo")
}*/