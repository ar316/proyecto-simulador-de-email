const CampoEmail = document.querySelector('#email');
const CampoAsunto = document.querySelector('#asunto');
const CampoMensaje = document.querySelector('#mensaje');
const form = document.querySelector('#formulario')

const Email ={
    email: '',
    asunto: '',
    mensaje:''
}


Eventos()
function Eventos(){
    CampoEmail.addEventListener('blur', validar)
    CampoAsunto.addEventListener('blur', validar) 
    CampoMensaje.addEventListener('blur', validar) 

}

function validar (e){
    if(e.target.value.trim()=== ''){
       MostrarError(`el campo ${e.target.id} es obligatorio`, e.target.parentElement)
       return;
    }
if(!validarEmail(e.target.value)){
    MostrarError(`el email no es un corre valido`, e.target.parentElement)
    return;
}
limpiarAlerta( e.target.parentElement)
   
   //asignar los valores al objeto de tipo email
   Email[e.target.name] = e.target.value.trim()

   comprarEmail()
    
} 
function MostrarError(errore, referencia) {
    limpiarAlerta(referencia) //
    const error = document.createElement('p');
        error.innerHTML =` <h3 Style= "color:white"> ${errore} </h3>`
        error.style.background = 'red';
        error.classList.add('error');
        error.style.fontSize = '20px';
        error.style.borderRadius = '5px';
        error.style.textAlign = 'center';
        referencia.appendChild(error);
}

function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.error');
    console.log(alerta);
    if(alerta)
        alerta.remove()
}

function validarEmail(email) {
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const resultado = regex.test(email);
    return resultado;

}

function comprarEmail() {
    const emailVerificado = Object.values(Email).includes('');
    console.log(emailVerificado);

}
