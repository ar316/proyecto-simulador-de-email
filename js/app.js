document.addEventListener("DOMContentLoaded", () => {

    //seleccionando los elementos de la intergaz 
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const ccExtra = document.querySelector('#cc');
    const botonEnviar = document.querySelector('#botones');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spiner = document.querySelector('#spiner');
    
    const email ={
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''

    }

    
    
    

    eventos();

    function eventos(){
        btnReset.addEventListener('click', resetFormulario);
        formulario.addEventListener('submit', enviarEmail);
        inputEmail.addEventListener('input', validar);
        inputAsunto.addEventListener('input', validar);
        inputMensaje.addEventListener('input', validar);
        ccExtra.addEventListener('blur', validar);
    }
      
    
    function resetFormulario(e){
        
        //reiniciar el email
        email.asunto= "";
        email.mensaje= "";
        email.email= "";
        email.cc= "";

        formulario.reset();
        comporbarEmail(email)
    }

    function enviarEmail(e) {
        e.preventDefault();
        spiner.classList.add('flex');
        spiner.classList.remove('hidden')
        


        setTimeout(()=>{
            spiner.classList.remove('flex');
            spiner.classList.add('hidden');
            resetFormulario();

            const envio = document.createElement('h2');
            envio.classList.add('font-bold', 'uppercase', 'text-center');
            envio.textContent = 'correo enviado exitosamente';
            formulario.appendChild(envio);

            setTimeout(() => {
                envio.remove() ;
            },2000 );

        }, 3000);
    }

    function validar(e){
        
        console.log(e.target)
        const tipo = e.target.id;
        console.log(tipo);
        const campo = e.target.parentElement;
        const input = e.target.value;
        console.log(input) ;
        if(tipo === "cc" && input.trim()===""){
            
            limpiarAlerta(campo);
            console.log(" no hacer nada ");
            return;
        }
        if(input.trim() === ""){
            mostrarAlerta(`el campo ${tipo} no puede estar vacio` , campo);
            email[tipo] ='';
            comporbarEmail(email);
            return ;
        }
        console.log(validarCorreo(email));
       
        if(!validarCorreo(input) && tipo ==="email" || tipo ==="cc"){
            mostrarAlerta(`el campo email debe ser valido  `, campo);
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
      
        
        error.textContent = mensjae;
        
        //validando si ya exixte una alerta
        
        //inyectar el error al formulario 
        campo.appendChild(error);

    }

    function validarCorreo(correo){
        const regex =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       return regex.test(correo)
    }

















})