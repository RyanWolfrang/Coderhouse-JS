
function enviarFormulario(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    const datosFormulario = {
        userId:1,
        title:"Formulario envíado",
        body:"Cuerpo del formulario"
    }
    fetch(URLPOST,{
        method:"POST",
        body:JSON.stringify(datosFormulario),
        headers:{'Content-type': 'application/json; charset=UTF-8'}
    })
}