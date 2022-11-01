function verificarformulario() {
    email = document.getElementById("email").value;
    nombre = document.getElementById("nombre").value;
    cuil = document.getElementById("cuil").value;
    telefono = document.getElementById("telefono").value;
    clave = document.getElementById("clave").value;

    
    let largonombre = nombre.length;
    let largoemail = email.length;
    let largoclave= clave.length;
    let encadena = [];
    let check1 = true;
    let check2 = true;
    let check3 = true;
    let check4 = true;
    let check5 = true;

    if(largonombre == 0){
        alert("No se ingreso ningun valor como nombre");
        check3 = false;
    }
    for (let i = 0; i < largoemail; i++) {
        encadena[i] = largoemail.charAt(i);
    }
    let valor = encadena.indexOf('@',0);
    if (largoemail >= 8 && valor != -1 ) {
        alert("Email valido");
    } else {
        alert("El mail ingresado no es valido");
        check2= false;
    }
    if(largoclave == 0){
        alert("No se ingreso contraseña");
        check3 = false;
    }
    if( isNaN(telefono)){
        alert("No es un nurmero de telefono valido");
        check4= false;
    }
    if(isNaN(cuil)){
        alert("No es un numero cuil apto");
        check5= false;
    }
    this.submit();
}