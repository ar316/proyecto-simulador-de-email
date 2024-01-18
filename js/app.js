document.addEventListener("DOMContentLoaded", () => {

    //seleccionando los elementos de la intergaz 
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const botonEnviar = document.querySelector('#botones');
    const email ={
        email: '',
        asunto: '',
        mensaje: ''
    }

    console.log(email);
    eventos();

    function eventos(){
        inputEmail.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        inputMensaje.addEventListener('input', validar);
    }
    

    function validar(e){
       
        const tipo = e.target.id;
        const campo = e.target.parentElement;
        const input = e.target.value;
        if(input.trim() === ""){
            mostrarAlerta(tipo, campo);
            email[tipo] ='';
            comporbarEmail(email);
            return ;
        }
        console.log(validarCorreo(email));
        console.log(email);
        if(!validarCorreo(input) && tipo ==="email" ){
            mostrarAlerta(`el campo email debe ser valido`, campo);
            email[tipo] ='';
            comporbarEmail(email)
            return; 
        }
        limpiarAlerta(campo);
        //asignar los valores al objeto email
        email[tipo] = input.trim().toLowerCase();
        comporbarEmail(email); //
       
        
    }

    function limpiarAlerta(campo){
        //si existe una alerta se remueve del campo (referencia)
        const existe = campo.querySelector('.invalid');
        console.log(existe);
        if(existe){
            existe.remove();

        }
 
    }

    function comporbarEmail(email) {
        //verifica si hay algun campo vacio del objeto email
       const valores = Object.values(email).includes('');
       if(!valores){
            botonEnviar.children[0].classList.remove('opacity-50');
            botonEnviar.children[0].disabled = false;
            return;
        }

        botonEnviar.children[0].classList.add('opacity-50');
        botonEnviar.children[0].disabled = true;

        

    }

    function mostrarAlerta(mensjae, campo){
       
        //creadno la alerta 
        limpiarAlerta(campo);
        const error = document.createElement('p');
        error.style.textAlign = 'center'  
        error.style.backgroundColor = 'red'   
        error.style.color = 'white'  
        error.style.borderRadius = '10px'
        error.classList.add('invalid')
        
        error.textContent = `el campo ${mensjae} no puede estar vacio `; 
        
        //validando si ya exixte una alerta
        
        //inyectar el error al formulario 
        campo.appendChild(error);

    }

    function validarCorreo(correo){
        const regex =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       return regex.test(correo)
    }

















})