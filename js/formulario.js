
function enviarFormulario(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    const datosFormulario = JSON.stringify($("#formulario").serializeArray());
    fetch(URLPOST,{
        method:"POST",
        body:JSON.stringify(datosFormulario),
        headers:{'Content-type': 'application/json; charset=UTF-8'}
    })
}