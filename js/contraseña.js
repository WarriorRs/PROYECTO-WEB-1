

/*========================================
Validamos el formulario de registro
==========================================*/
let correo,cbx_notificaciones,cbx_terminos;

if(document.getElementById('botonRegistro')){

    const btnRegistro=document.getElementById('botonRegistro');

    //evento click al boton registro
    btnRegistro.addEventListener('click',(e)=>{

        e.preventDefault();

        const msError=document.querySelector('#formRegistro .error-text');
        msError.innerHTML="";
        msError.classList.remove('active');

        correo=formRegistro.correo.value.trim();
        

        cbx_notificaciones=formRegistro.cbx_notificaciones;
        cbx_terminos=formRegistro.cbx_terminos;

        //validamos que los campos cuando estan vacios
        if(correo==""){
            
            //mostramos error en pantalla
            mostrarError('Todos los campos son obligatorios',msError);
            
            //le agregamos la clase error a los input
            //le pasamos los datos array
            inputError([formRegistro.correo]);
            return false;

        }else{
            //removemos esa clase con la siguente funcion
            inputErrorRemove([formRegistro.correo]);
        }

        if(correo==null || correo==""){
            mostrarError('Por favor ingrese su correo',msError);
            inputError([formRegistro.correo]);
            formRegistro.correo.focus();

            return false;
        }else{

            if(!validarCorreo(correo)){
                mostrarError('Por favor ingrese un correo válido',msError);
                inputError([formRegistro.correo]);
                formRegistro.correo.focus();
                return false;
            }
        }
        window.location.href="login.html";

    });

    /*
    CREAMOS FUNCIONES PARA MOSTRAR ERROR EN PANTALLA Y ADEMAS VALIDAR SI LOS CAMPOS SON INGRESADOS CORECTAMENTE
*/

/*========================================
Mostrar Error
==========================================*/
function mostrarError(mensaje,msError){

    //agregamos la clase active
    msError.classList.add('active');

    msError.innerHTML='<p>'+mensaje+'</p>';
}

/*========================================
Agregar class error input
==========================================*/
//a esta funcion le pasamos un array

function inputError(datos){
    for (let i = 0; i < datos.length; i++) {

        //a cada input le agregamos una clase error
        datos[i].classList.add('input-error');

    } 
    
}

//a esta funcion le pasamos un array
function inputErrorRemove(datos){
    for (let i = 0; i < datos.length; i++) {
        //removemos la clase
        datos[i].classList.remove('input-error');

    } 
    
}


/*===============================================
    Válidamos un corrreo valido
================================================*/

function validarCorreo(valor){
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(valor)){
        return false;
    }

    return true;
}

}
