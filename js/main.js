
function verificarcaracter() {
    let largo = document.formulario.email.value.length;
    let largo2= document.formular.input-login.value.length;
    let encadena = [];
    let check= false;
    let ok= true;
    for (let i = 0; i < largo; i++) {
        encadena[i] = cadena.charAt(i);
    }
    let valor = encadena.indexOf('@',0);
    if (largo >= 8 && valor != -1 ) {
        check = true;
    } else {
        alert("El mail ingresado no es valido");
    }
    if(largo2==0){
        alert("No se ingreso contraseña");
        ok= false;
    }
    if(check != false && ok != false){
        alert("Ambas credenciales son correctas");
    }

    this.submit();
}


/*
function validaremail(){
valor = document.getElementById("email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ){
    alert("No es un email correcto");
    return false;}
}
/*
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});
const clave = document.getElementById("input-login");

      clave.addEventListener("input", function (event) {
          if (clave.validity.typeMismatch) {
              clave.setCustomValidity("¡Se esperaba que ingrese la contraseña!");
          } else {
              clave.setCustomValidity("");
          }
      });


/*document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  RegExp= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
  
  function validarFormulario(evento) {
      const email = document.getElementById("email");
      email.addEventListener("input", function (event) {
          if (email.validity.typeMismatch) {
              email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
          } else {
              email.setCustomValidity("");
          }
      });    */
    /*evento.preventDefault();
    var email = document.getElementById('email').value;
    if(email.length == 0){
      alert('No has escrito nada en el usuario');
      return;
    }*/
      /*
    var clave = document.getElementById('input-login').value;
    if (clave.length < 8) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }*/
/*
function validar(){
const btnEnviar = document.getElementById('btn-enviar');
const validación = (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const clave = document.getElementById('input-login');
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  if (clave.value === "") {
    alert("Por favor, escribe su contraseña");
    clave.focus();
    return false;
  }
  
  return true;
}
submitBtn.addEventListener('click', validacion(e));
}




const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}
/*
valor = document.getElementById("email").value;
if( valor == null || valor.length == 0 || /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/.test(valor) ) {
  return document.write('No es un mail valido');
}*/

