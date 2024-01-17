document.addEventListener("DOMContentLoaded", () => {

    //seleccionando los elementos de la intergaz 
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    
    eventos();

    function eventos(){
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMensaje.addEventListener('blur', validar);
    }


    

    function validar(e){
        const tipo = e.target.id;
        const campo = e.target.parentElement;
        console.log(campo);
        console.log(tipo);
        const input = e.target.value;
        if(input.trim() === ""){
            mostrarAlerta(tipo, campo);
        }else{
            console.log("tiene algo")
        }

    }


    function mostrarAlerta(mensjae, campo){
       
        //creadno la alerta 
        const existe = document.querySelector('.invalid');
        console.log(existe);


        const error = document.createElement('p');
        error.style.textAlign = 'center'  
        error.style.backgroundColor = 'red'   
        error.style.color = 'white'  
        error.style.borderRadius = '10px'
        error.classList.add('invalid')
        
        error.textContent = `el campo ${mensjae} no puede estar vacio `; 
        
        //validando si ya exixte una alerta
        
       
        
        //inyectar el error al formulario 
        

    }

    function validarCorreo(correo){
        const regex =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regex.test(correo)){
            return true;
        }else{
            return false;
        }
    }

















})