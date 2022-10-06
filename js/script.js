for (i=1;i<=3;i++){
    var user = prompt("Ingrese su nombre de usuario.");
    var pass = prompt("Ingrese su contraseña.");
    if ((user=="admin")&&(pass=="admin") || (user=="persona")&&(pass=="random")){
        alert("Bienvenido " + user);
        break;
    }else{
        alert("Usuario o contraseña equivocados. Te quedan "+(3-i)+" intentos");
    }
}

const lena = "Lena"
const roger = "Roger"
const killi = "Killi"

let colorLena = "negro"
let colorRoger = "negro"
let colorKilli = "tricolor"

let edadLena = "dos años"
let edadRoger = "ocho años"
let edadKilli = "dos años"


function mostrarGato(){
    do{
        //Recibir el nombre del gato
        pedirGato = prompt("Escriba aquí un nombre de nuestros gatos para obtener una leve descripción de ellos. (Lena / Roger / Killi). Escriba 'ESC' para cerrar.")
        //Mostrar una leve descripción del gato, no se tienen que hacer tantas constantes y variables
        //Con el uso de objetos.
        if((pedirGato == "lena") || (pedirGato == "Lena")){
            alert("Elegiste a "+lena+". Es una gata de color "+colorLena+" con "+edadLena+" de edad." );
        }else if((pedirGato == "roger") || (pedirGato == "Roger")){
            alert("Elegiste a "+roger+". Es un gato de color "+colorRoger+" con "+edadRoger+" de edad." );
        }else if((pedirGato == "killi") || (pedirGato == "Killi")){
            alert("Elegiste a "+killi+". Es una gata de color "+colorKilli+" con "+edadKilli+" de edad." );
        }
    }while(pedirGato != "ESC")
}

mostrarGato();

//Con el uso de objetos se implementaría otro tipo de función para construir un objeto llamado Gato
//y cuando se mueta meter HTML en el JS, esto devolvería una imagen del gato que se elija
//Sin una constante do while o while, sino con un botón.

//Ignorar este código
//CÓDIGO OBSOLETO DE OBJETOS
// function crearMascota (nombre, edad, color){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.color=color
// }
// const lena = new crearMascota("Lena","2","Negra")
// const roger = new crearMascota("Roger","8","Negro")
// const killi = new crearMascota("Killi","2","Tricolor")

//Código el cual se usaría actualmente para realizar ARRAYS de cada gato.

let contadorID = 1;

class creadorMascotas{
    constructor(nombre, edad, color, peso){
        this.id = contadorID++
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.color = color;
        this.peso = parseFloat(peso);
    }
}
const mascotas = [];

mascotas.push(new creadorMascotas("Lena", "2 años", "Negra", "3.200"));
mascotas.push(new creadorMascotas("Roger", "8 años", "Negro", "7.800"));
mascotas.push(new creadorMascotas("Killi", "2 años", "Tricolor", "3.800"));

console.log(mascotas[1].nombre)
/*
for(const mascota of mascotas){
    console.log(this.mascota.nombre);
}*/